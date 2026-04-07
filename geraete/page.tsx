import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, OL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "iPad & Geräte",
  description: "Geräteinitiative, iPad-Verwaltung, Kinderschutz und Zubehör am BG Zehnergasse.",
};

export default function GeraetePage() {
  return (
    <>
      <PageHeader title="iPad & Geräte" />

      <P>
        Im Rahmen der österreichischen Initiative &quot;Digitales Lernen&quot; erhalten
        Schülerinnen und Schüler der Unterstufe ein Apple iPad. Hier findest du
        alle Informationen zur Geräteinitiative, Verwaltung und zum Zubehör.
      </P>

      <H2>Geräteinitiative &quot;Digitales Lernen&quot;</H2>

      <P>
        Die Geräteinitiative ist Teil des 8-Punkte-Plans zur Digitalisierung des Unterrichts
        des BMBWF. Ziel ist es, allen Schülerinnen und Schülern der Sekundarstufe I
        gleichen Zugang zu digitaler Bildung zu ermöglichen. Die Rechtsgrundlage bildet
        das Schulunterrichts-Digitalisierungsgesetz (SchulDigiG).
      </P>

      <P>
        Das BG Zehnergasse nimmt an dieser bundesweiten Initiative teil. Die
        Schule hat sich für Apple iPads entschieden, die über Microsoft InTune
        verwaltet werden.
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Gerät", "Apple iPad (von der Schule gewählt)"],
          ["Verwaltung", "Microsoft InTune (MDM)"],
          ["Eigenanteil", "25 % des Gerätepreises (gem. SchDigiG § 5)"],
          ["Befreiung", "Antrag über befreiung.digitaleslernen.gv.at oder PoDS"],
          ["Berechtigt", "Schüler/innen der 5. Schulstufe (MS, AHS-Unterstufe, Sonderschulen)"],
          ["Umsetzung", "OeAD — Agentur für Bildung und Internationalisierung"],
          ["Rechtsgrundlage", "Schulunterrichts-Digitalisierungsgesetz (SchulDigiG)"],
        ]}
      />

      <Callout type="success" title="EU-Aufbauplan">
        Die Geräteinitiative wird mit <strong>171,7 Millionen Euro</strong> aus dem
        EU-Aufbau- und Resilienzplan (Komponente 2 — Digitaler Aufbruch) finanziert.
        Seit dem Schuljahr 2021/22 wurden bereits mehrere Jahrgänge ausgestattet.
        Mehr Infos:{" "}
        <a href="https://digitaleslernen.oead.at/de/ueber-die-initiative/die-geraeteinitiative-digitales-lernen" target="_blank" rel="noopener noreferrer" className="hover:underline">
          OeAD Geräteinitiative
        </a>
      </Callout>

      <Callout type="warning" title="Hardware-Support">
        Bei Hardware-Defekten ist nicht die Schule, sondern <strong>ACP TechRent GmbH</strong> zuständig.
        <ul>
          <li>Telefon: +43 1 813 0000</li>
          <li>E-Mail: <a href="mailto:sales@acptechrent.at" className="text-primary dark:text-blue-400 hover:underline">sales@acptechrent.at</a></li>
        </ul>
      </Callout>

      <H2>Kinderschutz &amp; MDM</H2>

      <P>
        Gemäß SchUG § 14a und der IKT-Schulverordnung 2025 sind Kinderschutz-Maßnahmen
        auf den Geräten der Unterstufe aktiv. Diese umfassen:
      </P>

      <UL>
        <li>Webfilter für altersgerechtes Surfen</li>
        <li>App-Store-Einschränkungen</li>
        <li>Blockierung privater Apple-IDs auf verwalteten Geräten</li>
      </UL>

      <Callout type="info" title="Einstellungen anpassen">
        Eltern können Kinderschutz-Einstellungen über das <strong>PoDS-Portal</strong> (Portal Digitale Schule)
        anpassen. Weitere Infos unter{" "}
        <a href="https://www.saferinternet.at" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">
          SaferInternet.at
        </a>.
      </Callout>

      <H2>Geräteverwaltung (AAD)</H2>

      <P>
        Die Schule nutzt Azure Active Directory (AAD) mit drei Verwaltungsstufen:
      </P>

      <Table
        headers={["Stufe", "Beschreibung", "IT-Zugriff"]}
        rows={[
          ["App Only", "Nur Schul-Apps, kein Management", "Keiner"],
          ["Partial (AAD Registered)", "Arbeitsprofil wird angelegt", "Kein Zugriff auf persönliche Daten"],
          ["Full (AAD Joined)", "Vollständig schulverwaltet", "Geräterichtlinien werden durchgesetzt"],
        ]}
      />

      <Callout type="success" title="Datenschutz">
        Bei der Teilregistrierung (Partial Management) hat die IT <strong>keinen Zugriff</strong> auf
        persönliche Fotos, Dokumente oder Nachrichten.
      </Callout>

      <H3>iOS-Einstellungen im Detail</H3>
      <UL>
        <li>Sperrbildschirm-Benachrichtigungen werden automatisch konfiguriert</li>
        <li>SSO-Profile für nahtlosen Zugang zu Schuldiensten</li>
        <li>Pflicht-Apps (WebUntis, Teams) werden über das Unternehmensportal installiert</li>
        <li>iOS-Updates: werktags 15:00–23:00, am Wochenende jederzeit</li>
        <li>Private Apple-ID kann für persönliche App-Käufe hinzugefügt werden</li>
      </UL>

      <H2>iPad zurücksetzen</H2>

      <P>
        Falls dein iPad Probleme macht, kannst du es auf Werkseinstellungen zurücksetzen.
        Du benötigst dafür einen Computer mit iTunes.
      </P>

      <StepList>
        <Step title="iTunes installieren">
          Lade iTunes auf deinen Computer herunter und installiere es.
        </Step>
        <Step title="Recovery-Modus aktivieren">
          Folge der offiziellen Apple-Anleitung, um das iPad in den Wiederherstellungsmodus zu versetzen.
        </Step>
        <Step title="iPad wiederherstellen">
          Wähle in iTunes &quot;Wiederherstellen&quot; und warte, bis der Vorgang abgeschlossen ist.
        </Step>
        <Step title="Neu einrichten">
          Wähle: Deutsch → Österreich → Manuell konfigurieren → WLAN verbinden → Schulverwaltung registrieren → Schul-Apple-ID verwenden.
        </Step>
        <Step title="Unternehmensportal abwarten">
          Die Company Portal App wird automatisch heruntergeladen. Darüber erhältst du alle Schul-Apps.
        </Step>
      </StepList>

      <H2>Zubehör nachbestellen</H2>

      <P>
        Ersatzteile und Zubehör kannst du über Drittanbieter oder direkt bei ACP/justEDU bestellen:
      </P>

      <Table
        headers={["Produkt", "Link"]}
        rows={[
          ["Active Pen Ersatzspitzen (Gen 1)", "justedu.at – Ersatzspitzen Gen 1"],
          ["Active Pen Ersatzspitzen (Gen 2)", "justedu.at – Ersatzspitzen Gen 2"],
          ["Slim Keyboard Cover (iPad 8/9)", "justedu.at – Keyboard Cover"],
        ]}
      />

      <H2>iPad abkoppeln (Schulaustritt)</H2>

      <P>
        Wenn du die Unterstufe verlässt, wird dein iPad von der Schulverwaltung getrennt:
      </P>

      <StepList>
        <Step title="IT gibt Seriennummer frei">
          Die IT-Abteilung entfernt dein Gerät aus der Verwaltung.
        </Step>
        <Step title="Werksreset durchführen">
          Setze das iPad über Einstellungen → Allgemein → iPad zurücksetzen auf Werkseinstellungen zurück.
        </Step>
        <Step title="Neu einrichten">
          Das iPad kann jetzt mit einer privaten Apple-ID ohne Schulverwaltung eingerichtet werden.
        </Step>
      </StepList>
    </>
  );
}
