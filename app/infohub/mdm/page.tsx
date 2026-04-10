import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "MDM-Einrichtung — BG Zehnergasse",
  description:
    "Schritt-für-Schritt-Anleitungen zur Geräteverwaltung (Mobile Device Management) auf iOS und Windows.",
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

      {/* ═══════════════ Unternehmensportal ═══════════════ */}
      <H2>Intune-Unternehmensportal (Company Portal)</H2>

      <P>
        Das <strong>Intune-Unternehmensportal</strong> (englisch: Company
        Portal) ist die zentrale App von Microsoft zur Geräteverwaltung. Sie
        ist der Einstiegspunkt für die Registrierung und den Bezug von
        Schul-Apps auf iOS und Windows.
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["App-Name", "Intune-Unternehmensportal (Company Portal)"],
          ["Hersteller", "Microsoft Corporation"],
          ["Preis", "Kostenlos"],
          ["Verfügbar für", "iOS (App Store), Windows (Microsoft Store)"],
          ["Benötigte Anmeldedaten", "nachname.vorname@bgzwn.at + Schulpasswort"],
        ]}
      />

      <H3>Was kann die App?</H3>

      <UL>
        <li>
          <strong>Geräteregistrierung</strong> — Ihr Gerät wird bei der Schul-IT
          angemeldet (Partial oder Full Management)
        </li>
        <li>
          <strong>Schul-Apps installieren</strong> — Pflicht-Apps (WebUntis,
          Teams) werden automatisch bereitgestellt, weitere Apps können manuell
          aus dem App-Katalog geladen werden
        </li>
        <li>
          <strong>Compliance-Status prüfen</strong> — Zeigt an, ob Ihr Gerät
          den Schulrichtlinien entspricht (z.B. Passcode gesetzt, aktuelles
          Betriebssystem)
        </li>
        <li>
          <strong>Gerät umbenennen</strong> — Optional: dem Gerät einen
          erkennbaren Namen geben
        </li>
        <li>
          <strong>Gerät abmelden</strong> — Die Registrierung kann jederzeit
          rückgängig gemacht werden
        </li>
      </UL>

      <Callout type="info" title="So finden Sie die App">
        <div className="flex items-start gap-4">
          <img
            src="/icons/intune-company-portal.png"
            alt="Intune-Unternehmensportal App-Symbol"
            width={64}
            height={64}
            className="rounded-xl flex-shrink-0"
          />
          <div>
            <p>
              Suchen Sie im App Store nach{" "}
              <strong>&quot;Intune&quot;</strong> oder{" "}
              <strong>&quot;Company Portal&quot;</strong>. Achten Sie auf das
              App-Symbol links. Herausgeber:{" "}
              <strong>Microsoft Corporation</strong>.
            </p>
            <p>
              <a
                href="https://apps.apple.com/at/app/intune-unternehmensportal/id719171358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Direkt im App Store öffnen
              </a>
            </p>
          </div>
        </div>
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
          Laden Sie die App &quot;Intune-Unternehmensportal&quot; aus dem{" "}
          <a
            href="https://apps.apple.com/at/app/intune-unternehmensportal/id719171358"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            App Store
          </a>{" "}
          herunter. Suchen Sie nach &quot;Intune&quot; oder &quot;Company
          Portal&quot;.
        </Step>
        <Step title="Mit Schulkonto anmelden">
          Öffnen Sie die App und melden Sie sich mit{" "}
          <code>nachname.vorname@bgzwn.at</code> und Ihrem persönlichen
          Passwort an.
        </Step>
        <Step title="Gerät registrieren">
          Tippen Sie auf &quot;Registrierung starten&quot; und folgen Sie den
          Anweisungen. Die App fordert Sie auf, ein{" "}
          <strong>Verwaltungsprofil</strong> zu installieren.
        </Step>
        <Step title="Verwaltungsprofil bestätigen">
          Sie werden zu den iOS-Einstellungen weitergeleitet. Tippen Sie auf
          &quot;Profil heruntergeladen&quot; → &quot;Installieren&quot; →
          Geräte-Passcode eingeben → &quot;Installieren&quot; bestätigen →
          &quot;Vertrauen&quot;.
        </Step>
        <Step title="Zurück zur App">
          Wechseln Sie zurück zum Unternehmensportal. Die Compliance-Prüfung
          läuft automatisch. Sobald alles grün ist, werden die Schul-Apps
          installiert.
        </Step>
        <Step title="Schul-Apps nutzen">
          Pflicht-Apps wie WebUntis und Teams werden automatisch installiert.
          Weitere Apps finden Sie im Tab &quot;Apps&quot; im
          Unternehmensportal.
        </Step>
      </StepList>

      <H3>Option 3: Full Management</H3>
      <P>
        Wird automatisch bei Geräten der Geräteinitiative konfiguriert. Das
        iPad wird beim ersten Einschalten über Apple DEP (Device Enrollment
        Program) in die Schulverwaltung aufgenommen — keine manuelle
        Einrichtung nötig.
      </P>

      {/* ═══ iOS Troubleshooting ═══ */}
      <H3>Häufige Probleme auf iOS</H3>

      <UL>
        <li>
          <strong>&quot;Registrierung fehlgeschlagen&quot;</strong> — Stellen
          Sie sicher, dass Sie mit dem Schul-WLAN verbunden sind und das
          Passwort korrekt ist. Nach 10 Fehlversuchen wird das Konto 10 Min.
          gesperrt.
        </li>
        <li>
          <strong>Profil-Installation bricht ab</strong> — Gehen Sie zu
          Einstellungen → Allgemein → VPN &amp; Geräteverwaltung und prüfen
          Sie, ob ein &quot;Heruntergeladenes Profil&quot; wartet. Falls ja,
          tippen Sie darauf und installieren Sie es manuell.
        </li>
        <li>
          <strong>&quot;Gerät nicht konform&quot;</strong> — Häufigste
          Ursache: Kein Geräte-Passcode gesetzt. Gehen Sie zu Einstellungen →
          Face ID &amp; Code (oder Touch ID &amp; Code) und richten Sie einen
          Passcode ein.
        </li>
        <li>
          <strong>Apps werden nicht installiert</strong> — Öffnen Sie das
          Unternehmensportal → Tab &quot;Geräte&quot; → Ihr Gerät antippen →
          &quot;Compliance prüfen&quot;. Falls alles grün: warten Sie 5–10
          Minuten, die Apps werden im Hintergrund geladen.
        </li>
        <li>
          <strong>Unternehmensportal öffnet sich nicht</strong> — App
          deinstallieren und neu aus dem App Store installieren. Ihre
          Registrierung bleibt erhalten.
        </li>
      </UL>

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
            className="text-primary hover:underline"
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
            className="text-primary hover:underline"
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
            className="text-primary hover:underline"
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
