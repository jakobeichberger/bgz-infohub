import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "IQES — Evaluation & School Development Platform",
  description:
    "IQES Österreich at BG Zehnergasse: login, first-time setup, questionnaire templates, password reset and help for teachers.",
};

export default function IqesPageEN() {
  return (
    <>
      <PageHeader title="IQES — Evaluation & School Development Platform" />

      <P>
        <strong>IQES Österreich</strong> is the evaluation and school
        development platform for Austrian schools. Teachers at BG Zehnergasse
        use IQES for <strong>surveys, feedback and internal
        evaluations</strong> — with questionnaire templates approved by the
        school&apos;s QMS team.
      </P>

      <Callout type="warning" title="IQES is a separate system">
        The IQES platform and your <strong>school account</strong> are
        technically separate: they have <strong>their own independent
        passwords</strong> and no shared login. Changing your school account
        password does <strong>not</strong> change your IQES password — and vice
        versa.
      </Callout>

      {/* ═══ Overview ═══ */}
      <H2>At a Glance</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Platform", "iqes.bgzwn.at (redirects to IQES Online)"],
          ["Login", "With your school email address"],
          ["Password", "Separate IQES password (NOT the school account password)"],
          ["Audience", "Teachers & QMS team"],
          ["Use", "Surveys, feedback, evaluations, questionnaire templates"],
        ]}
      />

      {/* ═══ First-time setup ═══ */}
      <H2>First-Time Setup</H2>

      <P>
        On your first use, you set your IQES password via a link from the
        invitation email:
      </P>

      <StepList>
        <Step title="Open the invitation email">
          You automatically receive an email from <strong>IQES-Admin</strong>{" "}
          to your school email address with a password setup link.
        </Step>
        <Step title="Set a password">
          Use the link in the email to set your own IQES password.
        </Step>
        <Step title="Email gone?">
          If you have deleted the invitation email or can no longer find it,
          request a new password via <strong>&quot;Forgot password&quot;</strong>{" "}
          (see the section below).
        </Step>
      </StepList>

      {/* ═══ Login ═══ */}
      <H2>Logging In &amp; Finding Templates</H2>

      <StepList>
        <Step title="Open IQES">
          Go to{" "}
          <a
            href="https://iqes.bgzwn.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            iqes.bgzwn.at
          </a>{" "}
          — you are automatically redirected to IQES Online.
        </Step>
        <Step title="Sign in">
          Click <strong>&quot;Anmelden&quot; (Sign in)</strong> in the top left
          and log in with your <strong>school email address</strong> and your{" "}
          <strong>IQES password</strong>.
        </Step>
        <Step title="Open the Evaluation Centre">
          Click the <strong>dots button</strong> (menu icon) and open{" "}
          <strong>&quot;Evaluationscenter&quot;</strong>.
        </Step>
        <Step title="Choose templates">
          Open the <strong>&quot;Vorlagen&quot; (Templates)</strong> area.
        </Step>
        <Step title="Filter by BG Zehnergasse">
          Under <strong>&quot;Instrumente&quot;</strong>, filter by{" "}
          <strong>&quot;BG Zehnergasse&quot;</strong>.
        </Step>
        <Step title="Use a questionnaire">
          The questionnaires approved by the <strong>QMS team</strong> can be{" "}
          <strong>copied, modified and launched</strong>.
        </Step>
      </StepList>

      {/* ═══ Forgot password ═══ */}
      <H2>Forgot Password</H2>

      <P>
        Reset your IQES password via the self-service portal:{" "}
        <a
          href="https://login.iqesonline.net/cgi-bin/selfservice/ldapportal.pl?mode=pwreset"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Reset IQES password
        </a>
        . Enter your school email address there.
      </P>

      <Callout type="info" title="Note">
        Because IQES and the school account have separate passwords, the school
        IT (<InlineCode>fad@bgzwn.at</InlineCode>) also <strong>cannot</strong>{" "}
        reset your IQES password directly — use the reset link above.
      </Callout>

      {/* ═══ Links ═══ */}
      <H2>Important Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://iqes.bgzwn.at",
            label: "IQES BG Zehnergasse",
            desc: "Login & Evaluation Centre",
          },
          {
            href: "https://login.iqesonline.net/cgi-bin/selfservice/ldapportal.pl?mode=pwreset",
            label: "Reset IQES password",
            desc: "Self-service portal",
          },
          {
            href: "https://www.iqesonline.net",
            label: "IQES Online",
            desc: "Official platform & help",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
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

      {/* ═══ Help ═══ */}
      <H2>Help &amp; Contact</H2>

      <UL>
        <li>
          <strong>Forgot / reset password:</strong> via the{" "}
          <a
            href="https://login.iqesonline.net/cgi-bin/selfservice/ldapportal.pl?mode=pwreset"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            reset link
          </a>
        </li>
        <li>
          <strong>Access / technical problems:</strong>{" "}
          <a
            href="mailto:fad@bgzwn.at"
            className="text-primary hover:underline"
          >
            fad@bgzwn.at
          </a>{" "}
          (Mag. Rainer Fadinger, MA)
        </li>
        <li>
          <strong>Questions about the platform &amp; questionnaires:</strong>{" "}
          the school&apos;s QMS team
        </li>
      </UL>
    </>
  );
}
