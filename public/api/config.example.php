<?php
/**
 * Configuration Example Template
 * 
 * To customize credentials without editing the main config.php:
 * Copy this file to 'config.local.php' in this same directory (public/api/config.local.php)
 * and update the credentials. 'config.local.php' is git-ignored and safe.
 */

// Prevent direct browser execution without request context
if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    exit('Direct access not permitted');
}

return [
    'smtp' => [
        'host' => 'mail.thescholarsschool.edu.in',
        'port' => 465,
        'username' => 'info@thescholarsschool.edu.in',
        'password' => 'YOUR_SMTP_PASSWORD_HERE',
        'from_email' => 'info@thescholarsschool.edu.in',
        'from_name' => 'The Scholars High School Website',
        'to_email' => 'info@thescholarsschool.edu.in',
    ],
    'recaptcha' => [
        'site_key' => '6LduSywsAAAAAPsXrHwQMmYIxZivlGz44IIWg9Xm',
        'secret_key' => 'YOUR_RECAPTCHA_SECRET_KEY_HERE',
        'min_score' => 0.3
    ]
];
