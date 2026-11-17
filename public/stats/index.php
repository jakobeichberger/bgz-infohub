<?php
// Dashboard der Zugriffsstatistik des InfoHub. Nicht verlinkt; zeigt nur zusammengefasste Zahlen.
// Uebernommen von diplo.eichberger.tech/stats, ergaenzt um Datei-Downloads.
declare(strict_types=1);

require __DIR__ . '/lib.php';

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');

const RANGES = [7 => '7 Tage', 30 => '30 Tage', 90 => '90 Tage', 365 => '12 Monate'];

$days = (int) ($_GET['d'] ?? 30);
if (!isset(RANGES[$days])) {
    $days = 30;
}

$today = strtotime('today');
$from = strtotime('-' . ($days - 1) . ' days', $today);
$prevFrom = strtotime('-' . $days . ' days', $from);

$all = stats_read($prevFrom);
$isDownload = fn ($r) => ($r['k'] ?? '') === 'dl';
$downloadRows = array_values(array_filter($all, fn ($r) => $isDownload($r) && $r['t'] >= $from));
$prevDownloadCount = count(array_filter($all, fn ($r) => $isDownload($r) && $r['t'] < $from));
$all = array_values(array_filter($all, fn ($r) => !$isDownload($r)));
$rows = array_values(array_filter($all, fn ($r) => $r['t'] >= $from));
$prevRows = array_filter($all, fn ($r) => $r['t'] < $from);

function h(string $s): string
{
    return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
}

function count_by(array $rows, string $key, bool $entriesOnly = false): array
{
    $counts = [];
    foreach ($rows as $r) {
        if ($entriesOnly && empty($r['e'])) {
            continue;
        }
        $value = (string) ($r[$key] ?? '');
        $counts[$value] = ($counts[$value] ?? 0) + 1;
    }
    arsort($counts);
    return $counts;
}

function trend(int $now, int $before): string
{
    if ($before === 0) {
        return '<span class="trend">kein Vergleich möglich</span>';
    }
    $pct = (int) round(($now - $before) / $before * 100);
    $class = $pct >= 0 ? 'up' : 'down';
    return '<span class="trend ' . $class . '">' . ($pct >= 0 ? '+' : '') . $pct . ' % ggü. Vorzeitraum</span>';
}

$pageviews = count($rows);
$visits = count(array_filter($rows, fn ($r) => !empty($r['e'])));
$prevPageviews = count($prevRows);
$prevVisits = count(array_filter($prevRows, fn ($r) => !empty($r['e'])));

// Verlauf pro Tag (bei 12 Monaten pro Woche, damit die Balken lesbar bleiben)
$bucketDays = $days > 90 ? 7 : 1;
$buckets = [];
for ($t = $from; $t <= $today; $t = strtotime('+' . $bucketDays . ' days', $t)) {
    $buckets[$t] = ['pv' => 0, 'v' => 0];
}
$bucketKeys = array_keys($buckets);
foreach ($rows as $r) {
    $index = intdiv((int) floor(($r['t'] - $from) / 86400), $bucketDays);
    $key = $bucketKeys[min($index, count($bucketKeys) - 1)];
    $buckets[$key]['pv']++;
    $buckets[$key]['v'] += empty($r['e']) ? 0 : 1;
}

$hours = array_fill(0, 24, 0);
foreach ($rows as $r) {
    $hours[(int) date('G', $r['t'])]++;
}

$pages = count_by($rows, 'p');
$referrers = count_by($rows, 'r', true);
$devices = count_by($rows, 'd');
$browsers = count_by($rows, 'b');
$systems = count_by($rows, 'o');
$siteLang = count_by($rows, 'l');
$browserLang = count_by($rows, 'bl');
$downloads = count_by($downloadRows, 'p');
$downloadCount = count($downloadRows);
$downloadNames = [
    '/templates/bgzwn-NEO-CA.cer' => 'WLAN-Zertifikat bgzwn-NEO-CA',
    '/templates/wlan-zertifikat-anleitung.pdf' => 'WLAN-Zertifikat-Anleitung (PDF)',
    '/templates/bgz-vwa-word.docx' => 'VWA-Word-Vorlage',
    '/templates/faq-schuelerinnen-chip.pdf' => 'FAQ Schüler:innen-Chip (PDF)',
    '/templates/webuntis-selbstregistrierung-eltern.pdf' => 'WebUntis-Selbstregistrierung Eltern (PDF)',
    '/templates/Information-zum-Notebook-2026.pdf' => 'Information zum Notebook 2026 (PDF)',
    '/templates/Elternbrief-eduabo-2026-27.pdf' => 'Elternbrief edu.Abo 2026/27 (PDF)',
];

$langNames = ['de' => 'Deutsch', 'en' => 'Englisch', 'tr' => 'Türkisch', 'hr' => 'Kroatisch', 'sr' => 'Serbisch', 'bs' => 'Bosnisch', 'hu' => 'Ungarisch', 'pl' => 'Polnisch', 'ro' => 'Rumänisch', 'cs' => 'Tschechisch', 'sk' => 'Slowakisch', 'ar' => 'Arabisch', 'uk' => 'Ukrainisch', 'ru' => 'Russisch', 'fr' => 'Französisch', 'it' => 'Italienisch', 'es' => 'Spanisch'];

function table(string $title, array $counts, int $total, ?callable $label = null, int $limit = 10, string $empty = 'Noch keine Daten'): string
{
    $html = '<section class="card"><h2>' . h($title) . '</h2>';
    if ($total === 0 || $counts === []) {
        return $html . '<p class="empty">' . h($empty) . '</p></section>';
    }
    $html .= '<ul class="bars">';
    foreach (array_slice($counts, 0, $limit, true) as $key => $count) {
        $pct = $count / $total * 100;
        $text = $label ? $label((string) $key) : (string) $key;
        $html .= '<li><span class="fill" style="width:' . number_format($pct, 1, '.', '') . '%"></span>'
            . '<span class="label">' . $text . '</span>'
            . '<span class="num">' . number_format($count, 0, ',', '.') . ' <small>' . number_format($pct, 0) . ' %</small></span></li>';
    }
    return $html . '</ul></section>';
}

// Balkendiagramm als Inline-SVG
$maxPv = max(1, ...array_column($buckets, 'pv'));
$barCount = count($buckets);
$chartW = 760;
$chartH = 180;
$gap = $barCount > 60 ? 1 : 3;
$barW = ($chartW - $gap * ($barCount - 1)) / $barCount;
$svgBars = '';
$i = 0;
foreach ($buckets as $t => $b) {
    $x = $i * ($barW + $gap);
    $hPv = $b['pv'] / $maxPv * ($chartH - 20);
    $hV = $b['v'] / $maxPv * ($chartH - 20);
    $label = ($bucketDays > 1 ? '' : ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'][(int) date('w', $t)] . ', ') . date('d.m.', $t);
    $title = ($bucketDays > 1 ? 'Woche ab ' : '') . $label . ': ' . $b['pv'] . ' Aufrufe, ' . $b['v'] . ' Besuche';
    $svgBars .= sprintf(
        '<g><title>%s</title><rect class="pv" x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="2"/><rect class="v" x="%.1f" y="%.1f" width="%.1f" height="%.1f" rx="2"/></g>',
        h($title),
        $x, $chartH - $hPv, $barW, max($hPv, $b['pv'] > 0 ? 2 : 0),
        $x, $chartH - $hV, $barW, max($hV, $b['v'] > 0 ? 2 : 0)
    );
    $i++;
}
$firstLabel = date('d.m.Y', $from);
$lastLabel = date('d.m.Y', $today);

$maxHour = max(1, ...$hours);
?>
<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Zugriffsstatistik · InfoHub BG Zehnergasse</title>
<style>
  :root {
    --bg: #f5f7fb; --card: #fff; --text: #1a202c; --muted: #5a6a80; --border: #e2e8f0;
    --primary: #00796b; --primary-soft: rgba(0,121,107,.14); --accent: #004d40; --up: #2f855a; --down: #c53030;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0f172a; --card: #1e293b; --text: #e2e8f0; --muted: #94a3b8; --border: #334155;
      --primary: #4db6ac; --primary-soft: rgba(77,182,172,.2); --accent: #80cbc4; --up: #68d391; --down: #fc8181;
    }
  }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font: 15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  .wrap { max-width: 1100px; margin: 0 auto; padding: 24px 16px 48px; }
  header { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
  h1 { font-size: 22px; margin: 0; }
  h1 span { color: var(--muted); font-weight: 500; }
  nav { display: flex; gap: 4px; background: var(--card); border: 1px solid var(--border); border-radius: 10px; padding: 4px; }
  nav a { padding: 6px 12px; border-radius: 7px; color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 600; }
  nav a.active { background: var(--primary); color: #fff; }
  @media (prefers-color-scheme: dark) { nav a.active { color: #0f172a; } }
  .kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 12px; }
  .card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 18px; }
  .kpi .label { color: var(--muted); font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; }
  .kpi .value { font-size: clamp(24px, 6vw, 32px); font-weight: 700; margin: 4px 0 2px; font-variant-numeric: tabular-nums; }
  .trend { font-size: 12px; color: var(--muted); }
  .trend.up { color: var(--up); } .trend.down { color: var(--down); }
  h2 { font-size: 15px; margin: 0 0 12px; }
  .chart svg { width: 100%; height: auto; display: block; }
  .chart rect.pv { fill: var(--primary-soft); } .chart rect.v { fill: var(--primary); }
  .chart .axis { display: flex; justify-content: space-between; color: var(--muted); font-size: 12px; margin-top: 6px; }
  .legend { display: flex; gap: 16px; font-size: 13px; color: var(--muted); margin-bottom: 10px; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 6px; vertical-align: -1px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 12px; margin-top: 12px; }
  .bars { list-style: none; margin: 0; padding: 0; display: grid; gap: 6px; }
  .bars li { position: relative; display: flex; justify-content: space-between; gap: 12px; padding: 6px 10px; border-radius: 8px; overflow: hidden; font-size: 14px; }
  .bars .fill { position: absolute; inset: 0 auto 0 0; background: var(--primary-soft); border-radius: 8px; }
  .bars .label, .bars .num { position: relative; }
  .bars .label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .bars .label a { color: inherit; text-decoration: none; } .bars .label a:hover { text-decoration: underline; }
  .bars .num { font-variant-numeric: tabular-nums; font-weight: 600; white-space: nowrap; }
  .bars small { color: var(--muted); font-weight: 500; margin-left: 4px; }
  .hours { display: grid; grid-template-columns: repeat(24, 1fr); align-items: end; gap: 3px; height: 110px; }
  .hours div { background: var(--primary); border-radius: 3px 3px 0 0; min-height: 2px; opacity: .85; }
  .hours-axis { display: grid; grid-template-columns: repeat(24, 1fr); color: var(--muted); font-size: 10px; text-align: center; margin-top: 4px; }
  .empty { color: var(--muted); margin: 0; }
  footer { margin-top: 24px; color: var(--muted); font-size: 12px; text-align: center; }
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>Zugriffsstatistik <span>· InfoHub BG Zehnergasse</span></h1>
    <nav aria-label="Zeitraum">
      <?php foreach (RANGES as $value => $label): ?>
        <a href="?d=<?= $value ?>"<?= $value === $days ? ' class="active" aria-current="page"' : '' ?>><?= h($label) ?></a>
      <?php endforeach; ?>
    </nav>
  </header>

  <div class="kpis">
    <div class="card kpi">
      <div class="label">Seitenaufrufe</div>
      <div class="value"><?= number_format($pageviews, 0, ',', '.') ?></div>
      <?= trend($pageviews, $prevPageviews) ?>
    </div>
    <div class="card kpi">
      <div class="label">Besuche</div>
      <div class="value"><?= number_format($visits, 0, ',', '.') ?></div>
      <?= trend($visits, $prevVisits) ?>
    </div>
    <div class="card kpi">
      <div class="label">Seiten pro Besuch</div>
      <div class="value"><?= $visits > 0 ? number_format($pageviews / $visits, 1, ',', '.') : '–' ?></div>
      <span class="trend">Ø im Zeitraum</span>
    </div>
    <div class="card kpi">
      <div class="label">Downloads</div>
      <div class="value"><?= number_format($downloadCount, 0, ',', '.') ?></div>
      <?= trend($downloadCount, $prevDownloadCount) ?>
    </div>
    <div class="card kpi">
      <div class="label">Aufrufe pro Tag</div>
      <div class="value"><?= number_format($pageviews / $days, 1, ',', '.') ?></div>
      <span class="trend">Ø über <?= $days ?> Tage</span>
    </div>
  </div>

  <section class="card chart">
    <h2>Verlauf <?= $bucketDays > 1 ? '(pro Woche)' : '(pro Tag)' ?></h2>
    <div class="legend"><span><i style="background:var(--primary-soft)"></i>Seitenaufrufe</span><span><i style="background:var(--primary)"></i>Besuche</span></div>
    <svg viewBox="0 0 <?= $chartW ?> <?= $chartH ?>" role="img" aria-label="Seitenaufrufe und Besuche im Zeitverlauf"><?= $svgBars ?></svg>
    <div class="axis"><span><?= $firstLabel ?></span><span>max. <?= $maxPv ?> Aufrufe</span><span><?= $lastLabel ?></span></div>
  </section>

  <div class="grid">
    <?= table('Meistbesuchte Seiten', $pages, $pageviews, fn ($p) => '<a href="' . h($p === '/' ? '/' : $p . '/') . '" target="_blank" rel="noopener">' . h($p) . '</a>', 15) ?>
    <?= table('Downloads (Zertifikat, Anleitungen, Vorlagen)', $downloads, $downloadCount, fn ($p) => h($downloadNames[$p] ?? basename($p))) ?>
    <?= table('Herkunft (Besuche)', $referrers, $visits, fn ($r) => $r === '' ? 'Direkt / Lesezeichen / unbekannt' : h($r)) ?>
    <?= table('Geräte', $devices, $pageviews, fn ($d) => h($d)) ?>
    <?= table('Browser', $browsers, $pageviews, fn ($b) => h($b)) ?>
    <?= table('Betriebssystem', $systems, $pageviews, fn ($o) => h($o)) ?>
    <?= table('Sprache der Seite (DE / EN)', $siteLang, $pageviews, fn ($l) => $l === 'en' ? 'Englisch (/en/…)' : 'Deutsch') ?>
    <?= table('Browsersprache', $browserLang, $pageviews, fn ($l) => h($langNames[$l] ?? strtoupper($l))) ?>
    <section class="card">
      <h2>Uhrzeit der Aufrufe</h2>
      <?php if ($pageviews === 0): ?>
        <p class="empty">Noch keine Daten</p>
      <?php else: ?>
        <div class="hours">
          <?php foreach ($hours as $hour => $count): ?>
            <div style="height:<?= number_format($count / $maxHour * 100, 1, '.', '') ?>%" title="<?= $hour ?>–<?= $hour + 1 ?> Uhr: <?= $count ?> Aufrufe"></div>
          <?php endforeach; ?>
        </div>
        <div class="hours-axis"><?php for ($hour = 0; $hour < 24; $hour++): ?><span><?= $hour % 3 === 0 ? $hour : '' ?></span><?php endfor; ?></div>
      <?php endif; ?>
    </section>
  </div>

  <footer>
    Cookielos, ohne IP-Adressen und ohne Wiedererkennung von Personen. „Besuch“ = Einstieg von außen (Suchmaschine, Link, Lesezeichen).
    Daten werden nach <?= STATS_RETENTION_MONTHS ?> Monaten gelöscht.
    Speicherort: <?= stats_dir_is_outside_webroot() ? 'außerhalb des Webroots' : 'stats-data/ im Webroot (beim Hochladen nicht löschen!)' ?>. Stand: <?= date('d.m.Y, H:i') ?> Uhr
  </footer>
</div>
</body>
</html>
