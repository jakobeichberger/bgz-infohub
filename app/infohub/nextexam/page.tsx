import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Next-Exam — Digitale Prüfungsumgebung",
  description:
    "Next-Exam: kostenlose digitale Prüfungsumgebung für Schulen. Downloads, Anleitungen und Informationen für Schüler und Lehrkräfte am BG Zehnergasse.",
};

export default function NextExamPage() {
  return (
    <>
      <PageHeader title="Next-Exam — Digitale Prüfungsumgebung" />

      <P>
        Next-Exam ist eine kostenlose, quelloffene (Open Source) digitale
        Prüfungsumgebung, die vom Bildungsministerium (BMBWF) für alle
        österreichischen Schulen empfohlen wird. Sie ermöglicht sichere
        digitale Prüfungen auf Laptops und Tablets — ohne komplexe
        IT-Infrastruktur.
      </P>

      <Callout type="info" title="Was ist Next-Exam?">
        Next-Exam ersetzt keine Lernplattformen, sondern bietet den
        organisatorischen Rahmen für faire digitale Prüfungen: Datenschutz,
        Schutz vor Schummeln und Schutz vor Datenverlust.
      </Callout>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Lizenz", "GPLv3 — kostenlos und quelloffen"],
          ["Betriebssysteme", "Windows, macOS (Intel + ARM), Linux"],
          ["Mobil", "iOS / Android App geplant für 2027"],
          ["BYOD", "Funktioniert mit eigenen Geräten der Schüler"],
          ["Netzwerk", "Schulnetzwerk (WLAN) ausreichend — kein Internet nötig"],
          ["Datenschutz", "Sammelt keine Benutzerdaten"],
          ["Entwickler", "Mag. Thomas Michael Weissel"],
          ["Quellcode", "github.com/Bildungsportal/next-exam"],
        ]}
      />

      {/* ═══ Prüfungsmodi ═══ */}
      <H2>Prüfungsmodi</H2>

      <P>Next-Exam unterstützt 7 verschiedene Prüfungsmodi:</P>

      <Table
        headers={["Modus", "Beschreibung"]}
        rows={[
          ["Mathematik", "GeoGebra-Integration für mathematische Aufgaben"],
          ["Sprachen", "Texteditor mit Rechtschreibprüfung (DE, EN, FR, ES, IT)"],
          ["Eduvidual / Moodle", "Zugang zu Moodle-Tests"],
          ["Google Forms", "Schüler füllen vorgegebene Formulare aus"],
          ["Microsoft 365", "Bearbeitung von Excel- oder Word-Dokumenten"],
          ["Website", "Lehrkraft gibt bestimmte URLs frei"],
          ["RDP", "Remote-Desktop-Zugriff über Microsoft RD Web Client"],
        ]}
      />

      {/* ═══ So funktioniert es ═══ */}
      <H2>So funktioniert eine Prüfung</H2>

      <H3>Für Schülerinnen und Schüler</H3>

      <StepList>
        <Step title="Next-Exam Student herunterladen">
          Laden Sie die passende Version für Ihr Betriebssystem aus dem
          Download-Bereich unten herunter. Keine Installation nötig — einfach
          die Datei aus einem Ordner (Desktop oder Downloads) starten.
        </Step>
        <Step title="Mit Schul-WLAN verbinden">
          Verbinden Sie sich mit dem Schüler-WLAN der Schule.
        </Step>
        <Step title="Serveradresse und PIN eingeben">
          Die Lehrkraft zeigt Serveradresse und PIN an (z.B. an der Tafel).
          Geben Sie beides in der App ein.
        </Step>
        <Step title="Prüfung ablegen">
          Die Arbeit wird automatisch alle 6 Minuten auf dem Lehrer-Computer
          gesichert. Nach Abschluss gibt die Lehrkraft die Geräte frei.
        </Step>
      </StepList>

      <Callout type="warning" title="Hinweis für Mac-Benutzer">
        Auf macOS muss Next-Exam die Berechtigung für Bildschirmaufnahme
        erhalten: <strong>Einstellungen → Datenschutz &amp; Sicherheit →
        Bildschirm- und Systemaudioaufnahme</strong>. Ohne diese Berechtigung
        bleibt der Bildschirm schwarz.
      </Callout>

      <H3>Für Lehrkräfte</H3>

      <StepList>
        <Step title="Next-Exam Teacher herunterladen und starten">
          Die Teacher-App aus dem Download-Bereich unten laden. Prüfungsname
          eingeben und optional einen Speicherort wählen.
        </Step>
        <Step title="Prüfung konfigurieren">
          Prüfungsmodus wählen (Mathematik, Sprachen, Moodle etc.) und
          optionale Einstellungen wie Sprachprüfungs-Tools festlegen.
        </Step>
        <Step title="Schülern Zugang geben">
          Serveradresse und PIN werden angezeigt — teilen Sie diese mit der
          Klasse. Schüler verbinden sich mit der Student-App.
        </Step>
        <Step title="Prüfung beenden">
          &quot;Geräte freigeben&quot; klicken → Abgaben werden eingesammelt.
          Mit &quot;Letzte Abgaben zusammenfassen&quot; können alle Arbeiten als
          PDF zusammengefasst werden.
        </Step>
      </StepList>

      {/* ═══ Sicherheit ═══ */}
      <H2>Sicherheitsmaßnahmen</H2>

      <UL>
        <li>Screenshot-Überwachung der Schülergeräte</li>
        <li>Blockierung von Websites und Anwendungen während der Prüfung</li>
        <li>Multiscreen-Sperre</li>
        <li>Optionaler passwortgeschützter Offline-Modus</li>
        <li>Automatische Sicherung alle 6 Minuten</li>
        <li>Keine Datensammlung durch Next-Exam selbst</li>
      </UL>

      <Callout type="success" title="Datenschutz">
        Next-Exam sammelt <strong>keine Benutzerdaten</strong>. Screenshots
        werden nur bei versuchtem Verlassen der Prüfungsumgebung gespeichert.
        Tracking-Skripte in externen Modulen sind deaktiviert.
      </Callout>

      {/* ═══ Schnellhilfe & FAQ ═══ */}
      <H2>Schnellhilfe &amp; häufige Probleme</H2>

      <H3>Falsche Version gestartet (Student vs. Teacher)</H3>
      <P>
        Ein häufiger Fehler: Schüler starten versehentlich die
        <strong> Teacher-App</strong> statt der <strong>Student-App</strong>.
        So erkennen Sie den Unterschied:
      </P>
      <Table
        headers={["Merkmal", "Student-App", "Teacher-App"]}
        rows={[
          ["Dateiname enthält", "\"Student\"", "\"Teacher\""],
          ["Dateigröße (Windows EXE)", "~309 MB", "~122 MB"],
          ["Startbildschirm zeigt", "Feld für Serveradresse + PIN", "Feld für Prüfungsname + Speicherort"],
          ["Funktion", "Verbindet sich mit Lehrkraft", "Erstellt Prüfungsserver"],
        ]}
      />
      <Callout type="warning" title="Tipp">
        Benennen Sie die Datei nach dem Download um, z.B.{" "}
        <strong>&quot;Next-Exam-SCHUELER.exe&quot;</strong>, damit die richtige
        Version sofort erkennbar ist.
      </Callout>

      <H3>App startet nicht / weißer Bildschirm</H3>
      <UL>
        <li>Starten Sie die App <strong>aus einem Ordner</strong> (Desktop oder Downloads) — nicht direkt aus dem Browser-Download</li>
        <li>Auf <strong>Windows</strong>: Rechtsklick → &quot;Als Administrator ausführen&quot;</li>
        <li>Auf <strong>macOS</strong>: Rechtsklick → &quot;Öffnen&quot; (nicht Doppelklick, um Gatekeeper-Warnung zu umgehen)</li>
        <li>Auf <strong>Linux</strong>: AppImage muss ausführbar sein: <code>chmod +x Next-Exam-Student*.AppImage</code></li>
      </UL>

      <H3>Verbindung zum Lehrer-Server schlägt fehl</H3>
      <UL>
        <li>Sind Sie im <strong>richtigen WLAN</strong>? (Schüler-WLAN, nicht Gast-WLAN)</li>
        <li>Stimmen <strong>Serveradresse und PIN</strong> exakt? (Groß-/Kleinschreibung beachten)</li>
        <li>Ist die <strong>Firewall</strong> aktiv? Port 22422 (TCP) und 6024/6025 (UDP) müssen erlaubt sein</li>
        <li>Neustart der App und erneut verbinden</li>
      </UL>

      <H3>macOS: Schwarzer Bildschirm</H3>
      <P>
        Next-Exam benötigt auf macOS die Berechtigung für Bildschirmaufnahme.
        Gehen Sie zu: <strong>Einstellungen → Datenschutz &amp; Sicherheit →
        Bildschirm- und Systemaudioaufnahme</strong> → Next-Exam aktivieren →
        App neu starten.
      </P>

      <H3>Arbeit geht verloren / Datei nicht gespeichert</H3>
      <UL>
        <li>Next-Exam speichert automatisch alle <strong>6 Minuten</strong></li>
        <li>Zusätzlich: Regelmäßig <strong>Strg+S</strong> (Windows) oder <strong>Cmd+S</strong> (Mac) drücken</li>
        <li>Die Lehrkraft kann die letzte Sicherung im lokalen Arbeitsordner wiederherstellen</li>
      </UL>

      <H3>Windows-Sicherheitswarnung beim Start</H3>
      <P>
        Windows zeigt bei unbekannten Anwendungen eine SmartScreen-Warnung.
        Das ist normal. Klicken Sie auf <strong>&quot;Weitere Informationen&quot;</strong> →
        <strong>&quot;Trotzdem ausführen&quot;</strong>.
      </P>

      <H3>Download wird von Edge blockiert</H3>
      <P>
        Microsoft Edge blockiert manchmal den Download. Verwenden Sie
        <strong> Firefox</strong> oder <strong>Chrome</strong> zum
        Herunterladen.
      </P>

      {/* ═══ Downloads ═══ */}
      <H2>Downloads — Aktuelle Version: 1.1.3</H2>

      <P>
        Veröffentlicht am 19. März 2026. Alle Downloads von{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          GitHub (Bildungsportal/next-exam)
        </a>
        .
      </P>

      <H3>Schüler-App (Student)</H3>

      <Table
        headers={["Betriebssystem", "Format", "Download"]}
        rows={[
          [
            "Windows",
            "EXE (portable)",
            "Next-Exam-Student_1.1.3 (309 MB)",
          ],
          [
            "Windows",
            "MSI (Installer)",
            "Next-Exam-Student_1.1.3 (352 MB)",
          ],
          [
            "macOS (Apple Silicon)",
            "DMG",
            "Next-Exam-Student_1.1.3 (428 MB)",
          ],
          [
            "macOS (Intel)",
            "DMG",
            "Next-Exam-Student_1.1.3 (433 MB)",
          ],
          [
            "Linux",
            "AppImage",
            "Next-Exam-Student_1.1.3 (428 MB)",
          ],
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_x64.exe",
            label: "Windows (EXE)",
            desc: "Student — portable, keine Installation",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Student — für M1/M2/M3/M4 Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_x64.dmg",
            label: "macOS (Intel)",
            desc: "Student — für ältere Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Student — Ubuntu, Fedora etc.",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <H3>Lehrer-App (Teacher)</H3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_x64.exe",
            label: "Windows (EXE)",
            desc: "Teacher — portable, keine Installation",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Teacher — für M1/M2/M3/M4 Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_x64.dmg",
            label: "macOS (Intel)",
            desc: "Teacher — für ältere Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Teacher — Ubuntu, Fedora etc.",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="warning" title="Download-Hinweis">
        Microsoft Edge blockiert manchmal den Download — verwenden Sie Firefox
        oder Chrome. Windows-Sicherheitswarnungen bei unbekannten Anwendungen
        sind normal und können bestätigt werden.
      </Callout>

      {/* ═══ Changelog ═══ */}
      <H2>Versionshistorie</H2>

      <H3>Version 1.1.3 — 19. März 2026</H3>
      <P>Patch Release mit Fehlerbehebungen und Stabilitätsverbesserungen.</P>

      <H3>Version 1.1.2 — 11. März 2026</H3>
      <P>Patch Release mit Fehlerbehebungen.</P>

      <H3>Version 1.1.1 — 27. Jänner 2026</H3>
      <P>Patch Release mit Fehlerbehebungen.</P>

      <H3>Version 1.1.0 — 12. Dezember 2025</H3>
      <P>
        Großes Feature-Release mit neuen Prüfungsmodi und Verbesserungen der
        Benutzeroberfläche.
      </P>

      <P>
        Vollständige Release-Notes auf{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </P>

      {/* ═══ Rollout-Plan ═══ */}
      <H2>Rollout-Zeitplan des BMBWF</H2>

      <Table
        headers={["Zeitraum", "Meilenstein"]}
        rows={[
          ["Jetzt", "Für alle Schulen verfügbar"],
          ["2025–2026", "Schulungsplanung und Portal-Integration"],
          ["2027–2028", "Qualifizierung für Schulen verpflichtend; iOS/Android Client"],
          ["2029–2031", "Pilotprogramm für reguläre Schularbeiten und Matura 2031"],
          ["2032", "Vollständiger Einsatz an qualifizierten Schulen"],
        ]}
      />

      {/* ═══ Links ═══ */}
      <H2>Weiterführende Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases",
            label: "GitHub Releases",
            desc: "Alle Versionen und Downloads",
          },
          {
            href: "https://life-edu.eu/next-exam/",
            label: "Next-Exam Projektseite",
            desc: "Dokumentation und FAQ",
          },
          {
            href: "https://www.bildung.gv.at/filter/faq/page.php?lang=de&p=212&t",
            label: "Bildungsportal — Next-Exam",
            desc: "Offizielle Infoseite des BMBWF",
          },
          {
            href: "https://www.bmb.gv.at/Themen/schule/zrp/dibi/dip.html",
            label: "BMBWF Rollout-Plan",
            desc: "Strategie und Zeitplan",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="info" title="Support">
        Bei technischen Problemen mit Next-Exam:{" "}
        <a
          href="mailto:support@bildung.gv.at"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          support@bildung.gv.at
        </a>
      </Callout>
    </>
  );
}
