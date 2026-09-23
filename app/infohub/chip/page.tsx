import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Schüler:innen-Chip — Zutritt zur Schule",
  description:
    "FAQ zum Schüler:innen-Chip am BG Zehnergasse: Verwendung, Aktualisierung am Online-Terminal, Verlust, Ersatzchip und Zutrittsregistrierung.",
};

export default function ChipPage() {
  return (
    <>
      <PageHeader title="Schüler:innen-Chip — Zutritt zur Schule" />

      <P>
        Der <strong>Schüler:innen-Chip</strong> ist der persönliche Schlüssel
        zur Schule. Hier finden Sie die wichtigsten Fragen und Antworten rund
        um Verwendung, Aktualisierung und Verlust des Chips.
      </P>

      <Callout type="info" title="Offizielles Dokument">
        Alle Fragen und Antworten finden Sie auch im offiziellen PDF der
        Schule:{" "}
        <a
          href="/templates/faq-schuelerinnen-chip.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          FAQ Schüler:innen-Chips (PDF)
        </a>
      </Callout>

      {/* ═══ Überblick ═══ */}
      <H2>Auf einen Blick</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Zweck", "Persönlicher Schlüssel zur Schule"],
          ["Kosten", "Kostenlose Leihgabe — bleibt Eigentum der Schule"],
          ["Anzahl", "Ein persönlicher Chip pro Schülerin bzw. Schüler"],
          ["Rückgabe", "Nach Ende des Schulbesuchs, im Idealfall nach der Matura"],
          [
            "Aktualisierung",
            "Zu Schulbeginn und bei Bedarf — am Online-Terminal in der Aula (1. Stock)",
          ],
          ["Verlust", "Sofort melden, damit der Chip gesperrt werden kann"],
          ["Ersatzchip", "10 EUR — der ursprüngliche Chip wird dabei gesperrt"],
        ]}
      />

      <Callout type="info" title="Nicht mit der edu.Card verwechseln">
        Der Schüler:innen-Chip ist eine kostenlose Leihgabe für den Zutritt zur
        Schule. Der Schülerausweis mit Kopierfunktion ist die{" "}
        <Link href="/infohub/educard" className="text-primary hover:underline">
          edu.Card
        </Link>{" "}
        — sie wird separat bestellt und bezahlt.
      </Callout>

      {/* ═══ Allgemeines ═══ */}
      <H2>Allgemeines zum Chip</H2>

      <H3>Wofür brauche ich den Chip?</H3>
      <P>
        Der Chip ist <strong>der persönliche Schlüssel zur Schule</strong>.
        Führen Sie ihn daher <strong>immer mit sich</strong> und verwahren Sie
        ihn <strong>achtsam und sicher</strong>.
      </P>

      <H3>Wem gehört der Chip?</H3>
      <P>
        Der Chip ist eine <strong>kostenlose Leihgabe der Schule</strong> und
        bleibt im Eigentum der Schule.
      </P>

      <H3>Wie lange darf ich den Chip behalten?</H3>
      <P>
        Der Chip muss <strong>erst nach Ende des Schulbesuchs</strong>{" "}
        zurückgegeben werden — im Idealfall <strong>nach der Matura</strong>.
      </P>

      <H3>Ist mein Chip personalisiert?</H3>
      <P>
        Ja. <strong>Jeder Chip ist personalisiert</strong> und eindeutig einer
        Schülerin bzw. einem Schüler zugeordnet.
      </P>

      <H3>Bekomme ich mehrere Chips?</H3>
      <P>
        Nein. <strong>Jede Schülerin und jeder Schüler erhält nur einen
        persönlichen Chip.</strong>
      </P>

      <H3>Können Eltern einen eigenen Chip bekommen?</H3>
      <P>
        Nein. Aufgrund des hohen administrativen Aufwands — derzeit werden rund{" "}
        <strong>1.400 Chips</strong> verwaltet — können{" "}
        <strong>keine Chips an Eltern ausgegeben</strong> werden.
      </P>

      {/* ═══ Aktualisieren ═══ */}
      <H2>Chip aktualisieren</H2>

      <H3>Muss ich den Chip regelmäßig aktualisieren?</H3>
      <P>
        Ja. Der Chip wird <strong>zu Beginn jedes Schuljahres</strong>{" "}
        aktualisiert — <strong>bei Bedarf</strong> ist das auch unterjährig
        möglich.
      </P>

      <Callout type="success" title="Wo wird der Chip aktualisiert?">
        Am <strong>Online-Terminal in der Aula im 1. Stock</strong> bei den
        Computern.
      </Callout>

      {/* ═══ Verlust ═══ */}
      <H2>Verlust &amp; Ersatzchip</H2>

      <H3>Was mache ich, wenn ich meinen Chip verliere?</H3>
      <P>
        Melden Sie den Verlust <strong>sofort</strong>, damit der Chip{" "}
        <strong>gesperrt</strong> werden kann.
      </P>

      <H3>Bekomme ich bei Verlust einen Ersatzchip?</H3>
      <P>
        Ja. Gegen eine <strong>Gebühr von 10 EUR</strong> kann ein Ersatzchip
        ausgegeben werden.
      </P>

      <Callout type="warning" title="Wichtig">
        Mit der Ausgabe des Ersatzchips wird der{" "}
        <strong>ursprüngliche Chip gesperrt</strong> und kann anschließend nicht
        mehr verwendet werden.
      </Callout>

      {/* ═══ Zutritt & Sicherheit ═══ */}
      <H2>Zutritt &amp; Videoüberwachung</H2>

      <H3>Wird registriert, wann ich die Schule betrete?</H3>
      <P>
        Ja. <strong>Außerhalb der regulären Eingangszeiten am Morgen</strong>{" "}
        wird der Zutritt über den Chip registriert.
      </P>

      <H3>Wird der Eingangsbereich videoüberwacht?</H3>
      <P>
        Ja. <strong>Der Eingangsbereich der Schule wird videoüberwacht.</strong>
      </P>
    </>
  );
}
