import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Bildungsportal & IT-Services — BG Zehnergasse",
  description:
    "Bildungsportal für Eltern und Schüler, edu.digicard, BMBWF IT-Dienstleistungen und Lernplattformen.",
};

export default function BildungsportalPage() {
  return (
    <>
      <PageHeader title="Bildungsportal & IT-Services" />

      <P>
        Das Bildungsportal (
        <a
          href="https://www.bildung.gv.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          bildung.gv.at
        </a>
        ) ist Österreichs zentrale digitale Bildungsplattform, betrieben vom
        BMBWF. Es bietet einen einheitlichen Login und ein personalisiertes
        Dashboard für Schülerinnen, Eltern und Lehrende.
      </P>

      <Callout type="info" title="Bildungsportal-Hotline">
        <strong>+43 1 53120 3344</strong> oder{" "}
        <a
          href="mailto:support@bildung.gv.at"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          support@bildung.gv.at
        </a>
      </Callout>

      {/* ═══════════════ Eltern-Guide ═══════════════ */}
      <H2>Guide für Eltern</H2>

      <P>
        Als Elternteil oder Erziehungsberechtigter bietet Ihnen das
        Bildungsportal folgende Funktionen:
      </P>

      <UL>
        <li>
          <strong>Stundenplan</strong> Ihres Kindes einsehen
        </li>
        <li>
          <strong>Mitteilungsheft</strong> lesen und beantworten
        </li>
        <li>
          <strong>Krankmeldungen</strong> digital einreichen
        </li>
        <li>
          <strong>edu.digicard</strong> Ihres Kindes aktivieren (bei Kindern
          unter 14)
        </li>
        <li>
          <strong>Schularbeitentermine</strong> und Fehlstunden über WebUntis
          einsehen
        </li>
        <li>
          <strong>Persönliches Archiv</strong> mit wichtigen Schuldokumenten
        </li>
        <li>
          <strong>Benachrichtigungen</strong> per App erhalten
        </li>
      </UL>

      <Callout type="warning" title="Hinweis">
        Stundenpläne von volljährigen Schülern können von
        Erziehungsberechtigten nicht eingesehen werden.
      </Callout>

      <H3>So melden Sie sich an</H3>

      <Table
        headers={["Methode", "Für wen"]}
        rows={[
          [
            "ID Austria (empfohlen)",
            "Österreichische Staatsbürger — sicherste Methode",
          ],
          [
            "Benutzername / Passwort",
            "Zugangsdaten von der Schule erhalten",
          ],
          [
            "Digitales Service Tirol",
            "Für Tiroler Erziehungsberechtigte",
          ],
        ]}
      />

      <StepList>
        <Step title="Zugangsdaten erhalten">
          Die Schule stellt Ihnen die notwendige E-Mail-Adresse oder
          Zugangsinformationen bereit.
        </Step>
        <Step title="Registrierung">
          Öffnen Sie{" "}
          <a
            href="https://www.bildung.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            bildung.gv.at
          </a>{" "}
          und registrieren Sie sich mit den erhaltenen Daten oder direkt mit
          ID Austria.
        </Step>
        <Step title="Dashboard personalisieren">
          Nach dem Login sehen Sie ein personalisiertes Dashboard mit Widgets
          für Stundenplan, Mitteilungsheft und mehr.
        </Step>
      </StepList>

      <Callout type="danger" title="Anmeldung funktioniert nicht?">
        <p>
          Häufige Ursache: Daten in der Schule stimmen nicht mit dem Zentralen
          Melderegister überein (z.B. falsche Adresse, fehlender Zweitname).
          Kontaktieren Sie die Schule mit einer aktuellen Meldebestätigung.
        </p>
        <p>
          ID Austria Hilfe-Hotline: <strong>+43 50 233770</strong>
        </p>
      </Callout>

      {/* ═══════════════ Mobile App ═══════════════ */}
      <H2>Bildungsportal App</H2>

      <P>
        Das Bildungsportal ist auch als mobile App verfügbar. Die App bietet
        dasselbe Dashboard mit Widgets, Push-Benachrichtigungen und Zugang zu
        allen verknüpften Anwendungen.
      </P>

      <CardGrid>
        <Card
          href="https://apps.apple.com/at/app/bildungsportal/id6473028659"
          icon="🍎"
          title="App Store"
        >
          Bildungsportal für iPhone und iPad herunterladen.
        </Card>
        <Card
          href="https://play.google.com/store/apps/details?id=at.gv.bmbwf.bildungsportal"
          icon="🤖"
          title="Google Play"
        >
          Bildungsportal für Android herunterladen.
        </Card>
      </CardGrid>

      <H3>WebUntis mit der App verbinden</H3>
      <StepList>
        <Step title="Am PC einloggen">
          Melden Sie sich am Computer unter{" "}
          <a
            href="https://www.bildung.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            bildung.gv.at
          </a>{" "}
          an und öffnen Sie WebUntis.
        </Step>
        <Step title="QR-Code generieren">
          Gehen Sie in WebUntis zu Einstellungen → Freigaben → &quot;Zugriff
          über Untis Mobile&quot; und generieren Sie einen QR-Code.
        </Step>
        <Step title="QR-Code scannen">
          Scannen Sie den QR-Code mit der Untis-Mobile-App auf Ihrem
          Smartphone.
        </Step>
      </StepList>

      {/* ═══════════════ edu.digicard ═══════════════ */}
      <H2>edu.digicard — Digitaler Schülerausweis</H2>

      <P>
        Die edu.digicard ist der kostenlose, digitale Schülerausweis auf dem
        Smartphone. Sie zeigt Foto, Name, Geburtsdatum, Schule und
        Gültigkeitsdatum an.
      </P>

      <H3>Wer aktiviert?</H3>

      <Table
        headers={["Alter", "Wer aktiviert", "Wie"]}
        rows={[
          [
            "Unter 14 Jahre",
            "Eltern / Erziehungsberechtigte",
            "Mit eigener ID Austria",
          ],
          ["Ab 14 Jahre", "Schüler/in selbst", "Mit eigener ID Austria"],
        ]}
      />

      <H3>Aktivierungswege</H3>

      <StepList>
        <Step title="Direkt über ID Austria (empfohlen)">
          Öffnen Sie die &quot;Digitales Amt&quot;-App und aktivieren Sie die
          edu.digicard direkt auf dem Smartphone.
        </Step>
        <Step title="Über QR-Code (alternativ)">
          Melden Sie sich über das Bildungsportal am PC an → edu.digicard
          öffnen → QR-Code generieren → Mit der edu.digicard-App auf dem
          Handy scannen.
        </Step>
      </StepList>

      <Callout type="info" title="App herunterladen">
        Die edu.digicard-App ist kostenlos im{" "}
        <a
          href="https://apps.apple.com/at/app/edu-digicard/id1635556317"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-blue-400 hover:underline"
        >
          Apple App Store
        </a>{" "}
        und im Google Play Store erhältlich.
      </Callout>

      {/* ═══════════════ BMBWF IT-Services ═══════════════ */}
      <H2>IT-Dienstleistungen des BMBWF</H2>

      <P>
        Das Bundesministerium für Bildung stellt allen österreichischen Schulen
        folgende zentrale IT-Dienste zur Verfügung:
      </P>

      <CardGrid>
        <Card icon="🪪" title="edu.digicard">
          Digitaler Schülerausweis am Smartphone — ersetzt den physischen
          Ausweis.
        </Card>
        <Card icon="🌐" title="Bildungsportal">
          Zentrales Portal mit Single-Login für alle Schuldienste und
          personalisiertem Dashboard.
        </Card>
        <Card icon="💻" title="eEducation Austria">
          Netzwerk von Schulen zur Förderung der Digitalisierung. Bietet
          &quot;eTapas&quot; — Unterrichtseinheiten als Open Educational
          Resources.
        </Card>
        <Card icon="📚" title="eduthek">
          Plattform mit Unterrichtsmaterialien und Übungen, geordnet nach
          Schulstufe und Fach.
        </Card>
        <Card icon="🎓" title="eduvidual.at">
          Zentrale Moodle-Lernplattform mit schulübergreifendem
          Ressourcen-Katalog und Integrationen.
        </Card>
        <Card icon="📖" title="LMS.at">
          Kostenlose Plattform für individualisiertes, kompetenzorientiertes
          Lernen (DSGVO-konform).
        </Card>
      </CardGrid>

      <Callout type="success" title="Alle Dienste DSGVO-konform">
        Sämtliche IT-Services des BMBWF erfüllen die Anforderungen der
        Datenschutz-Grundverordnung (DSGVO).
      </Callout>

      {/* ═══════════════ SOKRATES ═══════════════ */}
      <H2>SOKRATES Bund</H2>

      <P>
        SOKRATES Bund ist die Schulverwaltungssoftware für alle
        österreichischen Bundesschulen (AHS, BMHS). Sie verwaltet:
      </P>

      <UL>
        <li>Schüler-, Eltern- und Lehrerdaten</li>
        <li>Klassen- und Fächerinformationen</li>
        <li>Lehrpläne und Zeugnisse</li>
        <li>Einschreibungen und Bildungskarriere</li>
        <li>Noten, Benachrichtigungen, Statistiken</li>
      </UL>

      <P>
        SOKRATES speist Daten in das Bildungsportal und edu.Flow ein.
      </P>

      {/* ═══════════════ Links ═══════════════ */}
      <H2>Weiterführende Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://www.bildung.gv.at",
            label: "Bildungsportal",
            desc: "Hauptportal — Login & Dashboard",
          },
          {
            href: "https://www.bmbwf.gv.at/Themen/schule/zrp/dibi/pods.html",
            label: "BMBWF zu PoDS",
            desc: "Offizielle Infos zu Portal Digitale Schule",
          },
          {
            href: "https://www.digitalaustria.gv.at/themen/digitale-dekade/bildungsportal.html",
            label: "Digital Austria",
            desc: "Bildungsportal im Kontext der Digitalen Dekade",
          },
          {
            href: "https://digitaleschule.gv.at/",
            label: "Digitale Schule",
            desc: "Bundesportal für digitale Bildung",
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
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
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
