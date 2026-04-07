import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

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
        recommended by the Austrian Federal Ministry of Education (BMBWF) for
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
          ["Mobile", "iOS / Android app planned for 2027"],
          ["BYOD", "Works with students' own devices"],
          ["Network", "School network (WiFi) sufficient — no internet required"],
          ["Privacy", "Collects no user data"],
          ["Developer", "Mag. Thomas Michael Weissel"],
          ["Source code", "github.com/Bildungsportal/next-exam"],
        ]}
      />

      <H2>Exam Modes</H2>

      <Table
        headers={["Mode", "Description"]}
        rows={[
          ["Mathematics", "GeoGebra integration for mathematical tasks"],
          ["Languages", "Text editor with spell check (DE, EN, FR, ES, IT)"],
          ["Eduvidual / Moodle", "Access to Moodle tests"],
          ["Google Forms", "Students fill in specified forms"],
          ["Microsoft 365", "Edit Excel or Word documents"],
          ["Website", "Teacher-specified URLs displayed"],
          ["RDP", "Remote Desktop via Microsoft RD Web Client"],
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

      <H2>Security Features</H2>

      <UL>
        <li>Screenshot monitoring of student devices</li>
        <li>Website and application blocking during exams</li>
        <li>Multi-screen lockdown</li>
        <li>Optional password-protected offline mode</li>
        <li>Automatic backup every 6 minutes</li>
        <li>No data collection by Next-Exam itself</li>
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
          ["File size (Windows EXE)", "~309 MB", "~122 MB"],
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
        <li>On <strong>macOS</strong>: Right-click → &quot;Open&quot; (not double-click, to bypass Gatekeeper)</li>
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
        Windows shows a SmartScreen warning for unknown applications. This is
        normal. Click <strong>&quot;More info&quot;</strong> →
        <strong>&quot;Run anyway&quot;</strong>.
      </P>

      <H3>Download blocked by Edge</H3>
      <P>
        Microsoft Edge sometimes blocks the download. Use
        <strong> Firefox</strong> or <strong>Chrome</strong> to download.
      </P>

      <H2>Downloads — Current Version: 1.1.3</H2>

      <P>
        Released 19 March 2026. All downloads from{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          GitHub (Bildungsportal/next-exam)
        </a>
        .
      </P>

      <H3>Student App</H3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_x64.exe",
            label: "Windows (EXE)",
            desc: "Student — portable, no installation",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Student — for M1/M2/M3/M4 Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_x64.dmg",
            label: "macOS (Intel)",
            desc: "Student — for older Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Student_1.1.3.1_20260318_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Student — Ubuntu, Fedora etc.",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <H3>Teacher App</H3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {[
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_x64.exe",
            label: "Windows (EXE)",
            desc: "Teacher — portable, no installation",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_arm64.dmg",
            label: "macOS (Apple Silicon)",
            desc: "Teacher — for M1/M2/M3/M4 Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_x64.dmg",
            label: "macOS (Intel)",
            desc: "Teacher — for older Macs",
          },
          {
            href: "https://github.com/Bildungsportal/next-exam/releases/download/1.1.3/Next-Exam-Teacher_1.1.3.1_20260318_x86_64.AppImage",
            label: "Linux (AppImage)",
            desc: "Teacher — Ubuntu, Fedora etc.",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="warning" title="Download note">
        Microsoft Edge sometimes blocks the download — use Firefox or Chrome.
        Windows security warnings for unknown applications are normal and can
        be confirmed.
      </Callout>

      <H2>Version History</H2>

      <H3>Version 1.1.3 — 19 March 2026</H3>
      <P>Patch release with bug fixes and stability improvements.</P>

      <H3>Version 1.1.2 — 11 March 2026</H3>
      <P>Patch release with bug fixes.</P>

      <H3>Version 1.1.1 — 27 January 2026</H3>
      <P>Patch release with bug fixes.</P>

      <H3>Version 1.1.0 — 12 December 2025</H3>
      <P>Major feature release with new exam modes and UI improvements.</P>

      <P>
        Full release notes on{" "}
        <a
          href="https://github.com/Bildungsportal/next-exam/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </P>

      <H2>BMBWF Rollout Timeline</H2>

      <Table
        headers={["Period", "Milestone"]}
        rows={[
          ["Now", "Available to all schools"],
          ["2025–2026", "Training planning and portal integration"],
          ["2027–2028", "Qualification mandatory; iOS/Android client"],
          ["2029–2031", "Pilot for regular exams and 2031 Matura"],
          ["2032", "Full implementation at qualified schools"],
        ]}
      />

      <H2>Further Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          { href: "https://github.com/Bildungsportal/next-exam/releases", label: "GitHub Releases", desc: "All versions and downloads" },
          { href: "https://life-edu.eu/next-exam/", label: "Next-Exam Project Site", desc: "Documentation and FAQ" },
          { href: "https://www.bildung.gv.at/filter/faq/page.php?lang=de&p=212&t", label: "Bildungsportal — Next-Exam", desc: "Official BMBWF info page" },
          { href: "https://www.bmb.gv.at/Themen/schule/zrp/dibi/dip.html", label: "BMBWF Rollout Plan", desc: "Strategy and timeline" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">{link.label}</span>
              <span className="text-xs text-[var(--text-light)] block">{link.desc}</span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="info" title="Support">
        For technical issues with Next-Exam:{" "}
        <a href="mailto:support@bildung.gv.at" className="text-primary dark:text-blue-400 hover:underline">support@bildung.gv.at</a>
      </Callout>
    </>
  );
}
