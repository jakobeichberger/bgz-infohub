import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Schulaccount & Office 365 — BG Zehnergasse",
  description:
    "Schulkonto, Login-Daten, Passwort-Regeln, Passwort zurücksetzen und Microsoft Office 365 am BG Zehnergasse.",
};

export default function SchulaccountPage() {
  return (
    <>
      <PageHeader title="Schulaccount & Office 365" />

      <P>
        Jede Schülerin und jeder Schüler erhält bei der Einschreibung einen
        persönlichen Schulaccount. Damit haben Sie bzw. Ihr Kind Zugang zu allen
        digitalen Diensten der Schule.
      </P>

      {/* ─── Account-Daten ─── */}
      <H2>Ihr Schulkonto</H2>

      <Table
        headers={["Eigenschaft", "Format / Beispiel"]}
        rows={[
          ["Benutzername", "nachname.vorname"],
          ["E-Mail-Adresse", "nachname.vorname@bgzwn.at"],
          ["Erstpasswort", "Wird von der IT bei Einschreibung vergeben"],
        ]}
      />

      <Callout type="info" title="Erstanmeldung">
        Das Schulkonto muss <strong>in der Schule</strong> aktiviert werden. Bei
        der ersten Anmeldung am Schulnetzwerk wird ein persönliches Passwort
        gesetzt. Erst danach funktioniert der Zugang auch von zu Hause.
      </Callout>

      <H3>Damit haben Sie Zugang zu</H3>
      <UL>
        <li>Computer-Arbeitsplätze in den EDV-Räumen</li>
        <li>Schul-WLAN</li>
        <li>Drucker und Kopierer (kostenpflichtig über edu.Card)</li>
        <li>WebUntis — Stundenplan, Noten, Abwesenheiten</li>
        <li>Moodle / eduvidual — Lernplattform</li>
        <li>edu.Flow — Kommunikation Schule–Eltern</li>
        <li>Microsoft Office 365 — Word, Excel, Teams, OneDrive</li>
      </UL>

      {/* ─── Passwort-Regeln ─── */}
      <H2>Passwort-Regeln</H2>

      <P>
        Für die Domäne <InlineCode>bgzwn.at</InlineCode> gelten folgende Regeln:
      </P>

      <UL>
        <li>Mindestens <strong>12 Zeichen</strong> (je länger, desto besser)</li>
        <li>
          Komplexität erforderlich: Groß- und Kleinbuchstaben plus Zahlen{" "}
          <strong>oder</strong> Sonderzeichen
        </li>
        <li>
          Nach <strong>10 Fehlversuchen</strong> wird das Konto für{" "}
          <strong>10 Minuten</strong> gesperrt
        </li>
      </UL>

      <Callout type="danger" title="Verbotene Begriffe im Passwort">
        <p>
          Folgende Wörter dürfen <strong>nicht</strong> im Passwort vorkommen —
          auch nicht als Teil eines längeren Wortes:
        </p>
        <ul>
          <li>
            <InlineCode>Zehnergasse</InlineCode>
          </li>
          <li>
            <InlineCode>Gymnasium</InlineCode>
          </li>
          <li>
            <InlineCode>wauwau</InlineCode>
          </li>
          <li>
            <InlineCode>bgzwn</InlineCode>
          </li>
        </ul>
      </Callout>

      <H3>Tipps für ein sicheres Passwort</H3>

      <P>
        <strong>Methode 1 — Ganzer Satz als Passwort (empfohlen):</strong>
        <br />
        Verwenden Sie einen ganzen Satz mit Leerzeichen. Das ist lang, sicher
        und leicht zu merken.
      </P>

      <Table
        headers={["Beispiel-Passwort", "Zeichen", "Sicherheit"]}
        rows={[
          ["Mein Hund frisst gerne 3 Bananen!", "35", "Sehr sicher"],
          ["Im Sommer gehe ich 7x schwimmen.", "35", "Sehr sicher"],
          ["Pizza mit Ananas? Niemals, danke!", "36", "Sehr sicher"],
        ]}
      />

      <P>
        <strong>Methode 2 — Anfangsbuchstaben eines Satzes:</strong>
        <br />
        Bilden Sie aus jedem Wort eines Satzes den Anfangsbuchstaben.
      </P>
      <UL>
        <li>
          Satz: &quot;Am Montag esse ich immer 2 Semmeln zum Frühstück!&quot; →
          Passwort: <InlineCode>AMeii2SzF!</InlineCode>
        </li>
        <li>
          Satz: &quot;Meine Katze schläft jeden Tag 16 Stunden lang.&quot; →
          Passwort: <InlineCode>MKsjT16Sl.</InlineCode>
        </li>
      </UL>

      <P>
        <strong>Methode 3 — Zufällige Wortkombination:</strong>
      </P>
      <UL>
        <li>
          <InlineCode>Wolke Gabel Tintenfisch Rakete</InlineCode> (33 Zeichen)
        </li>
        <li>
          <InlineCode>Kaktus Freitag Mondstein Suppe7</InlineCode> (32 Zeichen)
        </li>
      </UL>

      <H3>So sieht ein schlechtes Passwort aus</H3>

      <Table
        headers={["Schlechtes Passwort", "Warum unsicher?"]}
        rows={[
          ["Zehnergasse2025", "Enthält verbotenes Wort"],
          ["Gymnasium!1234", "Enthält verbotenes Wort"],
          ["bgzwn12345678", "Enthält verbotenes Wort"],
          ["Passwort1234", "Steht auf jeder Hacker-Liste"],
          ["12345678abcd", "Einfache Zeichenfolge"],
          ["MaxMuster2010", "Name + Geburtsjahr"],
          ["qwertzuiop12", "Tastaturmuster"],
        ]}
      />

      <Callout type="success" title="Goldene Regeln">
        <ol>
          <li>Mindestens 12 Zeichen (besser mehr)</li>
          <li>
            Keine Schulbegriffe (Zehnergasse, Gymnasium, bgzwn, wauwau)
          </li>
          <li>Keine persönlichen Daten (Name, Geburtstag, Haustier)</li>
          <li>Am besten einen ganzen Satz verwenden</li>
          <li>Für jedes Konto ein eigenes Passwort</li>
          <li>Passwort niemals weitergeben — auch nicht an Freunde</li>
        </ol>
      </Callout>

      {/* ─── Passwort ändern ─── */}
      <H2>Passwort ändern</H2>

      <P>Sie haben drei Möglichkeiten, das Passwort zu ändern:</P>

      <StepList>
        <Step title="Online über portal.office.com">
          <ol>
            <li>
              Melden Sie sich unter{" "}
              <a
                href="https://portal.office.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                portal.office.com
              </a>{" "}
              mit E-Mail und aktuellem Passwort an
            </li>
            <li>Klicken Sie oben rechts auf die Initialen → &quot;Konto anzeigen&quot;</li>
            <li>Wählen Sie &quot;Kennwort&quot; oder &quot;Kennwort ändern&quot;</li>
            <li>Altes Passwort 1× eingeben, neues Passwort 2× eingeben</li>
          </ol>
          <p className="text-xs text-[var(--text-light)] mt-1">
            Änderungen gelten innerhalb weniger Minuten für alle
            Microsoft-Dienste. Im Schulnetzwerk kann es bis zu 15 Minuten
            dauern.
          </p>
        </Step>
        <Step title="Am Schul-PC">
          Drücken Sie{" "}
          <InlineCode>Strg + Alt + Entf</InlineCode> → &quot;Kennwort ändern&quot;
          auswählen → altes und neues Passwort eingeben.
        </Step>
        <Step title="Über DigiGB oder IT-Lehrkräfte">
          Lehrkräfte können Passwörter und die mehrstufige Authentifizierung
          (MFA) im Unterricht zurücksetzen.
        </Step>
      </StepList>

      <Callout type="info" title="Wichtig">
        Das Passwort gilt für <strong>alle</strong> verknüpften Dienste: WLAN,
        OneDrive, Office 365, WebUntis und Moodle.
      </Callout>

      {/* ─── Passwort vergessen ─── */}
      <H2>Passwort vergessen</H2>

      <P>
        Wenn bei der Erstanmeldung eine private E-Mail-Adresse oder
        Handynummer hinterlegt wurde, können Sie das Passwort selbst
        zurücksetzen:
      </P>

      <StepList>
        <Step title="Self-Service-Reset öffnen">
          Gehen Sie zu{" "}
          <a
            href="https://portal.office.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            portal.office.com
          </a>{" "}
          und geben Sie die Schul-E-Mail-Adresse ein.
        </Step>
        <Step title="&quot;Kennwort vergessen&quot; klicken">
          Wählen Sie die Authentifizierungsmethode (E-Mail oder SMS).
        </Step>
        <Step title="Code eingeben & neues Passwort setzen">
          Geben Sie den erhaltenen Code ein und legen Sie ein neues Passwort
          fest.
        </Step>
      </StepList>

      <Callout type="warning" title="Self-Service nicht möglich?">
        Falls kein Self-Service eingerichtet wurde, wenden Sie sich an:
        <ul>
          <li>DigiGB-Lehrkräfte oder IT-Lehrkräfte im Unterricht</li>
          <li>
            IT-Administration:{" "}
            <a
              href="mailto:admin@bgzwn.at"
              className="text-[var(--primary)] hover:underline"
            >
              admin@bgzwn.at
            </a>
          </li>
        </ul>
      </Callout>

      {/* ─── Office 365 ─── */}
      <H2>Microsoft 365</H2>

      <P>
        Über den MS-ACH-Vertrag erhalten alle Schülerinnen und Schüler
        Microsoft 365 mit der <strong>A3-Lizenz komplett kostenlos</strong> —
        inklusive Desktop-Apps, OneDrive, OneNote, Teams und Copilot.
      </P>

      <Callout type="info" title="Eigene Seite">
        Alle Details zu den Vorteilen der A3-Lizenz, OneDrive, OneNote,
        Copilot und Installation:{" "}
        <a
          href="/infohub/office365"
          className="text-[var(--primary)] hover:underline font-semibold"
        >
          Microsoft 365 → Zur vollständigen Übersicht
        </a>
      </Callout>
    </>
  );
}
