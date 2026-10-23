<?php
/**
 * The Scholars High School & Junior College for Arts & Commerce
 * Core Mailer, reCAPTCHA v3 Verifier & Professional HTML Email Generator
 */

if (basename($_SERVER['PHP_SELF']) === basename(__FILE__)) {
    http_response_code(403);
    exit('Direct access not permitted');
}

/**
 * Verify Google reCAPTCHA v3 Token
 */
function verifyRecaptcha($token, $secretKey, $minScore = 0.3) {
    $remoteIp = $_SERVER['REMOTE_ADDR'] ?? '';

    // Only allow development bypass when running strictly on localhost with no secret key configured
    $isLocal = in_array($remoteIp, ['127.0.0.1', '::1']);
    if ($isLocal && empty($secretKey)) {
        return [
            'success' => true,
            'score' => 0.95,
            'error' => null,
            'dev_mode' => true
        ];
    }

    if (empty($token)) {
        return [
            'success' => false,
            'score' => 0,
            'error' => 'Security verification token was not received. Please refresh and try again.'
        ];
    }

    if (empty($secretKey)) {
        return [
            'success' => false,
            'score' => 0,
            'error' => 'Security configuration is incomplete. Please contact the school directly.'
        ];
    }

    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $postData = http_build_query([
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $remoteIp
    ]);

    $response = false;
    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        $response = curl_exec($ch);
        curl_close($ch);
    } else {
        $opts = [
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n" .
                            "Content-Length: " . strlen($postData) . "\r\n",
                'content' => $postData,
                'timeout' => 10
            ]
        ];
        $context = stream_context_create($opts);
        $response = @file_get_contents($url, false, $context);
    }

    if (!$response) {
        // Fallback gracefully if Google API is temporarily unreachable
        return ['success' => true, 'score' => 0.5, 'error' => null, 'fallback' => true];
    }

    $result = json_decode($response, true);
    if (!is_array($result)) {
        return ['success' => false, 'score' => 0, 'error' => 'Malformed response from verification service.'];
    }

    $success = !empty($result['success']);
    $hasScore = isset($result['score']);
    $score = $hasScore ? floatval($result['score']) : ($success ? 1.0 : 0.0);
    $errorCodes = $result['error-codes'] ?? [];

    $logDir = __DIR__ . '/.data';
    if (is_dir($logDir)) {
        @file_put_contents(
            $logDir . '/recaptcha_debug.log',
            date('[Y-m-d H:i:s] ') . "Verify: success=" . ($success ? '1':'0') . " score={$score} errors=" . implode(',', $errorCodes) . "\n",
            FILE_APPEND
        );
    }

    if ($success) {
        if ($hasScore && $score < $minScore) {
            return [
                'success' => false,
                'score' => $score,
                'error' => 'Automated bot detection check failed. Please retry or call our admissions helpline at +91 8976890569.'
            ];
        }

        return [
            'success' => true,
            'score' => $score,
            'error' => null
        ];
    }

    if (in_array('timeout-or-duplicate', $errorCodes)) {
        return [
            'success' => false,
            'score' => 0,
            'error' => 'Security token expired or was already submitted. Please reload the page and try again.'
        ];
    }

    return [
        'success' => false,
        'score' => 0,
        'error' => 'Security verification could not be validated. Please retry or call our office at +91 8976890569.'
    ];
}

/**
 * Fallback Mailer using PHP's native mail() (Sendmail / Exim on cPanel / Apache)
 */
function sendPhpMailFallback($smtpConfig, $toEmail, $toName, $subject, $htmlBody, $replyToEmail = null, $replyToName = null) {
    if (!function_exists('mail')) return false;

    // Strict CRLF sanitization to prevent email header injection
    $fromEmail = str_replace(["\r", "\n"], '', $smtpConfig['from_email'] ?? 'info@thescholarsschool.edu.in');
    $fromName = str_replace(["\r", "\n"], '', $smtpConfig['from_name'] ?? 'The Scholars High School Website');
    $toEmail = str_replace(["\r", "\n"], '', $toEmail);
    $toName = str_replace(["\r", "\n"], '', $toName);
    $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $cleanSubject = str_replace(["\r", "\n"], ' ', trim($subject));
    $encodedSubject = '=?UTF-8?B?' . base64_encode($cleanSubject) . '?=';

    $headers = [];
    $headers[] = "From: {$encodedFromName} <{$fromEmail}>";
    if ($replyToEmail) {
        $cleanReplyEmail = str_replace(["\r", "\n"], '', $replyToEmail);
        $cleanReplyName = str_replace(["\r", "\n"], '', $replyToName ?: $toName);
        $encodedRepName = '=?UTF-8?B?' . base64_encode($cleanReplyName) . '?=';
        $headers[] = "Reply-To: {$encodedRepName} <{$cleanReplyEmail}>";
    }
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=UTF-8";
    $headers[] = "Content-Transfer-Encoding: base64";
    $headers[] = "X-Mailer: The Scholars School Desk Mailer v2.0 (PHP Fallback)";

    $bodyChunked = chunk_split(base64_encode($htmlBody));
    $sent = @mail($toEmail, $encodedSubject, $bodyChunked, implode("\r\n", $headers));
    if ($sent) {
        $logDir = __DIR__ . '/.data';
        if (is_dir($logDir)) {
            @file_put_contents($logDir . '/mail_debug.log', date('[Y-m-d H:i:s] ') . "Fallback PHP mail() sent successfully to {$toEmail}\n", FILE_APPEND);
        }
        return true;
    }
    return false;
}

/**
 * Socket-based SMTP Dispatcher over Port 465 (Direct SSL) with PHP mail() Fallback
 */
function sendSmtpEmail($smtpConfig, $toEmail, $toName, $subject, $htmlBody, $replyToEmail = null, $replyToName = null) {
    $host = 'ssl://' . $smtpConfig['host'];
    $port = $smtpConfig['port'] ?? 465;
    $timeout = $smtpConfig['timeout'] ?? 15;

    $errno = 0;
    $errstr = '';
    $socket = @fsockopen($host, $port, $errno, $errstr, $timeout);

    if (!$socket) {
        if (sendPhpMailFallback($smtpConfig, $toEmail, $toName, $subject, $htmlBody, $replyToEmail, $replyToName)) {
            return ['success' => true, 'channel' => 'php_mail_fallback'];
        }
        return ['success' => false, 'error' => "Unable to connect to SMTP server: {$errstr} ({$errno})"];
    }

    stream_set_timeout($socket, $timeout);

    // Helper to read SMTP responses
    $readResponse = function() use ($socket) {
        $response = '';
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            // Break if 4th char is space or end of multiline
            if (isset($line[3]) && $line[3] === ' ') {
                break;
            }
        }
        return $response;
    };

    $sendCommand = function($cmd) use ($socket) {
        fputs($socket, $cmd . "\r\n");
    };

    // 1. Read Greeting (220)
    $res = $readResponse();
    if (!str_starts_with($res, '220')) {
        fclose($socket);
        return ['success' => false, 'error' => "SMTP Greeting failed: {$res}"];
    }

    // 2. EHLO
    $sendCommand("EHLO localhost");
    $res = $readResponse();
    if (!str_starts_with($res, '250')) {
        fclose($socket);
        return ['success' => false, 'error' => "EHLO failed: {$res}"];
    }

    // 3. AUTH LOGIN
    $sendCommand("AUTH LOGIN");
    $res = $readResponse();
    if (!str_starts_with($res, '334')) {
        fclose($socket);
        return ['success' => false, 'error' => "AUTH LOGIN command failed: {$res}"];
    }

    // 4. Send Username
    $sendCommand(base64_encode($smtpConfig['username']));
    $res = $readResponse();
    if (!str_starts_with($res, '334')) {
        fclose($socket);
        return ['success' => false, 'error' => "SMTP Username rejected: {$res}"];
    }

    // 5. Send Password
    $sendCommand(base64_encode($smtpConfig['password']));
    $res = $readResponse();
    if (!str_starts_with($res, '235')) {
        fclose($socket);
        if (sendPhpMailFallback($smtpConfig, $toEmail, $toName, $subject, $htmlBody, $replyToEmail, $replyToName)) {
            return ['success' => true, 'channel' => 'php_mail_fallback'];
        }
        return ['success' => false, 'error' => "SMTP Authentication failed: {$res}"];
    }

    // 6. MAIL FROM
    $fromEmail = $smtpConfig['from_email'];
    $sendCommand("MAIL FROM:<{$fromEmail}>");
    $res = $readResponse();
    if (!str_starts_with($res, '250')) {
        fclose($socket);
        return ['success' => false, 'error' => "MAIL FROM rejected: {$res}"];
    }

    // 7. RCPT TO
    $sendCommand("RCPT TO:<{$toEmail}>");
    $res = $readResponse();
    if (!str_starts_with($res, '250')) {
        fclose($socket);
        return ['success' => false, 'error' => "RCPT TO rejected: {$res}"];
    }

    // 8. DATA
    $sendCommand("DATA");
    $res = $readResponse();
    if (!str_starts_with($res, '354')) {
        fclose($socket);
        return ['success' => false, 'error' => "DATA command rejected: {$res}"];
    }

    // 9. Build MIME Headers with strict CRLF sanitization
    $fromName = str_replace(["\r", "\n"], '', $smtpConfig['from_name']);
    $fromEmail = str_replace(["\r", "\n"], '', $smtpConfig['from_email']);
    $toName = str_replace(["\r", "\n"], '', $toName);
    $toEmail = str_replace(["\r", "\n"], '', $toEmail);
    $encodedFromName = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $encodedToName = '=?UTF-8?B?' . base64_encode($toName) . '?=';
    $cleanSubject = str_replace(["\r", "\n"], ' ', trim($subject));
    $encodedSubject = '=?UTF-8?B?' . base64_encode($cleanSubject) . '?=';

    $headers = [];
    $headers[] = "From: {$encodedFromName} <{$fromEmail}>";
    $headers[] = "To: {$encodedToName} <{$toEmail}>";
    $headers[] = "Subject: {$encodedSubject}";
    if ($replyToEmail) {
        $repName = str_replace(["\r", "\n"], '', $replyToName ?: $toName);
        $cleanReplyEmail = str_replace(["\r", "\n"], '', $replyToEmail);
        $encodedRepName = '=?UTF-8?B?' . base64_encode($repName) . '?=';
        $headers[] = "Reply-To: {$encodedRepName} <{$cleanReplyEmail}>";
    }
    $headers[] = "Date: " . date('r');
    $headers[] = "Message-ID: <" . md5(uniqid(microtime(), true)) . "@thescholarsschool.edu.in>";
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-Type: text/html; charset=UTF-8";
    $headers[] = "Content-Transfer-Encoding: base64";
    $headers[] = "X-Mailer: The Scholars School Desk Mailer v2.0";

    $rawContent = implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($htmlBody)) . "\r\n.";

    $sendCommand($rawContent);
    $res = $readResponse();

    $sendCommand("QUIT");
    fclose($socket);

    if (!str_starts_with($res, '250')) {
        return ['success' => false, 'error' => "Message transmission rejected: {$res}"];
    }

    return ['success' => true, 'response' => trim($res)];
}

/**
 * Generate Professional HTML Email for Admission Enquiry
 */
function buildAdmissionEmailHtml($data, $meta) {
    $refId = 'TSS-ADM-' . date('Ymd') . '-' . strtoupper(substr(md5(uniqid()), 0, 5));
    $timestamp = date('d M Y, h:i A') . ' IST';

    $parentName = htmlspecialchars($data['parentName'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $studentName = htmlspecialchars($data['studentName'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $phone = htmlspecialchars($data['phone'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $cleanPhone = preg_replace('/[^\+0-9]/', '', $phone);
    $email = htmlspecialchars($data['email'] ?? 'Not provided', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $section = htmlspecialchars($data['section'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $message = !empty($data['message']) ? nl2br(htmlspecialchars($data['message'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8')) : '<em>None specified</em>';
    $recaptchaScore = isset($meta['recaptchaScore']) ? number_format($meta['recaptchaScore'], 2) : '1.00';
    $ip = htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'Unknown', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Admission Enquiry - {$studentName}</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F1F5F9;padding:30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="620" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;width:100%;background-color:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(11,25,44,0.12);border:1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background:linear-gradient(135deg, #071324 0%, #0B192C 60%, #152A4A 100%);padding:32px 32px 28px 32px;text-align:center;border-bottom:3px solid #C6A15B;">
              <div style="font-size:11px;font-weight:700;color:#C6A15B;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:6px;">
                Al-Qalam Educational Trust (Regd. 1991, Mumbai)
              </div>
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;line-height:1.3;">
                The Scholars High School &amp; Junior College
              </h1>
              <div style="font-size:12px;color:#94A3B8;margin-top:4px;">
                Jogeshwari (West), Mumbai 400102 • Established 1993
              </div>
            </td>
          </tr>

          <!-- Notification Pill -->
          <tr>
            <td style="padding:24px 32px 12px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background:rgba(16, 185, 129, 0.08);border:1px solid rgba(16, 185, 129, 0.3);border-radius:8px;padding:12px 18px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="font-size:13px;font-weight:700;color:#065F46;text-transform:uppercase;letter-spacing:0.05em;">
                          🟢 NEW ADMISSION ENQUIRY APPLICATION
                        </td>
                        <td align="right" style="font-size:12px;font-weight:600;color:#047857;">
                          Ref: {$refId}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding:10px 32px 24px 32px;">
              <p style="margin:0 0 18px 0;font-size:14.5px;color:#334155;line-height:1.6;">
                A new preliminary student admission enquiry has been submitted through the official school portal. Details are structured below for counseling review:
              </p>

              <!-- Data Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;margin-bottom:20px;">
                <tr style="background-color:#F8FAFC;">
                  <td width="35%" style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Student Full Name:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    {$studentName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Parent / Guardian:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid #E2E8F0;">
                    {$parentName}
                  </td>
                </tr>
                <tr style="background-color:#F8FAFC;">
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Academic Section:
                  </td>
                  <td style="padding:12px 16px;font-size:13.5px;font-weight:700;color:#92400E;border-bottom:1px solid #E2E8F0;">
                    <span style="background:#FEF3C7;border:1px solid #FCD34D;padding:3px 10px;border-radius:100px;">{$section}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Contact Number:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid #E2E8F0;">
                    <a href="tel:{$cleanPhone}" style="color:#0B192C;font-weight:700;text-decoration:none;">{$phone}</a>
                  </td>
                </tr>
                <tr style="background-color:#F8FAFC;">
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Email Address:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid #E2E8F0;">
                    <a href="mailto:{$email}" style="color:#1D4ED8;text-decoration:none;">{$email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;vertical-align:top;">
                    Prior School / Notes:
                  </td>
                  <td style="padding:12px 16px;font-size:13.5px;color:#334155;line-height:1.6;border-bottom:1px solid #E2E8F0;">
                    {$message}
                  </td>
                </tr>
                <tr style="background-color:#F8FAFC;">
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;">
                    Communication Consent:
                  </td>
                  <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#065F46;">
                    ✅ Parent Authorized Contact via Phone / SMS
                  </td>
                </tr>
              </table>

              <!-- Quick Action Callouts -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center" style="padding:8px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="border-radius:6px;background-color:#0B192C;padding:10px 18px;">
                          <a href="tel:{$cleanPhone}" style="color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:700;display:inline-block;">
                            📞 Call Parent Directly
                          </a>
                        </td>
                        <td width="12"></td>
                        <td style="border-radius:6px;background-color:#25D366;padding:10px 18px;">
                          <a href="https://wa.me/{$cleanPhone}" style="color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:700;display:inline-block;">
                            💬 WhatsApp Chat
                          </a>
                        </td>
                        <td width="12"></td>
                        <td style="border-radius:6px;background-color:#C6A15B;padding:10px 18px;">
                          <a href="mailto:{$email}" style="color:#0B192C;text-decoration:none;font-size:13px;font-weight:700;display:inline-block;">
                            ✉️ Send Email Reply
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Security & Submission Metadata -->
              <div style="background-color:#F8FAFC;border:1px dashed #CBD5E1;border-radius:6px;padding:12px 16px;font-size:12px;color:#64748B;line-height:1.5;">
                <strong>Security &amp; Audit Trail:</strong> Google reCAPTCHA v3 verified (Score: <strong>{$recaptchaScore}</strong> / 1.00) • Client IP: {$ip} • Logged at {$timestamp}.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#071324;color:#94A3B8;padding:24px 32px;font-size:12px;line-height:1.6;text-align:center;border-top:1px solid #1E293B;">
              <div style="color:#E2E8F0;font-weight:700;margin-bottom:4px;">
                The Scholars High School &amp; Junior College for Commerce
              </div>
              Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102<br>
              Helplines: +91 8976890569 / +91 8976890570 • Email: info@thescholarsschool.edu.in
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}

/**
 * Generate Professional HTML Email for Contact Form Message
 */
function buildContactEmailHtml($data, $meta) {
    $refId = 'TSS-MSG-' . date('Ymd') . '-' . strtoupper(substr(md5(uniqid()), 0, 5));
    $timestamp = date('d M Y, h:i A') . ' IST';

    $name = htmlspecialchars($data['name'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $phone = htmlspecialchars($data['phone'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $cleanPhone = preg_replace('/[^\+0-9]/', '', $phone);
    $email = htmlspecialchars($data['email'] ?? 'N/A', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $subject = htmlspecialchars($data['subject'] ?? 'Website Inquiry', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $message = nl2br(htmlspecialchars($data['message'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));
    $recaptchaScore = isset($meta['recaptchaScore']) ? number_format($meta['recaptchaScore'], 2) : '1.00';
    $ip = htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'Unknown', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Website Inquiry: {$subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F1F5F9;padding:30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="620" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;width:100%;background-color:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(11,25,44,0.12);border:1px solid #E2E8F0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background:linear-gradient(135deg, #071324 0%, #0B192C 60%, #152A4A 100%);padding:32px 32px 28px 32px;text-align:center;border-bottom:3px solid #C6A15B;">
              <div style="font-size:11px;font-weight:700;color:#C6A15B;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:6px;">
                Al-Qalam Educational Trust (Regd. 1991, Mumbai)
              </div>
              <h1 style="margin:0;font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.02em;line-height:1.3;">
                The Scholars High School &amp; Junior College
              </h1>
              <div style="font-size:12px;color:#94A3B8;margin-top:4px;">
                Administrative Office Dispatch • Jogeshwari (West), Mumbai
              </div>
            </td>
          </tr>

          <!-- Notification Pill -->
          <tr>
            <td style="padding:24px 32px 12px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background:rgba(198, 161, 91, 0.12);border:1px solid rgba(198, 161, 91, 0.4);border-radius:8px;padding:12px 18px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="font-size:13px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:0.05em;">
                          📬 NEW OFFICIAL WEBSITE INQUIRY
                        </td>
                        <td align="right" style="font-size:12px;font-weight:600;color:#B45309;">
                          Ref: {$refId}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding:10px 32px 24px 32px;">
              <p style="margin:0 0 18px 0;font-size:14.5px;color:#334155;line-height:1.6;">
                A new message has been transmitted through the website contact desk. Details are provided below for administrative response:
              </p>

              <!-- Data Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;margin-bottom:20px;">
                <tr style="background-color:#F8FAFC;">
                  <td width="35%" style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Sender Name:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    {$name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Contact Telephone:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid #E2E8F0;">
                    <a href="tel:{$cleanPhone}" style="color:#0B192C;font-weight:700;text-decoration:none;">{$phone}</a>
                  </td>
                </tr>
                <tr style="background-color:#F8FAFC;">
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Email Address:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1E293B;border-bottom:1px solid #E2E8F0;">
                    <a href="mailto:{$email}" style="color:#1D4ED8;text-decoration:none;">{$email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    Inquiry Subject:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:700;color:#0B192C;border-bottom:1px solid #E2E8F0;">
                    {$subject}
                  </td>
                </tr>
                <tr style="background-color:#F8FAFC;">
                  <td style="padding:12px 16px;font-size:13px;font-weight:700;color:#0B192C;vertical-align:top;">
                    Message Content:
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#334155;line-height:1.7;">
                    {$message}
                  </td>
                </tr>
              </table>

              <!-- Quick Actions Bar -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center" style="padding:8px 0;">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="border-radius:6px;background-color:#0B192C;padding:10px 18px;">
                          <a href="tel:{$cleanPhone}" style="color:#FFFFFF;text-decoration:none;font-size:13px;font-weight:700;display:inline-block;">
                            📞 Call Sender
                          </a>
                        </td>
                        <td width="12"></td>
                        <td style="border-radius:6px;background-color:#C6A15B;padding:10px 18px;">
                          <a href="mailto:{$email}?subject=Re:%20{$subject}" style="color:#0B192C;text-decoration:none;font-size:13px;font-weight:700;display:inline-block;">
                            ✉️ Reply via Email
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Security Metadata -->
              <div style="background-color:#F8FAFC;border:1px dashed #CBD5E1;border-radius:6px;padding:12px 16px;font-size:12px;color:#64748B;line-height:1.5;">
                <strong>Security Audit:</strong> Google reCAPTCHA v3 verified (Score: <strong>{$recaptchaScore}</strong> / 1.00) • Client IP: {$ip} • Logged at {$timestamp}.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#071324;color:#94A3B8;padding:24px 32px;font-size:12px;line-height:1.6;text-align:center;border-top:1px solid #1E293B;">
              <div style="color:#E2E8F0;font-weight:700;margin-bottom:4px;">
                The Scholars High School &amp; Junior College for Commerce
              </div>
              Captain Suresh Samant Marg, Agarwal Estate, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102<br>
              Helplines: +91 8976890569 / +91 8976890570 • Email: info@thescholarsschool.edu.in
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}

/**
 * Generate Professional Acknowledgment Email for Parent / Inquirer
 */
function buildAcknowledgementEmailHtml($name, $type = 'admission') {
    $title = ($type === 'admission')
        ? 'We have received your admission enquiry'
        : 'Thank you for contacting The Scholars School';
    $intro = ($type === 'admission')
        ? 'Thank you for your interest in The Scholars High School & Junior College for Commerce. Our admissions desk has received your application and will contact you within 24–48 working hours.'
        : 'Thank you for reaching out to us. Our administrative team has received your inquiry and will respond promptly during school office hours.';

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{$title}</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1E293B;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#F1F5F9;padding:30px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="580" cellspacing="0" cellpadding="0" border="0" style="max-width:580px;width:100%;background-color:#FFFFFF;border-radius:12px;overflow:hidden;border:1px solid #E2E8F0;box-shadow:0 8px 24px rgba(11,25,44,0.08);">
          <tr>
            <td style="background:#0B192C;padding:28px 28px 24px 28px;text-align:center;border-bottom:3px solid #C6A15B;">
              <div style="font-size:11px;font-weight:700;color:#C6A15B;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px;">
                Al-Qalam Educational Trust
              </div>
              <h2 style="margin:0;color:#FFFFFF;font-size:20px;font-weight:800;">
                The Scholars High School &amp; Junior College
              </h2>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              <h3 style="color:#0B192C;margin:0 0 12px 0;font-size:17px;">
                Dear {$name},
              </h3>
              <p style="font-size:14.5px;color:#334155;line-height:1.65;margin:0 0 16px 0;">
                {$intro}
              </p>
              <div style="background-color:#F8FAFC;border-left:4px solid #C6A15B;padding:14px 18px;border-radius:4px;margin-bottom:20px;font-size:13.5px;color:#475569;line-height:1.6;">
                <strong>Campus Visiting &amp; Office Hours:</strong><br>
                Monday to Saturday: 9:00 AM to 3:00 PM (Closed on Sundays)<br>
                Location: Captain Suresh Samant Marg, Opp. Hill Park Tower, Jogeshwari (West), Mumbai 400102.
              </div>
              <p style="font-size:14px;color:#334155;margin:0;">
                Need urgent assistance? Call our admissions helpdesk directly at <a href="tel:+918976890569" style="color:#0B192C;font-weight:700;text-decoration:none;">+91 8976890569</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#F8FAFC;border-top:1px solid #E2E8F0;padding:16px 28px;text-align:center;font-size:12px;color:#94A3B8;">
              &copy; The Scholars High School &amp; Junior College for Commerce. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}
