import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Präsentation & Diskussion — VWA / ABA",
  description:
    "Aufbau der VWA-Präsentation, typische Fragen der Kommission und Tipps für die mündliche Prüfung.",
};

export default function VwaPraesentationPage() {
  return (
    <>
      <PageHeader title="Präsentation & Diskussion — VWA / ABA" />

      <P>
        Die Präsentation dauert maximal 25 Minuten und ist öffentlich. Sie
        besteht aus einem Vortragsteil (10–15 Min.) und einer anschließenden
        Diskussion mit der Kommission (5–10 Min.).
      </P>

      {/* ═══ Aufbau der Präsentation ═══ */}
      <H2>Aufbau der Präsentation (10–15 Min.)</H2>

      <UL>
        <li>Persönlicher Zugang zum Thema</li>
        <li>Forschungsfrage und Methodik</li>
        <li>Wichtigste Ergebnisse</li>
        <li>Beantwortung der Forschungsfrage</li>
        <li>Persönliche Reflexion über den Schreibprozess</li>
      </UL>

      <Callout type="info" title="Struktur der Präsentation">
        Ihre Präsentation muss nicht den gesamten Inhalt der Arbeit abdecken.
        Konzentrieren Sie sich auf die <strong>Kernaussagen</strong>: Was war
        die Frage, wie sind Sie vorgegangen, was haben Sie herausgefunden?
        Details kann die Kommission in der Diskussion erfragen.
      </Callout>

      {/* ═══ Typische Fragen ═══ */}
      <H2>Typische Fragen der Kommission</H2>

      <UL>
        <li>Warum haben Sie dieses Thema gewählt?</li>
        <li>Wie sind Sie bei der Quellensuche vorgegangen?</li>
        <li>Was waren die größten Herausforderungen?</li>
        <li>Wie haben Sie KI-Tools eingesetzt?</li>
        <li>Was würden Sie rückblickend anders machen?</li>
        <li>Welche weiterführenden Fragen ergeben sich?</li>
      </UL>

      <P>
        Die Kommission prüft, ob Sie Ihre Arbeit verstanden haben und das
        Thema eigenständig bearbeitet haben. Es geht nicht um
        Auswendiglernen, sondern um <strong>Verständnis</strong> und{" "}
        <strong>Reflexion</strong>.
      </P>

      {/* ═══ Tipps ═══ */}
      <H2>Tipps für die Präsentation</H2>

      <UL>
        <li>
          <strong>Nicht ablesen</strong> — Karteikarten oder Stichpunkte
          verwenden, nie den gesamten Text vorlesen
        </li>
        <li>
          <strong>Blickkontakt</strong> mit der Kommission halten
        </li>
        <li>
          <strong>Langsam und deutlich sprechen</strong> — Nervosität führt
          oft zu zu schnellem Sprechtempo
        </li>
        <li>
          <strong>Medien sinnvoll einsetzen</strong> — PowerPoint, Poster
          oder Demonstrationen als Unterstützung, nicht als Hauptakteur
        </li>
        <li>
          <strong>Zeitmanagement üben</strong> — vorab mindestens zweimal
          proben und die Zeit stoppen
        </li>
        <li>
          <strong>Auf Rückfragen gefasst sein</strong> — die Kommission
          prüft Verständnis, nicht Auswendiglernen
        </li>
      </UL>

      <Callout type="success" title="Probepräsentation">
        Halten Sie Ihre Präsentation mindestens einmal vor Familie oder
        Freunden. Bitten Sie um ehrliches Feedback zu Tempo, Verständlichkeit
        und Zeitmanagement. Viele Betreuungspersonen bieten auch einen
        Probetermin an — nutzen Sie dieses Angebot!
      </Callout>

      {/* ═══ Bewertung ═══ */}
      <H2>Bewertung der Präsentation</H2>

      <P>
        Die Präsentation und Diskussion werden in drei Kompetenzbereichen
        bewertet:
      </P>

      <Table
        headers={["Kompetenz", "Was wird bewertet?"]}
        rows={[
          ["Präsentation (Struktur)", "Aufbau, roter Faden, Medieneinsatz"],
          ["Ausdrucksfähigkeit", "Verständlichkeit, Sprachgewandtheit"],
          ["Diskursfähigkeit", "Fragen beantworten, Arbeit verteidigen"],
        ]}
      />

      <Callout type="warning" title="Achtung">
        Wenn auch nur <strong>ein</strong> Kompetenzbereich mit
        &quot;nicht erfüllt&quot; bewertet wird, ist die gesamte Arbeit{" "}
        <strong>Nicht genügend</strong>. Das gilt sowohl für die schriftlichen
        als auch für die mündlichen Kompetenzbereiche.
      </Callout>

      {/* ═══ Technischer Support ═══ */}
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

      {/* ═══ Navigation ═══ */}
      <H2>Weitere VWA-Themen</H2>
      <CardGrid>
        <Card href="/infohub/vwa" icon="🎓" title="Übersicht">Zeitplan, Formate, Bewertung</Card>
        <Card href="/infohub/vwa/aufbau" icon="📋" title="Aufbau & Forschungsfrage">Gliederung, Formatierung</Card>
        <Card href="/infohub/vwa/schreiben" icon="✍️" title="Wissenschaftliches Schreiben">Stil, Sprache, Plagiat</Card>
        <Card href="/infohub/vwa/zitieren" icon="📚" title="Zitieren & Zotero">Literaturverwaltung, KI-Nutzung</Card>
        <Card href="/infohub/vwa/vorlagen" icon="📄" title="Vorlagen & Tools">LaTeX, Word, Downloads</Card>
      </CardGrid>
    </>
  );
}
