import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "edu.Card — Student ID & Copy Card",
  description:
    "edu.Card: Student ID, copy card, ordering, reporting loss and replacement card at BG Zehnergasse.",
};

export default function EduCardPageEN() {
  return (
    <>
      <PageHeader title="edu.Card — Student ID & Copy Card" />

      <P>
        The edu.Card is the <strong>official student ID</strong> of
        BG Zehnergasse in credit-card format with an integrated Mifare chip.
        It serves both as an ID card and as a copy card.
      </P>

      <H2>At a Glance</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Cost", "EUR 15 (incl. EUR 5 starting credit for copies)"],
          ["Ordering", "Via the edu.Pay web shop"],
          ["Copy credit", "Can be topped up via edu.Pay (max. EUR 25 per top-up)"],
          ["Validity", "Up to 4 years (lower or upper secondary)"],
          ["Delivery time", "Approx. 1–2 weeks after payment is received"],
          ["Photo", "Taken by school photographers at the beginning of the school year"],
        ]}
      />

      <H2>Usage</H2>

      <UL>
        <li>
          <strong>Official student ID</strong> — as proof of identity
          for discounts, in libraries, etc.
        </li>
        <li>
          <strong>Printing &amp; Copying</strong> — authentication at
          the printer with the card (SafeQ system)
        </li>
        <li>
          <strong>Planned:</strong> Library, PC login, canteen payment
        </li>
      </UL>

      <Callout type="info" title="Note">
        The edu.Card currently <strong>cannot</strong> be used for vending
        machines or the school buffet. Funds on the copy card can only be
        used for printing and copying.
      </Callout>

      <H2>First Order</H2>

      <StepList>
        <Step title="Open the edu.Suite portal">
          Log in at{" "}
          <a
            href="https://edusuite.at/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            edusuite.at/portal/
          </a>{" "}
          (school code: <strong>304046</strong>).
        </Step>
        <Step title="Open the edu.Pay web shop">
          Navigate to &quot;Order&quot; and select
          &quot;edu.Card&quot;.
        </Step>
        <Step title="Check the preview">
          Review the photo and data carefully. If there are errors, contact
          your class teacher.
        </Step>
        <Step title="Payment">
          Pay via EPS bank transfer or regular bank transfer. The card
          only goes into production after full payment is received.
        </Step>
        <Step title="Wait for delivery">
          The card will be handed out at school — delivery takes approx.{" "}
          <strong>1–2 weeks</strong>.
        </Step>
      </StepList>

      <H2>Top Up Copy Credit</H2>

      <P>
        Copy credit can be topped up at any time via the edu.Pay web shop
        (maximum EUR 25 per top-up). The starting credit of EUR 5
        corresponds to approx. 10 A4 black-and-white prints.
      </P>

      {/* ═══ Card lost ═══ */}
      <H2>Card Lost or Stolen</H2>

      <Callout type="danger" title="File a loss report!">
        <p>
          The edu.Card is an <strong>official ID</strong>. In case of
          loss you should file a <strong>loss report</strong>:
        </p>
        <ul>
          <li>
            <strong>Online (free):</strong> File a loss report via the{" "}
            <a
              href="https://fundamt.gv.at"
              target="_blank"
              rel="noopener noreferrer"
            >
              Austrian Lost &amp; Found Office (fundamt.gv.at)
            </a>
          </li>
          <li>
            <strong>In person:</strong> At the responsible municipality (for
            an oral report: EUR 2.10 administrative fee)
          </li>
          <li>
            <strong>In case of theft:</strong> File a theft report with the
            police
          </li>
        </ul>
        <p>
          More information:{" "}
          <a
            href="https://www.oesterreich.gv.at/de/themen/notfaelle_unfaelle_und_kriminalitaet/verloren_gefunden/Seite.628000"
            target="_blank"
            rel="noopener noreferrer"
          >
            oesterreich.gv.at — Loss Report
          </a>
        </p>
      </Callout>

      <H3>Order a Replacement Card</H3>

      <StepList>
        <Step title="Order it yourself via edu.Pay">
          Log in to the{" "}
          <a
            href="https://edusuite.at/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            edu.Suite portal
          </a>{" "}
          and order a new edu.Card through the web shop. The card only
          goes into production after full payment is received.
        </Step>
        <Step title="Cannot order it yourself?">
          Contact{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            admin@bgzwn.at
          </a>{" "}
          — IT can also place the order manually.
        </Step>
        <Step title="Wait for delivery">
          The replacement card will be produced with the current photo and
          takes approx. <strong>1–2 weeks</strong>. The copy credit from the
          old card will be transferred to the new card. The old card will be
          deactivated in the system.
        </Step>
      </StepList>

      <H2>Change Photo</H2>

      <P>
        School photographers take photos of the 1st and 5th year classes at
        the beginning of the school year; all other classes in
        October/November. For urgent cases, a photo can be sent manually to{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          admin@bgzwn.at
        </a>{" "}
        (please follow passport photo guidelines).
      </P>

      {/* ═══ edu.digicard ═══ */}
      <H2>edu.digicard — Digital Student ID on Your Smartphone</H2>

      <P>
        In addition to the physical edu.Card, since 2023 there is the{" "}
        <strong>edu.digicard</strong> — the free digital student ID on your
        smartphone pursuant to Section 57b of the School Education Act.
        Its use is voluntary and independent of the physical card.
      </P>

      <H3>What does the edu.digicard display?</H3>
      <UL>
        <li>Photo of the student</li>
        <li>First and last name</li>
        <li>Date of birth</li>
        <li>School and school code</li>
        <li>Validity date</li>
        <li>Postal code of residence</li>
      </UL>

      <H3>Who activates the edu.digicard?</H3>

      <Table
        headers={["Age", "Who activates", "Requirement"]}
        rows={[
          ["Under 14 years", "Parents / legal guardians", "ID Austria of the legal guardian"],
          ["14 years and older", "Student themselves", "Own ID Austria"],
        ]}
      />

      <H3>Option A — Directly via ID Austria (recommended)</H3>

      <StepList>
        <Step title="Download the edu.digicard app">
          Free from the{" "}
          <a
            href="https://apps.apple.com/at/app/edu-digicard/id1635556317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            Apple App Store
          </a>{" "}
          or{" "}
          <a
            href="https://play.google.com/store/apps/details?id=at.asitplus.digitalid.wallet.pupilid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            Google Play Store
          </a>
          .
        </Step>
        <Step title="Sign in with ID Austria">
          Open the app and sign in with your ID Austria
          (or with the ID Austria of the legal guardian for children
          under 14).
        </Step>
        <Step title="Done!">
          The edu.digicard is immediately displayed in the app and ready to use.
        </Step>
      </StepList>

      <H3>Option B — Via QR code (generated on PC)</H3>

      <StepList>
        <Step title="Install the app on your smartphone">
          Download the edu.digicard app from the App Store or Play Store.
        </Step>
        <Step title="Open the activation page on your PC">
          Log in via the{" "}
          <a
            href="https://www.bildung.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            Education Portal
          </a>{" "}
          and navigate to the edu.digicard activation.
        </Step>
        <Step title="Generate and scan the QR code">
          Generate a QR code on your PC and scan it with the
          edu.digicard app on your smartphone.
        </Step>
      </StepList>

      <Callout type="info" title="Verification">
        Authorised persons (e.g. ticket inspectors on public transport)
        can scan and verify the edu.digicard using the separate{" "}
        <strong>edu.digicard Check App</strong>.
      </Callout>

      <Callout type="success" title="Data Protection">
        You can remove linked devices at any time via the activation website.
        Associated metadata will be deleted within 24 hours
        (GDPR-compliant).
      </Callout>

      <H2>Further Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://edusuite.at/portal/",
            label: "edu.Suite Portal",
            desc: "Order edu.Card and top up credit",
          },
          {
            href: "https://edusuite.at/edu-card-2/",
            label: "edu.Card Info (Quarto)",
            desc: "Official info page from the manufacturer",
          },
          {
            href: "https://fundamt.gv.at",
            label: "Austrian Lost & Found Office",
            desc: "File a loss report online",
          },
          {
            href: "https://www.bmbwf.gv.at/educard",
            label: "BMBWF edu.card Info",
            desc: "Ministry page on edu.card",
          },
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
    </>
  );
}
