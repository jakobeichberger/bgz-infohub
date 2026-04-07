import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { H2, P } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "InfoHub — BG Zehnergasse",
  description:
    "Zentrales Informationsportal für Eltern und Schüler am BG Zehnergasse: Schulkonto, iPad, IT-Services, Anleitungen und Hilfe.",
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
      className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
    >
      <div className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0" />
      <div>
        <span className="text-sm font-medium text-[var(--text)] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
          {label}
        </span>
        <span className="text-xs text-[var(--text-light)] block">
          {description}
        </span>
      </div>
    </a>
  );
}

export default function InfoHubPage() {
  return (
    <>
      <PageHeader title="InfoHub" />

      <P>
        Willkommen im InfoHub des BG Zehnergasse! Hier finden Eltern und
        Schülerinnen und Schüler alle wichtigen Informationen rund um
        Schulkonto, iPad, digitale Services und Hilfestellungen — einfach
        erklärt und übersichtlich aufbereitet.
      </P>

      <Callout type="info" title="Schulcode für edu.Suite-Dienste">
        Der Schulcode für alle edu.Suite-Dienste (edu.Flow, edu.Pay, edu.Card)
        lautet: <strong>304046</strong>. Sie benötigen diesen Code bei der
        Erstanmeldung.
      </Callout>

      <H2>Themen</H2>

      <CardGrid>
        <Card href="/infohub/geraete" icon="📱" title="iPad & Geräte">
          Geräteinitiative, Beschaffung, Kinderschutz, Zubehör-Nachbestellung
          und Garantie.
        </Card>
        <Card href="/infohub/schulaccount" icon="🔑" title="Schulaccount & Office 365">
          Login-Daten, Passwort-Regeln, Passwort zurücksetzen, Microsoft
          Office 365 kostenlos nutzen.
        </Card>
        <Card href="/infohub/services" icon="🏫" title="Schulservices">
          WebUntis (Stundenplan), edu.Flow (Elternkommunikation), edu.Pay
          (Zahlungen), Drucken, PoDS.
        </Card>
        <Card href="/infohub/mdm" icon="⚙️" title="MDM-Einrichtung">
          Geräteverwaltung einrichten — Schritt für Schritt für iOS, Android
          und Windows.
        </Card>
        <Card href="/infohub/bildungsportal" icon="🏛️" title="Bildungsportal & IT-Services">
          Bildungsportal für Eltern, edu.digicard (digitaler Schülerausweis),
          Lernplattformen.
        </Card>
        <Card href="/infohub/hilfe" icon="🆘" title="Hilfe & Kontakte">
          Ansprechpartner, häufige Probleme und Lösungen, alle wichtigen Links
          auf einen Blick.
        </Card>
      </CardGrid>

      <H2>Schnellzugriff — Die wichtigsten Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        <QuickLink
          href="https://melpomene.webuntis.com/WebUntis/?school=bgzehnwn"
          label="WebUntis öffnen"
          description="Stundenplan, Abwesenheiten melden, Sprechstunden"
        />
        <QuickLink
          href="https://portal.office.com"
          label="Office 365 öffnen"
          description="Word, Excel, Teams, OneDrive, Passwort ändern"
        />
        <QuickLink
          href="https://edusuite.at/portal/"
          label="edu.Suite Portal"
          description="edu.Flow, edu.Pay, edu.Card (Schulcode: 304046)"
        />
        <QuickLink
          href="https://www.pods.gv.at"
          label="Portal Digitale Schule (PoDS)"
          description="Digitale Schulverwaltung des Bundes"
        />
        <QuickLink
          href="https://www.bildung.gv.at"
          label="Bildungsportal"
          description="Zentrales Login für alle Bildungsdienste"
        />
        <QuickLink
          href="https://www.bgzwn.at"
          label="Schulwebsite"
          description="Offizielle Homepage des BG Zehnergasse"
        />
      </div>

      <H2>Wichtige Kontakte</H2>

      <P>
        Bei Fragen oder Problemen wenden Sie sich bitte an die zuständige Stelle:
      </P>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left px-3 py-2 font-semibold text-primary dark:text-blue-400 bg-[var(--bg)] border-b border-[var(--border)]">
                Anliegen
              </th>
              <th className="text-left px-3 py-2 font-semibold text-primary dark:text-blue-400 bg-[var(--bg)] border-b border-[var(--border)]">
                Kontakt
              </th>
              <th className="text-left px-3 py-2 font-semibold text-primary dark:text-blue-400 bg-[var(--bg)] border-b border-[var(--border)]">
                Zuständig für
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-[var(--hover-bg)] transition-colors">
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                IT-Administration
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                <a
                  href="mailto:admin@bgzwn.at"
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  admin@bgzwn.at
                </a>
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text-light)]">
                Accounts, WLAN, Software, Passwort-Reset
              </td>
            </tr>
            <tr className="hover:bg-[var(--hover-bg)] transition-colors">
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                Schulkanzlei
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                <a
                  href="mailto:kanzlei@bgzwn.at"
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  kanzlei@bgzwn.at
                </a>
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text-light)]">
                Zahlungen, Bescheinigungen, edu.Pay-Rückerstattungen
              </td>
            </tr>
            <tr className="hover:bg-[var(--hover-bg)] transition-colors">
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                Hardware-Support iPad
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                +43 1 813 0000 /{" "}
                <a
                  href="mailto:sales@acptechrent.at"
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  sales@acptechrent.at
                </a>
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text-light)]">
                ACP TechRent — Garantie, Reparatur, Defekte
              </td>
            </tr>
            <tr className="hover:bg-[var(--hover-bg)] transition-colors">
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                OeAD Digitales Lernen
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                +43 720 080 356 /{" "}
                <a
                  href="mailto:digitaleslernen@oead.at"
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  digitaleslernen@oead.at
                </a>
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text-light)]">
                Geräteinitiative, Befreiung, Gerätebörse (Mo–Fr 07:30–18:00)
              </td>
            </tr>
            <tr className="hover:bg-[var(--hover-bg)] transition-colors">
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                PoDS-Support
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                <a
                  href="https://www.bildung.gv.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  bildung.gv.at (nach Login)
                </a>
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text-light)]">
                Portal Digitale Schule — Anleitungen &amp; FAQ
              </td>
            </tr>
            <tr className="hover:bg-[var(--hover-bg)] transition-colors">
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                Bildungsportal-Hotline
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text)]">
                +43 1 53120 3344 /{" "}
                <a
                  href="mailto:support@bildung.gv.at"
                  className="text-primary dark:text-blue-400 hover:underline"
                >
                  support@bildung.gv.at
                </a>
              </td>
              <td className="px-3 py-2 border-b border-[var(--border)] text-[var(--text-light)]">
                Bildungsportal, ID Austria im Bildungswesen
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Callout type="warning" title="Hinweis">
        Alle Angaben auf diesen Seiten dienen zur Information und Hilfestellung.
        Sie sind rechtsunverbindlich. Bei Fragen wenden Sie sich bitte direkt an
        die Schule.
      </Callout>
    </>
  );
}
