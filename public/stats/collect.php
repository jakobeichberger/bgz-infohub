<?php
// Nimmt einen Seitenaufruf oder Download vom StatsBeacon entgegen (components/StatsBeacon.tsx).
declare(strict_types=1);

require __DIR__ . '/lib.php';

header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    exit;
}

$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
if ($ua === '' || stats_is_bot($ua)) {
    http_response_code(204);
    exit;
}

// Nur Aufrufe, die von dieser Website selbst kommen
$host = strtolower((string) preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
$source = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
if ($source !== '' && strtolower((string) parse_url($source, PHP_URL_HOST)) !== $host) {
    http_response_code(204);
    exit;
}

$input = json_decode((string) file_get_contents('php://input', false, null, 0, 2048), true);
if (!is_array($input)) {
    http_response_code(400);
    exit;
}

$path = $input['p'] ?? '';
$isDownload = ($input['k'] ?? '') === 'dl';
if ($isDownload) {
    // Datei-Downloads (WLAN-Zertifikat, PDF-Anleitungen, Word-Vorlage)
    if (!is_string($path) || !preg_match('#^/templates/[A-Za-z0-9._-]{1,100}$#', $path)) {
        http_response_code(400);
        exit;
    }
} else {
    if (!is_string($path) || !preg_match('#^/[a-z0-9/_-]{0,150}$#', $path)) {
        http_response_code(400);
        exit;
    }
    $path = rtrim($path, '/') === '' ? '/' : rtrim($path, '/');
}

$entry = !$isDownload && !empty($input['e']);
$referrer = '';
if ($entry && isset($input['r']) && is_string($input['r'])) {
    $candidate = preg_replace('/^www\./', '', strtolower($input['r']));
    if (preg_match('/^[a-z0-9.-]{1,100}$/', $candidate) && $candidate !== $host) {
        $referrer = $candidate;
    }
}

$row = [
    't' => time(),
    'p' => $path,
    'e' => $entry ? 1 : 0,
    'r' => $referrer,
    // Sprache ergibt sich beim InfoHub aus der URL (/en/...)
    'l' => ($path === '/en' || str_starts_with($path, '/en/')) ? 'en' : 'de',
    'bl' => stats_accept_lang(),
    'd' => stats_device($ua),
    'b' => stats_browser($ua),
    'o' => stats_os($ua),
];
if ($isDownload) {
    $row['k'] = 'dl';
}
stats_append($row);

if (random_int(1, 200) === 1) {
    stats_prune();
}

http_response_code(204);
