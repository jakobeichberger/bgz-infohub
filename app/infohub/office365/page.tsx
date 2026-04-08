import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Microsoft 365 — Kostenlos für Schüler",
  description:
    "Microsoft 365 A3 Education am BG Zehnergasse: Desktop-Apps, OneDrive, OneNote, Teams, Copilot und alle Vorteile der A3-Lizenz.",
};

export default function Office365Page() {
  return (
    <>
      <PageHeader title="Microsoft 365 — Kostenlos für Schüler" />

      <P>
        Über den <strong>MS-ACH-Vertrag</strong> (Microsoft Austrian College
        and High School Agreement) zwischen dem Bildungsministerium und
        Microsoft erhalten alle Schülerinnen und Schüler am BG Zehnergasse
        eine vollwertige <strong>Microsoft 365 A3 Education</strong>-Lizenz —
        komplett kostenlos.
      </P>

      <Callout type="success" title="Alles kostenlos">
        Der MS-ACH-Vertrag wird vom Ministerium finanziert und läuft bis
        mindestens <strong>31. Mai 2027</strong>. Schüler und Lehrkräfte
        zahlen nichts. Pro Lehrkraft-Lizenz sind 25 Schüler-Lizenzen
        inkludiert.
      </Callout>

      <H2>Was ist in der A3-Lizenz enthalten?</H2>

      <P>
        Die A3-Lizenz ist deutlich umfangreicher als die kostenlose A1-Lizenz.
        Hier die wichtigsten Vorteile:
      </P>

      <H3>Desktop-Apps (auf bis zu 5 Geräten installierbar)</H3>

      <Table
        headers={["App", "Beschreibung"]}
        rows={[
          ["Word", "Textverarbeitung — Aufsätze, Referate, Facharbeiten"],
          ["Excel", "Tabellenkalkulation — Datenanalyse, Diagramme, Formeln"],
          ["PowerPoint", "Präsentationen erstellen und halten"],
          ["OneNote", "Digitales Notizbuch — Mitschriften, Zeichnungen, Audio"],
          ["Outlook", "E-Mail-Client mit Kalender und Aufgaben"],
          ["Access (nur Windows)", "Datenbankverwaltung"],
          ["Publisher (nur Windows)", "Desktop-Publishing für Flyer, Poster etc."],
        ]}
      />

      <Callout type="info" title="Auf bis zu 15 Geräten">
        Mit der A3-Lizenz können Sie Office auf bis zu{" "}
        <strong>5 PCs oder Macs</strong>, <strong>5 Tablets</strong> und{" "}
        <strong>5 Smartphones</strong> gleichzeitig installieren.
      </Callout>

      {/* ═══ OneDrive ═══ */}
      <H2>OneDrive — Cloud-Speicher</H2>

      <P>
        OneDrive ist Ihr persönlicher Cloud-Speicher. Mit der A3-Lizenz
        stehen jedem Schüler <strong>5 TB Speicherplatz</strong> zur
        Verfügung — mehr als genug für alle Schulunterlagen, Fotos und
        Projekte.
      </P>

      <UL>
        <li>
          <strong>Automatisches Backup</strong> — Dateien auf dem iPad und PC
          werden automatisch in die Cloud gesichert
        </li>
        <li>
          <strong>Überall verfügbar</strong> — Zugriff von jedem Gerät über
          Browser, Desktop-App oder Smartphone-App
        </li>
        <li>
          <strong>Versionsverlauf</strong> — Ältere Versionen von Dateien
          können wiederhergestellt werden
        </li>
        <li>
          <strong>Teilen</strong> — Dateien und Ordner mit Mitschülern oder
          Lehrkräften teilen
        </li>
        <li>
          <strong>Papierkorb</strong> — Gelöschte Dateien können 93 Tage lang
          wiederhergestellt werden
        </li>
      </UL>

      {/* ═══ OneNote ═══ */}
      <H2>OneNote — Digitales Notizbuch</H2>

      <P>
        OneNote ist eines der nützlichsten Tools für den Schulalltag:
      </P>

      <UL>
        <li>
          <strong>Handschrift &amp; Zeichnen</strong> — Mit dem Apple Pencil
          oder Stift direkt auf dem iPad schreiben
        </li>
        <li>
          <strong>Abschnitte &amp; Seiten</strong> — Notizen nach Fächern und
          Themen organisieren
        </li>
        <li>
          <strong>Audio-Aufnahmen</strong> — Erklärungen aufnehmen und an
          Notizen anhängen
        </li>
        <li>
          <strong>Fotos einfügen</strong> — Tafelbilder abfotografieren und
          direkt in die Notizen einfügen
        </li>
        <li>
          <strong>Automatische Synchronisierung</strong> — Notizen sind auf
          allen Geräten verfügbar
        </li>
        <li>
          <strong>Klassennotizbuch</strong> — Lehrkräfte können über Teams
          ein Klassennotizbuch anlegen, in dem jeder Schüler einen eigenen
          Bereich hat
        </li>
      </UL>

      <Callout type="info" title="Desktop-App nutzen!">
        Mit der A3-Lizenz haben Sie Zugang zur{" "}
        <strong>vollständigen Desktop-Version</strong> von OneNote (nicht nur
        die Web-Version). Diese bietet mehr Funktionen wie Offline-Zugriff
        und erweiterte Zeichenwerkzeuge.
      </Callout>

      {/* ═══ Teams ═══ */}
      <H2>Microsoft Teams</H2>

      <UL>
        <li>Chat und Gruppenchat mit Mitschülern und Lehrkräften</li>
        <li>Videokonferenzen und Online-Unterricht</li>
        <li>Dateien in Kanälen teilen und gemeinsam bearbeiten</li>
        <li>Aufgaben verwalten und abgeben</li>
        <li>Integration mit OneNote-Klassennotizbuch</li>
      </UL>

      {/* ═══ Copilot ═══ */}
      <H2>Microsoft Copilot (KI-Assistent)</H2>

      <P>
        <strong>Copilot Chat</strong> ist der kostenlose KI-Assistent von
        Microsoft und steht allen Schülern mit einem Schulkonto ab 13 Jahren
        zur Verfügung.
      </P>

      <H3>Was kann Copilot?</H3>

      <UL>
        <li>Fragen beantworten und Themen erklären</li>
        <li>Texte zusammenfassen und umformulieren</li>
        <li>Bei Recherchen und Brainstorming helfen</li>
        <li>Code schreiben und erklären</li>
        <li>Bilder generieren</li>
        <li>Dateien hochladen und analysieren</li>
      </UL>

      <H3>Datenschutz</H3>

      <Callout type="success" title="Commercial Data Protection">
        Microsoft Copilot Chat für Education-Nutzer arbeitet mit{" "}
        <strong>Commercial Data Protection</strong>:
        <ul>
          <li>Eingaben und Ausgaben werden <strong>nicht</strong> zum Training von KI-Modellen verwendet</li>
          <li>Microsoft-Mitarbeiter haben keinen Einblick in die Daten</li>
          <li>Daten werden innerhalb der EU verarbeitet (EU Data Boundary)</li>
        </ul>
        <p>
          Quelle:{" "}
          <a
            href="https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Learn — Copilot Privacy
          </a>
        </p>
      </Callout>

      {/* ═══ A3 vs A1 ═══ */}
      <H2>A3 vs. A1 — Was ist der Unterschied?</H2>

      <Table
        headers={["Feature", "A1 (kostenlos)", "A3 (MS-ACH)"]}
        rows={[
          ["Office-Apps", "Nur Web + Mobil", "Desktop + Web + Mobil (15 Geräte)"],
          ["Postfach", "50 GB", "100 GB + 1,5 TB Archiv"],
          ["OneDrive", "100 GB pro Nutzer", "5 TB pro Nutzer"],
          ["OneNote", "Nur Web/Mobil", "Volle Desktop-Version"],
          ["Copilot Chat", "Verfügbar", "Verfügbar"],
          ["Copilot in Office-Apps", "Nicht verfügbar", "Als Add-on möglich"],
          ["Geräteverwaltung (Intune)", "Nicht enthalten", "Intune Plan 1 inkludiert"],
          ["Windows-Lizenz", "Nicht enthalten", "Windows 11 Education inkludiert"],
          ["Sicherheit", "Basis", "Defender, BitLocker, Credential Guard"],
        ]}
      />

      {/* ═══ Anmelden ═══ */}
      <H2>Anmelden &amp; Installieren</H2>

      <StepList>
        <Step title="Im Browser anmelden">
          Öffnen Sie{" "}
          <a
            href="https://portal.office.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            portal.office.com
          </a>{" "}
          und melden Sie sich mit{" "}
          <code>nachname.vorname@bgzwn.at</code> an.
        </Step>
        <Step title="Browser-Apps sofort nutzen">
          Nach dem Login können Word, Excel und PowerPoint direkt im Browser
          verwendet werden.
        </Step>
        <Step title="Desktop-Apps installieren (empfohlen)">
          Klicken Sie auf &quot;Office installieren&quot; →
          &quot;Microsoft 365-Apps&quot; und folgen Sie den Anweisungen.
          Funktioniert auf Windows und Mac.
        </Step>
        <Step title="Mobile Apps installieren">
          Laden Sie die Office-Apps aus dem App Store (iOS) oder Google Play
          (Android) und melden Sie sich mit dem Schulkonto an.
        </Step>
      </StepList>

      <Callout type="warning" title="Lizenz-Hinweis">
        Die Lizenz verlängert sich jährlich automatisch über den MS-ACH-Vertrag
        und <strong>erlischt mit dem Verlassen der Schule</strong>. Sichern Sie
        wichtige Dateien rechtzeitig auf einem privaten Speicher.
      </Callout>

      {/* ═══ Rechtsquellen ═══ */}
      <H2>Rechtsquellen</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011451"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            BilDokG 2020, BGBl. I Nr. 20/2021
          </a>{" "}
          — § 4 (Verantwortlichkeit für Bildungsdaten)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            DSG, BGBl. I Nr. 165/1999 i.d.g.F.
          </a>{" "}
          (nationale Umsetzung der EU-DSGVO)
        </li>
        <li>
          § DSGVO Art. 6 Abs. 1 lit. e (Verarbeitung im öffentlichen
          Interesse — Rechtsgrundlage für Microsoft 365 im Schulbetrieb)
        </li>
      </UL>
    </>
  );
}
