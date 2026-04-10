import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { H2, P } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "InfoHub — BG Zehnergasse",
  description:
    "Central information portal for parents and students at BG Zehnergasse: school account, iPad, IT services, guides and support.",
};

function QuickLink({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
    >
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
      <div>
        <span className="text-sm font-medium text-txt group-hover:text-primary group-hover:text-primary transition-colors">
          {label}
        </span>
        <span className="text-xs text-txt-light block">
          {description}
        </span>
      </div>
    </a>
  );
}

export default function InfoHubPageEN() {
  return (
    <>
      <PageHeader title="InfoHub" />

      <Callout type="warning" title="Work in Progress">
        This website is still <strong>under construction</strong>. Content is
        being continuously added and reviewed. Some information may not yet be
        up to date or may contain errors. If you have questions, please
        contact{" "}
        <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">
          admin@bgzwn.at
        </a>.
      </Callout>

      <P>
        Welcome to the InfoHub of BG Zehnergasse! Here parents and students
        can find all important information about school accounts, iPads,
        digital services and support — clearly explained and easy to navigate.
      </P>

      <Callout type="info" title="School code for edu.Suite services">
        The school code for all edu.Suite services (edu.Flow, edu.Pay,
        edu.Card) is: <strong>304046</strong>. You will need this code when
        logging in for the first time.
      </Callout>

      <H2>Topics</H2>

      <CardGrid>
        <Card href="/en/infohub/geraete" icon="📱" title="iPad & Devices">
          Device initiative, procurement, child protection, accessories and
          warranty.
        </Card>
        <Card href="/en/infohub/wlan" icon="📶" title="WiFi Guide">
          Connect to school WiFi on all devices, certificates and
          troubleshooting.
        </Card>
        <Card href="/en/infohub/schulaccount" icon="🔑" title="School Account">
          Login credentials, password rules, change and reset password.
        </Card>
        <Card href="/en/infohub/office365" icon="💻" title="Microsoft 365">
          Free A3 licence: desktop apps, OneDrive (5 TB), OneNote, Teams,
          Copilot.
        </Card>
        <Card href="/en/infohub/services" icon="🏫" title="School Services">
          WebUntis, edu.Flow, edu.Pay, printing and Portal Digitale Schule.
        </Card>
        <Card href="/en/infohub/educard" icon="🪪" title="edu.Card & digicard">
          Student ID, copy card, report loss, digital ID on smartphone.
        </Card>
        <Card href="/en/infohub/nextexam" icon="📝" title="Next-Exam">
          Digital exam environment — downloads, guides and quick fixes.
        </Card>
        <Card href="/en/infohub/laptop" icon="💻" title="Laptop Requirements">
          Notebook specs for upper school, buying guide and tips.
        </Card>
        <Card href="/en/infohub/mdm" icon="⚙️" title="MDM Setup">
          Device management setup — step by step for iOS, Android and
          Windows.
        </Card>
        <Card href="/en/infohub/tipp10" icon="⌨️" title="TIPP10 Typing Trainer">
          Free 10-finger touch typing — online, software and school version.
        </Card>
        <Card href="/en/infohub/bildungsportal" icon="🏛️" title="Education Portal & IT Services">
          Austrian Education Portal for parents, edu.digicard, learning
          platforms.
        </Card>
        <Card href="/en/infohub/vwa" icon="🎓" title="VWA / ABA (Thesis)">
          Pre-scientific thesis: process, structure, citation, LaTeX and Word
          templates.
        </Card>
        <Card href="/en/infohub/lizenzen" icon="🎁" title="Free Software">
          Free licences: GitHub Copilot, JetBrains, Autodesk, Figma and
          more.
        </Card>
        <Card href="/en/infohub/hilfe" icon="🆘" title="Help & Contacts">
          Contact persons, common problems and solutions, important links.
        </Card>
      </CardGrid>

      <H2>Quick Access — Most Important Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <QuickLink
          href="https://melpomene.webuntis.com/WebUntis/?school=bgzehnwn"
          label="Open WebUntis"
          description="Timetable, report absences, office hours"
        />
        <QuickLink
          href="https://portal.office.com"
          label="Open Office 365"
          description="Word, Excel, Teams, OneDrive, change password"
        />
        <QuickLink
          href="https://edusuite.at/portal/"
          label="edu.Suite Portal"
          description="edu.Flow, edu.Pay, edu.Card (school code: 304046)"
        />
        <QuickLink
          href="https://www.bildung.gv.at"
          label="Education Portal"
          description="Central login for all education services"
        />
        <QuickLink
          href="https://www.bgzwn.at"
          label="School Website"
          description="Official homepage of BG Zehnergasse"
        />
      </div>

      <H2>Important Contacts</H2>

      <P>
        If you have questions or problems, please contact the appropriate
        department:
      </P>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-primary bg-bg border-b border-border-app">
                Issue
              </th>
              <th className="text-left px-3 py-2 font-semibold text-primary bg-bg border-b border-border-app">
                Contact
              </th>
              <th className="text-left px-3 py-2 font-semibold text-primary bg-bg border-b border-border-app">
                Responsible for
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">IT Administration</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">
                <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">admin@bgzwn.at</a>
              </td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">Accounts, WiFi, software, password reset</td>
            </tr>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">School Office</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">
                <a href="mailto:kanzlei@bgzwn.at" className="text-primary hover:underline">kanzlei@bgzwn.at</a>
              </td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">Payments, certificates, edu.Pay refunds</td>
            </tr>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">WebUntis (parent accounts, grades, absences)</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">
                <a href="mailto:bnb@bgzwn.at" className="text-primary hover:underline">bnb@bgzwn.at</a>
              </td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">WebUntis issues, parent access, grade overview</td>
            </tr>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">Data changes (address, name, phone)</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">Your child&apos;s class advisor</td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">Update personal data in SOKRATES → edu.Flow, edu.Pay</td>
            </tr>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">iPad Hardware Support</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">
                +43 1 813 0000 / <a href="mailto:sales@acptechrent.at" className="text-primary hover:underline">sales@acptechrent.at</a>
              </td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">ACP TechRent — warranty, repair, defects</td>
            </tr>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">OeAD Digital Learning</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">
                +43 720 080 356 / <a href="mailto:digitaleslernen@oead.at" className="text-primary hover:underline">digitaleslernen@oead.at</a>
              </td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">Device initiative, exemption, device exchange (Mon–Fri 07:30–18:00)</td>
            </tr>
            <tr className="hover:bg-hover-bg transition-colors">
              <td className="px-3 py-2 border-b border-border-app text-txt">Education Portal Hotline</td>
              <td className="px-3 py-2 border-b border-border-app text-txt">
                +43 1 53120 3344 / <a href="mailto:support@bildung.gv.at" className="text-primary hover:underline">support@bildung.gv.at</a>
              </td>
              <td className="px-3 py-2 border-b border-border-app text-txt-light">Bildungsportal, ID Austria in education</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Disclaimer">
        All information on these pages is provided for guidance and assistance.
        It is legally non-binding. For questions, please contact the school
        directly.
      </Callout>
    </>
  );
}
