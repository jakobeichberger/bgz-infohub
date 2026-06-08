import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "IQES — Evaluations- & Schulentwicklungsplattform",
  description:
    "IQES Österreich am BG Zehnergasse: Anmeldung, Erstanmeldung, Fragebogen-Vorlagen, Passwort zurücksetzen und Hilfe für Lehrkräfte.",
};

export default function IqesPage() {
  return (
    <>
      <PageHeader title="IQES — Evaluations- & Schulentwicklungsplattform" />

      <P>
        <strong>IQES Österreich</strong> ist die Evaluations- und
        Schulentwicklungsplattform für österreichische Schulen. Lehrkräfte des
        BG Zehnergasse nutzen IQES für <strong>Umfragen, Feedback und
        schulinterne Evaluationen</strong> — mit Fragebogen-Vorlagen, die vom
        QMS-Team der Schule freigegeben werden.
      </P>

      <Callout type="warning" title="IQES ist ein eigenes System">
        Die IQES-Plattform und Ihr <strong>Schulkonto</strong> sind technisch
        getrennt: Sie haben <strong>eigene, voneinander unabhängige
        Passwörter</strong> und keinen gemeinsamen Login. Ein geändertes
        Schulkonto-Passwort ändert das IQES-Passwort <strong>nicht</strong> —
        und umgekehrt.
      </Callout>

      {/* ═══ Überblick ═══ */}
      <H2>Auf einen Blick</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Plattform", "iqes.bgzwn.at (Weiterleitung zu IQES Online)"],
          ["Anmeldung", "Mit der Schul-E-Mail-Adresse"],
          ["Passwort", "Eigenes IQES-Passwort (NICHT das Schulkonto-Passwort)"],
          ["Zielgruppe", "Lehrkräfte & QMS-Team"],
          ["Verwendung", "Umfragen, Feedback, Evaluationen, Fragebogen-Vorlagen"],
        ]}
      />

      {/* ═══ Erstanmeldung ═══ */}
      <H2>Erstanmeldung</H2>

      <P>
        Beim ersten Mal richten Sie Ihr IQES-Passwort über einen Link aus der
        Einladungs-E-Mail ein:
      </P>

      <StepList>
        <Step title="Einladungs-E-Mail öffnen">
          Sie erhalten automatisch eine E-Mail von <strong>IQES-Admin</strong>{" "}
          an Ihre Schul-E-Mail-Adresse mit einem Link zur Passwort-Einrichtung.
        </Step>
        <Step title="Passwort festlegen">
          Über den Link in der E-Mail ein eigenes IQES-Passwort vergeben.
        </Step>
        <Step title="E-Mail nicht mehr da?">
          Falls Sie die Einladungs-E-Mail gelöscht haben oder nicht mehr
          finden, fordern Sie über <strong>&quot;Passwort vergessen&quot;</strong>{" "}
          ein neues an (siehe Abschnitt unten).
        </Step>
      </StepList>

      {/* ═══ Anmelden ═══ */}
      <H2>Anmelden &amp; Vorlagen finden</H2>

      <StepList>
        <Step title="IQES öffnen">
          Rufen Sie{" "}
          <a
            href="https://iqes.bgzwn.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            iqes.bgzwn.at
          </a>{" "}
          auf — Sie werden automatisch zu IQES Online weitergeleitet.
        </Step>
        <Step title="Anmelden">
          Oben links auf <strong>&quot;Anmelden&quot;</strong> klicken und mit{" "}
          <strong>Schul-E-Mail-Adresse</strong> und Ihrem{" "}
          <strong>IQES-Passwort</strong> einloggen.
        </Step>
        <Step title="Evaluationscenter öffnen">
          Auf den <strong>Punkte-Button</strong> (Menü-Symbol) klicken und{" "}
          <strong>&quot;Evaluationscenter&quot;</strong> öffnen.
        </Step>
        <Step title="Vorlagen wählen">
          Den Bereich <strong>&quot;Vorlagen&quot;</strong> öffnen.
        </Step>
        <Step title="Nach BG Zehnergasse filtern">
          Unter <strong>&quot;Instrumente&quot;</strong> nach{" "}
          <strong>&quot;BG Zehnergasse&quot;</strong> filtern.
        </Step>
        <Step title="Fragebogen nutzen">
          Die vom <strong>QMS-Team</strong> freigegebenen Fragebögen können Sie{" "}
          <strong>kopieren, anpassen und starten</strong>.
        </Step>
      </StepList>

      {/* ═══ Passwort vergessen ═══ */}
      <H2>Passwort vergessen</H2>

      <P>
        Setzen Sie Ihr IQES-Passwort über das Self-Service-Portal zurück:{" "}
        <a
          href="https://login.iqesonline.net/cgi-bin/selfservice/ldapportal.pl?mode=pwreset"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          IQES Passwort zurücksetzen
        </a>
        . Geben Sie dort Ihre Schul-E-Mail-Adresse an.
      </P>

      <Callout type="info" title="Tipp">
        Da IQES und Schulkonto getrennte Passwörter haben, kann auch die
        Schul-IT (<InlineCode>fad@bgzwn.at</InlineCode>) Ihr IQES-Passwort{" "}
        <strong>nicht</strong> direkt zurücksetzen — nutzen Sie dafür den
        Reset-Link oben.
      </Callout>

      {/* ═══ Links ═══ */}
      <H2>Wichtige Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://iqes.bgzwn.at",
            label: "IQES BG Zehnergasse",
            desc: "Anmeldung & Evaluationscenter",
          },
          {
            href: "https://login.iqesonline.net/cgi-bin/selfservice/ldapportal.pl?mode=pwreset",
            label: "IQES Passwort zurücksetzen",
            desc: "Self-Service-Portal",
          },
          {
            href: "https://www.iqesonline.net",
            label: "IQES Online",
            desc: "Offizielle Plattform & Hilfe",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-txt-light block">
                {link.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* ═══ Hilfe ═══ */}
      <H2>Hilfe &amp; Kontakt</H2>

      <UL>
        <li>
          <strong>Passwort vergessen / zurücksetzen:</strong> über den{" "}
          <a
            href="https://login.iqesonline.net/cgi-bin/selfservice/ldapportal.pl?mode=pwreset"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Reset-Link
          </a>
        </li>
        <li>
          <strong>Zugang / technische Probleme:</strong>{" "}
          <a
            href="mailto:fad@bgzwn.at"
            className="text-primary hover:underline"
          >
            fad@bgzwn.at
          </a>{" "}
          (Mag. Rainer Fadinger, MA)
        </li>
        <li>
          <strong>Fragen zur Plattform &amp; den Fragebögen:</strong>{" "}
          QMS-Team der Schule
        </li>
      </UL>
    </>
  );
}
