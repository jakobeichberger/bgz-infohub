import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Zitieren & Literaturverwaltung — VWA / ABA",
  description:
    "Richtig zitieren, Zotero für LaTeX und Word, KI-Nutzung dokumentieren und Literaturrecherche für die VWA/ABA.",
};

export default function VwaZitierenPage() {
  return (
    <>
      <PageHeader title="Zitieren & Literaturverwaltung — VWA / ABA" />

      <P>
        Korrektes Zitieren ist eine der wichtigsten Anforderungen an eine
        wissenschaftliche Arbeit. Auf dieser Seite erfahren Sie, wie Sie
        Quellen richtig angeben, KI-Nutzung dokumentieren und mit Zotero Ihre
        Literatur effizient verwalten.
      </P>

      {/* ═══ Richtig Zitieren ═══ */}
      <H2>Richtig Zitieren</H2>

      <P>
        Der Zitierstil wird in Absprache mit der Betreuungsperson gewählt und
        muss <strong>durchgehend einheitlich</strong> angewendet werden.
      </P>

      <Table
        headers={["Stil", "Typisch für", "Beispiel"]}
        rows={[
          [
            "APA (In-Text)",
            "Naturwissenschaften, Psychologie, IT, Sport",
            "(Müller, 2020, S. 15)",
          ],
          [
            "Fußnoten (dt. Stil)",
            "Geisteswissenschaften, Geschichte, Philosophie",
            "Vgl. Müller, Maria: Titel. Wien 2020, S. 15.",
          ],
        ]}
      />

      {/* ═══ KI-Nutzung ═══ */}
      <H2>KI-Nutzung (ChatGPT &amp; Co.)</H2>

      <UL>
        <li>Generative KI darf als <strong>Hilfsmittel</strong> verwendet werden</li>
        <li>Alle KI-Nutzung muss <strong>dokumentiert und zitiert</strong> werden</li>
        <li>Vollständige Prompts und Ausgaben müssen in den <strong>Anhang</strong></li>
        <li>Eine <strong>unterschriebene KI-Nutzungserklärung</strong> ist Pflicht</li>
        <li>Beispiel-Zitation: (OpenAI ChatGPT, &quot;Titel des Chats&quot;, 15.01.2026, Anhang A)</li>
      </UL>

      <Callout type="warning" title="KI ersetzt nicht das eigene Denken">
        KI-generierte Texte dürfen nicht unverändert übernommen werden. Prüfen
        Sie jede KI-Ausgabe auf Korrektheit — generative Modelle können
        plausibel klingende, aber falsche Informationen erzeugen
        (&quot;Halluzinationen&quot;). Die eigenständige wissenschaftliche
        Leistung muss klar erkennbar bleiben.
      </Callout>

      {/* ═══ Zotero ═══ */}
      <H2>Zotero — Kostenlose Literaturverwaltung</H2>

      <H3>Was ist Zotero?</H3>
      <P>
        Zotero ist eine kostenlose Open-Source-Literaturverwaltung. Sie
        speichert Quellen, organisiert sie in Sammlungen und generiert
        automatisch Zitate und Literaturverzeichnisse in Word und LaTeX.
        Empfohlen von der Schule für alle VWA-Arbeiten.
      </P>

      <H3>Installation</H3>
      <StepList>
        <Step title="Zotero herunterladen">
          Download von{" "}
          <a
            href="https://www.zotero.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            zotero.org
          </a>{" "}
          — verfügbar für Windows, macOS, Linux. Kostenlos, keine
          Registrierung nötig.
        </Step>
        <Step title="Browser Connector installieren">
          Zotero Connector für Chrome, Firefox oder Edge installieren.
          Ermöglicht das Speichern von Quellen direkt aus dem Browser mit einem
          Klick.
        </Step>
        <Step title="Konto erstellen (optional)">
          Ein kostenloses Konto auf{" "}
          <a
            href="https://www.zotero.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            zotero.org
          </a>{" "}
          synchronisiert die Bibliothek zwischen Geräten (300 MB kostenlos,
          für VWA meist ausreichend).
        </Step>
      </StepList>

      <H3>Quellen sammeln</H3>
      <Table
        headers={["Methode", "So geht's"]}
        rows={[
          [
            "Browser-Button",
            "Auf einer Webseite/Buch/Artikel den Zotero Connector-Button klicken — Quelle wird automatisch mit allen Metadaten gespeichert",
          ],
          [
            "ISBN/DOI",
            "In Zotero: Zauberstab-Icon — ISBN oder DOI eingeben — Quelle wird automatisch gefunden",
          ],
          [
            "Manuell",
            "In Zotero: Grünes + — Quellentyp wählen (Buch, Zeitschrift, etc.) — Felder ausfüllen",
          ],
          [
            "PDF importieren",
            "PDF in Zotero ziehen — Metadaten werden automatisch erkannt",
          ],
        ]}
      />

      <Callout type="info" title="Tipp">
        Speichern Sie jede Quelle <strong>sofort</strong> in Zotero, wenn Sie
        sie finden. Quellen später wiederzufinden kostet unnötig Zeit.
      </Callout>

      <H3>Organisieren</H3>
      <UL>
        <li>
          <strong>Sammlungen:</strong> Erstellen Sie Ordner für Kapitel (z.B.
          &quot;Theorie&quot;, &quot;Methodik&quot;, &quot;Ergebnisse&quot;)
        </li>
        <li>
          <strong>Tags:</strong> Vergeben Sie Schlagwörter (z.B.
          &quot;Klimawandel&quot;, &quot;Statistik&quot;, &quot;Interview&quot;)
        </li>
        <li>
          <strong>Notizen:</strong> Fügen Sie zu jeder Quelle Ihre persönlichen
          Anmerkungen hinzu — das erleichtert das spätere Schreiben
        </li>
      </UL>

      <H3>Zotero + Microsoft Word</H3>
      <StepList>
        <Step title="Plugin prüfen">
          Das Zotero Word Plugin wird automatisch bei der Zotero-Installation
          mitinstalliert. In Word erscheint ein neuer Tab &quot;Zotero&quot;.
          Falls nicht: Zotero → Einstellungen → Zitieren →
          Textverarbeitung → &quot;Microsoft Word Plugin neu installieren&quot;.
        </Step>
        <Step title="Zitierstil wählen">
          Beim ersten Zitat fragt Zotero nach dem Stil. Für VWA empfohlen:{" "}
          &quot;APA 7th Edition&quot; (naturwiss.) oder &quot;Chicago Manual
          of Style 17th (note)&quot; (geisteswiss.). Der Stil kann jederzeit
          nachträglich geändert werden.
        </Step>
        <Step title="Zitat einfügen">
          Cursor an die gewünschte Stelle → Zotero Tab → &quot;Add
          Citation&quot; → Quelle suchen und auswählen → Seitenzahl
          eingeben → Enter. Das Zitat wird automatisch formatiert.
        </Step>
        <Step title="Literaturverzeichnis erstellen">
          Cursor ans Ende der Arbeit → Zotero Tab → &quot;Add
          Bibliography&quot; → Das Verzeichnis wird automatisch generiert und
          aktualisiert sich bei neuen Zitaten.
        </Step>
        <Step title="Vor Abgabe: Refresh">
          Zotero Tab → &quot;Refresh&quot; klicken, um sicherzustellen dass
          alle Zitate und das Verzeichnis aktuell sind.
        </Step>
      </StepList>

      <Callout type="warning" title="Zitate nicht manuell ändern">
        Ändern Sie Zitate <strong>nicht</strong> manuell im Text! Verwenden
        Sie immer den Zotero-Tab in Word. Manuelle Änderungen werden beim
        nächsten Refresh überschrieben.
      </Callout>

      <H3>Zotero + LaTeX (Better BibTeX)</H3>
      <StepList>
        <Step title="Better BibTeX installieren">
          Download von{" "}
          <a
            href="https://retorque.re/zotero-better-bibtex/installation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            retorque.re/zotero-better-bibtex
          </a>
          . In Zotero: Werkzeuge → Add-ons → Zahnrad → &quot;Install Add-on
          From File&quot; → .xpi-Datei auswählen → Zotero neu starten.
        </Step>
        <Step title="Citation Keys konfigurieren">
          Better BibTeX → Einstellungen → Citation Key Format:{" "}
          <code>[auth][year]</code> generiert Keys wie{" "}
          <code>Mueller2023</code>. Diese Keys verwenden Sie in LaTeX als{" "}
          <code>\cite&#123;Mueller2023&#125;</code>.
        </Step>
        <Step title="Automatischen .bib-Export einrichten">
          Rechtsklick auf Ihre VWA-Sammlung → &quot;Export Collection&quot; →
          Format: &quot;Better BibLaTeX&quot; → Haken bei &quot;Keep
          updated&quot; → Speichern als <code>literatur.bib</code> im
          LaTeX-Projektordner. Die Datei wird automatisch aktualisiert wenn
          Sie Quellen hinzufügen.
        </Step>
        <Step title="In LaTeX verwenden">
          In der Präambel: <code>\addbibresource&#123;literatur.bib&#125;</code>.
          Im Text: <code>\cite&#123;Mueller2023&#125;</code> oder{" "}
          <code>\parencite&#123;Mueller2023&#125;</code>. Am Ende:{" "}
          <code>\printbibliography</code>. Die BGZ-Vorlage hat das bereits
          vorkonfiguriert.
        </Step>
      </StepList>

      <Callout type="success" title="Automatischer Export">
        Mit Better BibTeX + automatischem Export müssen Sie die .bib-Datei nie
        manuell bearbeiten. Neue Quellen in Zotero erscheinen automatisch in
        LaTeX.
      </Callout>

      {/* ═══ Quellensuche ═══ */}
      <H2>Quellensuche — Datenbanken</H2>

      <Table
        headers={["Datenbank", "URL", "Geeignet für"]}
        rows={[
          [
            "Google Scholar",
            "scholar.google.com",
            "Allgemeine akademische Suche, Bücher, Dissertationen",
          ],
          [
            "BASE",
            "base-search.net",
            "300+ Mio. Open-Access-Dokumente, stark für deutschsprachige Quellen",
          ],
          [
            "JSTOR",
            "jstor.org",
            "Geisteswissenschaften, Geschichte, Sozialwissenschaften",
          ],
          [
            "SpringerLink",
            "link.springer.com",
            "Naturwissenschaften, Lehrbücher, Fachzeitschriften",
          ],
          [
            "PubMed",
            "pubmed.ncbi.nlm.nih.gov",
            "Medizin, Biologie, Gesundheitswissenschaften",
          ],
          [
            "APA PsycNet",
            "psycnet.apa.org",
            "Psychologie",
          ],
          [
            "Österr. Nationalbibliothek",
            "onb.ac.at",
            "Historische und österreichische Quellen",
          ],
        ]}
      />

      {/* ═══ Quellenqualität ═══ */}
      <H2>Quellenqualität</H2>

      <P>
        Goldene Regel: Je näher eine Quelle am Original ist, desto besser.
      </P>

      <Table
        headers={["Bevorzugen", "Vermeiden/Vorsicht"]}
        rows={[
          ["Peer-reviewed Fachzeitschriften", "Wikipedia (nur als Einstieg)"],
          ["Offizielle Dokumente, Gesetze", "Blog-Beiträge"],
          ["Lehrbücher bekannter Autoren", "YouTube-Videos"],
          ["Originalstudien", "KI-generierte Texte (Halluzinationsgefahr)"],
          ["Statistiken (Statistik Austria, Eurostat)", "Unbelegte Behauptungen"],
        ]}
      />

      {/* ═══ Richtwerte Quellenzahl ═══ */}
      <H2>Richtwerte Quellenzahl</H2>

      <Table
        headers={["Abschnitt", "Richtwert"]}
        rows={[
          ["Einleitung", "3–5 Quellen"],
          ["Theoretischer Teil", "10–20 Quellen"],
          ["Empirischer Teil", "3–8 Quellen (Methodik, Vergleichsstudien)"],
          ["Fazit", "Verweise auf bereits zitierte Quellen"],
          ["Gesamt", "ca. 15–30 Quellen"],
        ]}
      />

      <Callout type="info" title="Qualität vor Quantität">
        15 relevante Quellen sind besser als 50 themenfremde. Achten Sie
        darauf, dass Ihre Quellen aktuell, wissenschaftlich und für Ihre
        Forschungsfrage relevant sind.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>Weitere VWA-Themen</H2>
      <CardGrid>
        <Card href="/infohub/vwa" icon="🎓" title="Übersicht">Zeitplan, Formate, Bewertung</Card>
        <Card href="/infohub/vwa/aufbau" icon="📋" title="Aufbau & Forschungsfrage">Gliederung, Formatierung</Card>
        <Card href="/infohub/vwa/schreiben" icon="✍️" title="Wissenschaftliches Schreiben">Stil, Sprache, Plagiat</Card>
        <Card href="/infohub/vwa/vorlagen" icon="📄" title="Vorlagen & Tools">LaTeX, Word, Downloads</Card>
        <Card href="/infohub/vwa/praesentation" icon="🎤" title="Präsentation">Aufbau, Fragen, Tipps</Card>
      </CardGrid>
    </>
  );
}
