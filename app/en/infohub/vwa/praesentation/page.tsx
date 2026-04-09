import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Presentation & Discussion — VWA / ABA",
  description:
    "Structure of the VWA presentation, typical questions from the panel and tips for the oral examination.",
};

export default function VwaPraesentationPageEN() {
  return (
    <>
      <PageHeader title="Presentation & Discussion — VWA / ABA" />

      <P>
        The presentation lasts a maximum of 25 minutes and is open to the
        public. It consists of a presentation part (10–15 min.) followed by
        a discussion with the examination panel (5–10 min.).
      </P>

      {/* ═══ Presentation Structure ═══ */}
      <H2>Presentation Structure (10–15 min.)</H2>

      <UL>
        <li>Personal connection to the topic</li>
        <li>Research question and methodology</li>
        <li>Key findings</li>
        <li>Answer to the research question</li>
        <li>Personal reflection on the writing process</li>
      </UL>

      <Callout type="info" title="Structure of the presentation">
        Your presentation does not need to cover the entire content of the
        paper. Focus on the <strong>key points</strong>: What was the
        question, how did you approach it, what did you find? The panel can
        ask about details during the discussion.
      </Callout>

      {/* ═══ Typical Questions ═══ */}
      <H2>Typical Questions from the Panel</H2>

      <UL>
        <li>Why did you choose this topic?</li>
        <li>How did you go about finding sources?</li>
        <li>What were the biggest challenges?</li>
        <li>How did you use AI tools?</li>
        <li>What would you do differently in hindsight?</li>
        <li>What further questions arise from your work?</li>
      </UL>

      <P>
        The panel checks whether you have understood your paper and worked on
        the topic independently. It is not about memorisation but about{" "}
        <strong>understanding</strong> and <strong>reflection</strong>.
      </P>

      {/* ═══ Tips ═══ */}
      <H2>Tips for the Presentation</H2>

      <UL>
        <li>
          <strong>Do not read aloud</strong> — use cue cards or bullet points,
          never read the full text
        </li>
        <li>
          <strong>Maintain eye contact</strong> with the panel
        </li>
        <li>
          <strong>Speak slowly and clearly</strong> — nervousness often leads
          to speaking too fast
        </li>
        <li>
          <strong>Use media wisely</strong> — PowerPoint, posters or
          demonstrations as support, not the main event
        </li>
        <li>
          <strong>Practise time management</strong> — rehearse at least twice
          beforehand and time yourself
        </li>
        <li>
          <strong>Be prepared for follow-up questions</strong> — the panel
          tests understanding, not memorisation
        </li>
      </UL>

      <Callout type="success" title="Practice presentation">
        Give your presentation at least once in front of family or friends.
        Ask for honest feedback on pace, clarity and time management. Many
        supervisors also offer a practice session — take them up on it!
      </Callout>

      {/* ═══ Assessment ═══ */}
      <H2>Assessment of the Presentation</H2>

      <P>
        The presentation and discussion are assessed in three competency
        areas:
      </P>

      <Table
        headers={["Competency", "What is assessed?"]}
        rows={[
          ["Presentation (structure)", "Structure, coherence, use of media"],
          ["Expressiveness", "Clarity, eloquence"],
          ["Discussion skills", "Answering questions, defending the paper"],
        ]}
      />

      <Callout type="warning" title="Important">
        If even <strong>one</strong> competency area is rated
        &quot;not fulfilled&quot;, the entire paper receives a{" "}
        <strong>Fail</strong> grade. This applies to both the written and
        the oral competency areas.
      </Callout>

      {/* ═══ Technical Support ═══ */}
      <Callout type="info" title="Technical Support">
        For questions about the ABA/VWA, contact your supervisor. For
        technical issues with the ABA portal:{" "}
        <a
          href="mailto:support-aba@aba.bildung.gv.at"
          className="text-primary hover:underline"
        >
          support-aba@aba.bildung.gv.at
        </a>{" "}
        or +43 664 851 3000.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>More VWA Topics</H2>
      <CardGrid>
        <Card href="/en/infohub/vwa" icon="🎓" title="Overview">Timeline, formats, assessment</Card>
        <Card href="/en/infohub/vwa/aufbau" icon="📋" title="Structure & Research Question">Outline, formatting</Card>
        <Card href="/en/infohub/vwa/schreiben" icon="✍️" title="Academic Writing">Style, language, plagiarism</Card>
        <Card href="/en/infohub/vwa/zitieren" icon="📚" title="Citations & Zotero">Reference management, AI usage</Card>
        <Card href="/en/infohub/vwa/vorlagen" icon="📄" title="Templates & Tools">LaTeX, Word, downloads</Card>
      </CardGrid>
    </>
  );
}
