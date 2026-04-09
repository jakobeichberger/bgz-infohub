import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Aufbau & Forschungsfrage — VWA / ABA",
  description:
    "Aufbau der VWA/ABA: Gliederung, Forschungsfrage formulieren, Formatierungs-Richtlinien und Tipps.",
};

export default function VwaAufbauPage() {
  return (
    <>
      <PageHeader title="Aufbau & Forschungsfrage — VWA / ABA" />

      <P>
        Die richtige Gliederung und eine klare Forschungsfrage sind das
        Fundament jeder erfolgreichen VWA/ABA. Auf dieser Seite finden Sie den
        empfohlenen Aufbau, Tipps zur Formulierung der Forschungsfrage und die
        Formatierungs-Richtlinien.
      </P>

      {/* ═══ Aufbau der Arbeit ═══ */}
      <H2>Aufbau der Arbeit</H2>

      <H3>Vorspann (römische Seitenzahlen)</H3>
      <UL>
        <li><strong>Titelblatt</strong> — Schullogo, Titel, Name, Klasse, Betreuung, Abgabedatum</li>
        <li><strong>Selbstständigkeitserklärung</strong></li>
        <li><strong>Abstract</strong> — 1.000–1.500 Zeichen, auf Deutsch oder Englisch</li>
        <li><strong>Inhaltsverzeichnis</strong></li>
        <li>Optional: Vorwort, Abbildungs-/Tabellenverzeichnis, Abkürzungsverzeichnis</li>
      </UL>

      <Callout type="info" title="Abstract schreiben">
        Das Abstract fasst Ihre gesamte Arbeit auf einer halben Seite zusammen:
        Fragestellung, Methode, Ergebnisse und Fazit. Schreiben Sie es
        <strong> zuletzt</strong>, wenn die Arbeit fertig ist. Der Umfang
        beträgt 1.000–1.500 Zeichen (inkl. Leerzeichen).
      </Callout>

      <H3>Hauptteil (arabische Seitenzahlen)</H3>
      <UL>
        <li><strong>Einleitung</strong> — Hintergrund, Forschungsfrage, Methodik, Aufbau der Arbeit</li>
        <li><strong>Theoretischer Teil</strong> — Fachlicher Hintergrund, Literaturüberblick, Definitionen</li>
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

      <Callout type="warning" title="Häufige Fehler bei Forschungsfragen">
        <ul>
          <li><strong>Zu breit:</strong> &quot;Was ist Klimawandel?&quot; — das ist ein Referat, keine Forschungsfrage</li>
          <li><strong>Ja/Nein-Frage:</strong> &quot;Ist Social Media schlecht?&quot; — muss eine offene W-Frage sein</li>
          <li><strong>Suggestiv:</strong> &quot;Warum ist Bio-Landwirtschaft besser?&quot; — setzt ein Ergebnis voraus</li>
          <li><strong>Nicht beantwortbar:</strong> Die Frage muss im Rahmen einer VWA realistisch bearbeitbar sein</li>
        </ul>
      </Callout>

      {/* ═══ Formatierungs-Richtlinien ═══ */}
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

      <Callout type="info" title="Bundsteg beachten">
        Der Bundsteg (1 cm zusätzlich links) ist der Bereich, der durch die
        Bindung verdeckt wird. Insgesamt ergibt sich ein linker Rand von
        3,5 cm. Die BG Zehnergasse Vorlagen haben diese Einstellungen bereits
        vorkonfiguriert.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>Weitere VWA-Themen</H2>
      <CardGrid>
        <Card href="/infohub/vwa" icon="🎓" title="Übersicht">Zeitplan, Formate, Bewertung</Card>
        <Card href="/infohub/vwa/schreiben" icon="✍️" title="Wissenschaftliches Schreiben">Stil, Sprache, Plagiat</Card>
        <Card href="/infohub/vwa/zitieren" icon="📚" title="Zitieren & Zotero">Literaturverwaltung, KI-Nutzung</Card>
        <Card href="/infohub/vwa/vorlagen" icon="📄" title="Vorlagen & Tools">LaTeX, Word, Downloads</Card>
        <Card href="/infohub/vwa/praesentation" icon="🎤" title="Präsentation">Aufbau, Fragen, Tipps</Card>
      </CardGrid>
    </>
  );
}
