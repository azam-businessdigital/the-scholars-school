<?php
/**
 * The Scholars High School & Junior College for Commerce
 * API Configuration & Credentials
 *
 * SECURITY NOTICE:
 * Production and sensitive credentials must NEVER be committed to version control.
 * Set them via:
 * 1. Environment variables (SMTP_PASSWORD, RECAPTCHA_SECRET_KEY, etc.)
 * 2. OR a local configuration file: public/api/config.local.php (git-ignored)
 * 3. OR project .env file (git-ignored)
 */

// Prevent direct browser execution without request context
if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    exit('Direct access not permitted');
}

/**
 * Safely lookup environment variables across $_ENV, $_SERVER, and getenv()
 */
if (!function_exists('get_config_env')) {
    function get_config_env($key, $default = '') {
        if (isset($_ENV[$key]) && $_ENV[$key] !== '') {
            return $_ENV[$key];
        }
        if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') {
            return $_SERVER[$key];
        }
        $val = getenv($key);
        if ($val !== false && $val !== '') {
            return $val;
        }
        return $default;
    }
}

// Automatically load .env file if available (root or current directory)
$candidateEnvFiles = [
    dirname(__DIR__, 2) . '/.env',
    __DIR__ . '/.env'
];
foreach ($candidateEnvFiles as $envPath) {
    if (file_exists($envPath) && is_readable($envPath)) {
        $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            $line = trim($line);
            if ($line === '' || str_starts_with($line, '#')) continue;
            if (str_contains($line, '=')) {
                [$name, $value] = explode('=', $line, 2);
                $name = trim($name);
                $value = trim($value, " \t\n\r\0\x0B\"'");
                if (!isset($_ENV[$name])) {
                    $_ENV[$name] = $value;
                    putenv("{$name}={$value}");
                }
            }
        }
        break;
    }
}

$config = [
    // SMTP Credentials
    'smtp' => [
        'host' => get_config_env('SMTP_HOST', 'mail.thescholarsschool.edu.in'),
        'port' => (int) get_config_env('SMTP_PORT', 465), // 465 (SSL Direct) or 587 (TLS)
        'username' => get_config_env('SMTP_USERNAME', 'info@thescholarsschool.edu.in'),
        'password' => get_config_env('SMTP_PASSWORD', ''),
        'from_email' => get_config_env('SMTP_FROM_EMAIL', 'info@thescholarsschool.edu.in'),
        'from_name' => get_config_env('SMTP_FROM_NAME', 'The Scholars High School Website'),
        'to_email' => get_config_env('SMTP_TO_EMAIL', 'info@thescholarsschool.edu.in'),
        'timeout' => 15
    ],

    // Google reCAPTCHA v3 Keys
    'recaptcha' => [
        'site_key' => get_config_env('VITE_RECAPTCHA_SITE_KEY', '6LduSywsAAAAAPsXrHwQMmYIxZivlGz44IIWg9Xm'),
        'secret_key' => get_config_env('RECAPTCHA_SECRET_KEY', ''),
        'min_score' => 0.3 // Recommended threshold to prevent false positives on mobile & private browsing
    ],

    // Institution Branding
    'school' => [
        'name' => 'The Scholars High School & Junior College for Commerce',
        'trust' => 'Al-Qalam Educational Trust (Regd. 1991, Mumbai)',
        'website' => 'https://thescholarsschool.edu.in',
        'phone' => '+91 8976890569',
        'address' => 'Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102'
    ]
];

// Check if local override file exists (public/api/config.local.php - ignored by git)
$localConfigFile = __DIR__ . '/config.local.php';
if (file_exists($localConfigFile) && is_readable($localConfigFile)) {
    $localConfig = require $localConfigFile;
    if (is_array($localConfig)) {
        $config = array_replace_recursive($config, $localConfig);
    }
}

return $config;
