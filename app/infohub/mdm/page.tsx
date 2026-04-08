import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "MDM-Einrichtung — BG Zehnergasse",
  description:
    "Schritt-für-Schritt-Anleitungen zur Geräteverwaltung (Mobile Device Management) auf iOS, Android und Windows.",
};

export default function MdmPage() {
  return (
    <>
      <PageHeader title="MDM-Einrichtung" />

      <P>
        Die Schule nutzt <strong>Microsoft InTune</strong> zur
        Geräteverwaltung (Mobile Device Management). Hier finden Sie
        Anleitungen für jede Plattform — einfach Schritt für Schritt erklärt.
      </P>

      <H2>Welche Verwaltungsstufe brauche ich?</H2>

      <Table
        headers={["Stufe", "Was passiert?", "Empfohlen für"]}
        rows={[
          [
            "Apps Only",
            "Sie installieren Schul-Apps selbst aus dem App Store — das Gerät wird nicht registriert",
            "Privatgeräte, wenn keine Verwaltung gewünscht",
          ],
          [
            "Partial Management ✅",
            "Ein Arbeitsprofil wird angelegt — Schuldaten und private Daten sind getrennt",
            "Die meisten Schüler (empfohlen)",
          ],
          [
            "Full Management",
            "Das Gerät wird vollständig von der Schule verwaltet",
            "Geräte aus der iPad-Initiative (automatisch)",
          ],
        ]}
      />

      <Callout type="success" title="Datenschutz">
        Bei <strong>Partial Management</strong> hat die IT keinen Zugriff auf
        Ihre persönlichen Fotos, Nachrichten, Apps oder Dateien. Nur das
        Arbeitsprofil mit den Schul-Apps wird verwaltet.
      </Callout>

      {/* ═══════════════ iOS ═══════════════ */}
      <H2>iOS (iPhone / iPad)</H2>

      <H3>Option 1: Apps Only</H3>
      <P>
        Installieren Sie die benötigten Apps (WebUntis, Teams, etc.) direkt
        aus dem App Store. Keine Registrierung nötig.
      </P>

      <H3>Option 2: Partial Management (empfohlen)</H3>

      <StepList>
        <Step title="Company Portal installieren">
          Laden Sie die App &quot;Intune-Unternehmensportal&quot; aus dem App
          Store herunter.
        </Step>
        <Step title="Mit Schulkonto anmelden">
          Melden Sie sich mit <code>nachname.vorname@bgzwn.at</code> und
          Ihrem persönlichen Passwort an.
        </Step>
        <Step title="Verwaltungsprofil installieren">
          Folgen Sie den Anweisungen in der App. Sie werden aufgefordert, in
          den iOS-Einstellungen ein Verwaltungsprofil zu bestätigen.
        </Step>
        <Step title="Schul-Apps laden">
          Nach der Registrierung stehen alle Schul-Apps im Unternehmensportal
          zur Verfügung. Pflicht-Apps wie WebUntis und Teams werden
          automatisch installiert.
        </Step>
      </StepList>

      <H3>Option 3: Full Management</H3>
      <P>
        Wird automatisch bei Geräten der Geräteinitiative konfiguriert. Keine
        manuelle Einrichtung nötig.
      </P>

      {/* ═══════════════ Android ═══════════════ */}
      <H2>Android</H2>

      <H3>Option 1: Apps Only</H3>
      <P>
        Installieren Sie die benötigten Apps direkt aus dem Google Play Store.
      </P>

      <H3>Option 2: Partial Management (empfohlen)</H3>

      <StepList>
        <Step title="Company Portal installieren">
          Laden Sie &quot;Intune-Unternehmensportal&quot; aus dem Google Play
          Store herunter.
        </Step>
        <Step title="Mit Schulkonto anmelden">
          Melden Sie sich mit Ihrem Schulkonto an.
        </Step>
        <Step title="Arbeitsprofil einrichten">
          Die App erstellt ein separates Arbeitsprofil. Schul-Apps erscheinen
          mit einem Aktenkoffer-Symbol im &quot;Business&quot;-Tab.
        </Step>
        <Step title="Fertig!">
          Persönliche und schulische Daten sind nun vollständig getrennt. Die
          IT hat keinen Zugriff auf Ihre privaten Apps und Daten.
        </Step>
      </StepList>

      <Callout type="success" title="Datentrennung auf Android">
        Das Arbeitsprofil erstellt eine vollständige Trennung zwischen Schul-
        und Privatdaten. Ihre persönlichen Fotos, Nachrichten und Apps bleiben
        privat.
      </Callout>

      {/* ═══════════════ Windows ═══════════════ */}
      <H2>Windows</H2>

      <H3>Option 1: Nur im Browser nutzen</H3>
      <P>
        Sie können alle Schuldienste (Office 365, WebUntis, edu.Suite) direkt
        im Browser nutzen, ohne Ihr Gerät zu registrieren. Das ist die
        einfachste Option.
      </P>

      <H3>Option 2: Partial Management</H3>

      <StepList>
        <Step title="Einstellungen öffnen">
          Gehen Sie zu Einstellungen → Konten → Auf Arbeits- oder Schulkonto
          zugreifen.
        </Step>
        <Step title="Verbinden">
          Klicken Sie auf &quot;Verbinden&quot; und melden Sie sich mit Ihrem
          Schulkonto an (<code>nachname.vorname@bgzwn.at</code>).
        </Step>
        <Step title="Einrichtung abschließen">
          Folgen Sie den Anweisungen zur Registrierung des Geräts.
        </Step>
      </StepList>

      <Callout type="danger" title="Achtung: Vollverwaltung vermeiden!">
        Wählen Sie während der Einrichtung <strong>nicht</strong> die
        &quot;Alternative Aktion&quot; oder &quot;Dieses Gerät beitreten
        lassen&quot;. Dies würde Ihr Gerät unbeabsichtigt in die vollständige
        Schulverwaltung aufnehmen!
      </Callout>

      {/* ═══════════════ Allgemeine Hinweise ═══════════════ */}
      <H2>Allgemeine Hinweise</H2>

      <UL>
        <li>
          Bei Partial Management hat die IT <strong>keinen Zugriff</strong>{" "}
          auf persönliche Dateien, Fotos oder Nachrichten
        </li>
        <li>
          Pflicht-Apps wie WebUntis und Teams werden nach der Registrierung
          automatisch bereitgestellt
        </li>
        <li>
          Sie können die Registrierung jederzeit in den Geräteeinstellungen
          rückgängig machen
        </li>
        <li>
          Bei Problemen:{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-[var(--primary)] hover:underline"
          >
            admin@bgzwn.at
          </a>
        </li>
      </UL>

      {/* ═══ Rechtsquellen ═══ */}
      <H2>Rechtsquellen</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            SchUG, BGBl. Nr. 472/1986 i.d.g.F.
          </a>{" "}
          — § 14 Abs. 8a (Verwendung digitaler Endgeräte im Unterricht)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            IKT-Schulverordnung, BGBl. II Nr. 382/2021
          </a>{" "}
          — § 10 (Verwaltung und Konfiguration der Endgeräte), § 5
          (Authentifizierung und sicherer Zugang)
        </li>
      </UL>
    </>
  );
}
