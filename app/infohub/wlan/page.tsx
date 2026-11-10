import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "WLAN-Anleitung — Schul-WLAN verbinden",
  description:
    "Anleitung zur WLAN-Verbindung am BG Zehnergasse: Schul-Zertifikat bgzwn-NEO-CA installieren, WPA2/WPA3 Enterprise (PEAP/MSCHAPv2) einrichten und Problemlösung.",
};

const fileLink =
  "flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group";

export default function WlanPage() {
  return (
    <>
      <PageHeader title="WLAN — Verbindung mit dem Schulnetzwerk" />

      <P>
        Das Schul-WLAN verwendet <strong>WPA2/WPA3 Enterprise</strong> mit
        RADIUS-Authentifizierung. Das bedeutet: Sie melden sich mit Ihrem
        persönlichen Schulkonto an — es gibt kein gemeinsames WLAN-Passwort.
        Vorher installieren Sie <strong>einmal</strong> das Zertifikat der
        Schule, damit Ihr Gerät das echte Schul-WLAN erkennt.
      </P>

      <Callout type="info" title="Zugangsdaten">
        <ul>
          <li><strong>Benutzername:</strong> <InlineCode>nachname.vorname</InlineCode> (Ihr Schulkonto — ohne @bgzwn.at)</li>
          <li><strong>Passwort:</strong> Ihr persönliches Schulaccount-Passwort</li>
        </ul>
      </Callout>

      <Callout type="success" title="Schul-PCs: nichts zu tun">
        Windows-PCs der Schule (Domäne) vertrauen dem Schul-Zertifikat
        bereits. Diese Anleitung gilt für <strong>private bzw. eigene
        Geräte</strong>: Windows-Notebook, Mac, Handy, Tablet.
      </Callout>

      {/* ═══ Schritt 1: Zertifikat ═══ */}
      <H2>Schritt 1: Schul-Zertifikat installieren</H2>

      <P>
        Laden Sie die Schul-Zertifizierungsstelle{" "}
        <InlineCode>bgzwn-NEO-CA</InlineCode> herunter und installieren Sie
        sie einmal auf Ihrem Gerät. Die Datei ist öffentlich und enthält kein
        Passwort und keinen geheimen Schlüssel. Sie ist gültig bis{" "}
        <strong>August 2030</strong>.
      </P>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        <a href="/templates/bgzwn-NEO-CA.cer" className={fileLink}>
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          <div>
            <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
              Schul-Zertifikat herunterladen
            </span>
            <span className="text-xs text-txt-light block">
              bgzwn-NEO-CA.cer (1 KB)
            </span>
          </div>
        </a>
        <a
          href="/templates/wlan-zertifikat-anleitung.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={fileLink}
        >
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          <div>
            <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
              Anleitung als PDF
            </span>
            <span className="text-xs text-txt-light block">
              Zum Ausdrucken — alle Geräte auf einer Seite
            </span>
          </div>
        </a>
      </div>

      <H3>Windows (privates Gerät)</H3>
      <StepList>
        <Step title="Datei öffnen">
          <InlineCode>bgzwn-NEO-CA.cer</InlineCode> doppelklicken →{" "}
          <strong>Zertifikat installieren…</strong>
        </Step>
        <Step title="Speicherort wählen">
          <strong>Aktueller Benutzer</strong> (oder <strong>Lokaler
          Computer</strong>, wenn Sie Administrator sind).
        </Step>
        <Step title="Speicher festlegen">
          <strong>Alle Zertifikate in folgendem Speicher speichern</strong> →
          Durchsuchen → <strong>Vertrauenswürdige
          Stammzertifizierungsstellen</strong> → OK → Weiter → Fertig stellen.
        </Step>
        <Step title="Bestätigen">
          Eine Sicherheitswarnung ggf. mit <strong>Ja</strong> bestätigen.
        </Step>
      </StepList>

      <H3>macOS</H3>
      <StepList>
        <Step title="Datei öffnen">
          <InlineCode>bgzwn-NEO-CA.cer</InlineCode> doppelklicken — die
          Schlüsselbundverwaltung öffnet sich.
        </Step>
        <Step title="Schlüsselbund wählen">
          Schlüsselbund <strong>System</strong> oder{" "}
          <strong>Anmeldung</strong> wählen → Hinzufügen.
        </Step>
        <Step title="Vertrauen einstellen">
          Zertifikat <InlineCode>bgzwn-NEO-CA</InlineCode> suchen →
          doppelklicken → Abschnitt <strong>Vertrauen</strong> aufklappen →
          „Bei Verwendung dieses Zertifikats“: <strong>Immer
          vertrauen</strong>.
        </Step>
        <Step title="Speichern">
          Fenster schließen und mit dem Mac-Passwort bzw. Touch ID bestätigen.
        </Step>
      </StepList>

      <H3>iPhone / iPad</H3>
      <StepList>
        <Step title="Zertifikat laden">
          Den Download-Link oben in <strong>Safari</strong> öffnen →{" "}
          <strong>Zulassen</strong>.
        </Step>
        <Step title="Profil installieren">
          Einstellungen → Allgemein → <strong>VPN &amp;
          Geräteverwaltung</strong> → Profil <InlineCode>bgzwn-NEO-CA</InlineCode>{" "}
          → Installieren.
        </Step>
        <Step title="Vertrauen einschalten">
          Einstellungen → Allgemein → Info →{" "}
          <strong>Zertifikatsvertrauenseinstellungen</strong> →{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode> einschalten. Diesen Schritt
          nicht vergessen!
        </Step>
      </StepList>

      <H3>Android</H3>
      <StepList>
        <Step title="Datei öffnen">
          <InlineCode>bgzwn-NEO-CA.cer</InlineCode> öffnen → als{" "}
          <strong>CA-Zertifikat</strong> installieren (nicht als
          „VPN-/App-Nutzerzertifikat“).
        </Step>
        <Step title="Namen vergeben">
          Name <InlineCode>bgzwn-NEO-CA</InlineCode> → OK (ggf. PIN des
          Geräts eingeben).
        </Step>
        <Step title="Falls die Datei sich nicht öffnen lässt">
          Einstellungen → Sicherheit → Zertifikat installieren →{" "}
          <strong>CA-Zertifikat</strong> → heruntergeladene Datei auswählen.
        </Step>
      </StepList>

      <Callout type="warning" title="Android: Menüs je nach Hersteller">
        Die Menüs heißen je nach Hersteller unterschiedlich — Samsung:
        Biometrie/Sicherheit → Zertifikate installieren; Pixel: Sicherheit
        und Datenschutz → Zertifikat installieren. Prüfen können Sie die Installation meist
        unter „Vertrauenswürdige Anmeldedaten“ → Nutzer.
      </Callout>

      {/* ═══ Schritt 2: Einstellungen ═══ */}
      <H2>Schritt 2: WLAN-Einstellungen (alle Geräte)</H2>

      <P>
        Wenn Ihr Gerät nach Details fragt, verwenden Sie diese Einstellungen.
        Die Anleitungen für die einzelnen Geräte folgen darunter.
      </P>

      <Table
        headers={["Feld", "Einstellung"]}
        rows={[
          ["Sicherheit", "WPA2-/WPA3-Enterprise (802.1X)"],
          ["EAP-Methode", "PEAP"],
          ["Phase 2 / innere Authentifizierung", "MSCHAPv2"],
          ["CA-Zertifikat", "bgzwn-NEO-CA (bzw. Systemzertifikate nach der Installation)"],
          ["Server / Domäne", "neo.bgzwn.at"],
          ["Anonyme Identität", "leer lassen"],
          ["Benutzername / Identität", "nachname.vorname"],
          ["Passwort", "Ihr Schulpasswort"],
        ]}
      />

      {/* ═══ Windows ═══ */}
      <H2>Windows 10 / 11</H2>

      <StepList>
        <Step title="WLAN-Symbol in der Taskleiste klicken">
          Klicken Sie unten rechts auf das WLAN-Symbol und wählen Sie das
          Schulnetzwerk aus.
        </Step>
        <Step title="Anmeldedaten eingeben">
          <ul>
            <li><strong>Benutzername:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Passwort:</strong> Ihr Schulpasswort</li>
          </ul>
        </Step>
        <Step title="Zertifikat prüfen">
          Fragt Windows, ob die Verbindung fortgesetzt werden soll, klicken
          Sie auf <strong>Zertifikatdetails anzeigen</strong>. Steht dort{" "}
          <InlineCode>neo.bgzwn.at</InlineCode>, ausgestellt von{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>, klicken Sie auf{" "}
          <strong>Verbinden</strong>.
        </Step>
        <Step title="Fertig">
          Sie sind jetzt verbunden. Die Verbindung bleibt bis zum nächsten
          Passwortwechsel gespeichert.
        </Step>
      </StepList>

      <Callout type="info" title="Manuell einrichten (falls nötig)">
        WLAN-Eigenschaften → Sicherheit → <strong>Microsoft: Geschütztes EAP
        (PEAP)</strong> → Einstellungen → bei den
        Stammzertifizierungsstellen <InlineCode>bgzwn-NEO-CA</InlineCode>{" "}
        anhaken → Servername <InlineCode>neo.bgzwn.at</InlineCode> (falls
        das Feld vorhanden ist) → Authentifizierungsmethode{" "}
        <strong>Gesichertes Kennwort (EAP-MSCHAP v2)</strong>.
      </Callout>

      <Callout type="warning" title="Windows fragt nach Domäne?">
        Falls Windows nach einer Domäne fragt, lassen Sie das Feld leer oder
        geben Sie <InlineCode>bgzwn.at</InlineCode> ein.
      </Callout>

      {/* ═══ macOS ═══ */}
      <H2>macOS (MacBook)</H2>

      <StepList>
        <Step title="WLAN-Symbol oben rechts klicken">
          Wählen Sie das Schulnetzwerk aus der Liste.
        </Step>
        <Step title="Anmeldedaten eingeben">
          <ul>
            <li><strong>Benutzername:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Passwort:</strong> Ihr Schulpasswort</li>
          </ul>
        </Step>
        <Step title="Zertifikat prüfen">
          Zeigt macOS ein Zertifikat an, klicken Sie auf{" "}
          <strong>Zertifikat einblenden</strong>. Steht dort{" "}
          <InlineCode>neo.bgzwn.at</InlineCode>, ausgestellt von{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>, klicken Sie auf{" "}
          <strong>Fortfahren</strong> und bestätigen ggf. mit Mac-Passwort
          oder Touch ID.
        </Step>
        <Step title="Fertig">
          Die Verbindung wird im Schlüsselbund gespeichert.
        </Step>
      </StepList>

      {/* ═══ iOS ═══ */}
      <H2>iOS (iPhone / iPad)</H2>

      <StepList>
        <Step title="Einstellungen → WLAN">
          Öffnen Sie die WLAN-Einstellungen und tippen Sie auf das
          Schulnetzwerk.
        </Step>
        <Step title="Anmeldedaten eingeben">
          <ul>
            <li><strong>Benutzername:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Passwort:</strong> Ihr Schulpasswort</li>
          </ul>
        </Step>
        <Step title="Zertifikat prüfen">
          Erscheint ein Zertifikat, prüfen Sie: Name{" "}
          <InlineCode>neo.bgzwn.at</InlineCode>, ausgestellt von{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>. Dann oben rechts auf{" "}
          <strong>Vertrauen</strong> tippen.
        </Step>
        <Step title="Fertig">
          Das WLAN verbindet sich ab jetzt automatisch.
        </Step>
      </StepList>

      {/* ═══ Android ═══ */}
      <H2>Android</H2>

      <StepList>
        <Step title="Einstellungen → WLAN">
          Tippen Sie auf das Schulnetzwerk.
        </Step>
        <Step title="Erweiterte Einstellungen ausfüllen">
          <ul>
            <li><strong>EAP-Methode:</strong> PEAP</li>
            <li><strong>Phase-2-Authentifizierung:</strong> MSCHAPV2</li>
            <li><strong>CA-Zertifikat:</strong> <InlineCode>bgzwn-NEO-CA</InlineCode> (in Schritt 1 installiert)</li>
            <li><strong>Domäne:</strong> <InlineCode>neo.bgzwn.at</InlineCode></li>
            <li><strong>Identität:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Anonyme Identität:</strong> leer lassen</li>
            <li><strong>Passwort:</strong> Ihr Schulpasswort</li>
          </ul>
        </Step>
        <Step title="Verbinden">
          Tippen Sie auf &quot;Verbinden&quot;.
        </Step>
      </StepList>

      <Callout type="info" title="Android-Versionen unterschiedlich">
        Die Menübezeichnungen variieren je nach Hersteller (Samsung, Xiaomi,
        Pixel etc.) und Android-Version. Die Einstellungen sind aber immer
        dieselben: PEAP + MSCHAPV2, CA-Zertifikat{" "}
        <InlineCode>bgzwn-NEO-CA</InlineCode>, Domäne{" "}
        <InlineCode>neo.bgzwn.at</InlineCode>.
      </Callout>

      {/* ═══ Linux ═══ */}
      <H2>Linux (Ubuntu / Fedora)</H2>

      <P>
        Bei der WLAN-Verbindung die folgenden Einstellungen verwenden:
      </P>

      <Table
        headers={["Einstellung", "Wert"]}
        rows={[
          ["Sicherheit", "WPA & WPA2 Enterprise"],
          ["Authentifizierung", "Protected EAP (PEAP)"],
          ["Anonyme Identität", "(leer lassen)"],
          ["CA-Zertifikat", "Datei bgzwn-NEO-CA.cer auswählen"],
          ["Domäne (falls vorhanden)", "neo.bgzwn.at"],
          ["PEAP-Version", "Automatisch"],
          ["Innere Authentifizierung", "MSCHAPv2"],
          ["Benutzername", "nachname.vorname"],
          ["Passwort", "Ihr Schulpasswort"],
        ]}
      />

      {/* ═══ Zertifikat ═══ */}
      <H2>Warum ein Zertifikat?</H2>

      <P>
        Beim Anmelden weist sich der WLAN-Anmeldeserver der Schule (
        <InlineCode>neo.bgzwn.at</InlineCode>) mit einem Zertifikat aus.
        Damit prüft Ihr Gerät, dass es wirklich mit dem Schulnetz verbunden
        ist — und nicht mit einem <strong>gefälschten Hotspot</strong>, der
        nur Ihr Schulpasswort abgreifen will.
      </P>

      <UL>
        <li>
          Das Zertifikat stellt die Schule selbst aus (
          <InlineCode>bgzwn-NEO-CA</InlineCode>). Deshalb kennt Ihr Gerät es
          erst, wenn Sie es einmal installiert haben (Schritt 1).
        </li>
        <li>
          Danach erkennt Ihr Gerät den Schul-Server automatisch — einmal
          installieren reicht bis August 2030.
        </li>
        <li>
          Die Installation ist sicher: Es ist nur das öffentliche
          Stammzertifikat der Schule — kein Passwort, kein geheimer
          Schlüssel.
        </li>
      </UL>

      <Callout type="danger" title="Unbekanntes Zertifikat? Nicht verbinden!">
        Zeigt Ihr Gerät ein Zertifikat an, das <strong>nicht</strong> für{" "}
        <InlineCode>neo.bgzwn.at</InlineCode> gilt oder nicht von{" "}
        <InlineCode>bgzwn-NEO-CA</InlineCode> ausgestellt wurde, geben Sie
        Ihr Passwort nicht ein und melden Sie es an{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary hover:underline"
        >
          admin@bgzwn.at
        </a>
        .
      </Callout>

      <H3>Zertifikat selbst überprüfen (optional)</H3>
      <P>
        Wer ganz sicher gehen will, vergleicht den Fingerabdruck (SHA-256)
        der heruntergeladenen Datei:
      </P>
      <p className="text-sm bg-code-bg text-txt px-3 py-2 rounded font-mono break-all mb-4">
        2E:D1:29:57:A8:0E:B6:07:FD:B9:8E:2D:85:55:D4:EA:BE:D8:BF:21:46:02:75:96:E6:C0:F2:E5:A4:1E:B9:22
      </p>

      <H3>Zusammenfassung je Gerät</H3>

      <Table
        headers={["Gerät", "Zertifikat installieren", "Beim Verbinden"]}
        rows={[
          ["Windows", "Vertrauenswürdige Stammzertifizierungsstellen", "Details prüfen → \"Verbinden\""],
          ["macOS", "Schlüsselbund → \"Immer vertrauen\"", "Zertifikat einblenden → \"Fortfahren\""],
          ["iPhone / iPad", "Profil installieren + Vertrauen einschalten", "Zertifikat prüfen → \"Vertrauen\""],
          ["Android", "Als CA-Zertifikat installieren", "CA bgzwn-NEO-CA, Domäne neo.bgzwn.at"],
          ["Linux", "Nicht nötig", "Datei bgzwn-NEO-CA.cer als CA-Zertifikat wählen"],
        ]}
      />

      {/* ═══ Troubleshooting ═══ */}
      <H2>Häufige Probleme &amp; Lösungen</H2>

      <H3>WLAN verbindet nicht / Anmeldung schlägt fehl</H3>
      <UL>
        <li>
          <strong>Benutzername prüfen:</strong> Nur{" "}
          <InlineCode>nachname.vorname</InlineCode> — nicht die volle
          E-Mail-Adresse mit @bgzwn.at
        </li>
        <li>
          <strong>Passwort prüfen:</strong> Dasselbe Passwort wie für
          Office 365, WebUntis und den Schul-PC
        </li>
        <li>
          <strong>Konto gesperrt?</strong> Nach 10 Fehlversuchen wird das
          Konto 10 Minuten gesperrt — warten und erneut versuchen
        </li>
        <li>
          <strong>Passwort kürzlich geändert?</strong> Das neue Passwort
          kann bis zu 15 Minuten brauchen, bis es im WLAN-System ankommt
        </li>
      </UL>

      <H3>Verbindung bricht ständig ab</H3>
      <UL>
        <li>WLAN-Netzwerk auf dem Gerät &quot;vergessen&quot; und neu verbinden</li>
        <li>Gerät neu starten</li>
        <li>Prüfen, ob das Gerät nicht zwischen mehreren WLAN-Netzwerken wechselt (z.B. Gast-WLAN löschen)</li>
      </UL>

      <H3>Zertifikatswarnung erscheint immer wieder</H3>
      <UL>
        <li>
          <strong>Alle Geräte:</strong> Schulnetzwerk „vergessen“ bzw.
          entfernen, prüfen ob <InlineCode>bgzwn-NEO-CA</InlineCode>{" "}
          installiert ist, dann neu verbinden
        </li>
        <li>
          <strong>iPhone/iPad:</strong> Einstellungen → Allgemein → Info →
          Zertifikatsvertrauenseinstellungen → ist{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode> eingeschaltet?
        </li>
        <li>
          <strong>macOS:</strong> Schlüsselbundverwaltung → bei{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode> „Immer vertrauen“ gesetzt?
          Alte, gespeicherte WLAN-Einträge der Schule löschen → neu verbinden
        </li>
        <li>
          <strong>Windows:</strong> WLAN-Profil löschen: Einstellungen →
          Netzwerk → WLAN → Bekannte Netzwerke verwalten → Schulnetzwerk
          vergessen → neu verbinden
        </li>
      </UL>

      <H3>Android: &quot;Authentifizierung fehlgeschlagen&quot;</H3>
      <UL>
        <li>EAP-Methode auf <strong>PEAP</strong> setzen (nicht TLS oder TTLS)</li>
        <li>Phase-2 auf <strong>MSCHAPV2</strong> setzen</li>
        <li>CA-Zertifikat auf <InlineCode>bgzwn-NEO-CA</InlineCode> setzen — ist es nicht in der Liste, zuerst Schritt 1 erledigen</li>
        <li>Domäne auf <InlineCode>neo.bgzwn.at</InlineCode> setzen</li>
        <li>Anonyme Identität <strong>leer</strong> lassen</li>
      </UL>

      <H3>Bestimmte Websites laden nicht</H3>
      <UL>
        <li>
          Im Schul-WLAN sind bestimmte Websites blockiert (Webfilter). Das
          ist gewollt und Teil der Kinderschutz-Maßnahmen
        </li>
        <li>
          Wenn eine Seite fälschlicherweise blockiert ist, melden Sie es
          an{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-primary hover:underline"
          >
            admin@bgzwn.at
          </a>
        </li>
      </UL>

      <H3>Nichts hilft — was jetzt?</H3>
      <Callout type="info" title="IT kontaktieren">
        Wenn keine der Lösungen funktioniert, wenden Sie sich an die
        IT-Administration:{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary hover:underline"
        >
          admin@bgzwn.at
        </a>
        . Geben Sie dabei an: Gerät (z.B. iPhone 15, Windows 11), welches
        Netzwerk, und die genaue Fehlermeldung.
      </Callout>

      {/* ═══ Rechtsquellen ═══ */}
      <H2>Rechtsquellen</H2>

      <UL>
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
          — § 5 (Authentifizierung und sicherer Zugang zu schulischen
          IT-Systemen)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011451"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BilDokG 2020, BGBl. I Nr. 20/2021
          </a>{" "}
          (Verarbeitung von Anmeldedaten im schulischen Netzwerk)
        </li>
      </UL>
    </>
  );
}
