import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Templates & Tools — VWA / ABA",
  description:
    "Word template, setup instructions, tips and reference management for the VWA/ABA at BG Zehnergasse.",
};

export default function VwaVorlagenPageEN() {
  return (
    <>
      <PageHeader title="Templates & Tools — VWA / ABA" />

      <P>
        BG Zehnergasse provides a professional Word template. It includes the
        school branding, pre-configured styles and an automatic table of
        contents — you only need to replace the placeholders.
      </P>

      {/* ═══ Download ═══ */}
      <H2>Template for Download</H2>

      <CardGrid>
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

      {/* ═══ Word ═══ */}
      <H2>Writing a VWA with Microsoft Word</H2>

      <P>
        With the right settings you can achieve a professional result in Word.
        The key steps:
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

      <Callout type="success" title="Tip: Automatic backup with OneDrive">
        Save your work in <strong>OneDrive</strong> (via your school account,
        5 TB). The file is then backed up automatically and you can return to
        an earlier version at any time via the <strong>version history</strong>.
      </Callout>

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
