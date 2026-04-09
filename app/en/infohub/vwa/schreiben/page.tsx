import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Academic Writing — VWA / ABA",
  description:
    "Tips for academic writing in your VWA/ABA: core principles, style, language, avoiding plagiarism.",
};

export default function VwaSchreibenPageEN() {
  return (
    <>
      <PageHeader title="Academic Writing — VWA / ABA" />

      <P>
        Academic writing differs fundamentally from everyday language. This
        page summarises the most important rules so that your VWA/ABA meets the
        linguistic and formal requirements.
      </P>

      {/* ═══ Core Principles ═══ */}
      <H2>Core Principles</H2>

      <UL>
        <li>
          <strong>Traceability</strong> — Methods and procedures must be described
          so that others can follow or replicate them
        </li>
        <li>
          <strong>Evidence</strong> — Every claim that is not common knowledge
          must be backed by a source
        </li>
        <li>
          <strong>Objectivity</strong> — Write in a neutral, factual manner with
          no personal judgements or exaggerations
        </li>
        <li>
          <strong>Honesty</strong> — Clearly identify and correctly cite ideas
          and results taken from other works
        </li>
      </UL>

      {/* ═══ Dos & Don'ts ═══ */}
      <H2>Academic Style: Dos &amp; Don&apos;ts</H2>

      <Table
        headers={["Poor", "Better", "Why"]}
        rows={[
          [
            "\"Climate change is really terrible\"",
            "\"The global average temperature has risen by 1.1 °C since 1880 (NASA, 2024)\"",
            "Concrete data instead of value judgement",
          ],
          [
            "\"Everyone knows that...\"",
            "\"According to Mueller (2023, p. 42)...\"",
            "Source reference instead of platitude",
          ],
          [
            "\"I then did the survey\"",
            "\"The survey was conducted in November 2025\"",
            "Passive voice, no \"I\"",
          ],
          [
            "\"The result is great\"",
            "\"89% of respondents agreed (see Table 3.1)\"",
            "Measurable data",
          ],
          [
            "\"As it says on Wikipedia...\"",
            "Cite the original source",
            "Wikipedia is not a citable source",
          ],
        ]}
      />

      {/* ═══ Perspective ═══ */}
      <H2>Perspective: Passive &amp; Impersonal</H2>

      <P>
        Academic papers generally avoid first-person language. Instead, use
        passive or impersonal constructions.
      </P>

      <Table
        headers={["Incorrect", "Correct"]}
        rows={[
          [
            "\"I created the survey\"",
            "\"The survey was created\"",
          ],
          [
            "\"I investigate in this paper...\"",
            "\"This paper investigates...\"",
          ],
          [
            "\"We found that...\"",
            "\"The analysis shows that...\"",
          ],
          [
            "\"In my opinion...\"",
            "\"Based on the results, it can be concluded that...\"",
          ],
        ]}
      />

      <Callout type="info" title="Exception: Preface and declaration">
        First-person language is permitted and even customary in the{" "}
        <strong>preface</strong> and the{" "}
        <strong>declaration of independent authorship</strong>.
        The personal reflection at the end of the presentation may also be
        written in the first person.
      </Callout>

      {/* ═══ Tenses ═══ */}
      <H2>Tenses</H2>

      <Table
        headers={["Context", "Tense", "Example"]}
        rows={[
          ["General facts", "Present", "\"Climate change affects biodiversity\""],
          ["Own methodology", "Past", "\"The survey was conducted in December 2025\""],
          ["Citing sources", "Present", "\"Mueller describes the effects as...\""],
          ["Results", "Past", "\"The analysis revealed a correlation of 0.78\""],
          ["Summary", "Past", "\"This paper investigated...\""],
          ["Outlook", "Conditional/Future", "\"The study could be extended...\""],
        ]}
      />

      {/* ═══ Words to Avoid ═══ */}
      <H2>Words to Avoid</H2>

      <Table
        headers={["Avoid", "Use instead", "Reason"]}
        rows={[
          [
            "\"obviously\", \"of course\"",
            "Omit or provide evidence",
            "The reader may not find it obvious",
          ],
          [
            "\"very\", \"extremely\", \"incredibly\"",
            "Specific figures",
            "Imprecise intensifiers",
          ],
          [
            "\"actually\", \"sort of\", \"somehow\"",
            "Omit",
            "Signals uncertainty",
          ],
          [
            "\"cool\", \"awesome\", \"great\"",
            "Factual description",
            "Colloquial language",
          ],
          [
            "\"etc.\", \"and so on\"",
            "Complete list or \"among others\"",
            "Leaves questions open",
          ],
          [
            "\"always\", \"never\", \"all\"",
            "\"frequently\", \"rarely\", \"most\"",
            "Absolute statements are seldom accurate",
          ],
          [
            "Exclamation marks",
            "Full stop",
            "Unacademic",
          ],
        ]}
      />

      {/* ═══ Paragraph Structure ═══ */}
      <H2>Paragraph Structure</H2>

      <P>
        Every paragraph in an academic paper follows a clear pattern:
      </P>

      <UL>
        <li>
          <strong>Topic sentence</strong> (1st sentence) — States the main point
          of the paragraph
        </li>
        <li>
          <strong>Explanation &amp; evidence</strong> — Arguments, data and
          source references
        </li>
        <li>
          <strong>Transition</strong> (optional) — Leads into the next section
        </li>
      </UL>

      <Callout type="success" title="Example: Good paragraph">
        Climate change has measurable effects on agriculture in Lower Austria.
        According to Kromp-Kolb (2023, p. 87), winter wheat yields fell by an
        average of 12% between 2015 and 2022. The study cites increasing
        dry spells in early summer as the primary cause. This trend raises
        the question of which adaptation strategies could slow the decline
        in yields.
      </Callout>

      {/* ═══ Chapter Transitions ═══ */}
      <H2>Chapter Transitions</H2>

      <P>
        Every chapter begins with 2–3 introductory sentences explaining what
        the section covers and how it relates to the previous one. Never start
        directly with a sub-heading.
      </P>

      <Table
        headers={["Situation", "Phrasing"]}
        rows={[
          ["Introducing a new chapter", "\"The following chapter presents the theoretical foundations necessary for understanding the analysis.\""],
          ["From theory to analysis", "\"Building on the foundations outlined in Chapter 2, the following section describes the author's own survey.\""],
          ["Transition to conclusion", "\"Having presented the results, this chapter summarises the findings and discusses them in relation to the research question.\""],
          ["Back-reference", "\"As explained in Section 2.3, ...\""],
        ]}
      />

      {/* ═══ Numbers & Units ═══ */}
      <H2>Numbers &amp; Units</H2>

      <UL>
        <li><strong>One to twelve</strong> spelled out, 13 and above as digits</li>
        <li><strong>Technical values</strong> always as digits (e.g. 5 km, 3.2%)</li>
        <li><strong>Space</strong> between number and unit (12 cm, 20 °C)</li>
        <li><strong>Decimal point</strong> in English (3.14 — not 3,14)</li>
        <li>At the start of a sentence: spell out numbers (&quot;Twenty respondents were surveyed&quot;)</li>
      </UL>

      {/* ═══ Technical Terms ═══ */}
      <H2>Technical Terms &amp; Foreign Words</H2>

      <UL>
        <li>
          <strong>Explain on first occurrence</strong>:{" "}
          &quot;The Pre-Scientific Paper (VWA) is...&quot;
        </li>
        <li>
          Foreign-language technical terms should be <strong>italicised</strong>{" "}
          on first occurrence
        </li>
        <li>
          <strong>Stay consistent</strong>: Do not switch between synonyms
          — if you write &quot;survey&quot;, do not suddenly use
          &quot;questionnaire&quot; for the same thing
        </li>
        <li>
          <strong>Abbreviations</strong> — spell out in full the first time:{" "}
          &quot;Artificial Intelligence (AI)&quot;, then just &quot;AI&quot;
        </li>
      </UL>

      {/* ═══ Typical Phrases ═══ */}
      <H2>Typical Phrases</H2>

      <H3>Introduction</H3>
      <UL>
        <li>&quot;This paper examines...&quot;</li>
        <li>&quot;The aim is to answer the question of to what extent...&quot;</li>
        <li>&quot;Chapter 2 presents the theoretical foundations...&quot;</li>
        <li>&quot;The relevance of this topic stems from...&quot;</li>
        <li>&quot;Within the scope of this paper, it is investigated whether...&quot;</li>
      </UL>

      <H3>Theoretical section</H3>
      <UL>
        <li>&quot;X is defined as... (Author, Year)&quot;</li>
        <li>&quot;According to Mueller (2023)...&quot;</li>
        <li>&quot;In contrast to X, Y offers the advantage that...&quot;</li>
        <li>&quot;In summary, it can be stated that...&quot;</li>
        <li>&quot;As already outlined in Section 2.1, ...&quot;</li>
      </UL>

      <H3>Analysis section</H3>
      <UL>
        <li>&quot;The data was collected by means of...&quot;</li>
        <li>&quot;As Figure X shows, ...&quot;</li>
        <li>&quot;Table X summarises the results&quot;</li>
        <li>&quot;There is a significant correlation between...&quot;</li>
        <li>&quot;The data was analysed using...&quot;</li>
      </UL>

      <H3>Conclusion</H3>
      <UL>
        <li>&quot;This paper investigated...&quot;</li>
        <li>&quot;The research question can be answered as follows: ...&quot;</li>
        <li>&quot;It should be noted, however, that...&quot;</li>
        <li>&quot;For further research, it would be interesting to...&quot;</li>
        <li>&quot;In conclusion, it can be stated that...&quot;</li>
      </UL>

      {/* ═══ Checklist ═══ */}
      <H2>Pre-Submission Checklist</H2>

      <Callout type="success" title="Check your language quality">
        <ul>
          <li>No colloquial language, value judgements or first person (except preface)?</li>
          <li>Consistent tense within each section?</li>
          <li>Every claim backed by a source?</li>
          <li>Technical terms explained on first occurrence?</li>
          <li>Introductory paragraphs in every chapter?</li>
          <li>Figures and tables referenced in the text?</li>
          <li>Numbers and units formatted correctly?</li>
          <li>Spelling checked?</li>
          <li>Clear thread — can an outsider follow the argument?</li>
        </ul>
      </Callout>

      {/* ═══ Plagiarism ═══ */}
      <H2>Avoiding Plagiarism</H2>

      <P>
        Plagiarism is the use of someone else&apos;s ideas without proper
        attribution. The following actions constitute plagiarism:
      </P>

      <UL>
        <li><strong>Verbatim copying</strong> without quotation marks and source reference</li>
        <li><strong>Paraphrasing without a source</strong> — even in your own words the origin must be cited</li>
        <li><strong>Translating without a source</strong> — translating foreign-language texts and presenting them as your own work</li>
        <li><strong>Images without a source</strong> — figures, graphics and tables from other works</li>
        <li><strong>Ideas without a reference</strong> — arguments and theories of others must also be cited</li>
      </UL>

      <H3>How to Avoid Plagiarism</H3>

      <UL>
        <li>
          <strong>Save immediately:</strong> Add every source to Zotero or your
          reference manager as soon as you find it
        </li>
        <li>
          <strong>Paraphrasing technique:</strong> Read the source, close it,
          write from memory in your own words, then add the source reference
        </li>
        <li>
          <strong>Use direct quotes sparingly:</strong> Only when the exact
          wording is important for the content (max. 5% of the text)
        </li>
        <li>
          <strong>When in doubt: cite!</strong> Too many references never hurt
          — missing references constitute plagiarism
        </li>
      </UL>

      <Callout type="danger" title="Consequences of plagiarism">
        The school checks all papers with plagiarism software (Turnitin). If
        plagiarism is proven, the paper is graded{" "}
        <strong>&quot;Not assessed&quot;</strong>. The VWA/ABA must then be
        repeated with a new topic and a new supervisor.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>More VWA Topics</H2>
      <CardGrid>
        <Card href="/en/infohub/vwa" icon="🎓" title="Overview">Timeline, formats, assessment</Card>
        <Card href="/en/infohub/vwa/aufbau" icon="📋" title="Structure & Research Question">Outline, formatting</Card>
        <Card href="/en/infohub/vwa/zitieren" icon="📚" title="Citations & Zotero">Reference management, AI usage</Card>
        <Card href="/en/infohub/vwa/vorlagen" icon="📄" title="Templates & Tools">LaTeX, Word, downloads</Card>
        <Card href="/en/infohub/vwa/praesentation" icon="🎤" title="Presentation">Structure, questions, tips</Card>
      </CardGrid>
    </>
  );
}
