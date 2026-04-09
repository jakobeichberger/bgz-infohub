import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Templates & Tools — VWA / ABA",
  description:
    "LaTeX and Word templates, setup instructions, file descriptions and tips for the VWA/ABA at BG Zehnergasse.",
};

export default function VwaVorlagenPageEN() {
  return (
    <>
      <PageHeader title="Templates & Tools — VWA / ABA" />

      <P>
        BG Zehnergasse provides professional templates for LaTeX and Microsoft
        Word. Both templates include the school branding, pre-configured styles
        and automatic directories.
      </P>

      {/* ═══ Downloads ═══ */}
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

      <Callout type="info" title="Reference management with Zotero + LaTeX">
        With the Better BibTeX plugin you can automatically export your
        Zotero library as a .bib file. This means you never have to maintain
        the bibliography entries manually. Full details are on the{" "}
        <Link
          href="/en/infohub/vwa/zitieren"
          className="text-primary hover:underline"
        >
          Citations &amp; Zotero
        </Link>{" "}
        page.
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
          plugin for automatic citations and bibliography — full details on the{" "}
          <Link
            href="/en/infohub/vwa/zitieren"
            className="text-primary hover:underline"
          >
            Citations &amp; Zotero
          </Link>{" "}
          page
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

      <Callout type="warning" title="Common Word mistakes">
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

      {/* ═══ Navigation ═══ */}
      <H2>More VWA Topics</H2>
      <CardGrid>
        <Card href="/en/infohub/vwa" icon="🎓" title="Overview">Timeline, formats, assessment</Card>
        <Card href="/en/infohub/vwa/aufbau" icon="📋" title="Structure & Research Question">Outline, formatting</Card>
        <Card href="/en/infohub/vwa/schreiben" icon="✍️" title="Academic Writing">Style, language, plagiarism</Card>
        <Card href="/en/infohub/vwa/zitieren" icon="📚" title="Citations & Zotero">Reference management, AI usage</Card>
        <Card href="/en/infohub/vwa/praesentation" icon="🎤" title="Presentation">Structure, questions, tips</Card>
      </CardGrid>
    </>
  );
}
