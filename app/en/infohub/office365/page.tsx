import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Microsoft 365 — Free for Students",
  description:
    "Microsoft 365 A3 Education at BG Zehnergasse: desktop apps, OneDrive, OneNote, Teams, Copilot and all benefits of the A3 licence.",
};

export default function Office365PageEN() {
  return (
    <>
      <PageHeader title="Microsoft 365 — Free for Students" />

      <P>
        Through the <strong>MS-ACH agreement</strong> (Microsoft Austrian College
        and High School Agreement) between the Ministry of Education and
        Microsoft, all students at BG Zehnergasse receive a full{" "}
        <strong>Microsoft 365 A3 Education</strong> licence —
        completely free of charge.
      </P>

      <Callout type="success" title="Everything is free">
        The MS-ACH agreement is funded by the Ministry and runs until
        at least <strong>31 May 2027</strong>. Students and teachers
        pay nothing. Each teacher licence includes 25 student licences.
      </Callout>

      <H2>What is included in the A3 licence?</H2>

      <P>
        The A3 licence is considerably more extensive than the free A1 licence.
        Here are the key benefits:
      </P>

      <H3>Desktop Apps (installable on up to 5 devices)</H3>

      <Table
        headers={["App", "Description"]}
        rows={[
          ["Word", "Word processing — essays, reports, papers"],
          ["Excel", "Spreadsheets — data analysis, charts, formulas"],
          ["PowerPoint", "Create and deliver presentations"],
          ["OneNote", "Digital notebook — notes, drawings, audio"],
          ["Outlook", "Email client with calendar and tasks"],
          ["Access (Windows only)", "Database management"],
          ["Publisher (Windows only)", "Desktop publishing for flyers, posters, etc."],
        ]}
      />

      <Callout type="info" title="On up to 15 devices">
        With the A3 licence you can install Office on up to{" "}
        <strong>5 PCs or Macs</strong>, <strong>5 tablets</strong> and{" "}
        <strong>5 smartphones</strong> simultaneously.
      </Callout>

      {/* ═══ OneDrive ═══ */}
      <H2>OneDrive — Cloud Storage</H2>

      <P>
        OneDrive is your personal cloud storage. With the A3 licence,
        each student gets <strong>5 TB of storage</strong> — more than
        enough for all school documents, photos and projects.
      </P>

      <UL>
        <li>
          <strong>Automatic backup</strong> — files on your iPad and PC
          are automatically backed up to the cloud
        </li>
        <li>
          <strong>Available everywhere</strong> — access from any device via
          browser, desktop app or smartphone app
        </li>
        <li>
          <strong>Version history</strong> — older versions of files
          can be restored
        </li>
        <li>
          <strong>Sharing</strong> — share files and folders with classmates
          or teachers
        </li>
        <li>
          <strong>Recycle bin</strong> — deleted files can be restored for
          up to 93 days
        </li>
      </UL>

      {/* ═══ OneNote ═══ */}
      <H2>OneNote — Digital Notebook</H2>

      <P>
        OneNote is one of the most useful tools for everyday school life:
      </P>

      <UL>
        <li>
          <strong>Handwriting &amp; Drawing</strong> — write directly on
          your iPad with the Apple Pencil or stylus
        </li>
        <li>
          <strong>Sections &amp; Pages</strong> — organise notes by subject
          and topic
        </li>
        <li>
          <strong>Audio recordings</strong> — record explanations and
          attach them to notes
        </li>
        <li>
          <strong>Insert photos</strong> — photograph the whiteboard and
          insert it directly into your notes
        </li>
        <li>
          <strong>Automatic sync</strong> — notes are available on
          all your devices
        </li>
        <li>
          <strong>Class notebook</strong> — teachers can create a class
          notebook in Teams where each student has their own section
        </li>
      </UL>

      <Callout type="info" title="Use the desktop app!">
        With the A3 licence you have access to the{" "}
        <strong>full desktop version</strong> of OneNote (not just
        the web version). It offers more features like offline access
        and advanced drawing tools.
      </Callout>

      {/* ═══ Teams ═══ */}
      <H2>Microsoft Teams</H2>

      <UL>
        <li>Chat and group chat with classmates and teachers</li>
        <li>Video conferences and online lessons</li>
        <li>Share and collaborate on files in channels</li>
        <li>Manage and submit assignments</li>
        <li>Integration with OneNote class notebook</li>
      </UL>

      {/* ═══ Copilot ═══ */}
      <H2>Microsoft Copilot (AI Assistant)</H2>

      <P>
        <strong>Copilot Chat</strong> is Microsoft's free AI assistant and is
        available to all students with a school account aged 13 and above.
      </P>

      <H3>What can Copilot do?</H3>

      <UL>
        <li>Answer questions and explain topics</li>
        <li>Summarise and rephrase texts</li>
        <li>Help with research and brainstorming</li>
        <li>Write and explain code</li>
        <li>Generate images</li>
        <li>Upload and analyse files</li>
      </UL>

      <H3>Data Protection</H3>

      <Callout type="success" title="Commercial Data Protection">
        Microsoft Copilot Chat for Education users operates with{" "}
        <strong>Commercial Data Protection</strong>:
        <ul>
          <li>Inputs and outputs are <strong>not</strong> used to train AI models</li>
          <li>Microsoft employees have no access to the data</li>
          <li>Data is processed within the EU (EU Data Boundary)</li>
        </ul>
        <p>
          Source:{" "}
          <a
            href="https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Learn — Copilot Privacy
          </a>
        </p>
      </Callout>

      {/* ═══ A3 vs A1 ═══ */}
      <H2>A3 vs. A1 — What is the Difference?</H2>

      <Table
        headers={["Feature", "A1 (free)", "A3 (MS-ACH)"]}
        rows={[
          ["Office apps", "Web + Mobile only", "Desktop + Web + Mobile (15 devices)"],
          ["Mailbox", "50 GB", "100 GB + 1.5 TB archive"],
          ["OneDrive", "100 GB per user", "5 TB per user"],
          ["OneNote", "Web/Mobile only", "Full desktop version"],
          ["Copilot Chat", "Available", "Available"],
          ["Copilot in Office apps", "Not available", "Available as add-on"],
          ["Device management (Intune)", "Not included", "Intune Plan 1 included"],
          ["Windows licence", "Not included", "Windows 11 Education included"],
          ["Security", "Basic", "Defender, BitLocker, Credential Guard"],
        ]}
      />

      {/* ═══ Sign in ═══ */}
      <H2>Sign In &amp; Install</H2>

      <StepList>
        <Step title="Sign in via browser">
          Open{" "}
          <a
            href="https://portal.office.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            portal.office.com
          </a>{" "}
          and sign in with{" "}
          <code>lastname.firstname@bgzwn.at</code>.
        </Step>
        <Step title="Use browser apps immediately">
          After logging in, Word, Excel and PowerPoint can be used directly
          in the browser.
        </Step>
        <Step title="Install desktop apps (recommended)">
          Click &quot;Install Office&quot; →
          &quot;Microsoft 365 Apps&quot; and follow the instructions.
          Works on Windows and Mac.
        </Step>
        <Step title="Install mobile apps">
          Download the Office apps from the App Store (iOS) or Google Play
          (Android) and sign in with your school account.
        </Step>
      </StepList>

      <Callout type="warning" title="Licence notice">
        The licence is renewed automatically each year through the MS-ACH
        agreement and <strong>expires when you leave the school</strong>.
        Make sure to back up important files to a personal storage in good
        time.
      </Callout>

      {/* ═══ Legal Sources ═══ */}
      <H2>Legal Sources</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011451"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BilDokG 2020, BGBl. I Nr. 20/2021
          </a>{" "}
          — § 4 (responsibility for education data)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            DSG, BGBl. I Nr. 165/1999 i.d.g.F.
          </a>{" "}
          (Austrian implementation of the EU GDPR)
        </li>
        <li>
          § GDPR Art. 6(1)(e) (processing in the public interest — legal
          basis for Microsoft 365 in schools)
        </li>
      </UL>
    </>
  );
}
