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

require_once __DIR__ . '/rate_limiter.php';

// Handle CORS and preflight requests
handleSecureCors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed. Only POST is accepted.']);
    exit;
}

// Enforce rate limiting: 5 contact submissions per 10 minutes per IP
enforceRateLimit('contact', 5, 600);

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

// Strict Input Sanitization & Bounds Checking
$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');
$recaptchaToken = trim($data['recaptchaToken'] ?? '');

// Strip CRLF to prevent header injection
$name = str_replace(["\r", "\n"], ' ', $name);
$subject = str_replace(["\r", "\n"], ' ', $subject);
$email = str_replace(["\r", "\n"], '', $email);
$phone = str_replace(["\r", "\n"], '', $phone);

// Validate Lengths & Patterns
if (strlen($name) < 2 || strlen($name) > 100) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid full name (2 to 100 characters).']);
    exit;
}

$cleanPhone = preg_replace('/[\s-]/', '', $phone);
if (!preg_match('/^[+]?[0-9]{10,14}$/', $cleanPhone)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid 10-digit contact telephone number.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 100) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please provide a valid email address (max 100 characters).']);
    exit;
}

if (strlen($subject) < 2 || strlen($subject) > 150) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please enter an inquiry subject (up to 150 characters).']);
    exit;
}

if (strlen($message) < 5 || strlen($message) > 4000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'Please enter a message between 5 and 4000 characters.']);
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
    'source' => 'Contact Page'
];
$adminHtml = buildContactEmailHtml([
    'name' => $name,
    'phone' => $cleanPhone,
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

// Secure Local Data Archive (Protected storage under .data/ folder)
$storageDir = __DIR__ . '/.data';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0750, true);
    @file_put_contents($storageDir . '/.htaccess', "Require all denied\nDeny from all\n");
    @file_put_contents($storageDir . '/index.html', "");
}

$archiveFile = $storageDir . '/contacts_archive.json';
$entries = file_exists($archiveFile) ? json_decode(@file_get_contents($archiveFile), true) : [];
if (!is_array($entries)) $entries = [];
$entries[] = [
    'id' => 'CNT-' . date('Ymd-His') . '-' . substr(md5(uniqid()), 0, 4),
    'date' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'name' => $name,
    'phone' => $cleanPhone,
    'email' => $email,
    'subject' => $subject,
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
