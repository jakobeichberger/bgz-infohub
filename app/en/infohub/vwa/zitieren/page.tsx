import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Citations & Reference Management — VWA / ABA",
  description:
    "Proper citations, Zotero for LaTeX and Word, documenting AI usage and literature research for the VWA/ABA.",
};

export default function VwaZitierenPageEN() {
  return (
    <>
      <PageHeader title="Citations & Reference Management — VWA / ABA" />

      <P>
        Correct citations are one of the most important requirements of an
        academic paper. This page explains how to properly reference sources,
        document AI usage and efficiently manage your references with Zotero.
      </P>

      {/* ═══ Proper Citations ═══ */}
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

      {/* ═══ AI Usage ═══ */}
      <H2>AI Usage (ChatGPT &amp; Co.)</H2>

      <UL>
        <li>Generative AI may be used as an <strong>aid</strong></li>
        <li>All AI usage must be <strong>documented and cited</strong></li>
        <li>Full prompts and outputs must be included in the <strong>appendix</strong></li>
        <li>A <strong>signed AI usage declaration</strong> is required</li>
        <li>Example citation: (OpenAI ChatGPT, &quot;Chat title&quot;, 15.01.2026, Appendix A)</li>
      </UL>

      <Callout type="warning" title="AI does not replace your own thinking">
        AI-generated text must not be used verbatim. Check every AI output
        for accuracy — generative models can produce plausible-sounding but
        incorrect information (&quot;hallucinations&quot;). Your own scholarly
        contribution must remain clearly recognisable.
      </Callout>

      {/* ═══ Zotero ═══ */}
      <H2>Zotero — Free Reference Management</H2>

      <H3>What is Zotero?</H3>
      <P>
        Zotero is a free, open-source reference manager. It stores sources,
        organises them into collections and automatically generates citations
        and bibliographies in Word and LaTeX. Recommended by the school for
        all VWA papers.
      </P>

      <H3>Installation</H3>
      <StepList>
        <Step title="Download Zotero">
          Download from{" "}
          <a
            href="https://www.zotero.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            zotero.org
          </a>{" "}
          — available for Windows, macOS and Linux. Free, no registration
          required.
        </Step>
        <Step title="Install the Browser Connector">
          Install the Zotero Connector for Chrome, Firefox or Edge. This lets
          you save sources directly from the browser with a single click.
        </Step>
        <Step title="Create an account (optional)">
          A free account on{" "}
          <a
            href="https://www.zotero.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            zotero.org
          </a>{" "}
          syncs your library across devices (300 MB free, usually sufficient
          for a VWA).
        </Step>
      </StepList>

      <H3>Collecting Sources</H3>
      <Table
        headers={["Method", "How it works"]}
        rows={[
          [
            "Browser button",
            "Click the Zotero Connector button on any web page, book or article — the source is saved automatically with all metadata",
          ],
          [
            "ISBN/DOI",
            "In Zotero: magic wand icon — enter ISBN or DOI — the source is found automatically",
          ],
          [
            "Manually",
            "In Zotero: green + button — choose source type (book, journal, etc.) — fill in the fields",
          ],
          [
            "Import PDF",
            "Drag a PDF into Zotero — metadata is detected automatically",
          ],
        ]}
      />

      <Callout type="info" title="Tip">
        Save every source in Zotero <strong>immediately</strong> when you
        find it. Tracking down sources later wastes unnecessary time.
      </Callout>

      <H3>Organising</H3>
      <UL>
        <li>
          <strong>Collections:</strong> Create folders for chapters (e.g.
          &quot;Theory&quot;, &quot;Methodology&quot;, &quot;Results&quot;)
        </li>
        <li>
          <strong>Tags:</strong> Assign keywords (e.g.
          &quot;climate change&quot;, &quot;statistics&quot;, &quot;interview&quot;)
        </li>
        <li>
          <strong>Notes:</strong> Add your personal annotations to each source
          — this makes writing easier later
        </li>
      </UL>

      <H3>Zotero + Microsoft Word</H3>
      <StepList>
        <Step title="Check the plugin">
          The Zotero Word plugin is installed automatically when you install
          Zotero. A new &quot;Zotero&quot; tab appears in Word. If not: Zotero
          → Preferences → Cite → Word Processors → &quot;Reinstall Microsoft
          Word Plugin&quot;.
        </Step>
        <Step title="Choose a citation style">
          On the first citation Zotero asks for the style. Recommended for VWA:{" "}
          &quot;APA 7th Edition&quot; (natural sciences) or &quot;Chicago
          Manual of Style 17th (note)&quot; (humanities). The style can be
          changed at any time.
        </Step>
        <Step title="Insert a citation">
          Place the cursor → Zotero tab → &quot;Add Citation&quot; → search
          for and select the source → enter the page number → Enter. The
          citation is formatted automatically.
        </Step>
        <Step title="Create the bibliography">
          Place the cursor at the end of the paper → Zotero tab → &quot;Add
          Bibliography&quot; → the bibliography is generated automatically and
          updates when new citations are added.
        </Step>
        <Step title="Before submission: Refresh">
          Zotero tab → click &quot;Refresh&quot; to ensure all citations and
          the bibliography are up to date.
        </Step>
      </StepList>

      <Callout type="warning" title="Do not edit citations manually">
        Do <strong>not</strong> edit citations manually in the text! Always
        use the Zotero tab in Word. Manual changes are overwritten on the
        next refresh.
      </Callout>

      <H3>Zotero + LaTeX (Better BibTeX)</H3>
      <StepList>
        <Step title="Install Better BibTeX">
          Download from{" "}
          <a
            href="https://retorque.re/zotero-better-bibtex/installation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            retorque.re/zotero-better-bibtex
          </a>
          . In Zotero: Tools → Add-ons → gear icon → &quot;Install Add-on
          From File&quot; → select the .xpi file → restart Zotero.
        </Step>
        <Step title="Configure citation keys">
          Better BibTeX → Preferences → Citation Key Format:{" "}
          <code>[auth][year]</code> generates keys like{" "}
          <code>Mueller2023</code>. Use these keys in LaTeX as{" "}
          <code>\cite&#123;Mueller2023&#125;</code>.
        </Step>
        <Step title="Set up automatic .bib export">
          Right-click on your VWA collection → &quot;Export Collection&quot; →
          Format: &quot;Better BibLaTeX&quot; → tick &quot;Keep updated&quot;
          → save as <code>literatur.bib</code> in your LaTeX project folder.
          The file is updated automatically whenever you add sources.
        </Step>
        <Step title="Use in LaTeX">
          In the preamble: <code>\addbibresource&#123;literatur.bib&#125;</code>.
          In the text: <code>\cite&#123;Mueller2023&#125;</code> or{" "}
          <code>\parencite&#123;Mueller2023&#125;</code>. At the end:{" "}
          <code>\printbibliography</code>. The BGZ template already has this
          pre-configured.
        </Step>
      </StepList>

      <Callout type="success" title="Automatic export">
        With Better BibTeX + automatic export you never need to edit the .bib
        file manually. New sources in Zotero appear automatically in LaTeX.
      </Callout>

      {/* ═══ Source Research ═══ */}
      <H2>Source Research — Databases</H2>

      <Table
        headers={["Database", "URL", "Suitable for"]}
        rows={[
          [
            "Google Scholar",
            "scholar.google.com",
            "General academic search, books, dissertations",
          ],
          [
            "BASE",
            "base-search.net",
            "300+ million open-access documents, strong for German-language sources",
          ],
          [
            "JSTOR",
            "jstor.org",
            "Humanities, history, social sciences",
          ],
          [
            "SpringerLink",
            "link.springer.com",
            "Natural sciences, textbooks, journals",
          ],
          [
            "PubMed",
            "pubmed.ncbi.nlm.nih.gov",
            "Medicine, biology, health sciences",
          ],
          [
            "APA PsycNet",
            "psycnet.apa.org",
            "Psychology",
          ],
          [
            "Austrian National Library",
            "onb.ac.at",
            "Historical and Austrian sources",
          ],
        ]}
      />

      {/* ═══ Source Quality ═══ */}
      <H2>Source Quality</H2>

      <P>
        Golden rule: The closer a source is to the original, the better.
      </P>

      <Table
        headers={["Prefer", "Avoid / Use with caution"]}
        rows={[
          ["Peer-reviewed journals", "Wikipedia (only as a starting point)"],
          ["Official documents, legislation", "Blog posts"],
          ["Textbooks by recognised authors", "YouTube videos"],
          ["Original studies", "AI-generated texts (risk of hallucination)"],
          ["Statistics (Statistik Austria, Eurostat)", "Unsupported claims"],
        ]}
      />

      {/* ═══ Reference Count ═══ */}
      <H2>Recommended Number of Sources</H2>

      <Table
        headers={["Section", "Guideline"]}
        rows={[
          ["Introduction", "3–5 sources"],
          ["Theoretical section", "10–20 sources"],
          ["Empirical section", "3–8 sources (methodology, comparative studies)"],
          ["Conclusion", "References to previously cited sources"],
          ["Total", "Approx. 15–30 sources"],
        ]}
      />

      <Callout type="info" title="Quality over quantity">
        15 relevant sources are better than 50 off-topic ones. Make sure your
        sources are current, scholarly and relevant to your research question.
      </Callout>

      {/* ═══ Navigation ═══ */}
      <H2>More VWA Topics</H2>
      <CardGrid>
        <Card href="/en/infohub/vwa" icon="🎓" title="Overview">Timeline, formats, assessment</Card>
        <Card href="/en/infohub/vwa/aufbau" icon="📋" title="Structure & Research Question">Outline, formatting</Card>
        <Card href="/en/infohub/vwa/schreiben" icon="✍️" title="Academic Writing">Style, language, plagiarism</Card>
        <Card href="/en/infohub/vwa/vorlagen" icon="📄" title="Templates & Tools">LaTeX, Word, downloads</Card>
        <Card href="/en/infohub/vwa/praesentation" icon="🎤" title="Presentation">Structure, questions, tips</Card>
      </CardGrid>
    </>
  );
}
