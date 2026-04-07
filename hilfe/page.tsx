import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Hilfe & Kontakte",
  description: "Support-Kontakte, häufige Probleme und wichtige Links für Schüler am BG Zehnergasse.",
};

export default function HilfePage() {
  return (
    <>
      <PageHeader title="Hilfe & Kontakte" />

      <P>
        Hier findest du alle wichtigen Ansprechpartner, häufige Probleme und deren
        Lösungen sowie nützliche Links.
      </P>

      <H2>Kontakte</H2>

      <Table
        headers={["Anliegen", "Kontakt", "Erreichbarkeit"]}
        rows={[
          [
            "IT-Administration (Accounts, WLAN, Software)",
            "admin@bgzwn.at",
            "Per E-Mail oder persönlich im IT-Büro",
          ],
          [
            "Schulkanzlei (Zahlungen, Bescheinigungen)",
            "kanzlei@bgzwn.at",
            "Per E-Mail oder persönlich",
          ],
          [
            "Hardware-Support iPad (ACP TechRent)",
            "sales@acptechrent.at / +43 1 813 0000",
            "Telefonisch oder per E-Mail",
          ],
          [
            "OeAD Digitales Lernen",
            "digitaleslernen@oead.at / +43 720 080 356",
            "Hotline für Geräteinitiative",
          ],
          [
            "PoDS-Support",
            "support@pods.gv.at",
            "Portal Digitale Schule",
          ],
        ]}
      />

      <H2>Häufige Probleme &amp; Lösungen</H2>

      <H3>Passwort vergessen</H3>
      <UL>
        <li>
          Self-Service-Reset über{" "}
          <a href="https://portal.office.com" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">
            portal.office.com
          </a>
        </li>
        <li>Alternativ: IT-Administration kontaktieren (<a href="mailto:admin@bgzwn.at" className="text-primary dark:text-blue-400 hover:underline">admin@bgzwn.at</a>)</li>
      </UL>

      <H3>WLAN verbindet nicht</H3>
      <UL>
        <li>Überprüfe, ob du das richtige Schulnetzwerk gewählt hast</li>
        <li>Verwende dein Schulkonto (nachname.vorname) zum Anmelden</li>
        <li>Gerät neu starten und erneut verbinden</li>
        <li>Falls weiterhin Probleme: IT-Administration kontaktieren</li>
      </UL>

      <H3>edu.Flow-Benachrichtigungen kommen nicht an</H3>
      <UL>
        <li>E-Mail-Adressen <code className="text-sm bg-[var(--border)] dark:bg-[var(--code-bg)] px-1 py-0.5 rounded font-mono">eduflow@bgzwn.at</code> und <code className="text-sm bg-[var(--border)] dark:bg-[var(--code-bg)] px-1 py-0.5 rounded font-mono">edupay@bgzwn.at</code> zu Kontakten hinzufügen</li>
        <li>Spam-/Junk-Ordner überprüfen</li>
        <li>Push-Benachrichtigungen in der App aktivieren</li>
      </UL>

      <H3>Drucker wird nicht gefunden</H3>
      <UL>
        <li>Stelle sicher, dass du mit dem Schul-WLAN verbunden bist</li>
        <li>iPad: AirPrint nur im Schul-WLAN verfügbar</li>
        <li>Mac: Drucken funktioniert nur im Lehrer-WLAN</li>
        <li>Alternative: Dokument an <code className="text-sm bg-[var(--border)] dark:bg-[var(--code-bg)] px-1 py-0.5 rounded font-mono">printme@bgzwn.at</code> senden</li>
      </UL>

      <H3>iPad reagiert nicht / hängt</H3>
      <UL>
        <li>Neustart erzwingen (Home + Power-Button halten)</li>
        <li>Falls Problem bestehen bleibt: iPad über iTunes zurücksetzen (siehe <a href="/infohub/geraete" className="text-primary dark:text-blue-400 hover:underline">iPad & Geräte</a>)</li>
        <li>Hardware-Defekt: ACP TechRent kontaktieren</li>
      </UL>

      <H3>Konto gesperrt</H3>
      <UL>
        <li>Nach 10 Fehlversuchen wird das Konto automatisch gesperrt</li>
        <li>Warte einige Minuten oder kontaktiere die IT-Administration</li>
      </UL>

      <H2>Wichtige Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          { href: "https://melpomene.webuntis.com/WebUntis/?school=bgzehnwn", label: "WebUntis", desc: "Stundenplan & Klassenbuch" },
          { href: "https://portal.office.com", label: "Office 365 Portal", desc: "Word, Excel, Teams, OneDrive" },
          { href: "https://edusuite.at/portal/", label: "edu.Suite Portal", desc: "edu.Flow, edu.Pay, edu.Card" },
          { href: "https://www.pods.gv.at", label: "Portal Digitale Schule", desc: "PoDS" },
          { href: "https://www.pods.gv.at/hilfe/", label: "PoDS Hilfe", desc: "Anleitungen & FAQ" },
          { href: "https://digitaleslernen.oead.at/de/faqs", label: "OeAD FAQ", desc: "Geräteinitiative FAQ" },
          { href: "https://befreiung.digitaleslernen.gv.at", label: "Kostenbefreiung", desc: "Geräte-Eigenanteil Befreiung" },
          { href: "https://www.bgzwn.at", label: "Schulwebsite", desc: "BG Zehnergasse Homepage" },
          { href: "https://www.saferinternet.at", label: "Safer Internet", desc: "Tipps zur sicheren Internetnutzung" },
          { href: "/infohub/bildungsportal", label: "Bildungsportal", desc: "Eltern-Guide & Übersicht" },
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
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">{link.desc}</span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="success" title="Tipp">
        Speichere diese Seite als Lesezeichen in deinem Browser, damit du schnell auf alle
        wichtigen Links zugreifen kannst!
      </Callout>
    </>
  );
}
