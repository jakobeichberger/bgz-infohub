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

      {/* ═══ Unterseiten-Navigation ═══ */}
      <CardGrid>
        <Card href="/infohub/vwa/aufbau" icon="📋" title="Aufbau & Forschungsfrage">
          Gliederung, Forschungsfrage formulieren, Formatierung
        </Card>
        <Card href="/infohub/vwa/schreiben" icon="✍️" title="Wissenschaftliches Schreiben">
          Stil, Sprache, Dos & Don&apos;ts, Plagiat vermeiden
        </Card>
        <Card href="/infohub/vwa/zitieren" icon="📚" title="Zitieren & Zotero">
          Literaturverwaltung, Zotero für Word & LaTeX, KI-Nutzung
        </Card>
        <Card href="/infohub/vwa/vorlagen" icon="📄" title="Vorlagen & Tools">
          LaTeX-Vorlage, Word-Vorlage, Downloads, Einrichtung
        </Card>
        <Card href="/infohub/vwa/praesentation" icon="🎤" title="Präsentation & Diskussion">
          Aufbau, typische Fragen, Bewertung, Tipps
        </Card>
      </CardGrid>

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
            className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
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
