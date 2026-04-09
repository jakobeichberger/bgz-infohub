import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Vorlagen & Tools — VWA / ABA",
  description:
    "LaTeX- und Word-Vorlagen, Einrichtung, Dateibeschreibungen und Tipps für die VWA/ABA am BG Zehnergasse.",
};

export default function VwaVorlagenPage() {
  return (
    <>
      <PageHeader title="Vorlagen & Tools — VWA / ABA" />

      <P>
        Das BG Zehnergasse stellt professionelle Vorlagen für LaTeX und
        Microsoft Word bereit. Beide Vorlagen enthalten das Schulbranding,
        vorkonfigurierte Formatvorlagen und automatische Verzeichnisse.
      </P>

      {/* ═══ Downloads ═══ */}
      <H2>Vorlagen zum Download</H2>

      <CardGrid>
        <Card
          href="/templates/bgz-vwa.zip"
          icon="📄"
          title="LaTeX-Vorlage (empfohlen)"
        >
          Professionelle LaTeX-Vorlage mit APA-Zitierstil, automatischem
          Inhaltsverzeichnis, Abbildungsverzeichnis und BG Zehnergasse
          Branding. Ideal für wissenschaftliche Arbeiten.
        </Card>
        <Card
          href="/templates/bgz-vwa-word.docx"
          icon="📝"
          title="Word-Vorlage"
        >
          Professionelle Word-Vorlage mit vordefinierten Formatvorlagen,
          automatischem Inhaltsverzeichnis und BG Zehnergasse Branding.
          Einfach Platzhalter ersetzen und losschreiben.
        </Card>
      </CardGrid>

      {/* ═══ LaTeX ═══ */}
      <H2>VWA mit LaTeX schreiben</H2>

      <P>
        LaTeX erzeugt professionell gesetzte Dokumente mit automatischen
        Verzeichnissen und korrekten Zitaten. Die Schulvorlage ist
        vorkonfiguriert — Sie müssen nur Ihre Inhalte einsetzen.
      </P>

      <H3>Einrichtung</H3>

      <StepList>
        <Step title="TeX-Distribution installieren">
          <strong>Windows:</strong> MiKTeX oder TeX Live (Full Installation,
          4–6 GB). <strong>macOS:</strong> MacTeX. <strong>Linux:</strong> TeX Live.
        </Step>
        <Step title="Editor installieren">
          <strong>TeXstudio</strong> (anfängerfreundlich) oder{" "}
          <strong>VS Code</strong> mit LaTeX Workshop Extension.
        </Step>
        <Step title="Vorlage herunterladen">
          Laden Sie die{" "}
          <a
            href="/templates/bgz-vwa.zip"
            className="text-primary hover:underline"
          >
            BG Zehnergasse VWA-Vorlage
          </a>{" "}
          herunter und entpacken Sie die ZIP-Datei.
        </Step>
        <Step title="main.tex öffnen und Metadaten ausfüllen">
          Tragen Sie Ihren Namen, Titel, Klasse, Betreuungsperson und
          Fachbereich ein.
        </Step>
        <Step title="Kompilieren">
          Drücken Sie F5 (TeXstudio) oder Ctrl+Alt+B (VS Code). Beim ersten
          Mal: pdflatex → biber → pdflatex → pdflatex.
        </Step>
      </StepList>

      <H3>Wichtige Dateien in der Vorlage</H3>

      <Table
        headers={["Datei", "Zweck"]}
        rows={[
          ["main.tex", "Hauptdatei — hier Metadaten eintragen"],
          ["bgzvwa.cls", "Dokumentenklasse (nicht ändern)"],
          ["kapitel/einleitung.tex", "Einleitung mit Forschungsfrage"],
          ["kapitel/hauptteil.tex", "Theoretischer und empirischer Teil"],
          ["kapitel/fazit.tex", "Zusammenfassung und Ausblick"],
          ["literatur.bib", "Quellenverzeichnis (BibTeX-Format)"],
          ["images/", "Ordner für Abbildungen"],
        ]}
      />

      <Callout type="success" title="Tipp: Git verwenden">
        Verwenden Sie Git und GitHub zur Versionskontrolle. So haben Sie ein
        Backup, können Änderungen nachverfolgen und bei Bedarf zu einer
        früheren Version zurückkehren.
      </Callout>

      <Callout type="info" title="Literaturverwaltung mit Zotero + LaTeX">
        Mit dem Plugin Better BibTeX können Sie Ihre Zotero-Bibliothek
        automatisch als .bib-Datei exportieren. So müssen Sie die
        Literatureinträge nicht manuell pflegen. Alle Details finden Sie auf der
        Seite{" "}
        <Link
          href="/infohub/vwa/zitieren"
          className="text-primary hover:underline"
        >
          Zitieren &amp; Zotero
        </Link>
        .
      </Callout>

      {/* ═══ Word ═══ */}
      <H2>VWA mit Microsoft Word schreiben</H2>

      <P>
        Word ist die einfachere Alternative zu LaTeX. Mit den richtigen
        Einstellungen erzielen Sie ein professionelles Ergebnis.
      </P>

      <H3>Einrichtung</H3>

      <StepList>
        <Step title="Seitenränder einstellen">
          Layout → Seitenränder → Benutzerdefiniert: Links 3,5 cm (inkl.
          Bundsteg), Rechts 2,5 cm, Oben 3 cm, Unten 3 cm.
        </Step>
        <Step title="Schrift und Absatz">
          Schriftart: Calibri oder Times New Roman, 12pt.
          Absatz → Zeilenabstand: 1,5-fach. Abstand nach: 6pt.
        </Step>
        <Step title="Formatvorlagen verwenden">
          Verwenden Sie <strong>immer</strong> Formatvorlagen für
          Überschriften (Überschrift 1, 2, 3). Nie manuell formatieren!
          So funktioniert das automatische Inhaltsverzeichnis.
        </Step>
        <Step title="Inhaltsverzeichnis einfügen">
          Verweise → Inhaltsverzeichnis → Automatisches Verzeichnis.
          Vor der Abgabe: Rechtsklick → &quot;Felder aktualisieren&quot;.
        </Step>
        <Step title="Seitenzahlen einfügen">
          Einfügen → Seitenzahl. Für römische Zahlen im Vorspann:
          Abschnittswechsel einfügen, dann Seitenzahlformat ändern.
        </Step>
      </StepList>

      <H3>Literaturverwaltung in Word</H3>

      <UL>
        <li>
          <strong>Zotero</strong> (empfohlen, kostenlos): Installieren Sie
          das Zotero Word Plugin für automatische Zitate und
          Literaturverzeichnis — alle Details auf der Seite{" "}
          <Link
            href="/infohub/vwa/zitieren"
            className="text-primary hover:underline"
          >
            Zitieren &amp; Zotero
          </Link>
        </li>
        <li>
          <strong>Word Quellenverwaltung</strong>: Verweise → Zitat einfügen
          → Neue Quelle (einfacher, aber weniger flexibel)
        </li>
        <li>
          <strong>Citavi</strong>: Professionell, kostenlos für Studierende
          (nur Windows)
        </li>
      </UL>

      <Callout type="warning" title="Häufige Word-Fehler">
        <ul>
          <li>
            <strong>Überschriften manuell formatiert:</strong> Verwenden Sie
            immer Formatvorlagen — sonst funktioniert das automatische
            Inhaltsverzeichnis nicht
          </li>
          <li>
            <strong>Keine Abschnittswechsel:</strong> Für unterschiedliche
            Seitenzahlen (römisch/arabisch) brauchen Sie Abschnittswechsel
          </li>
          <li>
            <strong>Bilder nicht verankert:</strong> Rechtsklick auf Bild →
            Textumbruch → &quot;Mit Text in Zeile&quot; oder verankern
          </li>
          <li>
            <strong>Verzeichnisse nicht aktualisiert:</strong> Immer vor der
            Abgabe alle Verzeichnisse aktualisieren
          </li>
        </ul>
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>Weitere VWA-Themen</H2>
      <CardGrid>
        <Card href="/infohub/vwa" icon="🎓" title="Übersicht">Zeitplan, Formate, Bewertung</Card>
        <Card href="/infohub/vwa/aufbau" icon="📋" title="Aufbau & Forschungsfrage">Gliederung, Formatierung</Card>
        <Card href="/infohub/vwa/schreiben" icon="✍️" title="Wissenschaftliches Schreiben">Stil, Sprache, Plagiat</Card>
        <Card href="/infohub/vwa/zitieren" icon="📚" title="Zitieren & Zotero">Literaturverwaltung, KI-Nutzung</Card>
        <Card href="/infohub/vwa/praesentation" icon="🎤" title="Präsentation">Aufbau, Fragen, Tipps</Card>
      </CardGrid>
    </>
  );
}
