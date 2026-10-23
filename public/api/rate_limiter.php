<?php
/**
 * The Scholars High School & Junior College for Commerce
 * API Rate Limiter & Abuse Prevention Guard
 */

if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    exit('Direct access not permitted');
}

/**
 * Enforce IP-based rate limiting on sensitive API endpoints.
 *
 * @param string $endpointKey Unique key identifying the endpoint (e.g., 'contact', 'admission')
 * @param int $maxAttempts Maximum permitted requests within the time window
 * @param int $windowSeconds Duration of the rate limit window in seconds (default: 600s = 10 minutes)
 * @return bool True if permitted, exits script with 429 if exceeded
 */
function enforceRateLimit($endpointKey = 'general', $maxAttempts = 5, $windowSeconds = 600) {
    $remoteIp = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

    // Hash IP for privacy compliance (DPDP / GDPR)
    $ipHash = hash('sha256', $remoteIp . '_TSS_RATE_SALT_2026');

    $storageDir = __DIR__ . '/.data';
    if (!is_dir($storageDir)) {
        @mkdir($storageDir, 0750, true);
        @file_put_contents($storageDir . '/.htaccess', "Require all denied\nDeny from all\n");
        @file_put_contents($storageDir . '/index.html', "");
    }

    $rateLimitFile = $storageDir . '/rate_limits.json';
    $now = time();

    $limits = [];
    if (file_exists($rateLimitFile)) {
        $content = @file_get_contents($rateLimitFile);
        if ($content) {
            $decoded = json_decode($content, true);
            if (is_array($decoded)) {
                $limits = $decoded;
            }
        }
    }

    $recordKey = "{$endpointKey}_{$ipHash}";
    $ipHistory = $limits[$recordKey] ?? [];

    // Filter out timestamps outside the active window
    $validTimestamps = array_filter($ipHistory, function($timestamp) use ($now, $windowSeconds) {
        return ($now - $timestamp) < $windowSeconds;
    });

    if (count($validTimestamps) >= $maxAttempts) {
        $oldest = reset($validTimestamps);
        $retryAfter = max(1, $windowSeconds - ($now - $oldest));

        http_response_code(429);
        header('Retry-After: ' . $retryAfter);
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => false,
            'error' => 'Too many requests submitted from your network. Please wait ' . ceil($retryAfter / 60) . ' minute(s) before trying again or call our office directly at +91 8976890569.'
        ]);
        exit;
    }

    // Append current timestamp
    $validTimestamps[] = $now;
    $limits[$recordKey] = array_values($validTimestamps);

    // Housekeeping: Purge stale records older than 1 hour to prevent file bloat
    if (rand(1, 15) === 1) {
        foreach ($limits as $k => $timestamps) {
            $limits[$k] = array_values(array_filter($timestamps, function($ts) use ($now) {
                return ($now - $ts) < 3600;
            }));
            if (empty($limits[$k])) {
                unset($limits[$k]);
            }
        }
    }

    @file_put_contents($rateLimitFile, json_encode($limits), LOCK_EX);
    return true;
}

/**
 * Validates and sets secure CORS headers based on allowed origin whitelist.
 */
function handleSecureCors() {
    $allowedOrigins = [
        'https://thescholarsschool.edu.in',
        'https://www.thescholarsschool.edu.in'
    ];

    // Allow local development origins only in non-production
    $remoteIp = $_SERVER['REMOTE_ADDR'] ?? '';
    $isLocal = in_array($remoteIp, ['127.0.0.1', '::1']);
    if ($isLocal) {
        $allowedOrigins[] = 'http://localhost:3000';
        $allowedOrigins[] = 'http://127.0.0.1:3000';
        $allowedOrigins[] = 'http://localhost:5173';
        $allowedOrigins[] = 'http://127.0.0.1:8008';
    }

    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin && in_array($origin, $allowedOrigins, true)) {
        header("Access-Control-Allow-Origin: {$origin}");
    } else {
        // Default to canonical institutional domain
        header("Access-Control-Allow-Origin: https://thescholarsschool.edu.in");
    }

    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept, X-Requested-With');
    header('Access-Control-Max-Age: 86400');
    header('Vary: Origin');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}
