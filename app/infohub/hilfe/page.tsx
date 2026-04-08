import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Hilfe & Kontakte — BG Zehnergasse",
  description:
    "Support-Kontakte, häufige Probleme und Lösungen, alle wichtigen Links für Eltern und Schüler am BG Zehnergasse.",
};

export default function HilfePage() {
  return (
    <>
      <PageHeader title="Hilfe & Kontakte" />

      <P>
        Hier finden Sie alle Ansprechpartner, Lösungen für häufige Probleme
        und die wichtigsten Links auf einen Blick.
      </P>

      {/* ═══════════════ Kontakte ═══════════════ */}
      <H2>Wen kontaktiere ich bei welchem Problem?</H2>

      <Table
        headers={["Anliegen", "Kontakt", "Erreichbarkeit"]}
        rows={[
          [
            "Schulkonto, WLAN, Software, Passwort-Reset",
            "admin@bgzwn.at",
            "Per E-Mail oder persönlich im IT-Büro",
          ],
          [
            "Zahlungen, Bescheinigungen, edu.Pay-Rückerstattung",
            "kanzlei@bgzwn.at",
            "Per E-Mail oder persönlich im Sekretariat",
          ],
          [
            "WebUntis (Elternaccounts, Noten, Abwesenheiten)",
            "bnb@bgzwn.at",
            "Per E-Mail",
          ],
          [
            "Datenänderungen (Adresse, Name, Telefon)",
            "Jeweiliger Klassenvorstand",
            "Daten werden in SOKRATES eingepflegt → edu.Flow, edu.Pay",
          ],
          [
            "edu.Flow & edu.Pay — Plattformprobleme",
            "eduflow@bgzwn.at / edupay@bgzwn.at",
            "Per E-Mail",
          ],
          [
            "iPad-Hardware (Defekt, Garantie, Reparatur)",
            "sales@acptechrent.at / +43 1 813 0000",
            "ACP TechRent — telefonisch oder per E-Mail",
          ],
          [
            "Geräteinitiative, Befreiung, Gerätebörse",
            "digitaleslernen@oead.at / +43 720 080 356",
            "OeAD-Hotline Mo–Fr 07:30–18:00",
          ],
          [
            "Portal Digitale Schule (PoDS)",
            "pods.gv.at/hilfe",
            "Online-FAQ und Anleitungen",
          ],
          [
            "Bildungsportal, ID Austria",
            "support@bildung.gv.at / +43 1 53120 3344",
            "Bildungsportal-Hotline",
          ],
        ]}
      />

      {/* ═══════════════ FAQ ═══════════════ */}
      <H2>Häufige Probleme &amp; Lösungen</H2>

      <H3>Passwort vergessen</H3>
      <UL>
        <li>
          <strong>Self-Service-Reset:</strong> Gehen Sie zu{" "}
          <a
            href="https://portal.office.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            portal.office.com
          </a>{" "}
          → &quot;Kennwort vergessen&quot; → Verifizierung per E-Mail oder SMS
        </li>
        <li>
          <strong>Voraussetzung:</strong> Bei der Erstanmeldung muss eine
          private E-Mail oder Handynummer hinterlegt worden sein
        </li>
        <li>
          <strong>Kein Self-Service?</strong> Wenden Sie sich an DigiGB-Lehrkräfte
          oder an{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-[var(--primary)] hover:underline"
          >
            admin@bgzwn.at
          </a>
        </li>
      </UL>

      <H3>edu.Flow-Passwort vergessen (Eltern)</H3>
      <UL>
        <li>
          Passwort zurücksetzen unter:{" "}
          <a
            href="https://www.eduflow.at/EduFlow/Account/forgotpassword?tenant=304046&username="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            edu.Flow Passwort-Reset
          </a>
        </li>
        <li>
          Die IT-Administration kann Eltern-Passwörter{" "}
          <strong>nicht</strong> zurücksetzen — nur das Self-Service-Portal
        </li>
      </UL>

      <H3>WLAN verbindet nicht</H3>
      <UL>
        <li>Prüfen Sie, ob das richtige Schulnetzwerk gewählt ist</li>
        <li>
          Verwenden Sie das Schulkonto (<code>nachname.vorname</code>) zum
          Anmelden — nicht die E-Mail-Adresse
        </li>
        <li>Gerät neu starten und erneut verbinden</li>
        <li>
          Falls weiterhin Probleme:{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-[var(--primary)] hover:underline"
          >
            admin@bgzwn.at
          </a>
        </li>
      </UL>

      <H3>edu.Flow-Benachrichtigungen kommen nicht an</H3>
      <UL>
        <li>
          Besonders bei <strong>hotmail.com</strong>,{" "}
          <strong>outlook.com</strong>, <strong>live.com</strong> und{" "}
          <strong>yahoo.com</strong> werden E-Mails oft als Spam blockiert
        </li>
        <li>
          Fügen Sie <code>eduflow@bgzwn.at</code> und{" "}
          <code>edupay@bgzwn.at</code> zu Ihren Kontakten hinzu
        </li>
        <li>Prüfen Sie den Spam-/Junk-Ordner</li>
        <li>Aktivieren Sie Push-Benachrichtigungen in der edu.Flow-WebApp</li>
      </UL>

      <H3>Drucker wird nicht gefunden</H3>
      <UL>
        <li>Stellen Sie sicher, dass Sie mit dem Schul-WLAN verbunden sind</li>
        <li>iPad: AirPrint funktioniert nur im Schul-WLAN</li>
        <li>Mac: Drucken funktioniert nur im Lehrer-WLAN</li>
        <li>
          Alternative: Dokument an{" "}
          <code>printme@bgzwn.at</code> senden (von der Schuladresse)
        </li>
      </UL>

      <H3>iPad reagiert nicht / hängt</H3>
      <UL>
        <li>
          <strong>Neustart erzwingen:</strong> Home-Button + Power-Button
          gleichzeitig halten (oder bei neueren iPads: kurz Lauter, kurz
          Leiser, dann Power halten)
        </li>
        <li>
          Falls das Problem bestehen bleibt: iPad über iTunes zurücksetzen
          (siehe{" "}
          <a
            href="/infohub/geraete"
            className="text-[var(--primary)] hover:underline"
          >
            iPad &amp; Geräte
          </a>
          )
        </li>
        <li>
          Hardware-Defekt? ACP TechRent kontaktieren: +43 1 813 0000
        </li>
      </UL>

      <H3>Konto gesperrt (zu viele Fehlversuche)</H3>
      <UL>
        <li>
          Nach <strong>10 Fehlversuchen</strong> wird das Konto automatisch
          für <strong>10 Minuten</strong> gesperrt
        </li>
        <li>Warten Sie 10 Minuten und versuchen Sie es erneut</li>
        <li>
          Falls Sie das Passwort nicht mehr wissen: Self-Service-Reset über{" "}
          <a
            href="https://portal.office.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            portal.office.com
          </a>{" "}
          oder IT kontaktieren
        </li>
      </UL>

      <H3>Mehrere Kinder — edu.Pay zeigt falsches Kind</H3>
      <UL>
        <li>
          Löschen Sie nach dem Ausloggen die Browser-Cookies oder verwenden
          Sie ein privates / Inkognito-Fenster
        </li>
      </UL>

      <H3>PoDS-Aktivierungscode abgelaufen</H3>
      <UL>
        <li>
          Aktivierungscodes sind <strong>30 Tage</strong> gültig
        </li>
        <li>
          Fordern Sie einen neuen Code bei{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-[var(--primary)] hover:underline"
          >
            admin@bgzwn.at
          </a>{" "}
          an
        </li>
      </UL>

      <H3>Persönliche Daten ändern (Adresse, Name, Telefon)</H3>
      <UL>
        <li>
          Änderungen an Adresse, Telefonnummer, Familienname oder
          Erziehungsberechtigung bitte <strong>direkt an den
          Klassenvorstand</strong> Ihres Kindes schicken
        </li>
        <li>
          Der Klassenvorstand pflegt die Daten in <strong>SOKRATES</strong> ein
        </li>
        <li>
          Von SOKRATES werden die Daten automatisch an edu.Flow, edu.Pay
          und das Bildungsportal weitergegeben
        </li>
        <li>
          <strong>Nicht</strong> selbst in edu.Flow ändern — dort werden
          nur die E-Mail-Adresse und das Passwort verwaltet
        </li>
      </UL>

      {/* ═══════════════ Links ═══════════════ */}
      <H2>Alle wichtigen Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://melpomene.webuntis.com/WebUntis/?school=bgzehnwn",
            label: "WebUntis",
            desc: "Stundenplan & Klassenbuch",
          },
          {
            href: "https://portal.office.com",
            label: "Office 365 Portal",
            desc: "Word, Excel, Teams, OneDrive, Passwort ändern",
          },
          {
            href: "https://edusuite.at/portal/",
            label: "edu.Suite Portal",
            desc: "edu.Flow, edu.Pay, edu.Card (Schulcode: 304046)",
          },
          {
            href: "https://www.pods.gv.at",
            label: "Portal Digitale Schule",
            desc: "PoDS — Digitale Schulverwaltung",
          },
          {
            href: "https://www.bildung.gv.at",
            label: "Bildungsportal (PoDS)",
            desc: "Portal Digitale Schule — jetzt im Bildungsportal",
          },
          {
            href: "https://www.bildung.gv.at",
            label: "Bildungsportal",
            desc: "Zentrales Login für alle Bildungsdienste",
          },
          {
            href: "https://digitaleslernen.oead.at/de/faqs",
            label: "OeAD FAQ",
            desc: "Häufige Fragen zur Geräteinitiative",
          },
          {
            href: "https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung",
            label: "Bezahlung & Befreiung",
            desc: "Geräte-Eigenanteil: Bezahlung und Befreiung",
          },
          {
            href: "https://www.bgzwn.at",
            label: "Schulwebsite",
            desc: "Offizielle Homepage des BG Zehnergasse",
          },
          {
            href: "https://www.saferinternet.at",
            label: "Safer Internet",
            desc: "Tipps zur sicheren Internetnutzung",
          },
          {
            href: "https://digitaleschule.gv.at/",
            label: "Digitale Schule",
            desc: "Portal des Ministeriums für digitale Bildung",
          },
          {
            href: "/infohub/bildungsportal",
            label: "Bildungsportal-Guide",
            desc: "Unser Guide für Eltern zum Bildungsportal",
            internal: true,
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("/") ? undefined : "_blank"}
            rel={
              link.href.startsWith("/") ? undefined : "noopener noreferrer"
            }
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:border-[var(--primary)]/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-primary group-hover:text-[var(--primary)] transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-[var(--text-light)] block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      <Callout type="success" title="Tipp">
        Speichern Sie diese Seite als Lesezeichen in Ihrem Browser, damit Sie
        schnell auf alle wichtigen Links zugreifen können!
      </Callout>
    </>
  );
}
