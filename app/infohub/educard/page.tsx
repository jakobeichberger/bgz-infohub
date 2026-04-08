import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "edu.Card — Schülerausweis & Kopierkarte",
  description:
    "edu.Card: Schülerausweis, Kopierkarte, Bestellung, Verlust melden und Ersatzkarte am BG Zehnergasse.",
};

export default function EduCardPage() {
  return (
    <>
      <PageHeader title="edu.Card — Schülerausweis & Kopierkarte" />

      <P>
        Die edu.Card ist der <strong>offizielle Schülerausweis</strong> des
        BG Zehnergasse im Kreditkartenformat mit integriertem Mifare-Chip.
        Sie dient gleichzeitig als Ausweis und als Kopierkarte.
      </P>

      <H2>Auf einen Blick</H2>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Kosten", "15 EUR (inkl. 5 EUR Startguthaben für Kopien)"],
          ["Bestellung", "Über den edu.Pay-Webshop"],
          ["Kopierguthaben", "Aufladbar über edu.Pay (max. 25 EUR pro Aufladung)"],
          ["Gültigkeit", "Bis zu 4 Jahre (Unter- oder Oberstufe)"],
          ["Lieferzeit", "Ca. 1–2 Wochen nach Zahlungseingang"],
          ["Foto", "Wird von Schulfotografen zu Schuljahresbeginn aufgenommen"],
        ]}
      />

      <H2>Verwendung</H2>

      <UL>
        <li>
          <strong>Offizieller Schülerausweis</strong> — als Identitätsnachweis
          bei Ermäßigungen, in Bibliotheken etc.
        </li>
        <li>
          <strong>Drucken &amp; Kopieren</strong> — Authentifizierung am
          Drucker mit der Karte (SafeQ-System)
        </li>
        <li>
          <strong>Geplant:</strong> Bibliothek, PC-Login, Kantinenzahlung
        </li>
      </UL>

      <Callout type="info" title="Hinweis">
        Die edu.Card ist derzeit <strong>nicht</strong> für Automaten oder das
        Schulbuffet einsetzbar. Beträge auf der Kopierkarte können nur für
        Drucken und Kopieren verwendet werden.
      </Callout>

      <H2>Erstbestellung</H2>

      <StepList>
        <Step title="edu.Suite-Portal öffnen">
          Melden Sie sich unter{" "}
          <a
            href="https://edusuite.at/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            edusuite.at/portal/
          </a>{" "}
          an (Schulcode: <strong>304046</strong>).
        </Step>
        <Step title="edu.Pay-Webshop öffnen">
          Navigieren Sie zu &quot;Bestellen&quot; und wählen Sie
          &quot;edu.Card&quot;.
        </Step>
        <Step title="Vorschau prüfen">
          Überprüfen Sie Foto und Daten sorgfältig. Bei Fehlern wenden Sie
          sich an den Klassenvorstand.
        </Step>
        <Step title="Bezahlung">
          Bezahlen Sie per EPS-Überweisung oder Banküberweisung. Die Karte
          geht erst nach vollständiger Bezahlung in Produktion.
        </Step>
        <Step title="Lieferung abwarten">
          Die Karte wird in der Schule ausgegeben — Lieferzeit ca.{" "}
          <strong>1–2 Wochen</strong>.
        </Step>
      </StepList>

      <H2>Kopierguthaben aufladen</H2>

      <P>
        Das Kopierguthaben kann jederzeit über den edu.Pay-Webshop aufgeladen
        werden (maximal 25 EUR pro Aufladung). Das Startguthaben von 5 EUR
        entspricht ca. 10 A4-Schwarz-Weiß-Ausdrucken.
      </P>

      {/* ═══ Karte verloren ═══ */}
      <H2>Karte verloren oder gestohlen</H2>

      <Callout type="danger" title="Verlustanzeige erstatten!">
        <p>
          Die edu.Card ist ein <strong>offizieller Ausweis</strong>. Bei
          Verlust sollten Sie eine <strong>Verlustanzeige</strong> erstatten:
        </p>
        <ul>
          <li>
            <strong>Online (kostenlos):</strong> Über das{" "}
            <a
              href="https://fundamt.gv.at"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fundamt Österreich (fundamt.gv.at)
            </a>{" "}
            eine Verlustmeldung aufgeben
          </li>
          <li>
            <strong>Vor Ort:</strong> Bei der zuständigen Gemeinde (bei
            mündlicher Anzeige: 2,10 EUR Verwaltungsabgabe)
          </li>
          <li>
            <strong>Bei Diebstahl:</strong> Diebstahlsanzeige bei der Polizei
          </li>
        </ul>
        <p>
          Mehr Informationen:{" "}
          <a
            href="https://www.oesterreich.gv.at/de/themen/notfaelle_unfaelle_und_kriminalitaet/verloren_gefunden/Seite.628000"
            target="_blank"
            rel="noopener noreferrer"
          >
            oesterreich.gv.at — Verlustanzeige
          </a>
        </p>
      </Callout>

      <H3>Ersatzkarte bestellen</H3>

      <StepList>
        <Step title="Selbst über edu.Pay bestellen">
          Melden Sie sich im{" "}
          <a
            href="https://edusuite.at/portal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            edu.Suite-Portal
          </a>{" "}
          an und bestellen Sie eine neue edu.Card über den Webshop. Die Karte
          geht erst nach vollständiger Bezahlung in Produktion.
        </Step>
        <Step title="Selbstbestellung nicht möglich?">
          Wenden Sie sich an{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-[var(--primary)] hover:underline"
          >
            admin@bgzwn.at
          </a>{" "}
          — die IT kann die Bestellung auch manuell auslösen.
        </Step>
        <Step title="Lieferung abwarten">
          Die Ersatzkarte wird mit dem aktuellen Foto produziert und dauert
          ca. <strong>1–2 Wochen</strong>. Das Kopierguthaben der alten Karte
          wird auf die neue Karte übertragen. Die alte Karte wird im System
          deaktiviert.
        </Step>
      </StepList>

      <H2>Foto ändern</H2>

      <P>
        Schulfotografen fotografieren die 1. und 5. Klassen zu
        Schuljahresbeginn, alle anderen Klassen im Oktober/November. Für
        dringende Fälle kann ein Foto manuell an{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-[var(--primary)] hover:underline"
        >
          admin@bgzwn.at
        </a>{" "}
        gesendet werden (Passbildrichtlinien beachten).
      </P>

      {/* ═══ edu.digicard ═══ */}
      <H2>edu.digicard — Digitaler Schülerausweis am Smartphone</H2>

      <P>
        Neben der physischen edu.Card gibt es seit 2023 die{" "}
        <strong>edu.digicard</strong> — den kostenlosen digitalen
        Schülerausweis auf dem Smartphone gemäß{" "}
        <a
          href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=57b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          § 57b Schulunterrichtsgesetz
        </a>.
        Die Nutzung ist freiwillig und unabhängig von der physischen Karte.
      </P>

      <H3>Was zeigt die edu.digicard an?</H3>
      <UL>
        <li>Foto des Schülers / der Schülerin</li>
        <li>Vor- und Zuname</li>
        <li>Geburtsdatum</li>
        <li>Schule und Schulkennzahl</li>
        <li>Gültigkeitsdatum</li>
        <li>Postleitzahl des Wohnorts</li>
      </UL>

      <H3>Wer aktiviert die edu.digicard?</H3>

      <Table
        headers={["Alter", "Wer aktiviert", "Voraussetzung"]}
        rows={[
          ["Unter 14 Jahre", "Eltern / Erziehungsberechtigte", "ID Austria der Erziehungsberechtigten"],
          ["Ab 14 Jahre", "Schüler/in selbst", "Eigene ID Austria"],
        ]}
      />

      <H3>Variante A — Direkt über ID Austria (empfohlen)</H3>

      <StepList>
        <Step title="edu.digicard App herunterladen">
          Kostenlos im{" "}
          <a
            href="https://apps.apple.com/at/app/edu-digicard/id1635556317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Apple App Store
          </a>{" "}
          oder{" "}
          <a
            href="https://play.google.com/store/apps/details?id=at.asitplus.digitalid.wallet.pupilid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Google Play Store
          </a>
          .
        </Step>
        <Step title="Mit ID Austria anmelden">
          Öffnen Sie die App und melden Sie sich mit Ihrer ID Austria an
          (bzw. mit der ID Austria der Erziehungsberechtigten bei Kindern
          unter 14).
        </Step>
        <Step title="Fertig!">
          Die edu.digicard wird sofort in der App angezeigt und ist einsatzbereit.
        </Step>
      </StepList>

      <H3>Variante B — Über QR-Code (am PC generieren)</H3>

      <StepList>
        <Step title="App auf dem Smartphone installieren">
          edu.digicard App aus dem App Store oder Play Store herunterladen.
        </Step>
        <Step title="Am PC die Aktivierungsseite öffnen">
          Melden Sie sich über das{" "}
          <a
            href="https://www.bildung.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Bildungsportal
          </a>{" "}
          an und navigieren Sie zur edu.digicard-Aktivierung.
        </Step>
        <Step title="QR-Code generieren und scannen">
          Generieren Sie am PC einen QR-Code und scannen Sie ihn mit der
          edu.digicard App auf dem Smartphone.
        </Step>
      </StepList>

      <Callout type="info" title="Überprüfung">
        Berechtigte Personen (z.B. Kontrollorgane im öffentlichen Verkehr)
        können die edu.digicard mit der separaten{" "}
        <strong>edu.digicard Check App</strong> scannen und verifizieren.
      </Callout>

      <Callout type="success" title="Datenschutz">
        Sie können verknüpfte Geräte jederzeit über die Aktivierungswebsite
        entfernen. Zugehörige Metadaten werden innerhalb von 24 Stunden
        gelöscht (DSGVO-konform).
      </Callout>

      <H2>Weiterführende Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://edusuite.at/portal/",
            label: "edu.Suite Portal",
            desc: "edu.Card bestellen und Guthaben aufladen",
          },
          {
            href: "https://edusuite.at/edu-card-2/",
            label: "edu.Card Info (Quarto)",
            desc: "Offizielle Infoseite des Herstellers",
          },
          {
            href: "https://fundamt.gv.at",
            label: "Fundamt Österreich",
            desc: "Verlustmeldung online aufgeben",
          },
          {
            href: "https://www.bmbwf.gv.at/educard",
            label: "BMBWF edu.card Info",
            desc: "Ministeriumsseite zur edu.card",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:border-[var(--primary)]/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--primary)] flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
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
