import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Student Access Chip — Entering the School",
  description:
    "FAQ on the student access chip at BG Zehnergasse: usage, updating at the online terminal, loss, replacement chip and entry logging.",
};

export default function ChipPageEN() {
  return (
    <>
      <PageHeader title="Student Access Chip — Entering the School" />

      <P>
        The <strong>student access chip</strong> (Schüler:innen-Chip) is each
        student&apos;s personal key to the school. Below you will find the most
        important questions and answers about using, updating and losing the
        chip.
      </P>

      <Callout type="info" title="Official Document">
        All questions and answers are also available in the official school
        PDF (German):{" "}
        <a
          href="/templates/faq-schuelerinnen-chip.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          FAQ Schüler:innen-Chips (PDF)
        </a>
      </Callout>

      {/* ═══ Overview ═══ */}
      <H2>At a Glance</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Purpose", "Personal key to the school"],
          ["Cost", "Free loan — remains the property of the school"],
          ["Number", "One personal chip per student"],
          ["Return", "After leaving the school, ideally after the Matura"],
          [
            "Updating",
            "At the start of the school year and when needed — at the online terminal in the Aula (1st floor)",
          ],
          ["Loss", "Report immediately so the chip can be blocked"],
          ["Replacement chip", "EUR 10 — the original chip is blocked"],
        ]}
      />

      <Callout type="info" title="Not to be confused with the edu.Card">
        The student access chip is a free loan for entering the school. The
        student ID with copy function is the{" "}
        <Link href="/en/infohub/educard" className="text-primary hover:underline">
          edu.Card
        </Link>{" "}
        — it is ordered and paid for separately.
      </Callout>

      {/* ═══ General ═══ */}
      <H2>General Questions</H2>

      <H3>What do I need the chip for?</H3>
      <P>
        The chip is <strong>the personal key to the school</strong>. Always{" "}
        <strong>carry it with you</strong> and keep it{" "}
        <strong>carefully and safely</strong>.
      </P>

      <H3>Who owns the chip?</H3>
      <P>
        The chip is a <strong>free loan from the school</strong> and remains
        the property of the school.
      </P>

      <H3>How long may I keep the chip?</H3>
      <P>
        The chip only has to be returned{" "}
        <strong>after leaving the school</strong> — ideally{" "}
        <strong>after the Matura</strong>.
      </P>

      <H3>Is my chip personalised?</H3>
      <P>
        Yes. <strong>Every chip is personalised</strong> and uniquely assigned
        to one student.
      </P>

      <H3>Do I get more than one chip?</H3>
      <P>
        No. <strong>Every student receives only one personal chip.</strong>
      </P>

      <H3>Can parents get their own chip?</H3>
      <P>
        No. Because of the high administrative effort — around{" "}
        <strong>1,400 chips</strong> are currently managed —{" "}
        <strong>no chips can be issued to parents</strong>.
      </P>

      {/* ═══ Updating ═══ */}
      <H2>Updating the Chip</H2>

      <H3>Do I have to update the chip regularly?</H3>
      <P>
        Yes. The chip is updated{" "}
        <strong>at the start of every school year</strong> — and{" "}
        <strong>when needed</strong>, also during the year.
      </P>

      <Callout type="success" title="Where is the chip updated?">
        At the <strong>online terminal in the Aula on the 1st floor</strong>,
        next to the computers.
      </Callout>

      {/* ═══ Loss ═══ */}
      <H2>Loss &amp; Replacement Chip</H2>

      <H3>What do I do if I lose my chip?</H3>
      <P>
        Report the loss <strong>immediately</strong> so that the chip can be{" "}
        <strong>blocked</strong>.
      </P>

      <H3>Do I get a replacement chip if I lose it?</H3>
      <P>
        Yes. A replacement chip can be issued for a{" "}
        <strong>fee of EUR 10</strong>.
      </P>

      <Callout type="warning" title="Important">
        When the replacement chip is issued, the{" "}
        <strong>original chip is blocked</strong> and can no longer be used
        afterwards.
      </Callout>

      {/* ═══ Access & security ═══ */}
      <H2>Entry Logging &amp; Video Surveillance</H2>

      <H3>Is it recorded when I enter the school?</H3>
      <P>
        Yes. <strong>Outside the regular morning entry times</strong>, entry
        via the chip is recorded.
      </P>

      <H3>Is the entrance area under video surveillance?</H3>
      <P>
        Yes. <strong>The school&apos;s entrance area is under video
        surveillance.</strong>
      </P>
    </>
  );
}
