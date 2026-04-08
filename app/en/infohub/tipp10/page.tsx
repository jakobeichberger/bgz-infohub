import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "TIPP10 — Touch Typing Trainer",
  description:
    "TIPP10: Free touch typing training for students at BG Zehnergasse. Online, as software, and as a school version.",
};

export default function Tipp10PageEN() {
  return (
    <>
      <PageHeader title="TIPP10 — Touch Typing Trainer" />

      <P>
        TIPP10 is a <strong>free</strong>, award-winning typing trainer
        that helps you learn and improve touch typing. The program was
        rated as the top choice by Stiftung Warentest.
      </P>

      <Callout type="success" title="Completely Free">
        All versions of TIPP10 are <strong>100% free</strong> —
        online version, software, and school version.
      </Callout>

      <H2>Why Learn Touch Typing?</H2>

      <UL>
        <li>
          <strong>Faster:</strong> Touch typists reach 200-300
          keystrokes per minute — hunt-and-peck typing only 80-120
        </li>
        <li>
          <strong>Fewer errors:</strong> You no longer need to look at the
          keyboard and can focus on the content
        </li>
        <li>
          <strong>Healthier:</strong> Ergonomic hand position instead of
          cramped fingers
        </li>
        <li>
          <strong>Time savings:</strong> Thesis papers, presentations, notes, and
          emails are completed much faster
        </li>
        <li>
          <strong>Professional life:</strong> Fast typing is a basic skill
          in almost every profession
        </li>
      </UL>

      <H2>The Three Versions</H2>

      <CardGrid>
        <Card
          href="https://www.tipp10.com/de/online/"
          icon="🌐"
          title="Online Version"
        >
          Practice directly in the browser — free registration, progress
          is saved. Ideal for getting started.
        </Card>
        <Card
          href="https://www.tipp10.com/de/download/"
          icon="💻"
          title="Software (Open Source)"
        >
          Download for Windows, macOS, and Linux. Works offline, open
          source.
        </Card>
        <Card
          href="https://www.tipp10.com/de/schulversion/"
          icon="🏫"
          title="School Version"
        >
          For teachers: class management, assign tasks, create exams
          with certificates.
        </Card>
      </CardGrid>

      <H2>How to Get Started</H2>

      <StepList>
        <Step title="Register at tipp10.com">
          Go to{" "}
          <a
            href="https://www.tipp10.com/de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            tipp10.com
          </a>{" "}
          and create a free account (or start directly
          with the online version).
        </Step>
        <Step title="Learn the Home Row Position">
          Start with the lessons on the home row position: left hand on
          A-S-D-F, right hand on J-K-L-;. The index fingers rest on F
          and J (the small bumps on the keyboard).
        </Step>
        <Step title="Practice Regularly">
          Most effective: <strong>10-15 minutes daily</strong>. TIPP10
          automatically increases the difficulty level based on your
          progress.
        </Step>
        <Step title="Measure Your Progress">
          TIPP10 shows keystrokes per minute, error rate, and learning curve.
          Goal: 150+ keystrokes/minute with under 2% error rate.
        </Step>
      </StepList>

      <H2>Tips for Effective Practice</H2>

      <UL>
        <li>
          <strong>Do not look at the keyboard!</strong> — This is the
          most important rule. Cover the keyboard if necessary.
        </li>
        <li>
          <strong>Accuracy before speed:</strong> Better slow
          and error-free than fast and full of mistakes
        </li>
        <li>
          <strong>Short daily sessions &gt; long weekly ones:</strong> 10 minutes
          per day yields more than 1 hour per week
        </li>
        <li>
          <strong>Proper sitting posture:</strong> Feet flat on the floor,
          forearms horizontal, eyes on the screen
        </li>
        <li>
          <strong>Apply in everyday life:</strong> Try to also
          type messages and homework using touch typing
        </li>
      </UL>

      <H2>Milestones</H2>

      <Table
        headers={["Keystrokes/Min.", "Level", "Time to Reach"]}
        rows={[
          ["80-120", "Beginner — Hunt and peck", "0 (starting point)"],
          ["120-150", "Basic skills — all keys known", "2-4 weeks"],
          ["150-200", "Intermediate — fluent typing", "1-3 months"],
          ["200-300", "Proficient — job-ready", "3-6 months"],
          ["300+", "Expert — above-average speed", "6-12 months"],
        ]}
      />

      <Callout type="info" title="10-Minute Dictation with Certificate">
        TIPP10 offers an official 10-minute dictation test. Upon
        successful completion, you receive a{" "}
        <strong>certificate</strong> that you can include with a job
        application, for example.
      </Callout>

      <H2>Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://www.tipp10.com/de/",
            label: "TIPP10 Homepage",
            desc: "Main page with all versions",
          },
          {
            href: "https://www.tipp10.com/de/online/",
            label: "Practice Online",
            desc: "Start directly in the browser",
          },
          {
            href: "https://www.tipp10.com/de/download/",
            label: "Download Software",
            desc: "For Windows, macOS, Linux",
          },
          {
            href: "https://www.tipp10.com/de/schulversion/",
            label: "School Version",
            desc: "For teachers and classes",
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
    </>
  );
}
