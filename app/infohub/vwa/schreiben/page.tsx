import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Wissenschaftliches Schreiben — VWA / ABA",
  description:
    "Tipps zum wissenschaftlichen Schreiben für die VWA/ABA: Grundprinzipien, Stil, Sprache, Plagiat vermeiden.",
};

export default function VwaSchreibenPage() {
  return (
    <>
      <PageHeader title="Wissenschaftliches Schreiben — VWA / ABA" />

      <P>
        Wissenschaftliches Schreiben unterscheidet sich grundlegend von
        Alltagssprache. Diese Seite fasst die wichtigsten Regeln zusammen,
        damit Ihre VWA/ABA sprachlich und formal den Anforderungen entspricht.
      </P>

      {/* ═══ Grundprinzipien ═══ */}
      <H2>Grundprinzipien</H2>

      <UL>
        <li>
          <strong>Nachvollziehbarkeit</strong> — Methoden und Vorgehen müssen so
          beschrieben werden, dass andere sie nachvollziehen oder wiederholen
          könnten
        </li>
        <li>
          <strong>Belegbarkeit</strong> — Jede Behauptung, die nicht
          Allgemeinwissen ist, muss mit einer Quelle belegt werden
        </li>
        <li>
          <strong>Objektivität</strong> — Neutral und sachlich formulieren, keine
          persönlichen Wertungen oder Übertreibungen
        </li>
        <li>
          <strong>Ehrlichkeit</strong> — Fremde Ideen und Ergebnisse klar als
          solche kennzeichnen und korrekt zitieren
        </li>
      </UL>

      {/* ═══ Dos & Don'ts ═══ */}
      <H2>Wissenschaftlicher Stil: Dos &amp; Don&apos;ts</H2>

      <Table
        headers={["Schlecht", "Besser", "Warum"]}
        rows={[
          [
            "\"Klimawandel ist total schlimm\"",
            "\"Die globale Durchschnittstemperatur stieg seit 1880 um 1,1 °C (NASA, 2024)\"",
            "Konkrete Daten statt Wertung",
          ],
          [
            "\"Jeder weiß, dass...\"",
            "\"Laut Müller (2023, S. 42) ist...\"",
            "Quellenangabe statt Allgemeinplatz",
          ],
          [
            "\"Ich habe dann die Umfrage gemacht\"",
            "\"Die Erhebung wurde im November 2025 durchgeführt\"",
            "Passiv, kein \"Ich\"",
          ],
          [
            "\"Das Ergebnis ist super\"",
            "\"89 % der Befragten stimmten zu (siehe Tabelle 3.1)\"",
            "Messbare Daten",
          ],
          [
            "\"Wie auf Wikipedia steht...\"",
            "Originalquelle zitieren",
            "Wikipedia ist keine zitierfähige Quelle",
          ],
        ]}
      />

      {/* ═══ Perspektive ═══ */}
      <H2>Perspektive: Passiv &amp; unpersönlich</H2>

      <P>
        In wissenschaftlichen Arbeiten wird grundsätzlich die Ich-Form
        vermieden. Stattdessen formulieren Sie passiv oder unpersönlich.
      </P>

      <Table
        headers={["Falsch", "Richtig"]}
        rows={[
          [
            "\"Ich habe die Umfrage erstellt\"",
            "\"Die Umfrage wurde erstellt\"",
          ],
          [
            "\"Ich untersuche in dieser Arbeit...\"",
            "\"In der vorliegenden Arbeit wird untersucht...\"",
          ],
          [
            "\"Wir haben herausgefunden, dass...\"",
            "\"Die Analyse zeigt, dass...\"",
          ],
          [
            "\"Meiner Meinung nach...\"",
            "\"Auf Grundlage der Ergebnisse lässt sich feststellen...\"",
          ],
        ]}
      />

      <Callout type="info" title="Ausnahme: Vorwort und Erklärung">
        Die Ich-Form ist im <strong>Vorwort</strong> und in der{" "}
        <strong>Eidesstattlichen Erklärung</strong> erlaubt und sogar üblich.
        Auch die persönliche Reflexion am Ende der Präsentation darf in der
        Ich-Form gehalten sein.
      </Callout>

      {/* ═══ Zeitformen ═══ */}
      <H2>Zeitformen</H2>

      <Table
        headers={["Kontext", "Zeitform", "Beispiel"]}
        rows={[
          ["Allgemeine Fakten", "Präsens", "\"Klimawandel beeinflusst die Biodiversität\""],
          ["Eigene Methodik", "Vergangenheit", "\"Die Befragung wurde im Dezember 2025 durchgeführt\""],
          ["Quellen zitieren", "Präsens", "\"Müller beschreibt die Auswirkungen als...\""],
          ["Ergebnisse", "Vergangenheit", "\"Die Analyse ergab eine Korrelation von 0,78\""],
          ["Zusammenfassung", "Vergangenheit", "\"In dieser Arbeit wurde untersucht...\""],
          ["Ausblick", "Konjunktiv/Futur", "\"Die Studie könnte erweitert werden...\""],
        ]}
      />

      {/* ═══ Verbotene Wörter ═══ */}
      <H2>Verbotene Wörter</H2>

      <Table
        headers={["Vermeiden", "Stattdessen", "Grund"]}
        rows={[
          [
            "\"natürlich\", \"offensichtlich\"",
            "Weglassen oder belegen",
            "Leser findet es vielleicht nicht offensichtlich",
          ],
          [
            "\"sehr\", \"extrem\", \"unglaublich\"",
            "Konkrete Zahlen",
            "Unpräzise Verstärker",
          ],
          [
            "\"eigentlich\", \"quasi\", \"irgendwie\"",
            "Weglassen",
            "Signalisiert Unsicherheit",
          ],
          [
            "\"cool\", \"super\", \"toll\"",
            "Sachliche Beschreibung",
            "Umgangssprache",
          ],
          [
            "\"etc.\", \"und so weiter\"",
            "Vollständige Aufzählung oder \"unter anderem\"",
            "Lässt Fragen offen",
          ],
          [
            "\"immer\", \"nie\", \"alle\"",
            "\"häufig\", \"selten\", \"die meisten\"",
            "Absolute Aussagen sind selten korrekt",
          ],
          [
            "Ausrufezeichen",
            "Punkt",
            "Unwissenschaftlich",
          ],
        ]}
      />

      {/* ═══ Absatzstruktur ═══ */}
      <H2>Absatzstruktur</H2>

      <P>
        Jeder Absatz in einer wissenschaftlichen Arbeit folgt einem klaren
        Aufbau:
      </P>

      <UL>
        <li>
          <strong>Kernsatz</strong> (1. Satz) — Nennt das Thema des Absatzes
        </li>
        <li>
          <strong>Erklärung &amp; Beleg</strong> — Argumente, Daten und
          Quellenverweise
        </li>
        <li>
          <strong>Überleitung</strong> (optional) — Leitet zum nächsten
          Abschnitt über
        </li>
      </UL>

      <Callout type="success" title="Beispiel: Guter Absatz">
        Der Klimawandel hat messbare Auswirkungen auf die Landwirtschaft in
        Niederösterreich. Laut Kromp-Kolb (2023, S. 87) sank der
        Ernteertrag bei Winterweizen zwischen 2015 und 2022 um
        durchschnittlich 12 %. Als Hauptursache nennt die Studie zunehmende
        Trockenperioden im Frühsommer. Diese Entwicklung wirft die Frage auf,
        welche Anpassungsstrategien den Ertragsrückgang bremsen könnten.
      </Callout>

      {/* ═══ Kapitelübergänge ═══ */}
      <H2>Kapitelübergänge</H2>

      <P>
        Jedes Kapitel beginnt mit 2–3 einleitenden Sätzen, die erklären, worum
        es in diesem Abschnitt geht und wie er sich zum vorherigen verhält. Nie
        direkt mit einer Unterüberschrift starten.
      </P>

      <Table
        headers={["Situation", "Formulierung"]}
        rows={[
          ["Neues Kapitel einleiten", "\"Im folgenden Kapitel werden die theoretischen Grundlagen dargestellt, die für das Verständnis der Analyse notwendig sind.\""],
          ["Vom Theorieteil zur Analyse", "\"Aufbauend auf den in Kapitel 2 dargestellten Grundlagen wird im Folgenden die eigene Erhebung beschrieben.\""],
          ["Zum Fazit überleiten", "\"Nachdem die Ergebnisse dargestellt wurden, werden diese nun zusammengefasst und in Bezug zur Forschungsfrage diskutiert.\""],
          ["Rückverweis", "\"Wie in Abschnitt 2.3 erläutert, ...\""],
        ]}
      />

      {/* ═══ Zahlen & Einheiten ═══ */}
      <H2>Zahlen &amp; Einheiten</H2>

      <UL>
        <li><strong>Eins bis zwölf</strong> als Wort, ab 13 als Ziffer</li>
        <li><strong>Technische Werte</strong> immer als Ziffer (z.B. 5 km, 3,2 %)</li>
        <li><strong>Leerzeichen</strong> zwischen Zahl und Einheit (12 cm, 20 °C)</li>
        <li><strong>Dezimalkomma</strong> im Deutschen (3,14 — nicht 3.14)</li>
        <li>Am Satzanfang: Zahlen ausschreiben (&quot;Zwanzig Personen wurden befragt&quot;)</li>
      </UL>

      {/* ═══ Fachbegriffe ═══ */}
      <H2>Fachbegriffe &amp; Fremdwörter</H2>

      <UL>
        <li>
          Beim <strong>ersten Auftreten erklären</strong>:{" "}
          &quot;Die Vorwissenschaftliche Arbeit (VWA) ist...&quot;
        </li>
        <li>
          Englische Fachbegriffe beim ersten Auftreten <strong>kursiv</strong>{" "}
          setzen
        </li>
        <li>
          <strong>Einheitlich bleiben</strong>: Nicht zwischen Synonymen
          wechseln — wer &quot;Erhebung&quot; schreibt, sollte nicht plötzlich
          &quot;Umfrage&quot; verwenden
        </li>
        <li>
          <strong>Abkürzungen</strong> beim ersten Mal ausschreiben:{" "}
          &quot;Künstliche Intelligenz (KI)&quot;, danach nur &quot;KI&quot;
        </li>
      </UL>

      {/* ═══ Typische Formulierungen ═══ */}
      <H2>Typische Formulierungen</H2>

      <H3>Einleitung</H3>
      <UL>
        <li>&quot;Die vorliegende Arbeit beschäftigt sich mit...&quot;</li>
        <li>&quot;Ziel ist es, die Frage zu beantworten, inwiefern...&quot;</li>
        <li>&quot;In Kapitel 2 werden die theoretischen Grundlagen dargestellt...&quot;</li>
        <li>&quot;Die Relevanz des Themas ergibt sich aus...&quot;</li>
        <li>&quot;Im Rahmen dieser Arbeit wird untersucht, ob...&quot;</li>
      </UL>

      <H3>Theorieteil</H3>
      <UL>
        <li>&quot;X wird definiert als... (Autor, Jahr)&quot;</li>
        <li>&quot;Laut Müller (2023) ist...&quot;</li>
        <li>&quot;Im Gegensatz zu X bietet Y den Vorteil, dass...&quot;</li>
        <li>&quot;Zusammenfassend lässt sich feststellen, dass...&quot;</li>
        <li>&quot;Wie bereits in Abschnitt 2.1 dargestellt, ...&quot;</li>
      </UL>

      <H3>Analyseteil</H3>
      <UL>
        <li>&quot;Die Erhebung wurde mittels... durchgeführt&quot;</li>
        <li>&quot;Wie Abbildung X zeigt, ...&quot;</li>
        <li>&quot;Tabelle X fasst die Ergebnisse zusammen&quot;</li>
        <li>&quot;Es zeigt sich ein signifikanter Zusammenhang zwischen...&quot;</li>
        <li>&quot;Die Daten wurden mithilfe von... ausgewertet&quot;</li>
      </UL>

      <H3>Fazit</H3>
      <UL>
        <li>&quot;In der vorliegenden Arbeit wurde untersucht, ...&quot;</li>
        <li>&quot;Die Forschungsfrage kann wie folgt beantwortet werden: ...&quot;</li>
        <li>&quot;Es ist jedoch einschränkend festzuhalten, dass...&quot;</li>
        <li>&quot;Für weiterführende Forschung wäre es interessant, ...&quot;</li>
        <li>&quot;Abschließend lässt sich festhalten, dass...&quot;</li>
      </UL>

      {/* ═══ Checkliste ═══ */}
      <H2>Checkliste vor der Abgabe</H2>

      <Callout type="success" title="Sprachliche Qualität prüfen">
        <ul>
          <li>Keine Umgangssprache, Wertungen oder Ich-Form (außer Vorwort)?</li>
          <li>Einheitliche Zeitform innerhalb der Abschnitte?</li>
          <li>Alle Behauptungen mit Quellen belegt?</li>
          <li>Fachbegriffe beim ersten Auftreten erklärt?</li>
          <li>Einleitende Absätze in jedem Kapitel vorhanden?</li>
          <li>Abbildungen und Tabellen im Text referenziert?</li>
          <li>Zahlen und Einheiten korrekt formatiert?</li>
          <li>Rechtschreibung geprüft?</li>
          <li>Roter Faden erkennbar — kann ein Außenstehender der Argumentation folgen?</li>
        </ul>
      </Callout>

      {/* ═══ Plagiat ═══ */}
      <H2>Plagiat vermeiden</H2>

      <P>
        Plagiat ist die Übernahme fremder Gedanken ohne korrekte
        Quellenangabe. Folgende Handlungen gelten als Plagiat:
      </P>

      <UL>
        <li><strong>Wörtliches Kopieren</strong> ohne Anführungszeichen und Quellenangabe</li>
        <li><strong>Paraphrasieren ohne Quelle</strong> — auch in eigenen Worten muss die Herkunft belegt werden</li>
        <li><strong>Übersetzen ohne Quelle</strong> — fremdsprachige Texte übersetzen und als eigene Arbeit ausgeben</li>
        <li><strong>Bilder ohne Quelle</strong> — Abbildungen, Grafiken und Tabellen aus fremden Werken</li>
        <li><strong>Ideen ohne Verweis</strong> — auch Argumente und Theorien anderer müssen zitiert werden</li>
      </UL>

      <H3>So vermeiden Sie Plagiat</H3>

      <UL>
        <li>
          <strong>Sofort speichern:</strong> Jede Quelle beim Finden direkt in
          Zotero oder Ihre Literaturverwaltung aufnehmen
        </li>
        <li>
          <strong>Paraphrasierungstechnik:</strong> Quelle lesen, zuklappen,
          aus dem Gedächtnis in eigenen Worten schreiben, dann mit Quellenangabe
          versehen
        </li>
        <li>
          <strong>Direkte Zitate sparsam:</strong> Nur verwenden, wenn der
          exakte Wortlaut inhaltlich wichtig ist (max. 5 % des Textes)
        </li>
        <li>
          <strong>Im Zweifelsfall: Zitieren!</strong> Zu viele Quellenangaben
          schaden nie — fehlende Angaben sind Plagiat
        </li>
      </UL>

      <Callout type="danger" title="Konsequenzen bei Plagiat">
        Die Schule prüft alle Arbeiten mit Plagiatssoftware (Turnitin). Bei
        nachgewiesenem Plagiat wird die Arbeit mit{" "}
        <strong>&quot;Nicht beurteilt&quot;</strong> bewertet. Die VWA/ABA muss
        dann mit neuem Thema und neuer Betreuungsperson wiederholt werden.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>Weitere VWA-Themen</H2>
      <CardGrid>
        <Card href="/infohub/vwa" icon="🎓" title="Übersicht">Zeitplan, Formate, Bewertung</Card>
        <Card href="/infohub/vwa/aufbau" icon="📋" title="Aufbau & Forschungsfrage">Gliederung, Formatierung</Card>
        <Card href="/infohub/vwa/zitieren" icon="📚" title="Zitieren & Zotero">Literaturverwaltung, KI-Nutzung</Card>
        <Card href="/infohub/vwa/vorlagen" icon="📄" title="Vorlagen & Tools">LaTeX, Word, Downloads</Card>
        <Card href="/infohub/vwa/praesentation" icon="🎤" title="Präsentation">Aufbau, Fragen, Tipps</Card>
      </CardGrid>
    </>
  );
}
