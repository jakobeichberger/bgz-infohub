import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "iPad & Geräte — BG Zehnergasse",
  description:
    "Geräteinitiative Digitales Lernen, iPad-Verwaltung, Kinderschutz, Garantie, Zubehör und Gerätebörse am BG Zehnergasse.",
};

export default function GeraetePage() {
  return (
    <>
      <PageHeader title="iPad & Geräte" />

      <P>
        Im Rahmen der österreichischen Initiative &quot;Digitales Lernen&quot;
        erhalten Schülerinnen und Schüler der Unterstufe ein Apple iPad. Hier
        finden Sie alle Informationen zur Beschaffung, Verwaltung, zum
        Kinderschutz und zum Zubehör.
      </P>

      {/* ═══════════════ Geräteinitiative ═══════════════ */}
      <H2>Geräteinitiative &quot;Digitales Lernen&quot;</H2>

      <P>
        Die Geräteinitiative ist Teil des 8-Punkte-Plans zur Digitalisierung
        des Unterrichts des BMBWF. Ziel ist es, allen Schülerinnen und Schülern
        der Sekundarstufe I gleichen Zugang zu digitaler Bildung zu
        ermöglichen. Die Rechtsgrundlage bildet das
        Schulunterrichts-Digitalisierungsgesetz (SchulDigiG).
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Gerät", "Apple iPad (von der Schule gewählt)"],
          ["Verwaltung", "Microsoft InTune (MDM)"],
          [
            "Eigenanteil Eltern",
            "25 % des Gerätepreises (gem. SchDigiG § 5 Abs. 2)",
          ],
          [
            "Berechtigt",
            "Schüler/innen der 5. Schulstufe (MS, AHS-Unterstufe, Sonderschulen)",
          ],
          [
            "Umsetzung",
            "OeAD — Agentur für Bildung und Internationalisierung",
          ],
        ]}
      />

      <Callout type="success" title="EU-Aufbauplan">
        Die Initiative wird mit <strong>171,7 Millionen Euro</strong> aus dem
        EU-Aufbau- und Resilienzplan finanziert. Seit dem Schuljahr 2021/22
        wurden bereits mehrere Jahrgänge ausgestattet.{" "}
        <a
          href="https://digitaleslernen.oead.at/de/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Mehr auf digitaleslernen.oead.at
        </a>
      </Callout>

      {/* ─── Beschaffung & Bezahlung ─── */}
      <H3>Beschaffung &amp; Bezahlung</H3>

      <P>
        Schüler- und Erziehungsberechtigtendaten werden aus der
        Schulverwaltung an den OeAD übermittelt, der die Bestellung und
        Lieferung organisiert. Die Schule wickelt keine Zahlungen ab.
      </P>

      <UL>
        <li>
          Eltern erhalten eine Zahlungsaufforderung mit{" "}
          <strong>individuellem Verwendungszweck</strong> — bitte exakt
          übernehmen
        </li>
        <li>
          Der Eigenanteil beträgt 25 % des Gerätepreises (Rechtsgrundlage:{" "}
          <a
            href="https://www.ris.bka.gv.at/eli/bgbl/i/2021/9/P5/NOR40229759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            SchDigiG § 5
          </a>
          )
        </li>
        <li>
          <a
            href="https://digitaleslernen.oead.at/fileadmin/Dokumente/digitaleslernen.oead.at/Allgemeine_Vertragsbedingungen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Allgemeine Vertragsbedingungen (PDF)
          </a>
        </li>
      </UL>

      <H3>Befreiung vom Eigenanteil</H3>

      <P>
        Unter bestimmten sozialen Voraussetzungen kann eine Befreiung vom
        Eigenanteil beantragt werden:
      </P>

      <UL>
        <li>
          Online über die OeAD-Website:{" "}
          <a
            href="https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            Bezahlung &amp; Befreiung auf digitaleslernen.oead.at
          </a>
        </li>
        <li>Oder über den PoDS-Elternzugang</li>
        <li>
          Das Ministerium entscheidet über die Genehmigung — nicht die Schule
        </li>
      </UL>

      {/* ─── Garantie & Hardware-Support ─── */}
      <H3>Garantie &amp; Hardware-Support</H3>

      <Callout type="warning" title="Wichtig: Die Schule leistet keinen Hardware-Support">
        Bei Hardware-Defekten (Display, Akku, Ladekabel etc.) ist{" "}
        <strong>nicht die Schule</strong>, sondern der Lieferant ACP TechRent
        zuständig. Die Schule unterstützt nur bei der Konfiguration von Apps
        und Programmen für den Unterricht.
      </Callout>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Lieferant", "ACP TechRent GmbH"],
          ["Adresse", "Ernst Krenek Gasse 4, 1230 Wien"],
          ["Telefon", "+43 1 813 0000"],
          ["Fax", "+43 1 813 0000 159"],
          ["E-Mail", "sales@acptechrent.at"],
          ["Website", "acptechrent.at"],
        ]}
      />

      <P>
        Mehr zu Garantie und Versicherung:{" "}
        <a
          href="https://digitaleslernen.oead.at/de/garantie-versicherung"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          digitaleslernen.oead.at/de/garantie-versicherung
        </a>
      </P>

      <H3>Schulwechsel — Gerätebörse</H3>

      <P>
        Beim Schulwechsel kann das Gerät über die OeAD-Gerätebörse
        getauscht werden:{" "}
        <a
          href="https://digitaleslernen.oead.at/de/fuer-eltern/geraete-support/geraeteboerse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          Zur Gerätebörse
        </a>
      </P>

      {/* ─── OeAD Kontakt ─── */}
      <Callout type="info" title="OeAD-Hotline für alle Fragen zur Geräteinitiative">
        <ul>
          <li>
            <strong>Telefon:</strong> +43 720 080 356 (Mo–Fr 07:30–18:00)
          </li>
          <li>
            <strong>E-Mail:</strong>{" "}
            <a
              href="mailto:digitaleslernen@oead.at"
              className="text-[var(--primary)] hover:underline"
            >
              digitaleslernen@oead.at
            </a>
          </li>
          <li>
            <strong>Post:</strong> OeAD — Digitales Lernen,
            Ebendorferstraße 7, 1010 Wien
          </li>
          <li>
            <strong>FAQ:</strong>{" "}
            <a
              href="https://digitaleslernen.oead.at/de/faqs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary)] hover:underline"
            >
              digitaleslernen.oead.at/de/faqs
            </a>
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Kinderschutz & MDM ═══════════════ */}
      <H2>Kinderschutz &amp; MDM</H2>

      <P>
        Gemäß SchUG § 14a und der IKT-Schulverordnung 2025 sind auf den
        Geräten der Unterstufe Kinderschutz-Maßnahmen aktiv:
      </P>

      <UL>
        <li>Webfilter für altersgerechtes Surfen</li>
        <li>App-Store-Einschränkungen</li>
        <li>Blockierung privater Apple-IDs auf vollverwalteten Geräten</li>
      </UL>

      <Callout type="info" title="Einstellungen anpassen">
        Eltern können Kinderschutz-Einstellungen über das{" "}
        <strong>PoDS-Portal</strong> (Portal Digitale Schule) anpassen. Tipps
        zur sicheren Internetnutzung:{" "}
        <a
          href="https://www.saferinternet.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          SaferInternet.at
        </a>
      </Callout>

      {/* ═══════════════ Geräteverwaltung (AAD) ═══════════════ */}
      <H2>Geräteverwaltung (Azure AD / InTune)</H2>

      <P>
        Die Schule nutzt Microsoft Azure Active Directory mit drei
        Verwaltungsstufen:
      </P>

      <Table
        headers={["Stufe", "Beschreibung", "IT-Zugriff"]}
        rows={[
          [
            "Apps Only",
            "Nur Schul-Apps installiert, kein Management",
            "Keiner",
          ],
          [
            "Partial (AAD Registered)",
            "Arbeitsprofil wird angelegt, Schuldaten getrennt",
            "Kein Zugriff auf persönliche Daten",
          ],
          [
            "Full (AAD Joined)",
            "Vollständig schulverwaltet (iPad-Initiative)",
            "Geräterichtlinien werden durchgesetzt",
          ],
        ]}
      />

      <Callout type="success" title="Datenschutz bei Partial Management">
        Bei der Teilregistrierung hat die IT{" "}
        <strong>keinen Zugriff</strong> auf persönliche Fotos, Dokumente oder
        Nachrichten. Nur das Arbeitsprofil wird verwaltet.
      </Callout>

      <H3>iOS-Einstellungen im Detail</H3>
      <UL>
        <li>SSO-Profile für nahtlosen Zugang zu Schuldiensten</li>
        <li>
          Pflicht-Apps (WebUntis, Teams) werden über das Unternehmensportal
          installiert
        </li>
        <li>iOS-Updates: werktags 15:00–23:00, am Wochenende jederzeit</li>
        <li>
          Private Apple-ID kann für persönliche App-Käufe hinzugefügt werden
        </li>
        <li>OneDrive-Backup ist automatisch vorkonfiguriert</li>
      </UL>

      {/* ═══════════════ iPad zurücksetzen ═══════════════ */}
      <H2>iPad zurücksetzen (Werksreset)</H2>

      <P>
        Falls das iPad schwerwiegende Probleme hat, können Sie es auf
        Werkseinstellungen zurücksetzen. Sie benötigen dafür einen Computer
        mit iTunes.
      </P>

      <StepList>
        <Step title="iTunes installieren">
          Laden Sie iTunes auf Ihren Computer herunter und installieren Sie
          es.
        </Step>
        <Step title="Recovery-Modus aktivieren">
          Folgen Sie der offiziellen Apple-Anleitung, um das iPad in den
          Wiederherstellungsmodus zu versetzen.
        </Step>
        <Step title="iPad wiederherstellen">
          Wählen Sie in iTunes &quot;Wiederherstellen&quot; und warten Sie, bis
          der Vorgang abgeschlossen ist.
        </Step>
        <Step title="Neu einrichten">
          Wählen Sie: Deutsch → Österreich → Manuell konfigurieren → WLAN
          verbinden → Schulverwaltung registrieren → Schul-Apple-ID
          verwenden.
        </Step>
        <Step title="Unternehmensportal abwarten">
          Die Company Portal App wird automatisch heruntergeladen. Darüber
          erhalten Sie alle Schul-Apps.
        </Step>
      </StepList>

      {/* ═══════════════ Zubehör ═══════════════ */}
      <H2>Zubehör nachbestellen</H2>

      <P>
        Ersatzteile und Zubehör können Sie über den justEDU-Webshop bestellen:
      </P>

      <Table
        headers={["Produkt", "Bestellmöglichkeit"]}
        rows={[
          ["Active Pen Ersatzspitzen (Gen 1)", "justedu.at — Ersatzspitzen Gen 1"],
          ["Active Pen Ersatzspitzen (Gen 2)", "justedu.at — Ersatzspitzen Gen 2"],
          ["Slim Keyboard Cover (iPad 8/9)", "justedu.at — Keyboard Cover"],
        ]}
      />

      {/* ═══════════════ iPad abkoppeln ═══════════════ */}
      <H2>iPad abkoppeln (Schulaustritt / Ende 4. Klasse)</H2>

      <P>
        Wenn Ihr Kind die Unterstufe verlässt, wird das iPad von der
        Schulverwaltung getrennt:
      </P>

      <StepList>
        <Step title="IT gibt Seriennummer frei">
          Die IT-Abteilung entfernt das Gerät aus der Verwaltung.
        </Step>
        <Step title="Werksreset durchführen">
          Setzen Sie das iPad über Einstellungen → Allgemein → iPad
          zurücksetzen auf Werkseinstellungen zurück.
        </Step>
        <Step title="Privat neu einrichten">
          Das iPad kann jetzt mit einer privaten Apple-ID ohne
          Schulverwaltung eingerichtet werden.
        </Step>
      </StepList>

      {/* ═══════════════ Weiterführende Links ═══════════════ */}
      <H2>Weiterführende Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://digitaleslernen.oead.at/de/",
            label: "OeAD Digitales Lernen",
            desc: "Geräteinitiative — Hauptseite",
          },
          {
            href: "https://digitaleslernen.oead.at/de/faqs",
            label: "OeAD FAQ",
            desc: "Häufig gestellte Fragen",
          },
          {
            href: "https://digitaleslernen.oead.at/de/fuer-schulen/geraeteinformationen",
            label: "Geräteinformationen",
            desc: "Technische Spezifikationen",
          },
          {
            href: "https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung",
            label: "Bezahlung & Befreiung",
            desc: "Eigenanteil bezahlen oder Befreiung beantragen",
          },
          {
            href: "https://digitaleslernen.oead.at/de/garantie-versicherung",
            label: "Garantie & Versicherung",
            desc: "Informationen zu Garantie und Reparatur",
          },
          {
            href: "https://digitaleschule.gv.at/",
            label: "Digitale Schule",
            desc: "Portal des Ministeriums",
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
              <span className="text-sm font-medium text-[var(--text)] group-hover:text-primary group-hover:text-[var(--primary)] transition-colors">
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
