import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Vorlagen & Tools — VWA / ABA",
  description:
    "Word-Vorlage, Einrichtung, Tipps und Literaturverwaltung für die VWA/ABA am BG Zehnergasse.",
};

export default function VwaVorlagenPage() {
  return (
    <>
      <PageHeader title="Vorlagen & Tools — VWA / ABA" />

      <P>
        Das BG Zehnergasse stellt eine professionelle Word-Vorlage bereit. Sie
        enthält das Schulbranding, vorkonfigurierte Formatvorlagen und ein
        automatisches Inhaltsverzeichnis — Sie müssen nur die Platzhalter
        ersetzen.
      </P>

      {/* ═══ Download ═══ */}
      <H2>Vorlage zum Download</H2>

      <CardGrid>
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

      {/* ═══ Word ═══ */}
      <H2>VWA mit Microsoft Word schreiben</H2>

      <P>
        Mit den richtigen Einstellungen erzielen Sie in Word ein
        professionelles Ergebnis. Die wichtigsten Schritte:
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

      <Callout type="success" title="Tipp: Automatisches Backup mit OneDrive">
        Speichern Sie Ihre Arbeit in <strong>OneDrive</strong> (über Ihr
        Schulkonto, 5 TB). So wird die Datei automatisch gesichert und Sie
        können über den <strong>Versionsverlauf</strong> jederzeit zu einer
        früheren Fassung zurückkehren.
      </Callout>

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
