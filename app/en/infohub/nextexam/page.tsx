import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";
import { LinkCards } from "@/components/ui/LinkCards";

export const metadata: Metadata = {
  title: "Next-Exam — Digital Examination Environment",
  description:
    "Next-Exam: free digital examination environment for schools. Downloads, guides and information for students and teachers at BG Zehnergasse.",
};

export default function NextExamPageEN() {
  return (
    <>
      <PageHeader title="Next-Exam — Digital Examination Environment" />

      <P>
        Next-Exam is a free, open-source digital examination environment
        recommended by the Austrian Federal Ministry of Education (BMB) for
        all Austrian schools. It enables secure digital exams on laptops and
        tablets — without complex IT infrastructure.
      </P>

      <Callout type="info" title="What is Next-Exam?">
        Next-Exam does not replace learning platforms. It provides the
        organisational framework for fair digital exams: data privacy,
        anti-cheating measures and protection against data loss.
      </Callout>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Licence", "GPLv3 — free and open source"],
          ["Operating systems", "Windows, macOS (Intel + ARM), Linux"],
          ["iPad", "Student version for iPad (iOS) since version 2.1"],
          ["BYOD", "Works with students' own devices"],
          ["Network", "School network (WiFi) sufficient — internet only for online modes (e.g. Microsoft 365, Moodle)"],
          ["Privacy", "Collects no user data"],
          ["Developer", "Mag. Thomas Michael Weissel"],
          ["Source code", "github.com/Bildungsportal/next-exam"],
        ]}
      />

      <H2>Exam Modes</H2>

      <Table
        headers={["Mode", "Description"]}
        rows={[
          ["Mathematics", "GeoGebra integration for mathematical tasks (incl. 3D and spreadsheet)"],
          ["Languages", "Text editor with spell check (DE, EN, FR, ES, IT)"],
          ["Eduvidual / Moodle", "Access to Moodle tests"],
          ["Forms", "Students fill in specified Google or Microsoft forms"],
          ["Microsoft 365", "Edit Excel or Word documents"],
          ["Website", "Teacher-specified URLs displayed"],
          ["RDP", "Remote Desktop via Microsoft RD Web Client"],
          ["ActiveSheets (new in 2.x)", "Fill in a PDF worksheet on the device, digital marking by the teacher"],
          ["Local VM (new in 2.x)", "Windows 11 machine for specialist software (e.g. programming, CAD)"],
        ]}
      />

      <H2>How an Exam Works</H2>

      <H3>For Students</H3>

      <StepList>
        <Step title="Download Next-Exam Student">
          Download the correct version for your operating system from the
          download section below. No installation needed — just run the file
          from a folder (Desktop or Downloads).
        </Step>
        <Step title="Connect to school WiFi">
          Connect to the student WiFi network at school.
        </Step>
        <Step title="Enter server address and PIN">
          The teacher displays the server address and PIN (e.g. on the board).
          Enter both in the app.
        </Step>
        <Step title="Take the exam">
          Your work is automatically saved every 6 minutes to the teacher
          computer. When finished, the teacher releases the devices.
        </Step>
      </StepList>

      <Callout type="warning" title="Note for Mac users">
        On macOS, Next-Exam needs screen recording permission:
        <strong> Settings → Privacy &amp; Security → Screen and System
        Audio Recording</strong>. Without this, the screen stays black.
      </Callout>

      <H3>For Teachers</H3>

      <StepList>
        <Step title="Download and start Next-Exam Teacher">
          Download the Teacher app from the download section below. Enter an
          exam name and optionally choose a save location.
        </Step>
        <Step title="Configure the exam">
          Choose the exam mode (Mathematics, Languages, Moodle etc.) and set
          optional settings such as language-exam tools.
        </Step>
        <Step title="Give students access">
          The server address and PIN are displayed — share them with the class.
          Students connect with the Student app.
        </Step>
        <Step title="End the exam">
          Click &quot;Geräte freigeben&quot; (release devices) → submissions
          are collected. &quot;Letzte Abgaben zusammenfassen&quot; (combine
          latest submissions) merges all work into one PDF.
        </Step>
      </StepList>

      <H2>Security Features</H2>

      <UL>
        <li>Screenshot monitoring of student devices</li>
        <li>Website and application blocking during exams</li>
        <li>Multi-screen lockdown</li>
        <li>Optional password-protected offline mode</li>
        <li>Automatic backup every 6 minutes</li>
        <li>No data collection by Next-Exam itself</li>
        <li>
          <strong>macOS &amp; iPad:</strong> Apple Assessment Mode — the system
          itself locks app switching and keyboard shortcuts (since 2.1)
        </li>
        <li>
          <strong>Windows:</strong> optional kiosk mode with a temporary user
          account; <strong>Linux:</strong> Cage mode for final exams
        </li>
        <li>
          Can be used instead of Safe Exam Browser (SEB), e.g. for
          eduvidual/Moodle tests
        </li>
        <li>Encrypted exam files and digitally signed submission PDFs</li>
      </UL>

      <Callout type="success" title="Privacy">
        Next-Exam collects <strong>no user data</strong>. Screenshots are only
        saved when a student attempts to leave the exam environment. Tracking
        scripts in external modules are disabled.
      </Callout>

      {/* ═══ Quick Fixes & FAQ ═══ */}
      <H2>Quick Fixes &amp; Common Problems</H2>

      <H3>Started the wrong version (Student vs. Teacher)</H3>
      <P>
        A common mistake: students accidentally start the
        <strong> Teacher app</strong> instead of the <strong>Student app</strong>.
        How to tell the difference:
      </P>
      <Table
        headers={["Feature", "Student App", "Teacher App"]}
        rows={[
          ["Filename contains", "\"Student\"", "\"Teacher\""],
          ["File size (Windows EXE)", "~342 MB", "~127 MB"],
          ["Start screen shows", "Server address + PIN field", "Exam name + save location"],
          ["Function", "Connects to teacher", "Creates exam server"],
        ]}
      />
      <Callout type="warning" title="Tip">
        Rename the file after downloading, e.g.{" "}
        <strong>&quot;Next-Exam-STUDENT.exe&quot;</strong>, so the correct
        version is immediately recognisable.
      </Callout>

      <H3>App won&apos;t start / white screen</H3>
      <UL>
        <li>Start the app <strong>from a folder</strong> (Desktop or Downloads) — not directly from the browser download</li>
        <li>On <strong>Windows</strong>: Right-click → &quot;Run as administrator&quot;</li>
        <li>On <strong>macOS</strong>: If the app is blocked on first launch → System Settings → Privacy &amp; Security → &quot;Open Anyway&quot;</li>
        <li>On <strong>Linux</strong>: AppImage must be executable: <code>chmod +x Next-Exam-Student*.AppImage</code></li>
      </UL>

      <H3>Can&apos;t connect to teacher server</H3>
      <UL>
        <li>Are you on the <strong>correct WiFi</strong>? (Student WiFi, not guest WiFi)</li>
        <li>Are <strong>server address and PIN</strong> exact? (Case sensitive)</li>
        <li>Is the <strong>firewall</strong> blocking? Port 22422 (TCP) and 6024/6025 (UDP) must be allowed</li>
        <li>Restart the app and reconnect</li>
      </UL>

      <H3>macOS: Black screen</H3>
      <P>
        Next-Exam needs screen recording permission on macOS. Go to:
        <strong> Settings → Privacy &amp; Security → Screen and System
        Audio Recording</strong> → enable Next-Exam → restart the app.
      </P>

      <H3>Work lost / file not saved</H3>
      <UL>
        <li>Next-Exam auto-saves every <strong>6 minutes</strong></li>
        <li>Additionally: press <strong>Ctrl+S</strong> (Windows) or <strong>Cmd+S</strong> (Mac) regularly</li>
        <li>The teacher can recover the last backup from the local work folder</li>
      </UL>

      <H3>Windows security warning on start</H3>
      <P>
        Since version 2.1 the Windows versions are digitally signed. If Windows
        still shows a SmartScreen warning, click{" "}
        <strong>&quot;More info&quot;</strong> →{" "}
        <strong>&quot;Run anyway&quot;</strong>.
      </P>

      <H3>Download blocked by Edge</H3>
      <P>
        Microsoft Edge sometimes blocks the download. Use
        <strong> Firefox</strong> or <strong>Chrome</strong> to download.
      </P>

      <H3>Can I print during the exam?</H3>
      <P>
        No. Printer access is blocked during a Next-Exam session. If the
        teacher wants a printout, this is done after the exam ends via
        the Teacher computer.
      </P>

      <H3>Can I change the font size?</H3>
      <P>
        Yes. In Language mode the font size can be adjusted via the menu.
        In other modes (e.g. Microsoft 365) the settings of the respective
        application apply.
      </P>

      <H3>Does Next-Exam need to be installed?</H3>
      <P>
        No. The Windows EXE and the Linux AppImage are{" "}
        <strong>portable</strong> and can be run directly from a folder.
        Only the MSI variant (Windows) performs a traditional installation.
        On macOS the app is dragged from the DMG to the Applications folder
        as usual.
      </P>

      <H3>Does Next-Exam work without the internet?</H3>
      <P>
        Yes — for Mathematics and Languages modes,{" "}
        <strong>no internet is required</strong>. A local school network
        (Wi-Fi) is sufficient for the student and teacher apps to connect. The
        online modes Microsoft 365, Moodle, Forms (Google/Microsoft Forms), and
        Website require internet access.
      </P>

      <H3>Is my screen being recorded?</H3>
      <P>
        Not continuously. The teacher can take{" "}
        <strong>live screenshots</strong> of student devices. Automatic
        screenshots are only created when a student attempts to leave the
        exam environment. There is no video streaming or permanent
        monitoring.
      </P>

      <H3>What happens if there is a crash / power failure?</H3>
      <P>
        Next-Exam automatically saves every <strong>6 minutes</strong>{" "}
        to the Teacher computer. In case of a crash, the last backup can
        be restored. Additionally, regular saving with Ctrl+S / Cmd+S is
        recommended.
      </P>

      <H3>Can I use copy &amp; paste?</H3>
      <P>
        Copy &amp; paste works normally within the exam environment.
        However, pasting externally copied content is blocked, as the
        clipboard is cleared when the exam starts.
      </P>

      <H2>Downloads — Current Version: 2.1.0.3</H2>

      <P>
        Released 22 September 2026. All downloads from{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub (Bildungsportal/next-exam)
        </a>
        .
      </P>

      <H3>Student App</H3>

      <LinkCards
        items={[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x64.exe",
            label: "Windows (EXE)",
            desc: "Student — portable, no installation (342 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x64.msi",
            label: "Windows (MSI)",
            desc: "Student — installer (287 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Student — for M1/M2/M3/M4 Macs (338 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x64.dmg",
            label: "macOS (Intel)",
            desc: "Student — for older Macs (348 MB)",
            dotClass: "bg-green-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Student_2.1.0.3_20260922_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Student — Ubuntu, Fedora etc. (322 MB)",
            dotClass: "bg-green-500",
          },
        ]}
      />

      <H3>Teacher App</H3>

      <LinkCards
        items={[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x64.exe",
            label: "Windows (EXE)",
            desc: "Teacher — portable, no installation (127 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x64.msi",
            label: "Windows (MSI)",
            desc: "Teacher — installer (158 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Teacher — for M1/M2/M3/M4 Macs (179 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x64.dmg",
            label: "macOS (Intel)",
            desc: "Teacher — for older Macs (188 MB)",
            dotClass: "bg-blue-500",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/2.1.0.3/Next-Exam-Teacher_2.1.0.3_20260922_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Teacher — Ubuntu, Fedora etc. (198 MB)",
            dotClass: "bg-blue-500",
          },
        ]}
      />

      <Callout type="warning" title="Download note">
        Microsoft Edge sometimes blocks the download — use Firefox or Chrome.
        On a Mac, pick the matching version (Apple Silicon or Intel): Next-Exam
        warns if the wrong version is running via Rosetta.
      </Callout>

      <H2>Version History</H2>

      <H3>Version 2.1.0.3 — 22 September 2026</H3>
      <P>
        Patch release: GeoGebra update (incl. statistics and regression), fixes
        for spell check and printing, PIN codes starting with 0 now work,
        digitally signed Windows builds.
      </P>

      <H3>Version 2.1.0.2 — 11 September 2026</H3>
      <P>
        Patch release: the Education Portal connection now uses the production
        environment by default; fixes for portal login and exam status.
      </P>

      <H3>Version 2.1 — 10 September 2026</H3>
      <UL>
        <li>Completely redesigned Teacher dashboard (groups in all modes, submission overview, exam log, time limit)</li>
        <li><strong>iPad version</strong> of the Student app (iOS Assessment Mode)</li>
        <li>Connection to the <strong>Education Portal</strong> — prepare and load exams centrally</li>
        <li>New modes <strong>ActiveSheets</strong> (PDF worksheets with digital marking) and <strong>local VM</strong></li>
        <li>More security: macOS Assessment Mode, optional Windows kiosk mode, Linux Cage mode, SEB compatibility</li>
        <li>Printing rebuilt, Microsoft Forms in forms mode</li>
      </UL>

      <H3>Version 1.1.3 — 19 March 2026</H3>
      <P>Last release of the 1.x series (bug fixes).</P>

      <P>
        Full release notes on{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
      </P>

      <H2>BMB Rollout Timeline</H2>

      <Table
        headers={["Period", "Milestone"]}
        rows={[
          ["Now", "Available to all schools — since version 2.1 with Education Portal connection and iPad version"],
          ["2025–2026", "Training planning and portal integration"],
          ["2027–2028", "Qualification mandatory; iOS/Android client"],
          ["2029–2031", "Pilot for regular exams and 2031 Matura"],
          ["2032", "Full implementation at qualified schools"],
        ]}
      />

      <H2>Further Links</H2>

      <LinkCards
        items={[
          { href: "https://github.com/Bildungsportal/next-exam/releases", label: "GitHub Releases", desc: "All versions and downloads" },
          { href: "https://life-edu.eu/next-exam/", label: "Next-Exam Project Site", desc: "Documentation and FAQ" },
          { href: "https://www.bildung.gv.at/filter/faq/page.php?lang=de&p=212&t", label: "Bildungsportal — Next-Exam", desc: "Official BMB info page" },
          { href: "https://www.bmb.gv.at/Themen/schule/zrp/dibi/dip.html", label: "BMB Rollout Plan", desc: "Strategy and timeline" },
        ]}
      />

      <Callout type="info" title="Support">
        For technical issues with Next-Exam:{" "}
        <a href="mailto:support@bildung.gv.at" className="text-primary hover:underline">support@bildung.gv.at</a>
      </Callout>
    </>
  );
}
