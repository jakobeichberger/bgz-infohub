import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "MDM-Einrichtung",
  description: "Schritt-für-Schritt-Anleitungen zur Geräteverwaltung auf iOS, Android und Windows.",
};

export default function MdmPage() {
  return (
    <>
      <PageHeader title="MDM-Einrichtung" />

      <P>
        Die Schule nutzt Microsoft InTune zur Geräteverwaltung (Mobile Device Management).
        Hier findest du Anleitungen für jede Plattform. Es gibt drei Verwaltungsstufen:
      </P>

      <Table
        headers={["Stufe", "Beschreibung", "Empfohlen für"]}
        rows={[
          ["Apps Only", "Nur Schul-Apps installieren, kein Management", "Privatgeräte ohne Verwaltung"],
          ["Partial Management", "Arbeitsprofil wird angelegt, Schuldaten getrennt", "Empfohlen für die meisten Schüler"],
          ["Full Management", "Gerät vollständig schulverwaltet", "Schulgeräte (iPad-Initiative)"],
        ]}
      />

      {/* ─── iOS ─── */}
      <H2>iOS (iPhone / iPad)</H2>

      <H3>Option 1: Apps Only</H3>
      <P>Installiere die benötigten Apps direkt aus dem App Store, ohne das Gerät zu registrieren.</P>

      <H3>Option 2: Partial Management (empfohlen)</H3>

      <StepList>
        <Step title="Company Portal installieren">
          Lade die App &quot;Intune-Unternehmensportal&quot; aus dem App Store herunter.
        </Step>
        <Step title="Anmelden">
          Melde dich mit deinem Schulkonto an (<code>nachname.vorname@bgzwn.at</code>).
        </Step>
        <Step title="Verwaltungsprofil installieren">
          Folge den Anweisungen in der App, um das Verwaltungsprofil zu installieren.
          Bestätige die Installation in den iOS-Einstellungen.
        </Step>
        <Step title="Schul-Apps laden">
          Nach der Registrierung stehen alle Schul-Apps im Unternehmensportal zur Verfügung.
        </Step>
      </StepList>

      <H3>Option 3: Full Management</H3>
      <P>
        Wird automatisch bei Geräten der Geräteinitiative konfiguriert. Keine manuelle
        Einrichtung nötig.
      </P>

      {/* ─── Android ─── */}
      <H2>Android</H2>

      <H3>Option 1: Apps Only</H3>
      <P>Installiere die benötigten Apps direkt aus dem Google Play Store.</P>

      <H3>Option 2: Partial Management (empfohlen)</H3>

      <StepList>
        <Step title="Company Portal installieren">
          Lade &quot;Intune-Unternehmensportal&quot; aus dem Google Play Store herunter.
        </Step>
        <Step title="Anmelden">
          Melde dich mit deinem Schulkonto an.
        </Step>
        <Step title="Arbeitsprofil einrichten">
          Die App erstellt ein separates Arbeitsprofil. Schul-Apps erscheinen mit einem
          Aktenkoffer-Symbol im &quot;Business&quot;-Tab.
        </Step>
        <Step title="Fertig">
          Persönliche und schulische Daten sind nun getrennt. Die IT hat keinen Zugriff
          auf deine privaten Apps und Daten.
        </Step>
      </StepList>

      <Callout type="success" title="Datentrennung auf Android">
        Das Arbeitsprofil erstellt eine vollständige Trennung zwischen Schul- und
        Privatdaten. Deine persönlichen Fotos, Nachrichten und Apps bleiben privat.
      </Callout>

      {/* ─── Windows ─── */}
      <H2>Windows</H2>

      <H3>Option 1: Nur Dienste nutzen</H3>
      <P>
        Du kannst alle Schuldienste (Office 365, WebUntis, etc.) direkt im Browser
        nutzen, ohne dein Gerät zu registrieren.
      </P>

      <H3>Option 2: Partial Management</H3>

      <StepList>
        <Step title="Einstellungen öffnen">
          Gehe zu Einstellungen → Konten → Auf Arbeits- oder Schulkonto zugreifen.
        </Step>
        <Step title="Verbinden">
          Klicke auf &quot;Verbinden&quot; und melde dich mit deinem Schulkonto an.
        </Step>
        <Step title="Einrichtung abschließen">
          Folge den Anweisungen zur Registrierung des Geräts.
        </Step>
      </StepList>

      <Callout type="danger" title="Achtung: Vollverwaltung vermeiden">
        Wähle während der Einrichtung <strong>nicht</strong> die &quot;Alternative Aktion&quot;.
        Dies könnte dein Gerät unbeabsichtigt in die vollständige Schulverwaltung aufnehmen!
      </Callout>

      {/* ─── Allgemeine Hinweise ─── */}
      <H2>Allgemeine Hinweise</H2>

      <UL>
        <li>Bei Partial Management hat die IT <strong>keinen Zugriff</strong> auf persönliche Dateien, Fotos oder Nachrichten</li>
        <li>Pflicht-Apps wie WebUntis und Teams werden automatisch bereitgestellt</li>
        <li>Bei Problemen: <a href="mailto:admin@bgzwn.at" className="text-primary dark:text-blue-400 hover:underline">admin@bgzwn.at</a></li>
      </UL>
    </>
  );
}
