<?php
/**
 * The Scholars High School & Junior College for Commerce
 * Admission Enquiry API Endpoint
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

require_once __DIR__ . '/rate_limiter.php';

// Handle CORS and preflight requests
handleSecureCors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

// Enforce rate limiting: 5 admission submissions per 10 minutes per IP
enforceRateLimit('admission', 5, 600);

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

// Strict Input Validation & Bounds
$parentName = trim($data['parentName'] ?? '');
$studentName = trim($data['studentName'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$section = trim($data['section'] ?? '');
$message = trim($data['message'] ?? '');
$consent = !empty($data['consent']);
$recaptchaToken = trim($data['recaptchaToken'] ?? '');

// Strip CRLF to prevent header injection
$parentName = str_replace(["\r", "\n"], ' ', $parentName);
$studentName = str_replace(["\r", "\n"], ' ', $studentName);
$section = str_replace(["\r", "\n"], ' ', $section);
$email = str_replace(["\r", "\n"], '', $email);
$phone = str_replace(["\r", "\n"], '', $phone);

if (strlen($parentName) < 2 || strlen($parentName) > 100) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid parent or guardian name (2 to 100 characters).']);
    exit;
}

if (strlen($studentName) < 2 || strlen($studentName) > 100) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide the student\'s full name (2 to 100 characters).']);
    exit;
}

$cleanPhone = preg_replace('/[\s-]/', '', $phone);
if (!preg_match('/^[+]?[0-9]{10,14}$/', $cleanPhone)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid 10-digit mobile phone number.']);
    exit;
}

if (!empty($email) && (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 100)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address (max 100 characters).']);
    exit;
}

if (empty($section) || strlen($section) > 120) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please select the academic section of interest.']);
    exit;
}

if (strlen($message) > 4000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Your message is too long (maximum 4000 characters).']);
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
        'error' => $captchaResult['error'] ?? 'Security verification failed. Please refresh and try again.'
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
    'phone' => $cleanPhone,
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

// Secure Local Data Archive (Protected storage under .data/ folder)
$storageDir = __DIR__ . '/.data';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
    @file_put_contents($storageDir . '/.htaccess', "Require all denied\nDeny from all\n");
    @file_put_contents($storageDir . '/index.html', "");
}

$archiveFile = $storageDir . '/admissions_archive.json';
$entries = file_exists($archiveFile) ? json_decode(@file_get_contents($archiveFile), true) : [];
if (!is_array($entries)) $entries = [];
$entries[] = [
    'id' => 'ADM-' . date('Ymd-His') . '-' . substr(md5(uniqid()), 0, 4),
    'date' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'parentName' => $parentName,
    'studentName' => $studentName,
    'phone' => $cleanPhone,
    'email' => $email,
    'section' => $section,
    'message' => $message,
    'recaptchaScore' => $captchaResult['score'] ?? 1.0
];
@file_put_contents($archiveFile, json_encode($entries, JSON_PRETTY_PRINT), LOCK_EX);

if (!$sendResult['success']) {
    @file_put_contents(
        $storageDir . '/mail_debug.log',
        date('[Y-m-d H:i:s] ') . "Email delivery queued/delayed: " . ($sendResult['error'] ?? 'Unknown error') . " - Record saved in archive.\n",
        FILE_APPEND | LOCK_EX
    );
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
