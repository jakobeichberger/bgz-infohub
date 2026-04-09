import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Structure & Research Question — VWA / ABA",
  description:
    "Structure of the VWA/ABA: outline, formulating a research question, formatting guidelines and tips.",
};

export default function VwaAufbauPageEN() {
  return (
    <>
      <PageHeader title="Structure & Research Question — VWA / ABA" />

      <P>
        A clear outline and a well-defined research question are the foundation
        of every successful VWA/ABA. This page covers the recommended structure,
        tips for formulating your research question and the formatting
        guidelines.
      </P>

      {/* ═══ Structure of the Paper ═══ */}
      <H2>Structure of the Paper</H2>

      <H3>Front Matter (Roman page numbers)</H3>
      <UL>
        <li><strong>Title page</strong> — school logo, title, name, class, supervisor, submission date</li>
        <li><strong>Declaration of independent authorship</strong></li>
        <li><strong>Abstract</strong> — 1,000–1,500 characters, in German or English</li>
        <li><strong>Table of contents</strong></li>
        <li>Optional: preface, list of figures/tables, list of abbreviations</li>
      </UL>

      <Callout type="info" title="Writing the abstract">
        The abstract summarises your entire paper on half a page:
        research question, method, results and conclusion. Write it
        <strong> last</strong>, once the paper is finished. The length
        should be 1,000–1,500 characters (including spaces).
      </Callout>

      <H3>Main Body (Arabic page numbers)</H3>
      <UL>
        <li><strong>Introduction</strong> — background, research question, methodology, structure of the paper</li>
        <li><strong>Theoretical section</strong> — subject background, literature review, definitions</li>
        <li><strong>Empirical / analytical section</strong> — your research, analysis, results</li>
        <li><strong>Conclusion</strong> — summary, answer to the research question, outlook</li>
      </UL>

      <H3>Back Matter</H3>
      <UL>
        <li><strong>Bibliography and list of sources</strong></li>
        <li><strong>Appendix</strong> — interview transcripts, questionnaires, AI usage declaration</li>
      </UL>

      {/* ═══ Research Question ═══ */}
      <H2>The Research Question</H2>

      <P>
        The research question is the core of your paper. It must:
      </P>

      <UL>
        <li>Be an <strong>open-ended question</strong> (How? Why? To what extent? Which?)</li>
        <li><strong>Not</strong> be answerable with Yes/No</li>
        <li>Be precise and specific (max. 250 characters)</li>
        <li>Not be suggestive or evaluative</li>
      </UL>

      <Table
        headers={["Poor", "Better"]}
        rows={[
          ["Is climate change bad?", "To what extent does climate change affect wine production in Lower Austria?"],
          ["Social media", "What influence does Instagram use have on the self-image of 16–18-year-olds?"],
          ["Is AI dangerous?", "How does the use of AI systems change journalism in Austria?"],
        ]}
      />

      <Callout type="warning" title="Common mistakes with research questions">
        <ul>
          <li><strong>Too broad:</strong> &quot;What is climate change?&quot; — that is a report, not a research question</li>
          <li><strong>Yes/No question:</strong> &quot;Is social media bad?&quot; — must be an open-ended question</li>
          <li><strong>Suggestive:</strong> &quot;Why is organic farming better?&quot; — presumes an outcome</li>
          <li><strong>Not feasible:</strong> The question must be realistically answerable within the scope of a VWA</li>
        </ul>
      </Callout>

      {/* ═══ Formatting Guidelines ═══ */}
      <H2>Formatting Guidelines</H2>

      <Table
        headers={["Property", "Requirement"]}
        rows={[
          ["Format", "DIN A4, single-sided"],
          ["Font", "Easily readable (e.g. Calibri, Times New Roman, Latin Modern)"],
          ["Font size", "12pt (body text), 10pt (footnotes)"],
          ["Line spacing", "1.5 (body text), 1.0 (footnotes)"],
          ["Margins", "Left 2.5 cm + 1 cm binding offset, right 2–2.5 cm"],
          ["Page numbers", "Roman (front matter), Arabic (main body from introduction)"],
          ["Direct quotes", "Maximum 5% of the text"],
        ]}
      />

      <Callout type="info" title="Binding offset">
        The binding offset (1 cm extra on the left) is the area covered by
        the binding. This results in a total left margin of 3.5 cm. The
        BG Zehnergasse templates already have these settings pre-configured.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>More VWA Topics</H2>
      <CardGrid>
        <Card href="/en/infohub/vwa" icon="🎓" title="Overview">Timeline, formats, assessment</Card>
        <Card href="/en/infohub/vwa/schreiben" icon="✍️" title="Academic Writing">Style, language, plagiarism</Card>
        <Card href="/en/infohub/vwa/zitieren" icon="📚" title="Citations & Zotero">Reference management, AI usage</Card>
        <Card href="/en/infohub/vwa/vorlagen" icon="📄" title="Templates & Tools">LaTeX, Word, downloads</Card>
        <Card href="/en/infohub/vwa/praesentation" icon="🎤" title="Presentation">Structure, questions, tips</Card>
      </CardGrid>
    </>
  );
}
