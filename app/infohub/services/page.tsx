import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Schulservices — BG Zehnergasse",
  description:
    "WebUntis, edu.Flow, edu.Pay, edu.Card, Drucken und Portal Digitale Schule (PoDS) am BG Zehnergasse.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Schulservices" />

      <P>
        Das BG Zehnergasse nutzt mehrere digitale Plattformen für den
        Schulalltag. Hier finden Sie eine Übersicht aller Services und wie Sie
        diese nutzen.
      </P>

      {/* ═══════════════ WebUntis ═══════════════ */}
      <H2>WebUntis — Stundenplan &amp; Klassenbuch</H2>

      <P>
        WebUntis ist der digitale Stundenplan und das elektronische Klassenbuch
        der Schule. Es wird von Gruber &amp; Petters (
        <a
          href="https://www.untis.at/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          untis.at
        </a>
        ) betrieben.
      </P>

      <H3>Zugang</H3>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          [
            "Direktlink",
            "melpomene.webuntis.com/WebUntis/?school=bgzehnwn",
          ],
          ["Benutzername", "nachname.vorname (nicht die E-Mail-Adresse)"],
          ["Passwort", "Ihr persönliches Schulaccount-Passwort"],
        ]}
      />

      <P>
        <strong>Ohne Login:</strong> Der Stundenplan, das Dashboard und die
        Sprechstunden sind auch ohne Anmeldung öffentlich einsehbar. Suchen
        Sie auf{" "}
        <a
          href="https://webuntis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          webuntis.com
        </a>{" "}
        nach &quot;BG Zehnergasse&quot;.
      </P>

      <P>
        <strong>Mit Login:</strong> Persönlicher Stundenplan,
        Abwesenheitsübersicht (offen / unentschuldigt / entschuldigt) und
        Elternsprechtag-Buchung.
      </P>

      <Callout type="info" title="Hinweis für Eltern">
        Eltern können WebUntis über das{" "}
        <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bildungsportal</a>{" "}
        nutzen oder den Zugang ihres Kindes mitbenutzen. Bei Problemen mit
        dem WebUntis-Elternaccount schreiben Sie bitte an{" "}
        <a href="mailto:bnb@bgzwn.at" className="text-primary hover:underline">bnb@bgzwn.at</a>.
      </Callout>

      <H3>Farbcodes im Stundenplan</H3>
      <Table
        headers={["Farbe", "Bedeutung"]}
        rows={[
          ["🟠 Orange", "Regulärer Unterricht"],
          ["🟡 Gelb", "Tests / Schularbeiten"],
          ["🟣 Violett", "Supplierungen / Vertretungen"],
          ["🔵 Blau", "Feiertage / schulfreie Tage"],
        ]}
      />

      <Callout type="info" title="Planänderungen">
        Änderungen für den nächsten Tag werden bis <strong>12:00 Uhr</strong>{" "}
        eingepflegt. Danach gilt der angezeigte Plan als fix.
      </Callout>

      <H3>Abwesenheit melden (Krankmeldung)</H3>

      <StepList>
        <Step title="Im Dashboard &quot;Abwesenheit melden&quot; klicken">
          Wählen Sie den Zeitraum (ganztägig oder einzelne Stunden).
        </Step>
        <Step title="Kategorie &quot;KR_neu&quot; auswählen">
          Optional können Sie einen Kommentar für den Klassenvorstand
          hinzufügen.
        </Step>
        <Step title="Schriftliche Entschuldigung nachreichen">
          Die Abwesenheit wird als &quot;offen&quot; gespeichert und muss
          innerhalb einer Woche entschuldigt werden.
        </Step>
      </StepList>

      <Callout type="danger" title="Schulpflicht">
        Laut{" "}
        <a href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=43" target="_blank" rel="noopener noreferrer">SchUG § 43</a>{" "}
        und{" "}
        <a href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=45" target="_blank" rel="noopener noreferrer">§ 45</a>{" "}
        besteht Schulbesuchspflicht.
        Erziehungsberechtigte müssen Abwesenheiten bis{" "}
        <strong>7:30 Uhr am ersten Fehltag</strong> dem Klassenvorstand melden.
        Bei Abwesenheiten über eine Woche oder häufigen Kurzerkrankungen ist
        eine ärztliche Bestätigung erforderlich. Bei mehr als 5 unentschuldigten
        Tagen oder 30 Stunden droht die automatische Abmeldung
        (<a href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=45" target="_blank" rel="noopener noreferrer">§ 45 Abs. 4</a>).
      </Callout>

      {/* ═══════════════ edu.Suite ═══════════════ */}
      <H2>edu.Suite — Zentrales Zugangsportal</H2>

      <P>
        Die edu.Suite von Quarto Software GmbH (
        <a
          href="https://www.quarto.at/home.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          quarto.at
        </a>
        ) ist das gemeinsame Login-Portal für edu.Flow, edu.Pay und edu.Card.
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          [
            "Portal-URL",
            "edusuite.at/portal/",
          ],
          ["Schulcode", "304046"],
          ["Schüler-Login", "Über Office 365 (Microsoft-Konto)"],
          ["Eltern-Login", "Über verifiziertes edu.Flow-Konto"],
        ]}
      />

      <P>
        Alternativ finden Sie den Link auch auf{" "}
        <a
          href="https://www.bgzwn.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          bgzwn.at
        </a>{" "}
        unter &quot;Weblinks&quot; → &quot;EDUSUITE&quot;.
      </P>

      <Callout type="info" title="Eltern-Synchronisierung">
        Elternkonten werden <strong>nächtlich</strong> synchronisiert.
        Änderungen an Ihren Daten sind daher erst am nächsten Tag sichtbar.
      </Callout>

      <Callout type="warning" title="Persönliche Daten geändert? (Adresse, Telefonnummer, Name etc.)">
        Wenn sich Ihre persönlichen Daten ändern (z.B. Adresse, Telefonnummer,
        Familienname, Erziehungsberechtigung), senden Sie die Änderung bitte
        <strong> direkt an den Klassenvorstand</strong> Ihres Kindes. Der
        Klassenvorstand pflegt die Daten in SOKRATES ein — von dort werden sie
        automatisch an edu.Flow und edu.Pay weitergegeben. Nur so bleiben alle
        Systeme aktuell.
      </Callout>

      {/* ═══════════════ edu.Flow ═══════════════ */}
      <H2>edu.Flow — Digitale Elternkommunikation</H2>

      <P>
        edu.Flow ist die offizielle Kommunikationsplattform zwischen Schule und
        Eltern. Schüler- und Elterndaten werden aus dem SOKRATES-BUND-System
        importiert.
      </P>

      <H3>So funktioniert die Ersteinrichtung</H3>

      <StepList>
        <Step title="Willkommensbrief erhalten">
          Zum Schuljahresbeginn erhalten Sie einen Brief mit QR-Code und
          Zugangsdaten.
        </Step>
        <Step title="E-Mail verifizieren">
          Scannen Sie den QR-Code oder geben Sie die Daten unter{" "}
          <a
            href="https://edusuite.at/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            edusuite.at/portal/
          </a>{" "}
          ein. Bestätigen Sie Ihre E-Mail-Adresse.
        </Step>
        <Step title="Brief unterschrieben zurückgeben">
          Geben Sie den unterschriebenen Brief an den Klassenvorstand zurück.
        </Step>
        <Step title="Zugang nutzen">
          Mit E-Mail und Passwort haben Sie nun Zugang zu edu.Flow und
          edu.Pay.
        </Step>
      </StepList>

      <P>
        <strong>Zugang:</strong> Über{" "}
        <a
          href="https://edusuite.at/portal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          edu.Suite-Portal
        </a>{" "}
        oder direkt aus dem WebUntis-Hauptmenü.
      </P>

      <UL>
        <li>Mobile-optimiert mit Push-Benachrichtigungen</li>
        <li>
          Als WebApp auf dem Homescreen installierbar —{" "}
          <a
            href="https://www.eduflow.at/EduFlow.Wiki/doku.php?id=portal:webapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Anleitung
          </a>
        </li>
        <li>Jeder Elternteil erhält einen eigenen Account</li>
      </UL>

      <Callout type="warning" title="E-Mails kommen nicht an?">
        Besonders bei <strong>hotmail.com</strong>,{" "}
        <strong>outlook.com</strong>, <strong>live.com</strong> und{" "}
        <strong>yahoo.com</strong> werden E-Mails oft als Spam blockiert.
        Fügen Sie diese Absender zu Ihren Kontakten hinzu:
        <ul>
          <li>
            <InlineCode>eduflow@bgzwn.at</InlineCode>
          </li>
          <li>
            <InlineCode>edupay@bgzwn.at</InlineCode>
          </li>
        </ul>
        Prüfen Sie auch den Spam-/Junk-Ordner.
      </Callout>

      <H3>Passwort vergessen (Eltern)</H3>
      <P>
        Falls Sie Ihr edu.Flow-Passwort vergessen haben, können Sie es hier
        zurücksetzen:{" "}
        <a
          href="https://www.eduflow.at/EduFlow/Account/forgotpassword?tenant=304046&username="
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Passwort zurücksetzen
        </a>
        . Die IT kann Eltern-Passwörter <strong>nicht</strong> zurücksetzen —
        nur das Self-Service-Portal.
      </P>

      {/* ═══════════════ edu.Pay ═══════════════ */}
      <H2>edu.Pay — Bargeldlose Zahlungsplattform</H2>

      <P>
        Über edu.Pay bezahlen Sie Schulausgaben bargeldlos:
      </P>

      <UL>
        <li>edu.Card-Guthaben aufladen (max. 25 EUR pro Aufladung)</li>
        <li>Neue edu.Card bestellen (Schülerausweis, 13 EUR)</li>
        <li>Sportwochen &amp; Exkursionen bezahlen</li>
        <li>Spind- und Bücherkastenmiete</li>
      </UL>

      <H3>Anmeldung für Schüler</H3>
      <StepList>
        <Step title="edu.Suite öffnen">
          Gehen Sie zu{" "}
          <a
            href="https://edusuite.at/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            edusuite.at/portal/
          </a>{" "}
          und geben Sie den Schulcode <strong>304046</strong> ein.
        </Step>
        <Step title="&quot;Über Office 365 anmelden&quot; wählen">
          Melden Sie sich mit{" "}
          <InlineCode>nachname.vorname@bgzwn.at</InlineCode> an.
        </Step>
      </StepList>

      <H3>Anmeldung für Eltern</H3>
      <P>
        Verwenden Sie dieselben Schritte, aber melden Sie sich mit Ihrer
        verifizierten Eltern-E-Mail-Adresse und dem Elternkennwort an.
      </P>

      <Table
        headers={["Zahlungsart", "Hinweis"]}
        rows={[
          ["EPS-Überweisung", "Online-Überweisung — sofort verbucht"],
          ["Banküberweisung", "Dauert 2–4 Werktage"],
        ]}
      />

      <Callout type="info" title="Keine Kartenzahlung">
        Kreditkarten- und Debitkartenzahlungen werden aufgrund zu hoher
        Gebühren nicht mehr angeboten. Bitte verwenden Sie EPS oder eine
        klassische Banküberweisung.
      </Callout>

      <Callout type="info" title="Überzahlung / Rückerstattung">
        Beträge unter 10 EUR können auf die Kopierkarte übertragen werden. Ab
        10 EUR ist eine Rückerstattung möglich — senden Sie das{" "}
        <a
          href="https://wiki.bgzwn.at/lib/exe/fetch.php?media=antrag_rueckerstattung.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Antragsformular
        </a>{" "}
        mit Name, Klasse und Unterschrift an{" "}
        <a
          href="mailto:kanzlei@bgzwn.at"
          className="text-primary hover:underline"
        >
          kanzlei@bgzwn.at
        </a>
        .
      </Callout>

      <Callout type="warning" title="Mehrere Kinder?">
        Wenn Sie mehrere Kinder an der Schule haben, löschen Sie nach dem
        Ausloggen die Cookies oder verwenden Sie ein privates /
        Inkognito-Fenster, um Kontoverwechslungen zu vermeiden.
      </Callout>

      {/* ═══════════════ edu.Card ═══════════════ */}
      <H2>edu.Card — Schülerausweis &amp; Kopierkarte</H2>

      <P>
        Die edu.Card ist der offizielle Schülerausweis mit Kopierfunktion.
        Alle Details zu Bestellung, Verlust, Ersatzkarte und der digitalen
        edu.digicard finden Sie auf der eigenen Seite:
      </P>

      <Callout type="info" title="Eigene Seite">
        <a
          href="/infohub/educard"
          className="text-primary hover:underline font-semibold"
        >
          edu.Card &amp; edu.digicard → Zur vollständigen Übersicht
        </a>
      </Callout>

      {/* ═══════════════ Drucken ═══════════════ */}
      <H2>Drucken &amp; Kopieren</H2>

      <P>
        Das Drucksystem verwendet SafeQ von Y-Soft. Die Kosten werden über
        das edu.Card-Guthaben abgerechnet.
      </P>

      <Table
        headers={["Methode", "Beschreibung"]}
        rows={[
          [
            "FollowMe (Schul-PC)",
            "Druckauftrag senden → am Drucker mit edu.Card oder Login abholen",
          ],
          ["Windows / Mac", "Drucker über Schulnetzwerk einrichten"],
          ["iPad", "AirPrint über Schul-WLAN"],
          [
            "E-Mail-Druck",
            "Dokument an printme@bgzwn.at senden (von der Schuladresse)",
          ],
        ]}
      />

      <UL>
        <li>
          Druckaufträge werden <strong>4 Tage</strong> in der Warteschlange
          gespeichert
        </li>
        <li>In IT-Laboren ist FollowMe-Drucken kostenlos</li>
        <li>Mac-Druck funktioniert nur im Lehrer-WLAN</li>
      </UL>

      {/* ═══════════════ PoDS ═══════════════ */}
      <H2>Portal Digitale Schule (PoDS)</H2>

      <P>
        PoDS ist die Plattform des Bundesministeriums für Bildung für digitale
        Schulverwaltung.
      </P>

      <H3>Aktivierung für Schüler</H3>

      <StepList>
        <Step title="QR-Code im Unterricht erhalten">
          Im DIGIB-Unterricht erhalten Sie einen Aktivierungscode. Dieser ist{" "}
          <strong>30 Tage</strong> gültig.
        </Step>
        <Step title="Mit Office 365 verknüpfen">
          Wählen Sie &quot;Registrieren mit Office 365&quot; und melden Sie sich mit{" "}
          <InlineCode>nachname.vorname@bgzwn.at</InlineCode> an.
        </Step>
        <Step title="Berechtigungen bestätigen">
          Bestätigen Sie die angeforderten Berechtigungen — Ihr PoDS-Account
          ist nun mit dem Schulkonto verknüpft.
        </Step>
      </StepList>

      <H3>Login</H3>
      <Table
        headers={["Rolle", "Wie anmelden"]}
        rows={[
          [
            "Schüler/in",
            "pods.gv.at → Login → \"Ich bin SchülerIn\" → \"Anmeldung mit Microsoft\"",
          ],
          [
            "Eltern",
            "Über bildung.gv.at → Login mit ID Austria oder Bildungsportal-Zugangsdaten",
          ],
          [
            "Lehrkräfte",
            "Über bildung.gv.at mit Portal-Zugangsdaten",
          ],
        ]}
      />

      <Callout type="info" title="Hilfe zu PoDS">
        Anleitungen finden Sie nach dem Login unter{" "}
        <a
          href="https://www.bildung.gv.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          bildung.gv.at
        </a>
        . Aktivierungscode abgelaufen? Wenden Sie sich an{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary hover:underline"
        >
          admin@bgzwn.at
        </a>{" "}
        für einen neuen Code. Bitte beachten Sie: Die Schule ist nicht der
        Betreiber von PoDS und kann nur eingeschränkt Support leisten.
      </Callout>
    </>
  );
}
