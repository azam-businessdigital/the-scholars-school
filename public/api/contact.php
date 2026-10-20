<?php
/**
 * The Scholars High School & Junior College for Commerce
 * Contact Form API Endpoint
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

// Handle preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
    header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
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
    // Fallback to $_POST
    $data = $_POST;
}

// Anti-spam honeypot
if (!empty($data['honeypot']) || !empty($data['website_honeypot'])) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message transmitted successfully.']);
    exit;
}

// Basic Validation
$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');
$recaptchaToken = trim($data['recaptchaToken'] ?? '');

if (strlen($name) < 2) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid full name.']);
    exit;
}

$cleanPhone = preg_replace('/[\s-]/', '', $phone);
if (!preg_match('/^[+]?[0-9]{10,14}$/', $cleanPhone)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid 10-digit contact telephone number.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address.']);
    exit;
}

if (strlen($message) < 5) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please enter a message of at least 5 characters.']);
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
    'source' => 'Contact Page'
];
$adminHtml = buildContactEmailHtml([
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'subject' => $subject,
    'message' => $message
], $meta);

// Send Email to School Admin
$emailSubject = "Website Inquiry: {$subject} - {$name}";
$sendResult = sendSmtpEmail(
    $config['smtp'],
    $config['smtp']['to_email'],
    'The Scholars School Office',
    $emailSubject,
    $adminHtml,
    $email,
    $name
);

// Local Data Archive (Preserve enquiry in all circumstances)
$archiveFile = __DIR__ . '/contacts_archive.json';
$entries = file_exists($archiveFile) ? json_decode(@file_get_contents($archiveFile), true) : [];
if (!is_array($entries)) $entries = [];
$entries[] = [
    'id' => 'CNT-' . date('Ymd-His') . '-' . substr(md5(uniqid()), 0, 4),
    'date' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'recaptchaScore' => $captchaResult['score'] ?? 1.0
];
@file_put_contents($archiveFile, json_encode($entries, JSON_PRETTY_PRINT));

if (!$sendResult['success']) {
    @file_put_contents(
        __DIR__ . '/mail_debug.log',
        date('[Y-m-d H:i:s] ') . "Email delivery queued/delayed: " . ($sendResult['error'] ?? 'Unknown error') . " - Record saved in archive.\n",
        FILE_APPEND
    );
}

// Optionally send acknowledgment to the user
if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $ackHtml = buildAcknowledgementEmailHtml($name, 'contact');
    @sendSmtpEmail(
        $config['smtp'],
        $email,
        $name,
        "We have received your message - The Scholars School",
        $ackHtml
    );
}

http_response_code(200);
echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your message has been successfully transmitted to The Scholars School administrative office. We will get back to you promptly.'
]);
