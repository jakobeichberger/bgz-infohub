import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "School Account & Office 365",
  description:
    "School account, login credentials, password rules, password reset and Microsoft Office 365 at BG Zehnergasse.",
};

export default function SchulaccountPageEN() {
  return (
    <>
      <PageHeader title="School Account & Office 365" />

      <P>
        Every student receives a personal school account upon enrolment. This
        gives you access to all digital services of the school.
      </P>

      <H2>Your School Account</H2>

      <Table
        headers={["Property", "Format / Example"]}
        rows={[
          ["Username", "lastname.firstname"],
          ["Email address", "lastname.firstname@bgzwn.at"],
          ["Initial password", "Assigned by IT during enrolment"],
        ]}
      />

      <Callout type="info" title="First login">
        The school account must be activated <strong>at school</strong>. During
        the first login on the school network, a personal password is set.
        Only after that does remote access work from home.
      </Callout>

      <H3>This gives you access to</H3>
      <UL>
        <li>Computer workstations in IT labs</li>
        <li>School WiFi</li>
        <li>Printers and copiers (paid via edu.Card)</li>
        <li>WebUntis — timetable, grades, absences</li>
        <li>Moodle / eduvidual — learning platform</li>
        <li>edu.Flow — school–parent communication</li>
        <li>Microsoft Office 365 — Word, Excel, Teams, OneDrive</li>
      </UL>

      <H2>Password Rules</H2>

      <P>
        The following rules apply for the <InlineCode>bgzwn.at</InlineCode>{" "}
        domain:
      </P>

      <UL>
        <li>Minimum <strong>12 characters</strong> (longer is better)</li>
        <li>
          Complexity required: upper and lower case letters plus numbers{" "}
          <strong>or</strong> special characters
        </li>
        <li>
          After <strong>10 failed attempts</strong> the account is locked for{" "}
          <strong>10 minutes</strong>
        </li>
      </UL>

      <Callout type="danger" title="Forbidden words in passwords">
        <p>
          The following words must <strong>not</strong> appear in your password
          — not even as part of a longer word:
        </p>
        <ul>
          <li><InlineCode>Zehnergasse</InlineCode></li>
          <li><InlineCode>Gymnasium</InlineCode></li>
          <li><InlineCode>wauwau</InlineCode></li>
          <li><InlineCode>bgzwn</InlineCode></li>
        </ul>
      </Callout>

      <H3>Tips for a secure password</H3>

      <P>
        <strong>Method 1 — Use a full sentence (recommended):</strong>
        <br />
        Use a full sentence with spaces. It is long, secure and easy to
        remember.
      </P>

      <Table
        headers={["Example password", "Characters", "Security"]}
        rows={[
          ["My dog loves to eat 3 bananas!", "32", "Very secure"],
          ["In summer I go swimming 7 times.", "35", "Very secure"],
          ["Pizza with pineapple? Never, thanks!", "38", "Very secure"],
        ]}
      />

      <P>
        <strong>Method 2 — First letter acronym:</strong>
        <br />
        Take the first letter of each word in a sentence.
      </P>
      <UL>
        <li>
          Sentence: &quot;On Monday I always eat 2 rolls for breakfast!&quot; →
          Password: <InlineCode>OMIae2rfb!</InlineCode>
        </li>
      </UL>

      <P>
        <strong>Method 3 — Random word combination:</strong>
      </P>
      <UL>
        <li><InlineCode>Cloud Fork Octopus Rocket</InlineCode> (27 characters)</li>
        <li><InlineCode>Cactus Friday Moonstone Soup7</InlineCode> (30 characters)</li>
      </UL>

      <H3>Examples of bad passwords</H3>

      <Table
        headers={["Bad password", "Why insecure?"]}
        rows={[
          ["Zehnergasse2025", "Contains forbidden word"],
          ["Gymnasium!1234", "Contains forbidden word"],
          ["Password1234", "On every hacker list"],
          ["12345678abcd", "Simple sequence"],
          ["MaxMuster2010", "Name + birth year"],
          ["qwertzuiop12", "Keyboard pattern"],
        ]}
      />

      <Callout type="success" title="Golden rules">
        <ol>
          <li>At least 12 characters (preferably more)</li>
          <li>No school-related terms (Zehnergasse, Gymnasium, bgzwn, wauwau)</li>
          <li>No personal information (name, birthday, pet names)</li>
          <li>Best: use a full sentence as your password</li>
          <li>Use a unique password for each account</li>
          <li>Never share your password — not even with friends</li>
        </ol>
      </Callout>

      <H2>Change Password</H2>

      <P>There are three ways to change your password:</P>

      <StepList>
        <Step title="Online via portal.office.com">
          <ol>
            <li>
              Sign in at{" "}
              <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
                portal.office.com
              </a>{" "}
              with your email and current password
            </li>
            <li>Click your initials (top right) → &quot;View account&quot;</li>
            <li>Select &quot;Password&quot; or &quot;Change password&quot;</li>
            <li>Enter old password once, new password twice</li>
          </ol>
          <p className="text-xs text-[var(--text-light)] mt-1">
            Changes apply within minutes for all Microsoft services. The school
            network may take up to 15 minutes.
          </p>
        </Step>
        <Step title="At a school PC">
          Press <InlineCode>Ctrl + Alt + Del</InlineCode> → select &quot;Change
          password&quot; → enter old and new password.
        </Step>
        <Step title="Via DigiGB or IT teachers">
          Teachers can reset passwords and multi-factor authentication (MFA)
          during class.
        </Step>
      </StepList>

      <Callout type="info" title="Important">
        Your password applies to <strong>all</strong> connected services: WiFi,
        OneDrive, Office 365, WebUntis and Moodle.
      </Callout>

      <H2>Forgot Password</H2>

      <P>
        If a private email address or phone number was registered during the
        first login, you can reset your password yourself:
      </P>

      <StepList>
        <Step title="Open self-service reset">
          Go to{" "}
          <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">
            portal.office.com
          </a>{" "}
          and enter your school email address.
        </Step>
        <Step title="Click &quot;Forgot password&quot;">
          Choose the authentication method (email or SMS).
        </Step>
        <Step title="Enter code &amp; set new password">
          Enter the received code and set a new password.
        </Step>
      </StepList>

      <Callout type="warning" title="Self-service not available?">
        If self-service was not set up, please contact:
        <ul>
          <li>DigiGB teachers or IT teachers during class</li>
          <li>IT administration: <a href="mailto:admin@bgzwn.at" className="text-[var(--primary)] hover:underline">admin@bgzwn.at</a></li>
        </ul>
      </Callout>

      <H2>Microsoft 365</H2>

      <P>
        Through the MS-ACH agreement, all students receive Microsoft 365 with
        the <strong>A3 licence completely free</strong> — including desktop
        apps, OneDrive, OneNote, Teams and Copilot.
      </P>

      <Callout type="info" title="Dedicated page">
        Full details on A3 licence benefits, OneDrive, OneNote, Copilot and
        installation:{" "}
        <a
          href="/en/infohub/office365"
          className="text-[var(--primary)] hover:underline font-semibold"
        >
          Microsoft 365 → View full details
        </a>
      </Callout>
    </>
  );
}
