import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "VWA / ABA — Vorwissenschaftliche Arbeit",
  description:
    "Alles zur Vorwissenschaftlichen Arbeit (VWA / ABA) am BG Zehnergasse: Ablauf, Aufbau, Zitieren, LaTeX-Vorlage, Word-Vorlage und Tipps.",
};

export default function VwaPage() {
  return (
    <>
      <PageHeader title="VWA / ABA — Vorwissenschaftliche Arbeit" />

      <P>
        Die <strong>Vorwissenschaftliche Arbeit (VWA)</strong> — seit 2024
        offiziell <strong>Abschließende Arbeit (ABA)</strong> — ist die erste
        Säule der standardisierten Reifeprüfung (Matura) an AHS-Schulen. Sie
        zeigt, dass Sie eigenständig ein Thema wissenschaftlich bearbeiten
        können.
      </P>

      {/* ═══ Matura-Kontext ═══ */}
      <Callout type="info" title="Die Matura im Überblick — 3-Säulen-Modell">
        Die AHS-Reifeprüfung besteht aus <strong>drei Säulen</strong> mit
        insgesamt 7 Teilprüfungen:
        <ul>
          <li><strong>Säule 1:</strong> Abschließende Arbeit (ABA) — Präsentation &amp; Diskussion</li>
          <li><strong>Säule 2:</strong> Schriftliche Klausuren — 3 oder 4 Prüfungen (Deutsch, Mathematik, Fremdsprache verpflichtend)</li>
          <li><strong>Säule 3:</strong> Mündliche Prüfungen — 2 bis 3 Prüfungen aus Themenkörben</li>
        </ul>
        <p>
          Das System ist <strong>modular</strong>: Ein negatives Ergebnis in
          einer Säule verhindert nicht den Antritt in den anderen Säulen. Bei
          negativer Klausur gibt es eine Kompensationsprüfung (mündlich, max.
          Note: Befriedigend). Jede Teilprüfung kann bis zu 3× wiederholt
          werden.
        </p>
        <p>
          Mehr Informationen:{" "}
          <a href="https://www.matura.gv.at" target="_blank" rel="noopener noreferrer">
            matura.gv.at
          </a>
        </p>
      </Callout>

      <Callout type="warning" title="Reform 2024: VWA wird freiwillig">
        Seit dem Schuljahr 2024/25 ist die VWA/ABA{" "}
        <strong>freiwillig</strong> (
        <a href="https://www.ris.bka.gv.at/eli/bgbl/I/2024/121" target="_blank" rel="noopener noreferrer">BGBl. I Nr. 121/2024</a>).
        Schüler können stattdessen eine zusätzliche schriftliche oder
        mündliche Prüfung wählen. Die Entscheidung muss bis{" "}
        <strong>15. Jänner</strong> der 7. Klasse gemeldet werden. Die
        Regelung gilt bis einschließlich 2028/29.
      </Callout>

      {/* ═══ Überblick ═══ */}
      <H2>Auf einen Blick</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Offizieller Name", "Abschließende Arbeit (ABA), früher VWA"],
          ["Umfang", "Ca. 40.000–60.000 Zeichen (ab 2026 keine Obergrenze mehr)"],
          ["Format", "Einzelarbeit (kein Team)"],
          ["Zeitraum", "7. Klasse (Themenfindung) bis 8. Klasse (Abgabe & Präsentation)"],
          ["Betreuung", "1 Betreuungsperson (Lehrkraft der Schule)"],
          ["Abgabe", "Ende 1. Woche des 2. Semesters der 8. Klasse"],
          ["Prüfung", "Präsentation & Diskussion (max. 25 Min.)"],
          ["Rechtsgrundlage", "SchUG, Prüfungsordnung AHS (BGBl. II Nr. 297/2024)"],
        ]}
      />

      {/* ═══ Drei Formate ═══ */}
      <H2>Drei Formate zur Wahl</H2>

      <Table
        headers={["Format", "Beschreibung", "Beispiele"]}
        rows={[
          [
            "Forschende Arbeit",
            "Klassische schriftliche Arbeit mit wissenschaftlicher Methodik — Informationen sammeln, untersuchen und analysieren",
            "Interviews, Experimente, Umfragen, Quellenanalyse, Laborprotokolle",
          ],
          [
            "Gestalterische Arbeit",
            "Ergebnis eines bewussten kreativen Prozesses + schriftliche Dokumentation mit Hintergrund, Methodik und Reflexion",
            "Podcast, Videoreportage, Sportprogramm, Graphic Novel, Website",
          ],
          [
            "Künstlerische Arbeit",
            "Praktisches künstlerisches Produkt im Kontext relevanter Kunstgattungen + Vergleich mit ähnlichen Werken und Reflexion",
            "Komposition, Skulptur, Gemälde, Installation, Performance",
          ],
        ]}
      />

      {/* ═══ Zeitplan ═══ */}
      <H2>Zeitplan &amp; Ablauf</H2>

      <H3>7. Klasse — Vorbereitung</H3>

      <StepList>
        <Step title="Thema finden (1. Semester)">
          Wählen Sie ein Thema, das Sie interessiert. Besprechen Sie es mit
          einer Lehrkraft, die Sie betreuen kann. Die Betreuungsperson muss
          fachlich kompetent sein, aber das Thema muss nicht in ihrem
          Unterrichtsfach liegen.
        </Step>
        <Step title="Erwartungshorizont erstellen (1. Semester)">
          Erstellen Sie den Erwartungshorizont (immer auf Deutsch):
          Themenstellung (max. 100 Zeichen), Forschungsfrage,
          Basisliteratur (mind. 3 Werke), Methoden, Gliederung.
        </Step>
        <Step title="Genehmigung (bis Ende März)">
          Der Erwartungshorizont wird über das{" "}
          <a
            href="https://www.ahs-aba.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            ABA-Portal
          </a>{" "}
          eingereicht. Die Schulleitung genehmigt oder lehnt ab. Nach
          Genehmigung ist das Thema fix.
        </Step>
        <Step title="Schreiben beginnen (2. Semester + Sommerferien)">
          Literaturrecherche, erste Kapitel schreiben, Feedback von der
          Betreuungsperson einholen.
        </Step>
      </StepList>

      <H3>8. Klasse — Fertigstellung</H3>

      <StepList>
        <Step title="Rohversion (bis Ende September)">
          Vorläufigen Entwurf der Betreuungsperson vorlegen.
        </Step>
        <Step title="Überarbeitung (Oktober–Dezember)">
          Feedback einarbeiten, Korrekturlesen, Formatierung finalisieren.
        </Step>
        <Step title="Abgabe (Ende 1. Woche 2. Semester)">
          <strong>2 gebundene Exemplare</strong> (Direktion + Betreuung) +
          digitaler Upload ins ABA-Portal. Beilegen:{" "}
          <strong>Begleitprotokoll</strong> (Arbeitsablauf, verwendete
          Hilfsmittel, KI-Nutzung) und <strong>Betreuungsprotokoll</strong>{" "}
          (von der Betreuungsperson geführt).
        </Step>
        <Step title="Präsentation & Diskussion (ca. März)">
          Max. 25 Minuten: Präsentation (10–15 Min.) + Diskussion mit der
          Kommission (5–10 Min.). Die Präsentation ist öffentlich.
        </Step>
      </StepList>

      <H3>Nachtermine bei Abgabe</H3>

      <Table
        headers={["Termin", "Abgabefrist"]}
        rows={[
          ["Haupttermin", "Ende der 1. Woche des 2. Semesters"],
          ["1. Nebentermin", "Ende der 1. Unterrichtswoche (Herbst)"],
          ["2. Nebentermin", "5. Schultag im Dezember"],
          ["3. Nebentermin", "Ende der 1. Woche des 2. Semesters (Folgejahr)"],
        ]}
      />

      {/* ═══ Aufbau ═══ */}
      <H2>Aufbau der Arbeit</H2>

      <H3>Vorspann (römische Seitenzahlen)</H3>
      <UL>
        <li><strong>Titelblatt</strong> — Schullogo, Titel, Name, Klasse, Betreuung, Abgabedatum</li>
        <li><strong>Selbstständigkeitserklärung</strong></li>
        <li><strong>Abstract</strong> — 1.000–1.500 Zeichen, auf Deutsch oder Englisch</li>
        <li><strong>Inhaltsverzeichnis</strong></li>
        <li>Optional: Vorwort, Abbildungs-/Tabellenverzeichnis, Abkürzungsverzeichnis</li>
      </UL>

      <H3>Hauptteil (arabische Seitenzahlen)</H3>
      <UL>
        <li><strong>Einleitung</strong> — Hintergrund, Forschungsfrage, Methodik, Aufbau</li>
        <li><strong>Theoretischer Teil</strong> — Fachlicher Hintergrund, Literaturüberblick</li>
        <li><strong>Empirischer/Analytischer Teil</strong> — Ihre Forschung, Analyse, Ergebnisse</li>
        <li><strong>Fazit</strong> — Zusammenfassung, Beantwortung der Forschungsfrage, Ausblick</li>
      </UL>

      <H3>Nachspann</H3>
      <UL>
        <li><strong>Literatur- und Quellenverzeichnis</strong></li>
        <li><strong>Anhang</strong> — Interviewtranskripte, Fragebögen, KI-Nutzungserklärung</li>
      </UL>

      {/* ═══ Forschungsfrage ═══ */}
      <H2>Die Forschungsfrage</H2>

      <P>
        Die Forschungsfrage ist das Herzstück Ihrer Arbeit. Sie muss:
      </P>

      <UL>
        <li>Eine <strong>W-Frage</strong> sein (Wie? Warum? Inwiefern? Welche?)</li>
        <li><strong>Nicht</strong> mit Ja/Nein beantwortbar sein</li>
        <li>Präzise und spezifisch formuliert sein (max. 250 Zeichen)</li>
        <li>Nicht suggestiv oder wertend sein</li>
      </UL>

      <Table
        headers={["Schlecht", "Besser"]}
        rows={[
          ["Ist Klimawandel schlimm?", "Inwiefern beeinflusst der Klimawandel die Weinproduktion in Niederösterreich?"],
          ["Soziale Medien", "Welchen Einfluss hat die Instagram-Nutzung auf das Selbstbild von 16–18-Jährigen?"],
          ["Ist KI gefährlich?", "Wie verändert der Einsatz von KI-Systemen den Journalismus in Österreich?"],
        ]}
      />

      {/* ═══ Zitieren ═══ */}
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

      <Callout type="danger" title="Plagiat vermeiden!">
        Jede übernommene Idee — auch in eigenen Worten — muss mit einer
        Quellenangabe versehen werden. Fehlende Quellenangaben gelten als
        Täuschungsversuch und führen zur Beurteilung{" "}
        <strong>&quot;Nicht beurteilt&quot;</strong>.
      </Callout>

      <H3>KI-Nutzung (ChatGPT &amp; Co.)</H3>

      <UL>
        <li>Generative KI darf als <strong>Hilfsmittel</strong> verwendet werden</li>
        <li>Alle KI-Nutzung muss <strong>dokumentiert und zitiert</strong> werden</li>
        <li>Vollständige Prompts und Ausgaben müssen in den <strong>Anhang</strong></li>
        <li>Eine <strong>unterschriebene KI-Nutzungserklärung</strong> ist Pflicht</li>
        <li>Beispiel-Zitation: (OpenAI ChatGPT, &quot;Titel des Chats&quot;, 15.01.2026, Anhang A)</li>
      </UL>

      {/* ═══ Bewertung ═══ */}
      <H2>Bewertung</H2>

      <P>
        Die Gesamtnote umfasst die schriftliche Arbeit, Präsentation und
        Diskussion. Es gibt 8 Kompetenzbereiche:
      </P>

      <Table
        headers={["Kompetenz", "Was wird bewertet?"]}
        rows={[
          ["Selbstkompetenz", "Zeitmanagement, Selbstständigkeit, Einhaltung von Vereinbarungen"],
          ["Inhalt & Methodik", "Fachliche Korrektheit, Tiefe, Eigenleistung"],
          ["Informationskompetenz", "Quellenauswahl, kritische Analyse"],
          ["Sprachliche Kompetenz", "Wissenschaftliche Sprache, Grammatik, Ausdruck"],
          ["Gestaltungskompetenz", "Layout, formale Anforderungen, Formatierung"],
          ["Präsentation (Struktur)", "Aufbau, roter Faden, Medieneinsatz"],
          ["Ausdrucksfähigkeit", "Verständlichkeit, Sprachgewandtheit"],
          ["Diskursfähigkeit", "Fragen beantworten, Arbeit verteidigen"],
        ]}
      />

      <Callout type="warning" title="Achtung">
        Wenn auch nur <strong>ein</strong> Kompetenzbereich mit
        &quot;nicht erfüllt&quot; bewertet wird, ist die gesamte Arbeit{" "}
        <strong>Nicht genügend</strong>. Es gibt maximal 3 Wiederholungen
        (mit neuem Thema und neuer Betreuung).
      </Callout>

      {/* ═══ Formatierung ═══ */}
      <H2>Formatierungs-Richtlinien</H2>

      <Table
        headers={["Eigenschaft", "Vorgabe"]}
        rows={[
          ["Format", "DIN A4, einseitig"],
          ["Schriftart", "Gut lesbar (z.B. Calibri, Times New Roman, Latin Modern)"],
          ["Schriftgröße", "12pt (Text), 10pt (Fußnoten)"],
          ["Zeilenabstand", "1,5-fach (Text), 1-fach (Fußnoten)"],
          ["Ränder", "Links 2,5 cm + 1 cm Bundsteg, rechts 2–2,5 cm"],
          ["Seitenzahlen", "Römisch (Vorspann), Arabisch (Hauptteil ab Einleitung)"],
          ["Direkte Zitate", "Maximal 5 % des Textes"],
        ]}
      />

      {/* ═══ Vorlagen ═══ */}
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
          Literaturverzeichnis
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

      {/* ═══ Wissenschaftliches Schreiben ═══ */}
      <H2>Tipps zum wissenschaftlichen Schreiben</H2>

      <H3>Sprachliche Regeln</H3>

      <UL>
        <li>
          <strong>Kein &quot;Ich&quot; oder &quot;Wir&quot;</strong> im
          Fließtext — passiv oder unpersönlich formulieren
        </li>
        <li>
          <strong>Sachlich und neutral:</strong> Keine Wertungen
          (&quot;offensichtlich&quot;, &quot;natürlich&quot;, &quot;cool&quot;)
        </li>
        <li>
          <strong>Keine Ausrufezeichen</strong> — nur Punkte
        </li>
        <li>
          <strong>Fachbegriffe erklären:</strong> Beim ersten Auftreten
          definieren, dann einheitlich verwenden
        </li>
        <li>
          <strong>Abkürzungen:</strong> Beim ersten Mal ausschreiben, z.B.
          &quot;Künstliche Intelligenz (KI)&quot;
        </li>
      </UL>

      <H3>Quellenarbeit</H3>

      <UL>
        <li>
          <strong>Primärquellen bevorzugen:</strong> Originalstudien,
          offizielle Dokumente, Gesetze
        </li>
        <li>
          <strong>Wikipedia nur als Einstieg</strong> — nicht als Quelle
          zitieren
        </li>
        <li>
          <strong>Im Zweifelsfall: Zitieren!</strong> Zu viele
          Quellenangaben schaden nie — fehlende Angaben sind Plagiat
        </li>
      </UL>

      <H3>Literaturrecherche</H3>

      <Table
        headers={["Datenbank", "Geeignet für"]}
        rows={[
          ["Google Scholar", "Allgemeine akademische Suche"],
          ["BASE", "Open-Access-Publikationen"],
          ["JSTOR / SpringerLink", "Geisteswissenschaften / Naturwissenschaften"],
          ["PubMed", "Medizin, Biologie"],
          ["APA PsycNet", "Psychologie"],
          ["Österr. Nationalbibliothek", "Historische und österreichische Quellen"],
        ]}
      />

      {/* ═══ Präsentation ═══ */}
      <H2>Präsentation &amp; Diskussion</H2>

      <P>
        Die Präsentation dauert maximal 25 Minuten und ist öffentlich.
      </P>

      <H3>Aufbau der Präsentation (10–15 Min.)</H3>

      <UL>
        <li>Persönlicher Zugang zum Thema</li>
        <li>Forschungsfrage und Methodik</li>
        <li>Wichtigste Ergebnisse</li>
        <li>Beantwortung der Forschungsfrage</li>
        <li>Persönliche Reflexion über den Schreibprozess</li>
      </UL>

      <H3>Typische Fragen der Kommission</H3>

      <UL>
        <li>Warum haben Sie dieses Thema gewählt?</li>
        <li>Wie sind Sie bei der Quellensuche vorgegangen?</li>
        <li>Was waren die größten Herausforderungen?</li>
        <li>Wie haben Sie KI-Tools eingesetzt?</li>
        <li>Was würden Sie rückblickend anders machen?</li>
        <li>Welche weiterführenden Fragen ergeben sich?</li>
      </UL>

      {/* ═══ Links ═══ */}
      <H2>Wichtige Links &amp; Ressourcen</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://www.ahs-aba.at",
            label: "ABA-Portal (offiziell)",
            desc: "Offizielle Seite für die Abschließende Arbeit",
          },
          {
            href: "https://www.matura.gv.at",
            label: "matura.gv.at",
            desc: "Offizielle Matura-Seite — Klausuren, Aufgabenpool, Termine",
          },
          {
            href: "https://www.bmb.gv.at/Themen/schule/schulpraxis/zentralmatura/srdp_ahs/aba.html",
            label: "BMBWF — ABA/VWA",
            desc: "Ministeriumsseite zur Abschließenden Arbeit",
          },
          {
            href: "https://aufgabenpool.at",
            label: "Aufgabenpool",
            desc: "Übungsaufgaben für Matura-Klausuren",
          },
          {
            href: "https://www.zotero.org",
            label: "Zotero",
            desc: "Kostenlose Literaturverwaltung",
          },
          {
            href: "https://scholar.google.com",
            label: "Google Scholar",
            desc: "Akademische Quellensuche",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-txt-light block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="info" title="Technischer Support">
        Bei Fragen zur ABA/VWA wenden Sie sich an Ihre Betreuungsperson. Für
        technische Probleme mit dem ABA-Portal:{" "}
        <a
          href="mailto:support-aba@aba.bildung.gv.at"
          className="text-primary hover:underline"
        >
          support-aba@aba.bildung.gv.at
        </a>{" "}
        oder +43 664 851 3000.
      </Callout>

      {/* ═══ Rechtsquellen ═══ */}
      <H2>Rechtsquellen</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            SchUG, BGBl. Nr. 472/1986 i.d.g.F.
          </a>{" "}
          — §§ 34–40 (Reifeprüfung, Abschließende Arbeit)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20007845"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Prüfungsordnung AHS, BGBl. II Nr. 297/2024
          </a>{" "}
          — §§ 7–10 (Abschließende Arbeit: Thema, Durchführung,
          Abgabetermin, Beurteilung)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/eli/bgbl/I/2024/121"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BGBl. I Nr. 121/2024
          </a>{" "}
          (ABA wird freiwillig ab Schuljahr 2024/25 bis 2028/29)
        </li>
      </UL>
    </>
  );
}
