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

      {/* ═══ Structure ═══ */}
      <H2>Structure of the Paper</H2>

      <H3>Front Matter (Roman page numbers)</H3>
      <UL>
        <li><strong>Title page</strong> — school logo, title, name, class, supervisor, submission date</li>
        <li><strong>Declaration of independent authorship</strong></li>
        <li><strong>Abstract</strong> — 1,000–1,500 characters, in German or English</li>
        <li><strong>Table of contents</strong></li>
        <li>Optional: preface, list of figures/tables, list of abbreviations</li>
      </UL>

      <H3>Main Body (Arabic page numbers)</H3>
      <UL>
        <li><strong>Introduction</strong> — background, research question, methodology, structure</li>
        <li><strong>Theoretical section</strong> — subject background, literature review</li>
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

      {/* ═══ Citations ═══ */}
      <H2>Proper Citations</H2>

      <P>
        The citation style is agreed upon with your supervisor and must be
        applied <strong>consistently throughout</strong> the paper.
      </P>

      <Table
        headers={["Style", "Typical for", "Example"]}
        rows={[
          [
            "APA (in-text)",
            "Natural sciences, psychology, IT, sports",
            "(Mueller, 2020, p. 15)",
          ],
          [
            "Footnotes (German style)",
            "Humanities, history, philosophy",
            "Cf. Mueller, Maria: Title. Vienna 2020, p. 15.",
          ],
        ]}
      />

      <Callout type="danger" title="Avoid plagiarism!">
        Every borrowed idea — even in your own words — must include a source
        reference. Missing references are considered an attempt to deceive and
        result in a grade of{" "}
        <strong>&quot;Not assessed&quot;</strong>.
      </Callout>

      <H3>AI Usage (ChatGPT &amp; Co.)</H3>

      <UL>
        <li>Generative AI may be used as an <strong>aid</strong></li>
        <li>All AI usage must be <strong>documented and cited</strong></li>
        <li>Full prompts and outputs must be included in the <strong>appendix</strong></li>
        <li>A <strong>signed AI usage declaration</strong> is required</li>
        <li>Example citation: (OpenAI ChatGPT, &quot;Chat title&quot;, 15.01.2026, Appendix A)</li>
      </UL>

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

      {/* ═══ Formatting ═══ */}
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

      {/* ═══ Templates ═══ */}
      <H2>Templates for Download</H2>

      <CardGrid>
        <Card
          href="/templates/bgz-vwa.zip"
          icon="📄"
          title="LaTeX Template (recommended)"
        >
          Professional LaTeX template with APA citation style, automatic table
          of contents, list of figures and BG Zehnergasse branding. Ideal for
          academic papers.
        </Card>
        <Card
          href="/templates/bgz-vwa-word.docx"
          icon="📝"
          title="Word Template"
        >
          Professional Word template with predefined styles, automatic table
          of contents and BG Zehnergasse branding. Simply replace the
          placeholders and start writing.
        </Card>
      </CardGrid>

      {/* ═══ LaTeX ═══ */}
      <H2>Writing a VWA with LaTeX</H2>

      <P>
        LaTeX produces professionally typeset documents with automatic
        directories and correct citations. The school template is
        pre-configured — you only need to insert your content.
      </P>

      <H3>Setup</H3>

      <StepList>
        <Step title="Install a TeX distribution">
          <strong>Windows:</strong> MiKTeX or TeX Live (full installation,
          4–6 GB). <strong>macOS:</strong> MacTeX. <strong>Linux:</strong> TeX Live.
        </Step>
        <Step title="Install an editor">
          <strong>TeXstudio</strong> (beginner-friendly) or{" "}
          <strong>VS Code</strong> with the LaTeX Workshop extension.
        </Step>
        <Step title="Download the template">
          Download the{" "}
          <a
            href="/templates/bgz-vwa.zip"
            className="text-primary hover:underline"
          >
            BG Zehnergasse VWA template
          </a>{" "}
          and extract the ZIP file.
        </Step>
        <Step title="Open main.tex and fill in metadata">
          Enter your name, title, class, supervisor and subject area.
        </Step>
        <Step title="Compile">
          Press F5 (TeXstudio) or Ctrl+Alt+B (VS Code). On the first run:
          pdflatex → biber → pdflatex → pdflatex.
        </Step>
      </StepList>

      <H3>Important Files in the Template</H3>

      <Table
        headers={["File", "Purpose"]}
        rows={[
          ["main.tex", "Main file — enter metadata here"],
          ["bgzvwa.cls", "Document class (do not modify)"],
          ["kapitel/einleitung.tex", "Introduction with research question"],
          ["kapitel/hauptteil.tex", "Theoretical and empirical section"],
          ["kapitel/fazit.tex", "Conclusion and outlook"],
          ["literatur.bib", "Bibliography (BibTeX format)"],
          ["images/", "Folder for figures"],
        ]}
      />

      <Callout type="success" title="Tip: Use Git">
        Use Git and GitHub for version control. This gives you a backup,
        lets you track changes and revert to a previous version if needed.
      </Callout>

      {/* ═══ Word ═══ */}
      <H2>Writing a VWA with Microsoft Word</H2>

      <P>
        Word is the simpler alternative to LaTeX. With the right settings you
        can achieve a professional result.
      </P>

      <H3>Setup</H3>

      <StepList>
        <Step title="Set page margins">
          Layout → Margins → Custom Margins: Left 3.5 cm (incl. binding
          offset), Right 2.5 cm, Top 3 cm, Bottom 3 cm.
        </Step>
        <Step title="Font and paragraph">
          Font: Calibri or Times New Roman, 12pt.
          Paragraph → Line spacing: 1.5. Spacing after: 6pt.
        </Step>
        <Step title="Use styles">
          <strong>Always</strong> use styles for headings (Heading 1, 2, 3).
          Never format manually! This ensures the automatic table of contents
          works correctly.
        </Step>
        <Step title="Insert a table of contents">
          References → Table of Contents → Automatic Table.
          Before submission: right-click → &quot;Update Field&quot;.
        </Step>
        <Step title="Insert page numbers">
          Insert → Page Number. For Roman numerals in the front matter:
          insert a section break, then change the page number format.
        </Step>
      </StepList>

      <H3>Reference Management in Word</H3>

      <UL>
        <li>
          <strong>Zotero</strong> (recommended, free): Install the Zotero Word
          plugin for automatic citations and bibliography
        </li>
        <li>
          <strong>Word Source Manager</strong>: References → Insert Citation →
          Add New Source (simpler but less flexible)
        </li>
        <li>
          <strong>Citavi</strong>: Professional, free for students (Windows
          only)
        </li>
      </UL>

      <Callout type="warning" title="Common Word Mistakes">
        <ul>
          <li>
            <strong>Manually formatted headings:</strong> Always use styles —
            otherwise the automatic table of contents will not work
          </li>
          <li>
            <strong>No section breaks:</strong> You need section breaks for
            different page numbering (Roman/Arabic)
          </li>
          <li>
            <strong>Images not anchored:</strong> Right-click on image →
            Wrap Text → &quot;In Line with Text&quot; or anchor it
          </li>
          <li>
            <strong>Directories not updated:</strong> Always update all
            directories before submission
          </li>
        </ul>
      </Callout>

      {/* ═══ Academic Writing ═══ */}
      <H2>Tips for Academic Writing</H2>

      <H3>Language Rules</H3>

      <UL>
        <li>
          <strong>No &quot;I&quot; or &quot;we&quot;</strong> in the body text
          — use passive or impersonal constructions
        </li>
        <li>
          <strong>Objective and neutral:</strong> No value judgements
          (&quot;obviously&quot;, &quot;of course&quot;, &quot;cool&quot;)
        </li>
        <li>
          <strong>No exclamation marks</strong> — use full stops only
        </li>
        <li>
          <strong>Explain technical terms:</strong> Define them on first
          occurrence, then use consistently
        </li>
        <li>
          <strong>Abbreviations:</strong> Write out in full the first time,
          e.g. &quot;Artificial Intelligence (AI)&quot;
        </li>
      </UL>

      <H3>Working with Sources</H3>

      <UL>
        <li>
          <strong>Prefer primary sources:</strong> Original studies, official
          documents, legislation
        </li>
        <li>
          <strong>Wikipedia only as a starting point</strong> — do not cite it
          as a source
        </li>
        <li>
          <strong>When in doubt: cite!</strong> Too many references never hurt
          — missing references constitute plagiarism
        </li>
      </UL>

      <H3>Literature Research</H3>

      <Table
        headers={["Database", "Suitable for"]}
        rows={[
          ["Google Scholar", "General academic search"],
          ["BASE", "Open-access publications"],
          ["JSTOR / SpringerLink", "Humanities / natural sciences"],
          ["PubMed", "Medicine, biology"],
          ["APA PsycNet", "Psychology"],
          ["Austrian National Library", "Historical and Austrian sources"],
        ]}
      />

      {/* ═══ Presentation ═══ */}
      <H2>Presentation &amp; Discussion</H2>

      <P>
        The presentation lasts a maximum of 25 minutes and is open to the
        public.
      </P>

      <H3>Presentation Structure (10–15 min.)</H3>

      <UL>
        <li>Personal connection to the topic</li>
        <li>Research question and methodology</li>
        <li>Key findings</li>
        <li>Answer to the research question</li>
        <li>Personal reflection on the writing process</li>
      </UL>

      <H3>Typical Questions from the Panel</H3>

      <UL>
        <li>Why did you choose this topic?</li>
        <li>How did you go about finding sources?</li>
        <li>What were the biggest challenges?</li>
        <li>How did you use AI tools?</li>
        <li>What would you do differently in hindsight?</li>
        <li>What further questions arise from your work?</li>
      </UL>

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
