import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "School Services",
  description:
    "WebUntis, edu.Flow, edu.Pay, edu.Card, printing and Portal Digitale Schule (PoDS) at BG Zehnergasse.",
};

export default function ServicesPageEN() {
  return (
    <>
      <PageHeader title="School Services" />

      <P>
        BG Zehnergasse uses several digital platforms for everyday school life.
        Here you will find an overview of all services and how to use them.
      </P>

      {/* ═══ WebUntis ═══ */}
      <H2>WebUntis — Timetable &amp; Class Register</H2>

      <P>
        WebUntis is the digital timetable and electronic class register of the
        school, operated by Gruber &amp; Petters (
        <a href="https://www.untis.at/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">untis.at</a>).
      </P>

      <H3>Access</H3>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Direct link", "melpomene.webuntis.com/WebUntis/?school=bgzehnwn"],
          ["Username", "lastname.firstname (not the email address)"],
          ["Password", "Your personal school account password"],
        ]}
      />

      <P>
        <strong>Without login:</strong> The timetable, dashboard and office
        hours are publicly visible. Search for &quot;BG Zehnergasse&quot; on{" "}
        <a href="https://webuntis.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">webuntis.com</a>.
      </P>

      <Callout type="info" title="Note for parents">
        Parents can access WebUntis through the{" "}
        <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Bildungsportal</a>{" "}
        or use their child&apos;s login. For problems with your WebUntis
        parent account, please contact{" "}
        <a href="mailto:bnb@bgzwn.at" className="text-[var(--primary)] hover:underline">bnb@bgzwn.at</a>.
      </Callout>

      <H3>Colour codes in the timetable</H3>
      <Table
        headers={["Colour", "Meaning"]}
        rows={[
          ["🟠 Orange", "Regular lessons"],
          ["🟡 Yellow", "Tests / exams"],
          ["🟣 Purple", "Substitutions / changes"],
          ["🔵 Blue", "Holidays / days off"],
        ]}
      />

      <Callout type="info" title="Schedule changes">
        Changes for the next day are entered by <strong>12:00 PM</strong>.
        After that, the displayed plan is final.
      </Callout>

      <H3>Reporting an absence</H3>

      <StepList>
        <Step title="Click &quot;Report absence&quot; in the dashboard">
          Select the time period (full day or individual hours).
        </Step>
        <Step title="Select category &quot;KR_neu&quot;">
          Optionally add a comment for the class advisor.
        </Step>
        <Step title="Submit written excuse within one week">
          The absence is saved as &quot;open&quot; and must be excused within
          one week.
        </Step>
      </StepList>

      <Callout type="danger" title="Compulsory attendance">
        According to Austrian school law (SchUG § 43 and § 45), school
        attendance is compulsory. Parents must notify the class advisor by{" "}
        <strong>7:30 AM on the first day of absence</strong>. A medical
        certificate is required for absences longer than one week or frequent
        short-term illness.
      </Callout>

      {/* ═══ edu.Suite ═══ */}
      <H2>edu.Suite — Central Access Portal</H2>

      <P>
        edu.Suite by Quarto Software GmbH is the shared login portal for
        edu.Flow, edu.Pay and edu.Card.
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Portal URL", "edusuite.at/portal/"],
          ["School code", "304046"],
          ["Student login", "Via Office 365 (Microsoft account)"],
          ["Parent login", "Via verified edu.Flow account"],
        ]}
      />

      <Callout type="info" title="Parent synchronisation">
        Parent accounts are synchronised <strong>nightly</strong>. Changes to
        your data will be visible the next day.
      </Callout>

      {/* ═══ edu.Flow ═══ */}
      <H2>edu.Flow — Digital Parent Communication</H2>

      <P>
        edu.Flow is the official communication platform between school and
        parents.
      </P>

      <H3>Initial setup</H3>

      <StepList>
        <Step title="Receive welcome letter">
          At the beginning of the school year you receive a letter with a QR
          code and access data.
        </Step>
        <Step title="Verify your email">
          Scan the QR code or enter the data at{" "}
          <a href="https://edusuite.at/portal/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">edusuite.at/portal/</a>.
          Confirm your email address.
        </Step>
        <Step title="Return the signed letter">
          Give the signed letter back to the class advisor.
        </Step>
        <Step title="Start using the platform">
          With your email and password you now have access to edu.Flow and
          edu.Pay.
        </Step>
      </StepList>

      <Callout type="warning" title="Emails not arriving?">
        Especially with <strong>hotmail.com</strong>, <strong>outlook.com</strong>,{" "}
        <strong>live.com</strong> and <strong>yahoo.com</strong>, emails are
        often blocked as spam. Add these senders to your contacts:
        <ul>
          <li><InlineCode>eduflow@bgzwn.at</InlineCode></li>
          <li><InlineCode>edupay@bgzwn.at</InlineCode></li>
        </ul>
        Also check your spam/junk folder.
      </Callout>

      <H3>Forgot password (parents)</H3>
      <P>
        Reset your edu.Flow password here:{" "}
        <a href="https://www.eduflow.at/EduFlow/Account/forgotpassword?tenant=304046&username=" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
          Password reset
        </a>. The IT team <strong>cannot</strong> reset parent passwords — only
        the self-service portal can.
      </P>

      {/* ═══ edu.Pay ═══ */}
      <H2>edu.Pay — Cashless Payment Platform</H2>

      <P>Use edu.Pay to pay school expenses cashlessly:</P>

      <UL>
        <li>Top up edu.Card balance (max. EUR 25 per top-up)</li>
        <li>Order a new edu.Card (student ID, EUR 13)</li>
        <li>Pay for sports weeks &amp; excursions</li>
        <li>Locker and bookshelf rental</li>
      </UL>

      <Table
        headers={["Payment method", "Note"]}
        rows={[
          ["EPS transfer", "Online bank transfer — credited immediately"],
          ["Bank transfer", "Takes 2–4 business days"],
        ]}
      />

      <Callout type="info" title="No card payments">
        Credit card and debit card payments are no longer offered due to high
        fees. Please use EPS or a regular bank transfer.
      </Callout>

      <Callout type="info" title="Overpayment / Refund">
        Amounts under EUR 10 can be transferred to the copy card. From
        EUR 10 a refund is possible — send the application form with name,
        class and signature to{" "}
        <a href="mailto:kanzlei@bgzwn.at" className="text-[var(--primary)] hover:underline">kanzlei@bgzwn.at</a>.
      </Callout>

      {/* ═══ edu.Card ═══ */}
      <H2>edu.Card — Student ID &amp; Copy Card</H2>

      <P>
        The edu.Card is the official student ID with copy function. Full
        details on ordering, loss reporting, replacement, and the digital
        edu.digicard can be found on the dedicated page:
      </P>

      <Callout type="info" title="Dedicated page">
        <a
          href="/en/infohub/educard"
          className="text-[var(--primary)] hover:underline font-semibold"
        >
          edu.Card &amp; edu.digicard → View full details
        </a>
      </Callout>

      {/* ═══ Printing ═══ */}
      <H2>Printing &amp; Copying</H2>

      <P>
        The printing system uses SafeQ by Y-Soft. Costs are charged to your
        edu.Card balance.
      </P>

      <Table
        headers={["Method", "Description"]}
        rows={[
          ["FollowMe (school PC)", "Send print job → collect at printer with edu.Card or login"],
          ["Windows / Mac", "Set up printer via school network"],
          ["iPad", "AirPrint via school WiFi"],
          ["Email print", "Send document to printme@bgzwn.at (from school address)"],
        ]}
      />

      <UL>
        <li>Print jobs are stored for <strong>4 days</strong> in the queue</li>
        <li>FollowMe printing is free in IT labs</li>
        <li>Mac printing only works on the teacher WiFi</li>
      </UL>

      {/* ═══ PoDS ═══ */}
      <H2>Portal Digitale Schule (PoDS)</H2>

      <P>
        PoDS is the platform of the Austrian Federal Ministry of Education for
        digital school administration.
      </P>

      <H3>Activation for students</H3>

      <StepList>
        <Step title="Receive QR code in class">
          You will receive an activation code in DIGIB class. It is valid for{" "}
          <strong>30 days</strong>.
        </Step>
        <Step title="Link with Office 365">
          Select &quot;Register with Office 365&quot; and sign in with{" "}
          <InlineCode>lastname.firstname@bgzwn.at</InlineCode>.
        </Step>
        <Step title="Confirm permissions">
          Confirm the requested permissions — your PoDS account is now linked
          to your school account.
        </Step>
      </StepList>

      <H3>Login</H3>
      <Table
        headers={["Role", "How to sign in"]}
        rows={[
          ["Student", "bildung.gv.at → Login → \"I am a student\" → \"Sign in with Microsoft\""],
          ["Parent", "Via bildung.gv.at → Login with ID Austria or Bildungsportal credentials"],
          ["Teacher", "Via bildung.gv.at with portal credentials"],
        ]}
      />

      <Callout type="info" title="Help with PoDS">
        Guides are available after login at{" "}
        <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">bildung.gv.at</a>.
        Activation code expired? Contact{" "}
        <a href="mailto:admin@bgzwn.at" className="text-[var(--primary)] hover:underline">admin@bgzwn.at</a>{" "}
        for a new code.
      </Callout>
    </>
  );
}
