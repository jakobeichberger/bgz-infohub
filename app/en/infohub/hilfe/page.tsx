import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Help & Contacts",
  description:
    "Support contacts, common problems and solutions, all important links for parents and students at BG Zehnergasse.",
};

export default function HilfePageEN() {
  return (
    <>
      <PageHeader title="Help & Contacts" />

      <P>
        Here you will find all contact persons, solutions for common problems
        and the most important links at a glance.
      </P>

      <H2>Who do I contact for which problem?</H2>

      <Table
        headers={["Issue", "Contact", "Availability"]}
        rows={[
          ["School account, WiFi, software, password reset", "admin@bgzwn.at", "By email or in person at IT office"],
          ["Payments, certificates, edu.Pay refund", "kanzlei@bgzwn.at", "By email or in person at office"],
          ["edu.Flow & edu.Pay — platform issues", "eduflow@bgzwn.at / edupay@bgzwn.at", "By email"],
          ["iPad hardware (defect, warranty, repair)", "sales@acptechrent.at / +43 1 813 0000", "ACP TechRent — phone or email"],
          ["Device initiative, exemption, exchange", "digitaleslernen@oead.at / +43 720 080 356", "OeAD hotline Mon–Fri 07:30–18:00"],
          ["Education Portal, ID Austria", "support@bildung.gv.at / +43 1 53120 3344", "Education Portal hotline"],
        ]}
      />

      <H2>Common Problems &amp; Solutions</H2>

      <H3>Forgot password</H3>
      <UL>
        <li><strong>Self-service reset:</strong> Go to{" "}
          <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">portal.office.com</a>{" "}
          → &quot;Forgot password&quot; → verify via email or SMS
        </li>
        <li><strong>Requirement:</strong> A private email or phone number must have been registered during first login</li>
        <li><strong>No self-service?</strong> Contact DigiGB teachers or{" "}
          <a href="mailto:admin@bgzwn.at" className="text-primary dark:text-blue-400 hover:underline">admin@bgzwn.at</a>
        </li>
      </UL>

      <H3>Forgot edu.Flow password (parents)</H3>
      <UL>
        <li>Reset password at:{" "}
          <a href="https://www.eduflow.at/EduFlow/Account/forgotpassword?tenant=304046&username=" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">edu.Flow password reset</a>
        </li>
        <li>IT administration <strong>cannot</strong> reset parent passwords — only the self-service portal can</li>
      </UL>

      <H3>WiFi not connecting</H3>
      <UL>
        <li>Check that the correct school network is selected</li>
        <li>Use the school account (<code>lastname.firstname</code>) to sign in — not the email address</li>
        <li>Restart the device and try again</li>
        <li>Still having problems?{" "}
          <a href="mailto:admin@bgzwn.at" className="text-primary dark:text-blue-400 hover:underline">admin@bgzwn.at</a>
        </li>
      </UL>

      <H3>edu.Flow notifications not arriving</H3>
      <UL>
        <li>Especially with <strong>hotmail.com</strong>, <strong>outlook.com</strong>, <strong>live.com</strong> and <strong>yahoo.com</strong>, emails are often blocked as spam</li>
        <li>Add <code>eduflow@bgzwn.at</code> and <code>edupay@bgzwn.at</code> to your contacts</li>
        <li>Check your spam/junk folder</li>
        <li>Enable push notifications in the edu.Flow web app</li>
      </UL>

      <H3>Printer not found</H3>
      <UL>
        <li>Make sure you are connected to the school WiFi</li>
        <li>iPad: AirPrint only works on school WiFi</li>
        <li>Mac: Printing only works on teacher WiFi</li>
        <li>Alternative: Send document to <code>printme@bgzwn.at</code> (from school address)</li>
      </UL>

      <H3>iPad frozen / not responding</H3>
      <UL>
        <li><strong>Force restart:</strong> Hold Home + Power button simultaneously (or on newer iPads: press Volume Up, Volume Down, then hold Power)</li>
        <li>If problem persists: Reset iPad via iTunes (see{" "}
          <a href="/en/infohub/geraete" className="text-primary dark:text-blue-400 hover:underline">iPad &amp; Devices</a>)
        </li>
        <li>Hardware defect? Contact ACP TechRent: +43 1 813 0000</li>
      </UL>

      <H3>Account locked (too many failed attempts)</H3>
      <UL>
        <li>After <strong>10 failed attempts</strong> the account is locked for <strong>10 minutes</strong></li>
        <li>Wait 10 minutes and try again</li>
        <li>If you forgot your password: Self-service reset via{" "}
          <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">portal.office.com</a>{" "}
          or contact IT
        </li>
      </UL>

      <H3>Multiple children — edu.Pay shows wrong child</H3>
      <UL>
        <li>Clear browser cookies after logging out, or use a private / incognito window</li>
      </UL>

      <H2>All Important Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          { href: "https://melpomene.webuntis.com/WebUntis/?school=bgzehnwn", label: "WebUntis", desc: "Timetable & class register" },
          { href: "https://portal.office.com", label: "Office 365 Portal", desc: "Word, Excel, Teams, OneDrive, change password" },
          { href: "https://edusuite.at/portal/", label: "edu.Suite Portal", desc: "edu.Flow, edu.Pay, edu.Card (code: 304046)" },
          { href: "https://www.bildung.gv.at", label: "Education Portal", desc: "Central login for all education services" },
          { href: "https://digitaleslernen.oead.at/de/faqs", label: "OeAD FAQ", desc: "Device initiative FAQ" },
          { href: "https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung", label: "Payment & Exemption", desc: "Device contribution: payment and exemption" },
          { href: "https://www.bgzwn.at", label: "School Website", desc: "Official homepage of BG Zehnergasse" },
          { href: "https://www.saferinternet.at", label: "Safer Internet", desc: "Tips for safe internet use" },
          { href: "https://digitaleschule.gv.at/", label: "Digital School", desc: "Ministry portal for digital education" },
          { href: "/en/infohub/bildungsportal", label: "Education Portal Guide", desc: "Our guide for parents" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("/") ? undefined : "_blank"}
            rel={link.href.startsWith("/") ? undefined : "noopener noreferrer"}
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{link.label}</span>
              <span className="text-xs text-[var(--text-light)] block">{link.desc}</span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="success" title="Tip">
        Save this page as a bookmark in your browser for quick access to all important links!
      </Callout>
    </>
  );
}
