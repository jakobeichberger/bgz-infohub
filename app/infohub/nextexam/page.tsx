import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";
import { LinkCards } from "@/components/ui/LinkCards";

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
        Prüfungsumgebung, die vom Bildungsministerium (BMB) für alle
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
          ["iPad", "Student-Version für iPad (iOS) seit Version 2.1"],
          ["BYOD", "Funktioniert mit eigenen Geräten der Schüler"],
          ["Netzwerk", "Schulnetzwerk (WLAN) ausreichend — Internet nur für Online-Modi (z. B. Microsoft 365, Moodle)"],
          ["Datenschutz", "Sammelt keine Benutzerdaten"],
          ["Entwickler", "Mag. Thomas Michael Weissel"],
          ["Quellcode", "github.com/Bildungsportal/next-exam"],
        ]}
      />

      {/* ═══ Prüfungsmodi ═══ */}
      <H2>Prüfungsmodi</H2>

      <P>Next-Exam unterstützt 9 verschiedene Prüfungsmodi:</P>

      <Table
        headers={["Modus", "Beschreibung"]}
        rows={[
          ["Mathematik", "GeoGebra-Integration für mathematische Aufgaben (inkl. 3D und Tabellenkalkulation)"],
          ["Sprachen", "Texteditor mit Rechtschreibprüfung (DE, EN, FR, ES, IT)"],
          ["Eduvidual / Moodle", "Zugang zu Moodle-Tests"],
          ["Formulare", "Schüler füllen vorgegebene Google- oder Microsoft-Formulare aus"],
          ["Microsoft 365", "Bearbeitung von Excel- oder Word-Dokumenten"],
          ["Website", "Lehrkraft gibt bestimmte URLs frei"],
          ["RDP", "Remote-Desktop-Zugriff über Microsoft RD Web Client"],
          ["ActiveSheets (neu in 2.x)", "PDF-Arbeitsblatt am Gerät ausfüllen, Korrektur digital durch die Lehrkraft"],
          ["Lokale VM (neu in 2.x)", "Windows-11-Maschine für Spezialsoftware (z. B. Programmierung, CAD)"],
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
        <li>
          <strong>macOS &amp; iPad:</strong> Apple Assessment Mode — das System
          selbst sperrt App-Wechsel und Tastenkombinationen (seit 2.1)
        </li>
        <li>
          <strong>Windows:</strong> optionaler Kiosk-Modus mit temporärem
          Benutzerkonto; <strong>Linux:</strong> Cage-Modus für Reifeprüfungen
        </li>
        <li>
          Kann anstelle des Safe Exam Browser (SEB) verwendet werden, z. B. bei
          eduvidual-/Moodle-Tests
        </li>
        <li>Verschlüsselte Prüfungsdateien und digital signierte Abgabe-PDFs</li>
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
          ["Dateigröße (Windows EXE)", "~342 MB", "~127 MB"],
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
        <li>Auf <strong>macOS</strong>: Wird die App beim ersten Start blockiert → Systemeinstellungen → Datenschutz &amp; Sicherheit → &quot;Trotzdem öffnen&quot;</li>
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
        Seit Version 2.1 sind die Windows-Versionen digital signiert. Zeigt
        Windows trotzdem eine SmartScreen-Warnung, klicken Sie auf{" "}
        <strong>&quot;Weitere Informationen&quot;</strong> →{" "}
        <strong>&quot;Trotzdem ausführen&quot;</strong>.
      </P>

      <H3>Download wird von Edge blockiert</H3>
      <P>
        Microsoft Edge blockiert manchmal den Download. Verwenden Sie
        <strong> Firefox</strong> oder <strong>Chrome</strong> zum
        Herunterladen.
      </P>

      <H3>Kann ich während der Prüfung drucken?</H3>
      <P>
        Nein. Während einer Next-Exam-Prüfung ist der Druckerzugriff
        blockiert. Falls die Lehrkraft einen Ausdruck wünscht, erfolgt
        dieser nach Beendigung der Prüfung über den Teacher-Computer.
      </P>

      <H3>Kann ich die Schriftgröße ändern?</H3>
      <P>
        Ja. Im Sprach-Modus kann die Schriftgröße über das Menü angepasst
        werden. In anderen Modi (z.B. Microsoft 365) gelten die Einstellungen
        der jeweiligen Anwendung.
      </P>

      <H3>Muss Next-Exam installiert werden?</H3>
      <P>
        Nein. Die Windows-EXE und die Linux-AppImage sind{" "}
        <strong>portabel</strong> und können direkt aus einem Ordner
        gestartet werden. Nur die MSI-Variante (Windows) führt eine
        klassische Installation durch. Auf macOS wird die App wie üblich
        aus dem DMG in den Programme-Ordner gezogen.
      </P>

      <H3>Funktioniert Next-Exam ohne Internet?</H3>
      <P>
        Ja — für die Modi Mathematik und Sprachen ist{" "}
        <strong>kein Internet erforderlich</strong>. Es genügt ein lokales
        Schulnetzwerk (WLAN), damit sich Schüler- und Lehrer-App
        verbinden können. Die Online-Modi Microsoft 365, Moodle, Formulare
        (Google/Microsoft Forms) und Website benötigen Internetzugang.
      </P>

      <H3>Wird mein Bildschirm aufgezeichnet?</H3>
      <P>
        Nicht durchgehend. Die Lehrkraft kann{" "}
        <strong>Live-Screenshots</strong> der Schülergeräte anfertigen.
        Automatische Screenshots werden nur erstellt, wenn ein Schüler
        versucht, die Prüfungsumgebung zu verlassen. Es findet kein
        Video-Streaming oder dauerhaftes Monitoring statt.
      </P>

      <H3>Was passiert bei einem Absturz / Stromausfall?</H3>
      <P>
        Next-Exam speichert automatisch alle <strong>6 Minuten</strong>{" "}
        auf dem Teacher-Computer. Bei einem Absturz kann die letzte
        Sicherung wiederhergestellt werden. Zusätzlich ist regelmäßiges
        Speichern mit Strg+S / Cmd+S empfohlen.
      </P>

      <H3>Kann ich Copy &amp; Paste verwenden?</H3>
      <P>
        Innerhalb der Prüfungsumgebung funktioniert Copy &amp; Paste
        normal. Das Einfügen von extern kopierten Inhalten ist jedoch
        blockiert, da die Zwischenablage beim Start der Prüfung
        geleert wird.
      </P>

      {/* ═══ Downloads ═══ */}
      <H2>Downloads — Aktuelle Version: 2.1.0.3</H2>

      <P>
        Veröffentlicht am 22. September 2026. Alle Downloads von{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub (Bildungsportal/next-exam)
        </a>
        .
      </P>

      <H3>Schüler-App (Student)</H3>

      <Table
        headers={["Betriebssystem", "Format", "Download"]}
        rows={[
          ["Windows", "EXE (portable)", "Next-Exam-Student_2.1.0.3 (342 MB)"],
          ["Windows", "MSI (Installer)", "Next-Exam-Student_2.1.0.3 (287 MB)"],
          ["macOS (Apple Silicon)", "DMG", "Next-Exam-Student_2.1.0.3 (338 MB)"],
          ["macOS (Intel)", "DMG", "Next-Exam-Student_2.1.0.3 (348 MB)"],
          ["Linux", "AppImage", "Next-Exam-Student_2.1.0.3 (322 MB)"],
        ]}
      />

      <LinkCards
        items={[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x64.exe",
            label: "Windows (EXE)",
            desc: "Student — portable, keine Installation (342 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x64.msi",
            label: "Windows (MSI)",
            desc: "Student — Installer (287 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Student — für M1/M2/M3/M4 Macs (338 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x64.dmg",
            label: "macOS (Intel)",
            desc: "Student — für ältere Macs (348 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Student — Ubuntu, Fedora etc. (322 MB)",
            dotClass: "bg-green-500",
          },
        ]}
      />

      <H3>Lehrer-App (Teacher)</H3>

      <LinkCards
        items={[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x64.exe",
            label: "Windows (EXE)",
            desc: "Teacher — portable, keine Installation (127 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x64.msi",
            label: "Windows (MSI)",
            desc: "Teacher — Installer (158 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Teacher — für M1/M2/M3/M4 Macs (179 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x64.dmg",
            label: "macOS (Intel)",
            desc: "Teacher — für ältere Macs (188 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Teacher — Ubuntu, Fedora etc. (198 MB)",
            dotClass: "bg-blue-500",
          },
        ]}
      />

      <Callout type="warning" title="Download-Hinweis">
        Microsoft Edge blockiert manchmal den Download — verwenden Sie Firefox
        oder Chrome. Auf dem Mac bitte die passende Version wählen (Apple
        Silicon oder Intel): Next-Exam warnt, wenn die falsche Version über
        Rosetta läuft.
      </Callout>

      {/* ═══ Changelog ═══ */}
      <H2>Versionshistorie</H2>

      <H3>Version 2.1.0.3 — 22. September 2026</H3>
      <P>
        Patch Release: GeoGebra-Update (u. a. Statistik und Regression),
        Korrekturen bei Rechtschreibprüfung und Drucken, PIN-Codes mit
        führender 0 funktionieren, digital signierte Windows-Versionen.
      </P>

      <H3>Version 2.1.0.2 — 11. September 2026</H3>
      <P>
        Patch Release: Die Bildungsportal-Anbindung nutzt standardmäßig die
        Produktivumgebung; Fehlerbehebungen bei Portal-Login und
        Prüfungsstatus.
      </P>

      <H3>Version 2.1 — 10. September 2026</H3>
      <UL>
        <li>Komplett überarbeitetes Teacher-Dashboard (Gruppen in allen Modi, Abgabenübersicht, Prüfungsprotokoll, Zeitlimit)</li>
        <li><strong>iPad-Version</strong> der Student-App (iOS Assessment Mode)</li>
        <li>Anbindung an das <strong>Bildungsportal</strong> — Prüfungen zentral vorbereiten und laden</li>
        <li>Neue Modi <strong>ActiveSheets</strong> (PDF-Arbeitsblätter mit digitaler Korrektur) und <strong>lokale VM</strong></li>
        <li>Mehr Sicherheit: macOS Assessment Mode, optionaler Windows-Kiosk-Modus, Linux-Cage-Modus, SEB-Kompatibilität</li>
        <li>Druck neu aufgebaut, Microsoft Forms im Formular-Modus</li>
      </UL>

      <H3>Version 1.1.3 — 19. März 2026</H3>
      <P>Letzte Version der 1.x-Reihe (Fehlerbehebungen).</P>

      <P>
        Vollständige Release-Notes auf{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
      </P>

      {/* ═══ Rollout-Plan ═══ */}
      <H2>Rollout-Zeitplan des BMB</H2>

      <Table
        headers={["Zeitraum", "Meilenstein"]}
        rows={[
          ["Jetzt", "Für alle Schulen verfügbar — seit Version 2.1 mit Bildungsportal-Anbindung und iPad-Version"],
          ["2025–2026", "Schulungsplanung und Portal-Integration"],
          ["2027–2028", "Qualifizierung für Schulen verpflichtend; iOS/Android Client"],
          ["2029–2031", "Pilotprogramm für reguläre Schularbeiten und Matura 2031"],
          ["2032", "Vollständiger Einsatz an qualifizierten Schulen"],
        ]}
      />

      {/* ═══ Links ═══ */}
      <H2>Weiterführende Links</H2>

      <LinkCards
        items={[
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
            desc: "Offizielle Infoseite des BMB",
          },
          {
            href: "https://www.bmb.gv.at/Themen/schule/zrp/dibi/dip.html",
            label: "BMB Rollout-Plan",
            desc: "Strategie und Zeitplan",
          },
        ]}
      />

      <Callout type="info" title="Support">
        Bei technischen Problemen mit Next-Exam:{" "}
        <a
          href="mailto:support@bildung.gv.at"
          className="text-primary hover:underline"
        >
          support@bildung.gv.at
        </a>
      </Callout>
    </>
  );
}
