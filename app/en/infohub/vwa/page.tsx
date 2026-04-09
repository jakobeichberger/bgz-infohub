import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "VWA / ABA — Pre-Scientific Paper",
  description:
    "Everything about the Pre-Scientific Paper (VWA / ABA) at BG Zehnergasse: process, structure, citations, LaTeX template, Word template and tips.",
};

export default function VwaPageEN() {
  return (
    <>
      <PageHeader title="VWA / ABA — Pre-Scientific Paper" />

      <P>
        The <strong>Pre-Scientific Paper (VWA)</strong> — officially called{" "}
        <strong>Concluding Paper (ABA)</strong> since 2024 — is the first
        pillar of the standardised school-leaving examination (Matura) at
        Austrian academic secondary schools (AHS). It demonstrates your ability
        to independently research and present a topic in a scholarly manner.
      </P>

      {/* ═══ Sub-page Navigation ═══ */}
      <CardGrid>
        <Card href="/en/infohub/vwa/aufbau" icon="📋" title="Structure & Research Question">
          Outline, formulating a research question, formatting
        </Card>
        <Card href="/en/infohub/vwa/schreiben" icon="✍️" title="Academic Writing">
          Style, language, dos &amp; don&apos;ts, avoiding plagiarism
        </Card>
        <Card href="/en/infohub/vwa/zitieren" icon="📚" title="Citations & Zotero">
          Reference management, Zotero for Word &amp; LaTeX, AI usage
        </Card>
        <Card href="/en/infohub/vwa/vorlagen" icon="📄" title="Templates & Tools">
          LaTeX template, Word template, downloads, setup
        </Card>
        <Card href="/en/infohub/vwa/praesentation" icon="🎤" title="Presentation & Discussion">
          Structure, typical questions, assessment, tips
        </Card>
      </CardGrid>

      {/* ═══ Matura Context ═══ */}
      <Callout type="info" title="The Matura at a Glance — 3-Pillar Model">
        The AHS Matura consists of <strong>three pillars</strong> with
        a total of 7 partial exams:
        <ul>
          <li><strong>Pillar 1:</strong> Concluding Paper (ABA) — presentation &amp; discussion</li>
          <li><strong>Pillar 2:</strong> Written exams — 3 or 4 exams (German, Mathematics, Modern Language mandatory)</li>
          <li><strong>Pillar 3:</strong> Oral exams — 2 to 3 exams from topic pools</li>
        </ul>
        <p>
          The system is <strong>modular</strong>: a negative result in one
          pillar does not prevent sitting exams in the other pillars. For a
          failed written exam there is a compensation exam (oral, max. grade:
          Satisfactory). Each partial exam may be repeated up to 3 times.
        </p>
        <p>
          More information:{" "}
          <a href="https://www.matura.gv.at" target="_blank" rel="noopener noreferrer">
            matura.gv.at
          </a>
        </p>
      </Callout>

      <Callout type="warning" title="2024 Reform: VWA becomes optional">
        Since the 2024/25 school year the VWA/ABA is{" "}
        <strong>optional</strong> (
        <a href="https://www.ris.bka.gv.at/eli/bgbl/I/2024/121" target="_blank" rel="noopener noreferrer">BGBl. I No. 121/2024</a>).
        Students may instead choose an additional
        written or oral exam. The decision must be reported by{" "}
        <strong>15 January</strong> of Year 11 (7. Klasse). This regulation
        applies until 2028/29 inclusive.
      </Callout>

      {/* ═══ Overview ═══ */}
      <H2>At a Glance</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Official name", "Concluding Paper (ABA), formerly VWA"],
          ["Length", "Approx. 40,000–60,000 characters (from 2026 no upper limit)"],
          ["Format", "Individual work (no teams)"],
          ["Timeline", "Year 11 (topic selection) to Year 12 (submission & presentation)"],
          ["Supervision", "1 supervisor (teacher at the school)"],
          ["Submission", "End of the 1st week of the 2nd semester in Year 12"],
          ["Examination", "Presentation & discussion (max. 25 min.)"],
          ["Legal basis", "SchUG, Examination Regulations AHS (BGBl. II No. 297/2024)"],
        ]}
      />

      {/* ═══ Three Formats ═══ */}
      <H2>Three Formats to Choose From</H2>

      <Table
        headers={["Format", "Description", "Examples"]}
        rows={[
          [
            "Research Paper",
            "Classic written paper using scholarly methodology — gathering, examining and analysing information",
            "Interviews, experiments, surveys, source analysis, lab protocols",
          ],
          [
            "Design-based Paper",
            "Result of a deliberate creative process + written documentation with background, methodology and reflection",
            "Podcast, video reportage, sports programme, graphic novel, website",
          ],
          [
            "Artistic Paper",
            "Practical artistic output contextualised within relevant art genres + comparison with similar works and reflection",
            "Composition, sculpture, painting, installation, performance",
          ],
        ]}
      />

      {/* ═══ Timeline ═══ */}
      <H2>Timeline &amp; Process</H2>

      <H3>Year 11 — Preparation</H3>

      <StepList>
        <Step title="Find a topic (1st semester)">
          Choose a topic that interests you. Discuss it with a teacher who can
          supervise you. The supervisor must be professionally competent, but the
          topic does not have to fall within their teaching subject.
        </Step>
        <Step title="Create the proposal (1st semester)">
          Prepare the proposal (Erwartungshorizont, always in German):
          topic title (max. 100 characters), research question,
          core bibliography (min. 3 works), methods, outline.
        </Step>
        <Step title="Approval (by end of March)">
          The proposal is submitted via the{" "}
          <a
            href="https://www.ahs-aba.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            ABA portal
          </a>
          . The principal approves or rejects it. Once approved, the topic is
          fixed.
        </Step>
        <Step title="Start writing (2nd semester + summer holidays)">
          Literature research, write first chapters, get feedback from your
          supervisor.
        </Step>
      </StepList>

      <H3>Year 12 — Completion</H3>

      <StepList>
        <Step title="Draft (by end of September)">
          Submit a preliminary draft to your supervisor.
        </Step>
        <Step title="Revision (October–December)">
          Incorporate feedback, proofread, finalise formatting.
        </Step>
        <Step title="Submission (end of 1st week, 2nd semester)">
          <strong>2 bound copies</strong> (principal&apos;s office + supervisor) +
          digital upload to the ABA portal. Include:{" "}
          <strong>companion protocol</strong> (workflow, tools used, AI usage)
          and <strong>supervision protocol</strong> (maintained by the
          supervisor).
        </Step>
        <Step title="Presentation & discussion (approx. March)">
          Max. 25 minutes: presentation (10–15 min.) + discussion with the
          examination panel (5–10 min.). The presentation is public.
        </Step>
      </StepList>

      <H3>Make-up Submission Dates</H3>

      <Table
        headers={["Session", "Submission Deadline"]}
        rows={[
          ["Main session", "End of 1st week of 2nd semester"],
          ["1st make-up", "End of 1st week of classes (autumn)"],
          ["2nd make-up", "5th school day in December"],
          ["3rd make-up", "End of 1st week of 2nd semester (following year)"],
        ]}
      />

      {/* ═══ Assessment ═══ */}
      <H2>Assessment</H2>

      <P>
        The overall grade covers the written paper, presentation and
        discussion. There are 8 competency areas:
      </P>

      <Table
        headers={["Competency", "What is assessed?"]}
        rows={[
          ["Self-competence", "Time management, independence, adherence to agreements"],
          ["Content & methodology", "Subject accuracy, depth, original contribution"],
          ["Information competence", "Source selection, critical analysis"],
          ["Language competence", "Academic language, grammar, expression"],
          ["Design competence", "Layout, formal requirements, formatting"],
          ["Presentation (structure)", "Structure, coherence, use of media"],
          ["Expressiveness", "Clarity, eloquence"],
          ["Discussion skills", "Answering questions, defending the paper"],
        ]}
      />

      <Callout type="warning" title="Important">
        If even <strong>one</strong> competency area is rated
        &quot;not fulfilled&quot;, the entire paper receives a{" "}
        <strong>Fail</strong> grade. There are a maximum of 3 retakes
        (with a new topic and new supervisor).
      </Callout>

      {/* ═══ Links ═══ */}
      <H2>Important Links &amp; Resources</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://www.ahs-aba.at",
            label: "ABA Portal (official)",
            desc: "Official site for the Concluding Paper",
          },
          {
            href: "https://www.matura.gv.at",
            label: "matura.gv.at",
            desc: "Official Matura site — exams, task pool, dates",
          },
          {
            href: "https://www.bmb.gv.at/Themen/schule/schulpraxis/zentralmatura/srdp_ahs/aba.html",
            label: "BMBWF — ABA/VWA",
            desc: "Ministry page on the Concluding Paper",
          },
          {
            href: "https://aufgabenpool.at",
            label: "Aufgabenpool",
            desc: "Practice tasks for Matura written exams",
          },
          {
            href: "https://www.zotero.org",
            label: "Zotero",
            desc: "Free reference management",
          },
          {
            href: "https://scholar.google.com",
            label: "Google Scholar",
            desc: "Academic source search",
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

      {/* ═══ Legal Sources ═══ */}
      <H2>Legal Sources</H2>

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
          — §§ 34–40 (Matura, Concluding Paper)
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
          — §§ 7–10 (Concluding Paper: topic, process, submission,
          assessment)
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
          (ABA becomes optional from 2024/25 to 2028/29)
        </li>
      </UL>
    </>
  );
}
