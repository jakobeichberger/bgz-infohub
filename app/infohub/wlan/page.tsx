import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "WLAN-Anleitung — Schul-WLAN verbinden",
  description:
    "Anleitung zur WLAN-Verbindung am BG Zehnergasse: WPA2/WPA3 Enterprise, Radius-Login, Zertifikate und Problemlösung.",
};

export default function WlanPage() {
  return (
    <>
      <PageHeader title="WLAN — Verbindung mit dem Schulnetzwerk" />

      <P>
        Das Schul-WLAN verwendet <strong>WPA2/WPA3 Enterprise</strong> mit
        RADIUS-Authentifizierung. Das bedeutet: Sie melden sich mit Ihrem
        persönlichen Schulkonto an — es gibt kein gemeinsames WLAN-Passwort.
      </P>

      <Callout type="info" title="Zugangsdaten">
        <ul>
          <li><strong>Benutzername:</strong> <InlineCode>nachname.vorname</InlineCode> (Ihr Schulkonto — ohne @bgzwn.at)</li>
          <li><strong>Passwort:</strong> Ihr persönliches Schulaccount-Passwort</li>
        </ul>
      </Callout>

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
        <Step title="Zertifikatswarnung bestätigen">
          Es erscheint eine Warnung zum Serverzertifikat. Klicken Sie auf
          <strong> &quot;Verbinden&quot;</strong> bzw.
          <strong> &quot;Trotzdem verbinden&quot;</strong>. Das ist normal
          und sicher — siehe Abschnitt unten.
        </Step>
        <Step title="Fertig">
          Sie sind jetzt verbunden. Die Verbindung bleibt bis zum nächsten
          Passwortwechsel gespeichert.
        </Step>
      </StepList>

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
        <Step title="Zertifikat akzeptieren">
          macOS zeigt ein Fenster mit Zertifikatsdetails. Klicken Sie auf
          <strong> &quot;Fortfahren&quot;</strong> (Continue). Bestätigen
          Sie ggf. mit Ihrem Mac-Passwort oder Touch ID.
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
        <Step title="Zertifikat vertrauen">
          Es erscheint &quot;Zertifikat nicht vertrauenswürdig&quot; — tippen
          Sie oben rechts auf <strong>&quot;Vertrauen&quot;</strong>. Das ist
          normal und sicher.
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
            <li><strong>CA-Zertifikat:</strong> &quot;Nicht validieren&quot; oder &quot;Systemzertifikate verwenden&quot;</li>
            <li><strong>Domäne:</strong> <InlineCode>bgzwn.at</InlineCode> (falls gefragt)</li>
            <li><strong>Identität:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Anonyme Identität:</strong> leer lassen</li>
            <li><strong>Passwort:</strong> Ihr Schulpasswort</li>
          </ul>
        </Step>
        <Step title="Verbinden">
          Tippen Sie auf &quot;Verbinden&quot;. Bei einer Zertifikatswarnung
          auf &quot;Akzeptieren&quot; tippen.
        </Step>
      </StepList>

      <Callout type="info" title="Android-Versionen unterschiedlich">
        Die Menübezeichnungen variieren je nach Hersteller (Samsung, Xiaomi,
        Pixel etc.) und Android-Version. Die Einstellungen sind aber immer
        dieselben: PEAP + MSCHAPV2.
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
          ["CA-Zertifikat", "\"Nicht erforderlich\" oder Systemzertifikate"],
          ["PEAP-Version", "Automatisch"],
          ["Innere Authentifizierung", "MSCHAPv2"],
          ["Benutzername", "nachname.vorname"],
          ["Passwort", "Ihr Schulpasswort"],
        ]}
      />

      {/* ═══ Zertifikatswarnung ═══ */}
      <H2>Zertifikatswarnung — Was bedeutet das?</H2>

      <P>
        Beim ersten Verbinden mit dem Schul-WLAN zeigt Ihr Gerät eine
        Warnung zum Serverzertifikat. <strong>Das ist normal und kann
        bedenkenlos akzeptiert werden.</strong>
      </P>

      <H3>Warum erscheint die Warnung?</H3>

      <UL>
        <li>
          Das Schul-WLAN verwendet einen <strong>RADIUS-Server</strong>,
          der sich mit einem Zertifikat bei Ihrem Gerät ausweist
        </li>
        <li>
          Da dieses Zertifikat intern von der Schule ausgestellt ist (und
          nicht von einer öffentlichen Zertifizierungsstelle wie Let&apos;s
          Encrypt), stuft Ihr Gerät es beim ersten Mal als
          &quot;unbekannt&quot; ein
        </li>
        <li>
          Sobald Sie es einmal akzeptieren, wird es gespeichert und die
          Warnung erscheint nicht mehr
        </li>
      </UL>

      <Callout type="success" title="Sicher akzeptieren">
        Sie befinden sich im Schulgebäude und verbinden sich mit dem
        offiziellen Schulnetzwerk. Die Zertifikatswarnung kann{" "}
        <strong>ohne Bedenken akzeptiert</strong> werden. Im Zweifelsfall
        fragen Sie die IT-Administration.
      </Callout>

      <H3>Zusammenfassung je Gerät</H3>

      <Table
        headers={["Gerät", "Was tun bei Zertifikatswarnung?"]}
        rows={[
          ["Windows", "\"Verbinden\" / \"Trotzdem verbinden\" klicken"],
          ["macOS", "\"Fortfahren\" klicken, ggf. Mac-Passwort bestätigen"],
          ["iPhone / iPad", "\"Vertrauen\" tippen (oben rechts)"],
          ["Android", "\"Akzeptieren\" tippen oder CA-Zertifikat auf \"Nicht validieren\" setzen"],
          ["Linux", "CA-Zertifikat auf \"Nicht erforderlich\" setzen"],
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
          <strong>iPhone/iPad:</strong> Einstellungen → Allgemein → VPN &amp;
          Geräteverwaltung → installierte Profile prüfen
        </li>
        <li>
          <strong>macOS:</strong> Schlüsselbundverwaltung öffnen → altes
          WLAN-Zertifikat der Schule löschen → neu verbinden
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
        <li>CA-Zertifikat auf &quot;Nicht validieren&quot; setzen</li>
        <li>Domäne auf <InlineCode>bgzwn.at</InlineCode> setzen (falls das Feld vorhanden ist)</li>
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
