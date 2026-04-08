# CLAUDE.md — Projektkontext & Learnings

## Projekt
**bgz-infohub** — Informationsportal fuer Eltern und Schueler des BG Zehnergasse (AHS), Wiener Neustadt.
Deployed als statische Site unter **infohub.bgzwn.at** via Plesk/Apache.
Ersetzt das alte Wiki unter wiki.bgzwn.at.

Maintainer: **Jakob Eichberger** (IT-Admin der Schule, admin@bgzwn.at)
Jakob betreibt auch **diplo.eichberger.tech** (DiploGuide fuer HTL WN) — Designentscheidungen sollen konsistent sein.

**Zielgruppe**: Eltern und Schueler mit wenig IT-Erfahrung. Texte muessen einfach, klar und schrittweise erklaert sein. Grosse Tap-Targets fuer mobile Nutzung.

## Tech Stack
- **Next.js 15** (App Router) mit `output: "export"` und `trailingSlash: true`
- **React 19**, **TypeScript**
- **Tailwind CSS 4** mit `@theme inline` Block in globals.css
- Fonts: Roboto (Headings), Ubuntu (Body) via Google Fonts `@import url(...)`
- Farben: Teal-Palette (#00796b light / #4db6ac dark), NICHT orange (wurde geaendert weil schlecht lesbar)
- Deployment: `npm run build` → `out/` Ordner → Plesk rsync/upload

## Dateistruktur
```
bgz-infohub/
├── app/
│   ├── layout.tsx              # Root Layout: Sidebar + main, Dark Mode Script im <head>
│   ├── globals.css             # @import, @theme inline, CSS-Variablen :root/.dark
│   ├── not-found.tsx           # Custom 404 mit Fuzzy-URL-Matching, bilingual
│   ├── infohub/                # 15 Deutsche Seiten
│   │   ├── page.tsx            # Homepage mit Karten + Kontakttabelle + Schnelllinks
│   │   ├── schulaccount/       # Login, Passwort, E-Mail-Einrichtung
│   │   ├── services/           # WebUntis, edu.Flow, edu.Pay, edu.Card, Drucken, PoDS
│   │   ├── geraete/            # iPad-Initiative, Kinderschutz, Geraeteverwaltung, Factory Reset
│   │   ├── wlan/               # WPA2/WPA3 Enterprise RADIUS fuer alle Plattformen
│   │   ├── office365/          # MS 365 A3, OneDrive 5TB, OneNote, Teams, Copilot
│   │   ├── educard/            # Physische edu.Card + digitale edu.digicard
│   │   ├── nextexam/           # Pruefungssoftware: Modi, Downloads, umfangreiche FAQ
│   │   ├── laptop/             # Oberstufe Notebook-Vorgaben, Kaufberatung, Arbeitsmittel-Pflicht
│   │   ├── mdm/                # InTune: nur iOS + Windows (KEIN Android!)
│   │   ├── tipp10/             # 10-Finger-Schreibtrainer
│   │   ├── bildungsportal/     # PoDS, ID Austria, Elternzugang
│   │   ├── vwa/                # VWA/ABA: Ablauf, Aufbau, Zitieren, LaTeX, Word, Bewertung
│   │   ├── lizenzen/           # Gratis Software (GitHub, JetBrains, Autodesk, Figma, etc.)
│   │   └── hilfe/              # FAQ, Kontakte, Support
│   └── en/infohub/             # 15 Englische Seiten (gleiche Struktur)
├── components/
│   ├── Sidebar.tsx             # Navigation, Logo, Sprachumschalter, Dark Mode Toggle
│   └── ui/
│       ├── PageHeader.tsx      # <h1> mit primary Farbe + border-bottom
│       ├── CardGrid.tsx        # Responsive Grid + Card (intern/extern/ohne Link)
│       ├── Section.tsx         # H2, H3, P, UL, OL, Table, InlineCode
│       ├── Callout.tsx         # Info/Success/Warning/Danger mit expliziten dark:-Klassen
│       └── StepList.tsx        # Nummerierte Steps mit vertikaler Verbindungslinie
├── public/
│   ├── .htaccess               # Apache: HTTPS, 404, Security Headers, Caching, Compression
│   ├── bgz-logo.png            # Schullogo 512x512 (auch in Sidebar)
│   ├── favicon.ico             # BGZ Logo als Favicon
│   ├── apple-touch-icon.png    # BGZ Logo fuer iOS
│   └── templates/
│       ├── bgz-vwa.zip         # LaTeX-Vorlage (bgzvwa.cls + main.tex + Kapitel)
│       ├── bgz-vwa-word.docx   # Word-Vorlage mit Logo, Styles, Auto-TOC
│       └── bgz-vwa/            # LaTeX-Quellen (entpackte Version)
├── scripts/
│   └── create_vwa_word_template.py  # Python-Script zur Regeneration der Word-Vorlage
├── next.config.ts              # output: "export", trailingSlash: true
├── package.json                # next 15, react 19, tailwindcss 4
└── CLAUDE.md                   # Diese Datei
```

## Architektur im Detail

### Routing & i18n
- `/infohub/*` — 15 Deutsche Seiten
- `/en/infohub/*` — 15 Englische Seiten (1:1 Kopien mit uebersetztem Inhalt)
- **Kein i18n-Framework** — rein URL-basiert, jede Seite ist eine eigene Datei
- Sidebar erkennt Sprache: `pathname.startsWith("/en/") || pathname === "/en"`
- Sprachumschalter-URL: `pathname.replace("/en/infohub", "/infohub")` bzw. `"/en" + pathname`
- **Achtung**: `/en` ohne trailing slash muss separat geprueft werden (war ein Bug)

### Layout-Struktur (app/layout.tsx)
```
<html lang="de" suppressHydrationWarning>
  <head> Dark-Mode-Script (verhindert Flash) </head>
  <body>
    Skip-to-content Link (Accessibility)
    <div flex>
      <Sidebar />           ← Fixiert links, 256px breit
      <main id="main" />    ← max-w-4xl, zentriert
    </div>
  </body>
</html>
```

### Sidebar (components/Sidebar.tsx)
- 15 DE + 15 EN Navigationseintraege mit Emoji-Icons
- Schullogo (40px Desktop, 24px Mobil) neben "BG Zehnergasse"
- Mobile: Hamburger-Menue mit Overlay, fixed header oben
- Desktop: Fixierte Sidebar links, sticky top-0
- Aktive Seite: `bg-nav-active-bg text-primary font-semibold`
- Footer: Sprachumschalter + Dark Mode Toggle + Link zu bgzwn.at

### Custom 404 (app/not-found.tsx)
- Bilingual (DE/EN basierend auf Pfad)
- **Fuzzy-URL-Matching**: Zerlegt die angeforderte URL in Keywords und schlaegt passende Seiten vor
- Zeigt max. 3 Vorschlaege als Karten an
- Wichtig: Verwendet `style={{}}` statt Tailwind-Klassen fuer Farben (historisch, funktioniert)

### UI-Komponenten Details

**Section.tsx** — Die wichtigste Komponente:
- `H2`: text-xl bold, primary Farbe, border-bottom, mt-10 mb-4
- `H3`: text-lg semibold, text-txt, mt-6 mb-3
- `P`: text-txt, leading-relaxed, mb-4
- `UL`/`OL`: list-disc/decimal, list-inside, space-y-1.5
- `Table`: **Akzeptiert NUR `string[][]`** — kein JSX in Zellen! TypeScript-Error sonst.
- `InlineCode`: bg-code-bg, font-mono, px-1.5 py-0.5 rounded

**Callout.tsx** — 4 Varianten mit expliziten Dark-Mode-Farben:
- `info`: teal-50/teal-900, Icon ℹ️
- `success`: green-50/green-900, Icon ✅
- `warning`: amber-50/amber-900, Icon ⚠️
- `danger`: red-50/red-900, Icon 🚫
- **WICHTIG**: Jede Variante hat eigene `dark:text-*` Klassen. Nicht einfach `text-txt` verwenden — war ein Bug (dark mode unlesbar).

**CardGrid.tsx** — Card-Komponente ist intelligent:
- `href` beginnt mit `/` → `<Link>` (interne Navigation)
- `href` ist extern → `<a target="_blank">`
- Kein `href` → `<div>` (nicht klickbar)

**StepList.tsx** — Client Component (`"use client"` wegen `Children.map`):
- Nummerierte Kreise (bg-primary, weisse Zahl)
- Vertikale Verbindungslinie zwischen Steps
- Step-Content erbt `[&_a]:text-primary [&_a]:underline` fuer Links in Steps

### CSS-Architektur (globals.css)

**Reihenfolge (WICHTIG)**:
1. `@import url(Google Fonts)` — MUSS zuerst stehen
2. `@import "tailwindcss"`
3. `@theme inline { }` — Mappt CSS-Variablen auf Tailwind-Farben
4. `:root { }` — Light Mode Variablen
5. `.dark { }` — Dark Mode Variablen
6. Globale Styles (body, headings, focus, scrollbar)

**Tailwind Theme Mapping** (Kurzreferenz):
| CSS-Variable | Tailwind-Klasse | Beispiel |
|---|---|---|
| `--text` | `text-txt` | `text-txt`, `bg-txt` |
| `--text-light` | `text-txt-light` | `text-txt-light` |
| `--primary` | `text-primary` | `text-primary`, `bg-primary`, `border-primary` |
| `--border` | `border-border-app` | `border-border-app` (NICHT `border-border`!) |
| `--card` | `bg-card` | `bg-card` |
| `--hover-bg` | `bg-hover-bg` | `hover:bg-hover-bg` |
| `--nav-bg` | `bg-nav-bg` | `bg-nav-bg` |
| `--nav-border` | `border-nav-border` | `border-nav-border` |
| `--nav-active-bg` | `bg-nav-active-bg` | `bg-nav-active-bg` |
| `--code-bg` | `bg-code-bg` | `bg-code-bg` |

## Wichtige Learnings & Fallstricke

### Tailwind CSS 4 — KEINE `[var(--xxx)]` Syntax verwenden!
Tailwind 4 hat Probleme mit `text-[var(--text)]` — Next.js splittet JS-Chunks und die Klasse wird mittendrin zerteilt, was CSS-Parsing-Warnings erzeugt. **Loesung**: `@theme inline` Block + native Klassen.

**Reservierte Namen vermeiden**: `--color-border` kollidiert mit Tailwinds `border`-Utility → stattdessen `--color-border-app`. Ebenso `--color-txt` statt `--color-text`.

### Static Export Gotchas
- `trailingSlash: true` ist **PFLICHT** fuer Plesk/Apache, sonst 403 auf `/infohub/` (Next.js generiert `infohub.html` statt `infohub/index.html`)
- `.htaccess` liegt in `public/` und wird nach `out/` kopiert
- `next/image` im Static Export: Funktioniert, aber Bilder werden nicht optimiert. `width`/`height` Props trotzdem setzen fuer Layout Shift Prevention
- `output: "export"` erzeugt 35 Seiten (15 DE + 15 EN + homepage DE/EN + 404 + root redirects)

### Dark Mode Implementation
- **Kein Flash**: Script im `<head>` liest `localStorage` und setzt `.dark` Klasse BEVOR React hydratiert
- `suppressHydrationWarning` auf `<html>` noetig wegen Hydration Mismatch (Server: kein dark, Client: evtl. dark)
- ThemeToggle ist Client Component mit `useEffect` fuer initialen State
- Callout-Varianten haben **explizite** `dark:text-teal-100` etc. — nicht auf CSS-Variablen-Vererbung verlassen!

### Neue Seite hinzufuegen (Checkliste)
1. Deutsche Seite: `app/infohub/NEUERSLUG/page.tsx`
2. Englische Seite: `app/en/infohub/NEUERSLUG/page.tsx`
3. Navigation DE: `navItemsDE` Array in `components/Sidebar.tsx`
4. Navigation EN: `navItemsEN` Array in `components/Sidebar.tsx`
5. 404-Vorschlaege: `allPages` Array in `app/not-found.tsx`
6. Homepage-Karte: Karten-Array in `app/infohub/page.tsx` und `app/en/infohub/page.tsx`
7. `npm run build` — pruefen ob alle 35+ Seiten generiert werden

### Rechtsquellen-Format (konsistent mit diplo.eichberger.tech)
```tsx
<H2>Rechtsquellen</H2>
<UL>
  <li>
    § <a href="https://www.ris.bka.gv.at/..." target="_blank" rel="noopener noreferrer"
         className="text-primary hover:underline">
      SchUG, BGBl. Nr. 472/1986 i.d.g.F.
    </a>{" "}
    — § 43 (Kurzbeschreibung in Klammern)
  </li>
</UL>
```
- Titel: **"Rechtsquellen"** (DE) / **"Legal Sources"** (EN) — NICHT "Rechtsgrundlagen"
- § Praefix vor jedem Eintrag
- BGBl-Nummer als Teil des Gesetzesnamens, Format: `Gesetz, BGBl. [I/II] Nr. X/YYYY i.d.g.F.`
- Kurze Klammer-Beschreibung nach Dash, kein Prosa
- RIS-Links beibehalten (ris.bka.gv.at)
- EN-Seiten verwenden deutsche Gesetzesnamen/BGBl-Nummern (oesterreichisches Recht)

### Haeufig referenzierte Gesetze mit RIS-Links
- **SchUG** (Schulunterrichtsgesetz), BGBl. Nr. 472/1986
  - §14a: Digitale Endgeraete → `ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=14a`
  - §43: Mitwirkungspflicht/Arbeitsmittel → `...&Paragraf=43`
  - §45: Fernbleiben/Abmeldung → `...&Paragraf=45`
  - §57b: edu.digicard → `...&Paragraf=57b`
- **IKT-Schulverordnung**, BGBl. II Nr. 382/2021 → `ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011647`
  - §5: Authentifizierung
  - §10: Geraeteverwaltung
- **SchulDigiG**, BGBl. I Nr. 9/2021 → `ris.bka.gv.at/eli/bgbl/i/2021/9`
  - §5: Eigenanteil Geraeteinitiative
- **BilDokG 2020**, BGBl. I Nr. 20/2021 → `ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011451`
  - §4: Verantwortlichkeit Bildungsdaten
- **DSG**, BGBl. I Nr. 165/1999 → `ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597`
- **Pruefungsordnung AHS**, BGBl. II Nr. 297/2024: VWA/ABA
- **BGBl. I Nr. 121/2024**: VWA wird freiwillig ab 2024/25

### Inhaltliche Entscheidungen (vom Maintainer getroffen)
- **Android aus MDM entfernt** — Schule unterstuetzt nur iOS + Windows
- **Google Workspace + Adobe aus Lizenzen entfernt** — nur Software die Schueler SELBST beantragen koennen (Schul-E-Mail reicht)
- **Nur EPS-Ueberweisung** bei edu.Pay — Kreditkarten/Maestro wurden wegen hoher Gebuehren eingestellt
- **MacBook Windows-Pflicht gelockert**: "Es kann sein dass" statt "Sie muessen"
- **Notebook = Arbeitsmittel**: §43 SchUG Hinweis auf Laptop-Seite (Pflicht zur Instandhaltung)
- **PoDS Elternzugang existiert**: Via bildung.gv.at mit ID Austria (nicht mehr "nicht verfuegbar")
- **Farbe**: Teal (#00796b), NICHT orange — orange war schlecht lesbar, Teal passt zu bgzwn.at

### Externe Links — Bekannte Probleme
- `pods.gv.at/hilfe/` gibt 404 → Wurde zu `bildung.gv.at` geaendert
- `befreiung.digitaleslernen.gv.at` nicht erreichbar → Geaendert zu `digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung`
- `bmbwf.gv.at` URLs aendern sich regelmaessig — bei Updates pruefen

### Schule-spezifische Infos
- Schulcode: **304046**
- Adresse: Zehnergasse 15, 2700 Wiener Neustadt
- Schulkonto-Format: `nachname.vorname@bgzwn.at`
- WLAN: WPA2/WPA3 Enterprise, RADIUS, Username **ohne** @bgzwn.at, Kontosperrung nach 10 Fehlversuchen (10 Min)
- MDM: Microsoft InTune, nur iOS + Windows (KEIN Android)
- edu.Card: Quarto Software (edusuite.at), Schulcode 304046
- Geraeteinitiative: Apple iPads via OeAD/ACP TechRent (Ernst Krenek Gasse 4, 1230 Wien, +43 1 813 0000)
- MS-ACH Vertrag: Microsoft 365 A3 Education, laeuft bis mind. 31.05.2027, 25 Schueler pro Lehrkraft-Lizenz
- Next-Exam Version: 1.1.3 (19. Maerz 2026), GPLv3, von Mag. Thomas Michael Weissel
- Drucksystem: SafeQ by Y-Soft, FollowMe Printing, E-Mail-Druck an printme@bgzwn.at
- Kontakte:
  - admin@bgzwn.at — IT-Administration (allgemein)
  - bnb@bgzwn.at — WebUntis-Probleme
  - kanzlei@bgzwn.at — Verwaltung/Rueckerstattungen
  - Klassenvorstaende — Datenänderungen (Adresse, Telefon, Name)
  - ACP TechRent (sales@acptechrent.at) — iPad Hardware-Support
  - OeAD Hotline: +43 720 080 356 — Geraeteinitiative
  - support@bildung.gv.at — Next-Exam Probleme
  - support-aba@aba.bildung.gv.at / +43 664 851 3000 — VWA/ABA Portal

### Homepage-Struktur (app/infohub/page.tsx)
- PageHeader
- Willkommenstext
- **14 Themenkarten** (muessen mit Sidebar-Navigation uebereinstimmen!)
- H2 "Wichtige Kontakte" mit Kontakttabelle (8 Eintraege)
- H2 "Schnelllinks" mit externen Links (WebUntis, edu.Suite, bildung.gv.at, etc.)

### VWA/ABA Templates
- **LaTeX** (`bgz-vwa.zip`): bgzvwa.cls Dokumentklasse, APA-Zitierstil via biblatex, pdflatex+biber Build Chain, BGZ-Logo auf Titelseite
- **Word** (`bgz-vwa-word.docx`): Calibri 12pt, 1.5x Zeilenabstand, 3 Sektionen (Titelseite ohne Seitenzahlen, Vorspann roemisch, Hauptteil arabisch), Heading-Styles in Teal, rote Platzhalter-Texte, automatisches Inhaltsverzeichnis, BGZ-Logo auf Titelseite
- **Regeneration**: `python3 scripts/create_vwa_word_template.py` (benoetigt python-docx)

### Build & Deployment
```bash
npm run build                          # Production build → out/ (35 Seiten)
npm run dev                            # Dev server auf Port 3001 (nicht 3000!)
rm -rf .next && npm run build          # Clean build bei CSS-Cache-Problemen
```
- Dev Server laeuft auf **Port 3001** (Port 3000 ist durch anderes Projekt belegt)
- Bei CSS-Warnings nach Aenderungen: `.next/` loeschen und neu bauen
- `out/` Ordner nach Plesk hochladen (rsync oder manuell)
- `.htaccess` sorgt fuer: HTTPS-Redirect, 404-Handling, Security Headers (X-Frame-Options, CSP), Asset-Caching (1 Jahr fuer _next/static, 1 Monat fuer Bilder), Gzip-Compression, Directory Listing deaktiviert

### WCAG 2.1 AA Accessibility
- Skip-to-content Link (`<a href="#main">Zum Inhalt springen</a>`)
- `lang="de"` auf `<html>` (aendert sich NICHT bei EN-Seiten — bekannte Limitation)
- Focus-visible Styles: 2px solid primary, outline-offset 2px
- Min Touch Targets: 44x44px (`min-w-[44px] min-h-[44px]`)
- Alle Bilder haben alt-Texte
- Farbkontraste wurden ueberprueft (Teal auf Weiss: 5.3:1 Ratio)

## Stil-Konventionen
- Ueberschriften: `<H2>` und `<H3>` aus Section.tsx, NICHT `<h2>` direkt
- Links in Fliesstext: `className="text-primary hover:underline"`
- Externe Links: immer `target="_blank" rel="noopener noreferrer"`
- Interne Links: `<Link href="/infohub/...">` (Next.js Link Komponente)
- Kommentare zwischen Sektionen: `{/* ═══ Sektionsname ═══ */}`
- Keine Emojis in Texten ausser in Card-Icons (🏠📱🔑 etc.) und Tabellen-Farbcodes
- Callout-Typen: info (teal), success (green), warning (amber), danger (red)
- Karten-Links am Seitenende: Grid 1-2 Spalten, runder Punkt + Label + Beschreibung
- `<code>` fuer Benutzernamen/Befehle, `<strong>` fuer Betonung, `<InlineCode>` fuer technische Terme
- Metadata: Jede Seite hat `export const metadata: Metadata = { title, description }`
- Seiten-Titel via `<PageHeader title="..." />` (NICHT `<h1>` direkt)
