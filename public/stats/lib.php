<?php
// Gemeinsame Funktionen der cookielosen Zugriffsstatistik (Auswertung: /stats/).
// Gespeichert werden keine IP-Adressen und kein User-Agent, nur daraus abgeleitete Kategorien.
// Uebernommen von diplo.eichberger.tech/stats (gleiches Datenformat).
declare(strict_types=1);

date_default_timezone_set('Europe/Vienna');

const STATS_RETENTION_MONTHS = 24;
// Datendateien enden auf .php und beginnen mit dieser Zeile → auch ohne .htaccess nie direkt lesbar.
const STATS_GUARD = "<?php http_response_code(404); exit; ?>\n";

/**
 * Speicherort der Daten. Bevorzugt AUSSERHALB des Webroots (../infohub-stats-data neben dem
 * Document Root), damit ein Neu-Hochladen von out/ die Statistik nie loescht. Ist das nicht
 * moeglich (Rechte/open_basedir), dann im Webroot unter stats-data/ – dort beim Ausrollen
 * NICHT loeschen.
 */
function stats_dir(): string
{
    static $dir = null;
    if ($dir !== null) {
        return $dir;
    }
    $outside = dirname(__DIR__, 2) . '/infohub-stats-data';
    $inside = dirname(__DIR__) . '/stats-data';
    // Reihenfolge stabil halten, damit die Daten nie auf zwei Orte verteilt werden:
    // vorhandener Ordner aussen > vorhandener Ordner im Webroot > aussen anlegen > im Webroot anlegen
    if (@is_dir($outside) && @is_writable($outside)) {
        return $dir = $outside;
    }
    if (!is_dir($inside) && @is_writable(dirname($outside)) && @mkdir($outside, 0750)) {
        return $dir = $outside;
    }
    $dir = $inside;
    if (!is_dir($dir)) {
        @mkdir($dir, 0750, true);
    }
    $htaccess = $dir . '/.htaccess';
    if (!is_file($htaccess)) {
        @file_put_contents(
            $htaccess,
            "<IfModule mod_authz_core.c>\n  Require all denied\n</IfModule>\n" .
            "<IfModule !mod_authz_core.c>\n  Order allow,deny\n  Deny from all\n</IfModule>\n"
        );
    }
    return $dir;
}

function stats_dir_is_outside_webroot(): bool
{
    return basename(stats_dir()) === 'infohub-stats-data';
}

function stats_month_file(string $month): string
{
    return stats_dir() . '/' . $month . '.php';
}

function stats_is_bot(string $ua): bool
{
    return (bool) preg_match('/bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|curl|wget|python|httpclient|monitor/i', $ua);
}

function stats_device(string $ua): string
{
    if (preg_match('/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i', $ua)) {
        return 'Tablet';
    }
    if (preg_match('/Mobi|iPhone|iPod|Android/i', $ua)) {
        return 'Smartphone';
    }
    return 'Desktop';
}

function stats_browser(string $ua): string
{
    $map = [
        '/Edg(e|A|iOS)?\//' => 'Edge',
        '/OPR\/|Opera/' => 'Opera',
        '/SamsungBrowser/' => 'Samsung Internet',
        '/Firefox|FxiOS/' => 'Firefox',
        '/Chrome|CriOS|Chromium/' => 'Chrome',
        '/Safari/' => 'Safari',
    ];
    foreach ($map as $pattern => $name) {
        if (preg_match($pattern, $ua)) {
            return $name;
        }
    }
    return 'Andere';
}

function stats_os(string $ua): string
{
    $map = [
        '/Windows/' => 'Windows',
        '/iPhone|iPad|iPod/' => 'iOS / iPadOS',
        '/Mac OS X|Macintosh/' => 'macOS',
        '/Android/' => 'Android',
        '/CrOS/' => 'ChromeOS',
        '/Linux/' => 'Linux',
    ];
    foreach ($map as $pattern => $name) {
        if (preg_match($pattern, $ua)) {
            return $name;
        }
    }
    return 'Andere';
}

function stats_accept_lang(): string
{
    $header = strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '');
    return preg_match('/^([a-z]{2})/', $header, $m) ? $m[1] : '–';
}

function stats_append(array $row): void
{
    $fh = @fopen(stats_month_file(date('Y-m', $row['t'])), 'ab');
    if ($fh === false) {
        return;
    }
    if (flock($fh, LOCK_EX)) {
        if (fstat($fh)['size'] === 0) {
            fwrite($fh, STATS_GUARD);
        }
        fwrite($fh, json_encode($row, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n");
        fflush($fh);
        flock($fh, LOCK_UN);
    }
    fclose($fh);
}

/** Loescht Monatsdateien, die aelter als die Aufbewahrungsfrist sind (gelegentlich aufgerufen). */
function stats_prune(): void
{
    $cutoff = date('Y-m', strtotime('-' . STATS_RETENTION_MONTHS . ' months'));
    foreach (glob(stats_dir() . '/*.php') ?: [] as $file) {
        $month = basename($file, '.php');
        if (preg_match('/^\d{4}-\d{2}$/', $month) && $month < $cutoff) {
            @unlink($file);
        }
    }
}

/** Liest alle Eintraege ab Zeitpunkt $from (Unix-Zeit). */
function stats_read(int $from): array
{
    $rows = [];
    $month = date('Y-m', $from);
    $last = date('Y-m');
    while ($month <= $last) {
        $file = stats_month_file($month);
        if (is_file($file)) {
            $fh = fopen($file, 'rb');
            if ($fh !== false) {
                while (($line = fgets($fh)) !== false) {
                    if ($line[0] !== '{') {
                        continue;
                    }
                    $row = json_decode($line, true);
                    if (is_array($row) && ($row['t'] ?? 0) >= $from) {
                        $rows[] = $row;
                    }
                }
                fclose($fh);
            }
        }
        $month = date('Y-m', strtotime($month . '-01 +1 month'));
    }
    return $rows;
}
