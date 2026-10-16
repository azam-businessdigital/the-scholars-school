<?php
/**
 * The Scholars High School & Junior College for Commerce
 * Admission Enquiry API Endpoint
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');

// Handle preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

header('Access-Control-Allow-Origin: *');

$config = require __DIR__ . '/config.php';
require_once __DIR__ . '/mailer.php';

// Parse JSON Body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

// Anti-spam honeypot
if (!empty($data['honeypot']) || !empty($data['website_honeypot'])) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Admission enquiry logged successfully.']);
    exit;
}

// Validation
$parentName = trim($data['parentName'] ?? '');
$studentName = trim($data['studentName'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$section = trim($data['section'] ?? '');
$message = trim($data['message'] ?? '');
$consent = !empty($data['consent']);
$recaptchaToken = trim($data['recaptchaToken'] ?? '');

if (strlen($parentName) < 2) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid parent or guardian name.']);
    exit;
}

if (strlen($studentName) < 2) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide the student\'s full name.']);
    exit;
}

$cleanPhone = preg_replace('/[\s-]/', '', $phone);
if (!preg_match('/^[+]?[0-9]{10,14}$/', $cleanPhone)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid 10-digit mobile phone number.']);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

if (empty($section)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please select the academic section of interest.']);
    exit;
}

if (!$consent) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'You must authorize the school administration to contact you.']);
    exit;
}

// Verify Google reCAPTCHA v3
$captchaResult = verifyRecaptcha(
    $recaptchaToken,
    $config['recaptcha']['secret_key'],
    $config['recaptcha']['min_score']
);

if (!$captchaResult['success']) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $captchaResult['error'] ?? 'reCAPTCHA verification failed. Please try again.'
    ]);
    exit;
}

// Generate Email
$meta = [
    'recaptchaScore' => $captchaResult['score'],
    'source' => 'Admissions Page'
];
$adminHtml = buildAdmissionEmailHtml([
    'parentName' => $parentName,
    'studentName' => $studentName,
    'phone' => $phone,
    'email' => $email,
    'section' => $section,
    'message' => $message
], $meta);

// Send Email to School Admin
$emailSubject = "New Admission Enquiry: {$studentName} ({$section})";
$sendResult = sendSmtpEmail(
    $config['smtp'],
    $config['smtp']['to_email'],
    'The Scholars School Admissions Desk',
    $emailSubject,
    $adminHtml,
    !empty($email) ? $email : null,
    $parentName
);

if (!$sendResult['success']) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Unable to dispatch admission application through the mail server at this moment. Please call our admissions desk at +91 8976890569.'
    ]);
    exit;
}

// Send acknowledgment to parent if email provided
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $ackHtml = buildAcknowledgementEmailHtml($parentName, 'admission');
    @sendSmtpEmail(
        $config['smtp'],
        $email,
        $parentName,
        "We have received your admission enquiry - The Scholars School",
        $ackHtml
    );
}

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your admission enquiry has been logged successfully. Our admissions counseling office will contact you within 1 to 2 working days.'
]);
