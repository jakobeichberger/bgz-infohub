import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { LinkCards } from "@/components/ui/LinkCards";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Laptop-Vorgaben — Oberstufe",
  description:
    "Offizielle Notebook-Anforderungen für die Oberstufe am BG Zehnergasse: Mindestspezifikationen, Kaufberatung, Bildungsrabatte und die eduabo-Schulaktion (Miete oder Kauf) für 2026/27.",
};

export default function LaptopPage() {
  return (
    <>
      <PageHeader title="Laptop-Vorgaben für die Oberstufe" />

      <P>
        Ab der Oberstufe (5. Klasse / 9. Schulstufe) benötigen Schülerinnen
        und Schüler ein eigenes Notebook für den Unterricht. Hier finden Sie
        die offiziellen Mindestanforderungen der Schule und eine Kaufberatung.
      </P>

      <Callout type="warning" title="Arbeitsmittel — Pflicht zur Instandhaltung">
        Das Notebook gilt als <strong>Arbeitsmittel</strong> im Sinne des
        Schulunterrichtsgesetzes. Gemäß{" "}
        <a
          href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=43"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          § 43 Abs. 1 SchUG
        </a>{" "}
        sind Schülerinnen und Schüler verpflichtet, die erforderlichen
        Arbeitsmittel in ordnungsgemäßem Zustand mitzubringen und für den
        Unterricht bereitzuhalten. Ein nicht funktionsfähiges Notebook kann
        als Versäumnis der Mitwirkungspflicht gewertet werden.
      </Callout>

      <Callout type="info" title="Offizielles Dokument">
        Die vollständigen Vorgaben finden Sie im offiziellen PDF der Schule
        (Stand: Juni 2026):{" "}
        <a
          href="/templates/Information-zum-Notebook-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Information zum Notebook (PDF)
        </a>
      </Callout>

      {/* ═══ Mindestanforderungen ═══ */}
      <H2>Mindestanforderungen</H2>

      <Table
        headers={["Eigenschaft", "Anforderung"]}
        rows={[
          ["Bildschirm", "Mindestens 14 Zoll, empfohlen 14 oder 15,4 Zoll, FullHD (1920×1080)"],
          ["Prozessor", "Intel Core i5 / Core Ultra 5 (aktuelle Generation) oder gleichwertiger AMD Ryzen 5"],
          ["Arbeitsspeicher", "Mindestens 16 GB RAM"],
          ["Speicher", "Mindestens 512 GB SSD"],
          ["Betriebssystem", "Windows 11 (nicht die S-Version!)"],
          ["Admin-Rechte", "Lokale Administratorrechte erforderlich"],
          ["WLAN", "Wi-Fi-fähig"],
          ["Anschlüsse", "USB-Anschlüsse, 3,5mm Kopfhöreranschluss (oder Bluetooth/USB-Adapter)"],
          ["Gewicht", "Leicht transportierbar (typisch 1,3–1,6 kg bei 14 Zoll)"],
          ["Optional", "Externe Maus (Funk/Kabel), externes DVD-Laufwerk"],
        ]}
      />

      <Callout type="danger" title="Nicht geeignet">
        <ul>
          <li>
            <strong>Windows 10:</strong> Erhält seit <strong>14. Oktober
            2025</strong> keine Sicherheitsupdates mehr — beim Neukauf
            unbedingt <strong>Windows 11</strong> wählen.
          </li>
          <li>
            <strong>Windows 11 S-Mode:</strong> Kann keine Programme außerhalb
            des Microsoft Store installieren — für den Schulbetrieb nicht
            geeignet.
          </li>
          <li>
            <strong>Chromebooks:</strong> Können kein Windows ausführen,
            Next-Exam funktioniert nicht, viele Schulprogramme laufen nicht.
          </li>
        </ul>
      </Callout>

      {/* ═══ MacBooks ═══ */}
      <H2>MacBooks — erlaubt, aber mit Einschränkungen</H2>

      <P>
        Apple MacBooks sind grundsätzlich erlaubt, jedoch verwendet die Schule
        teilweise Windows-exklusive Software. Wenn Sie ein MacBook verwenden:
      </P>

      <UL>
        <li>
          Es kann sein, dass Sie eine funktionierende
          Windows-Installation einrichten müssen (Dual-Boot oder
          Virtualisierung über Parallels / UTM) — das ist{" "}
          <strong>kein Muss</strong>, kann aber für bestimmte
          Windows-exklusive Software nötig sein
        </li>
        <li>
          Die Einrichtung liegt in der{" "}
          <strong>Verantwortung der Schülerin / des Schülers</strong> —
          Lehrkräfte helfen dabei nicht
        </li>
        <li>
          Next-Exam hat eine eigene macOS-Version (Intel + Apple Silicon)
        </li>
        <li>Microsoft 365 läuft nativ auf macOS</li>
      </UL>

      <Callout type="warning" title="ARM-Prozessoren (Apple Silicon &amp; Windows-ARM)">
        <p>
          Geräte mit ARM-Prozessor — also <strong>MacBooks mit
          M1/M2/M3/M4-Chip</strong> sowie <strong>Windows-Laptops mit ARM
          (z.B. Qualcomm Snapdragon)</strong> — sollten{" "}
          <strong>grundsätzlich funktionieren</strong> (Office 365, Teams,
          Browser, und Next-Exam mit eigener macOS-/ARM-Version).
        </p>
        <p>
          Bei <strong>Spezialsoftware</strong> kann es jedoch zu
          Kompatibilitäts- oder Leistungsproblemen kommen (manche Programme
          laufen nur über Emulation). In diesem Fall muss sich die Schülerin /
          der Schüler <strong>selbst darum kümmern</strong> — Lehrkräfte und IT
          bieten dafür keinen Support.
        </p>
      </Callout>

      {/* ═══ Warum diese Specs ═══ */}
      <H2>Warum diese Spezifikationen?</H2>

      <Table
        headers={["Anforderung", "Warum?"]}
        rows={[
          [
            "Windows 11",
            "Next-Exam (Prüfungssoftware) benötigt Windows. Viele Schulprogramme sind Windows-exklusiv.",
          ],
          [
            "Intel Core i5 / Core Ultra 5 · AMD Ryzen 5",
            "Ausreichend Leistung für Microsoft Teams (Videokonferenzen), Office 365, Programmieren und Multimedia.",
          ],
          [
            "16 GB RAM",
            "Teams + Browser + Office gleichzeitig verbrauchen leicht 10+ GB. Mit 8 GB wird das Gerät schnell langsam.",
          ],
          [
            "512 GB SSD",
            "Windows 11 + Office + Programme belegen ca. 100 GB. Dazu kommen Dateien, Projekte und Updates.",
          ],
          [
            "14 Zoll FullHD",
            "Gute Balance zwischen Bildschirmgröße (für Split-Screen-Arbeiten) und Transportierbarkeit.",
          ],
          [
            "x86/x64 (empfohlen)",
            "Maximale Kompatibilität — alle Schulprogramme laufen nativ. ARM-Geräte (Apple Silicon, Snapdragon) funktionieren meist ebenfalls; bei Spezialsoftware liegt die Lösung aber in der Eigenverantwortung.",
          ],
        ]}
      />

      {/* ═══ Kaufberatung ═══ */}
      <H2>Kaufberatung — Worauf achten?</H2>

      <H3>Bildschirm</H3>
      <UL>
        <li>
          <strong>14 Zoll</strong> — Bester Kompromiss: groß genug zum
          Arbeiten, leicht genug für den Schulweg (ca. 1,3–1,5 kg)
        </li>
        <li>
          <strong>15,4 Zoll</strong> — Mehr Platz für Split-Screen, aber
          schwerer im Rucksack (ca. 1,7–2,0 kg)
        </li>
        <li>
          <strong>FullHD (1920×1080)</strong> ist Pflicht — HD (1366×768)
          ist zu niedrig für produktives Arbeiten
        </li>
        <li>
          <strong>IPS-Panel</strong> bevorzugen (bessere Blickwinkel und
          Farben als TN-Panels)
        </li>
      </UL>

      <H3>Akku</H3>
      <UL>
        <li>
          <strong>Mindestens 8 Stunden</strong> Laufzeit, damit ein
          Schultag ohne Steckdose möglich ist
        </li>
        <li>
          Achten Sie auf Herstellerangaben und unabhängige Testberichte
        </li>
        <li>
          <strong>USB-C Laden</strong> ist praktisch — ein Ladegerät für
          Laptop und Smartphone
        </li>
      </UL>

      <H3>Tastatur</H3>
      <UL>
        <li>
          <strong>Deutsches Layout (QWERTZ)</strong> — wichtig für das
          10-Finger-System und Umlaute
        </li>
        <li>
          <strong>Beleuchtete Tastatur</strong> ist ein Plus für dunkle
          Klassenräume
        </li>
      </UL>

      <H3>Anschlüsse</H3>
      <UL>
        <li>
          Viele aktuelle Laptops haben fast nur noch <strong>USB-C</strong> —
          ein <strong>USB-C-Hub/Adapter</strong> (für USB-A-Sticks, HDMI/Beamer)
          kann nötig sein
        </li>
        <li>
          Ein <strong>3,5-mm-Kopfhöreranschluss</strong> ist praktisch; sonst
          Kopfhörer per USB-C oder Bluetooth verbinden
        </li>
        <li>
          <strong>USB-C-Laden</strong> bevorzugen — ein Ladegerät für Laptop
          und Smartphone
        </li>
      </UL>

      <H3>Zubehör (empfohlen)</H3>
      <UL>
        <li>
          <strong>Externe Maus</strong> (kabellos oder USB) — präziser als
          das Touchpad
        </li>
        <li>
          <strong>Kopfhörer</strong> — für Videokonferenzen und
          Sprachübungen
        </li>
        <li>
          <strong>Laptoptasche oder -hülle</strong> — schützt das Gerät im
          Rucksack
        </li>
        <li>
          <strong>USB-Stick</strong> — für schnellen Datenaustausch
        </li>
        <li>
          <strong>Externes DVD-Laufwerk</strong> (optional) — moderne Laptops
          haben kein eingebautes Laufwerk
        </li>
      </UL>

      {/* ═══ Empfehlungen nach Budget ═══ */}
      <H2>Empfehlungen nach Budget</H2>

      <Table
        headers={["Budget", "Was Sie erwarten können", "Beispiel-Geräte"]}
        rows={[
          [
            "400–600 EUR",
            "Erfüllt Mindestanforderungen: i5, 16 GB, 512 GB SSD, 14\" FullHD",
            "Lenovo IdeaPad, Acer Aspire, HP 14s",
          ],
          [
            "600–900 EUR",
            "Besserer Akku, leichter, schnellere SSD, wertigeres Gehäuse",
            "Lenovo ThinkPad E-Serie, HP ProBook, ASUS VivoBook Pro",
          ],
          [
            "900+ EUR",
            "Premium: Leichtgewicht, sehr langer Akku, Top-Tastatur, Metallgehäuse",
            "Lenovo ThinkPad T/X, Dell Pro / XPS, HP EliteBook",
          ],
        ]}
      />

      <Callout type="success" title="Tipp: Garantie & Versicherung">
        Kaufen Sie eine <strong>erweiterte Garantie für 3–4 Jahre</strong>{" "}
        (Oberstufe dauert 4 Jahre). Prüfen Sie auch eine
        Geräteversicherung gegen Sturz- und Flüssigkeitsschäden.
      </Callout>

      {/* ═══ eduabo Schulaktion ═══ */}
      <H2>Schulaktion: Notebook über eduabo (Schuljahr 2026/27)</H2>

      <P>
        Sie müssen das passende Notebook <strong>nicht</strong> selbst
        zusammensuchen: Für das Schuljahr <strong>2026/27</strong> stellt die
        Schule gemeinsam mit dem Anbieter <strong>eduabo</strong> ein fertig
        abgestimmtes Gerät bereit. Sie entscheiden nur zwischen zwei
        Varianten — <strong>Miete im Abo</strong> oder{" "}
        <strong>Einmalkauf</strong> — und das Notebook wird nach Hause
        geliefert: beim Kauf sofort, beim Abo pünktlich zum Schulstart.
      </P>

      <Callout type="info" title="Elternbrief zum Nachlesen">
        Alle Angaben in diesem Abschnitt stammen aus dem offiziellen
        Elternbrief (Stand: 25.08.2026):{" "}
        <a
          href="/templates/Elternbrief-eduabo-2026-27.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Elternbrief eduabo — Notebookauswahl 2026/27 (PDF)
        </a>
      </Callout>

      <H3>Das angebotene Gerät</H3>

      <P>
        Angeboten wird <strong>ein</strong> mit der Schulleitung abgestimmtes
        Modell: das <strong>Lenovo IdeaPad Slim 3 Gen8</strong>, ein
        schlanker Allrounder für den Schulalltag. Die Tabelle zeigt, wie das
        Gerät gegenüber den Mindestanforderungen der Schule (siehe oben)
        abschneidet:
      </P>

      <Table
        headers={[
          "Eigenschaft",
          "Vorgabe der Schule",
          "Lenovo IdeaPad Slim 3 Gen8",
          "Erfüllt?",
        ]}
        rows={[
          [
            "Bildschirm",
            "mind. 14 Zoll, FullHD",
            "14 Zoll, 1920×1080, IPS matt",
            "Ja",
          ],
          [
            "Prozessor",
            "Core i5 / Core Ultra 5 oder Ryzen 5",
            "AMD Ryzen 5 7520U (4 Kerne / 8 Threads), 2,8–4,3 GHz",
            "Ja — Einstiegsklasse",
          ],
          ["Arbeitsspeicher", "mind. 16 GB", "16 GB LPDDR5", "Ja"],
          ["Speicher", "mind. 512 GB SSD", "512 GB SSD", "Ja"],
          [
            "Betriebssystem",
            "Windows 11 (nicht die S-Version)",
            "Windows 11 Home",
            "Ja",
          ],
          [
            "Grafik",
            "keine Vorgabe",
            "AMD Radeon 610M (im Prozessor integriert)",
            "—",
          ],
        ]}
      />

      <H3>Die zwei Varianten im Vergleich</H3>

      <Table
        headers={["Kriterium", "Variante 1: Miete im Abo", "Variante 2: Einmalkauf"]}
        rows={[
          ["Preis", "€ 20,99 pro Monat über 46 Monate", "€ 599,— einmalig"],
          [
            "Gesamtkosten",
            "€ 965,54 (46 × € 20,99, eigene Berechnung)",
            "€ 599,— plus Schutzpaket, falls gewünscht",
          ],
          [
            "Rundum-Sorglos-Paket",
            "automatisch inklusive, über die gesamte Mietlaufzeit",
            "optional zubuchbar (Aufpreis)",
          ],
          [
            "Eigentum am Gerät",
            "Mietgerät von eduabo",
            "gehört sofort Ihnen — auch nach der Schulzeit",
          ],
          ["Bonitätsprüfung", "keine", "entfällt (Sie zahlen sofort)"],
          [
            "Kündigung",
            "bei Schulaustritt kündbar",
            "entfällt",
          ],
          [
            "Bei Bestellung verrechnet",
            "Kaution (Höhe im Elternbrief nicht genannt)",
            "voller Kaufpreis",
          ],
          [
            "Lieferung nach Hause",
            "pünktlich zum Schulstart",
            "sofort",
          ],
        ]}
      />

      <H3>Das Rundum-Sorglos-Paket</H3>

      <P>
        Das Rundum-Sorglos-Paket geht deutlich über die gesetzliche
        Gewährleistung hinaus. Es deckt genau die Fälle ab, die im Schulalltag
        tatsächlich passieren: das Notebook fällt aus dem Rucksack, ein Getränk
        läuft aus, oder das Gerät wird gestohlen. Die Schutzdauer passt sich
        automatisch der Laufzeit an. Im <strong>Abo ist es enthalten</strong>,
        beim <strong>Kauf können Sie es dazubuchen</strong>.
      </P>

      <Table
        headers={["Leistung", "Standardgarantie", "Rundum-Sorglos"]}
        rows={[
          ["Sofortschutz ab Liefertag", "Ja", "Ja"],
          ["Material-, Produktions- und Konstruktionsfehler", "Ja", "Ja"],
          ["Arbeitslohn und Ersatzteile", "Ja", "Ja"],
          ["Fahrt- bzw. Versandkosten", "Nein", "Ja"],
          ["Ersatzleistung bei Totalschaden", "Nein", "Ja"],
          ["Leihgerät in der Schule für Sofortersatz", "Nein", "Ja"],
          ["Fall-, Sturz- und Glasbruchschäden", "Nein", "Ja"],
          ["Wasser- und Feuchtigkeitsschäden", "Nein", "Ja"],
          ["Überspannung und Elektronikschäden", "Nein", "Ja"],
          ["Akkudefekte (Leistung unter 50 % in 4 Jahren)", "Nein", "Ja"],
          ["Datenrettung und Datensicherung", "Nein", "Ja"],
          ["Aufspielen von Betriebssystemen", "Nein", "Ja"],
          ["Diebstahlschutz", "Nein", "Ja"],
        ]}
      />

      <Callout type="info" title="Selbstbehalt">
        Im Schadensfall zahlen Sie <strong>höchstens € 50,—</strong> pro
        Schadensfall. Weitere Kosten fallen laut Elternbrief nicht an.
      </Callout>

      <H3>Beratung: Miete oder Kauf?</H3>

      <P>
        Die Schulaktion ist ein <strong>Angebot, keine Pflicht</strong>. Sie
        können ebenso ein eigenes Notebook kaufen, solange es die
        Mindestanforderungen oben erfüllt — etwa über die Bildungsrabatte im
        nächsten Abschnitt. Die folgende Einordnung soll Ihnen die
        Entscheidung erleichtern.
      </P>

      <P>
        <strong>Für die Miete im Abo spricht:</strong>
      </P>
      <UL>
        <li>
          <strong>Wenn Sie Schäden absichern wollen:</strong> Sturz, Wasser,
          Diebstahl und Akkuverschleiß sind mitversichert — genau die Risiken,
          die in vier Jahren Schulalltag realistisch sind
        </li>
        <li>
          <strong>Wenn ein Ausfall problematisch wäre:</strong> Bei einer
          Reparatur bekommt Ihr Kind ein <strong>Leihgerät direkt in der
          Schule</strong> und verliert keine Unterrichtszeit
        </li>
        <li>
          <strong>Wenn eine große Einmalzahlung schwierig ist:</strong> Rund
          21 Euro im Monat statt knapp 600 Euro auf einmal — und ohne
          Bonitätsprüfung, das Angebot steht allen Familien offen
        </li>
        <li>
          <strong>Wenn ein Schulwechsel möglich ist:</strong> Bei Schulaustritt
          ist das Abo kündbar
        </li>
      </UL>

      <P>
        <strong>Für den Einmalkauf spricht:</strong>
      </P>
      <UL>
        <li>
          <strong>Wenn Sie rechnen:</strong> Der Kauf ist mit € 599,— rund{" "}
          <strong>€ 367 günstiger</strong> als die 46 Monatsraten
          (€ 965,54) — vorausgesetzt, nichts geht kaputt und Sie buchen das
          Schutzpaket nicht dazu
        </li>
        <li>
          <strong>Wenn das Gerät bleiben soll:</strong> Es gehört Ihnen sofort
          und auch nach der Oberstufe — als Zweitgerät, für Geschwister oder
          zum Weiterverkauf
        </li>
        <li>
          <strong>Wenn Sie den Schutz selbst wählen wollen:</strong> Sie können
          das Rundum-Sorglos-Paket gezielt dazubuchen — oder bewusst darauf
          verzichten
        </li>
      </UL>

      <Callout type="warning" title="Das sollten Sie vor der Bestellung wissen">
        <ul>
          <li>
            <strong>Der Prozessor ist Einstiegsklasse.</strong> Der Ryzen 5
            7520U erfüllt die Vorgabe der Schule und reicht für Office, Teams,
            Browser und den normalen Unterricht gut aus. Wer viel{" "}
            <strong>Bild- und Videobearbeitung, größere
            Programmierprojekte oder virtuelle Maschinen</strong> plant, ist
            mit einem stärkeren Gerät aus der 600–900-Euro-Klasse besser
            bedient.
          </li>
          <li>
            <strong>Zwei Preise fehlen im Elternbrief:</strong> die{" "}
            <strong>Höhe der Kaution</strong> beim Abo und der{" "}
            <strong>Aufpreis für das Rundum-Sorglos-Paket</strong> beim Kauf.
            Fragen Sie beides vor dem Abschluss direkt bei eduabo nach — sonst
            lassen sich die beiden Varianten nicht sauber vergleichen.
          </li>
          <li>
            <strong>Preise können sich kurzfristig ändern.</strong> eduabo
            weist selbst auf Bauteil-Knappheit hin, die zu Preiserhöhungen und
            Lieferengpässen führen kann. Es gibt keine Preisgarantie.
          </li>
        </ul>
      </Callout>

      <H3>So bestellen Sie</H3>

      <StepList>
        <Step title="Schulstore öffnen">
          Rufen Sie den Schulshop auf:{" "}
          <a
            href="https://eduabo.at/pages/brg-zehnergasse"
            target="_blank"
            rel="noopener noreferrer"
          >
            eduabo.at/pages/brg-zehnergasse
          </a>
        </Step>
        <Step title="Variante wählen">
          Wählen Sie das Modell und danach <strong>„Miete“</strong> oder{" "}
          <strong>„Kauf“</strong>. Beim Kauf entscheiden Sie zusätzlich, ob Sie
          das Rundum-Sorglos-Paket dazubuchen möchten.
        </Step>
        <Step title="Bestellung abschließen">
          Beim Kauf wird der <strong>Kaufpreis</strong> verrechnet, beim Abo
          die <strong>Kaution</strong>. Danach erfolgt die Lieferung nach
          Hause — beim Kauf sofort, beim Abo pünktlich zum Schulstart.
        </Step>
      </StepList>

      <Callout type="success" title="Direkt zum Schulshop">
        Alle Details und die Bestellung finden Sie unter{" "}
        <a
          href="https://eduabo.at/pages/brg-zehnergasse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          eduabo.at/pages/brg-zehnergasse
        </a>
      </Callout>

      <Callout type="info" title="Fragen zur Bestellung? — Kontakt eduabo">
        Bei Fragen zu Bestellung, Kaution, Schutzpaket oder Lieferung wenden
        Sie sich bitte <strong>direkt an eduabo</strong>, nicht an die Schule:
        <ul>
          <li>
            E-Mail:{" "}
            <a
              href="mailto:service@eduabo.at"
              className="text-primary hover:underline"
            >
              service@eduabo.at
            </a>
          </li>
          <li>
            Telefon:{" "}
            <a href="tel:06787800" className="text-primary hover:underline">
              06787800
            </a>{" "}
            (Mo–Fr 10:00–18:00 Uhr)
          </li>
          <li>Anschrift: Universitätsstraße 4, A-1090 Wien</li>
        </ul>
      </Callout>

      <P>
        <em>
          Hinweis: Die Geräteauswahl wurde mit der Schulleitung abgestimmt. Der
          Vertrag kommt jedoch ausschließlich zwischen Ihnen und eduabo
          zustande — die Schule ist nicht Vertragspartner und übernimmt keine
          Haftung für Preise, Lieferung oder Abwicklung. Preise und
          Verfügbarkeit können sich jederzeit ändern.
        </em>
      </P>

      {/* ═══ Bildungsrabatte ═══ */}
      <H2>Bildungsrabatte beim Notebook-Kauf</H2>

      <P>
        Schülerinnen und Schüler der Oberstufe können bei vielen Anbietern{" "}
        <strong>Bildungsrabatte</strong> nutzen — je nach Gerät mehrere Hundert
        Euro Ersparnis. Bei fast allen Programmen ist ein{" "}
        <strong>Bildungsnachweis</strong> erforderlich (z.&nbsp;B. ein von der
        Schule abgestempelter Schülerausweis oder eine
        Schulbesuchsbestätigung).
      </P>

      <Callout
        type="warning"
        title="Apple Education Store — Achtung bei Schüler:innen"
      >
        Der offizielle Apple-Bildungsrabatt (
        <a
          href="https://www.apple.com/at-edu/store"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          apple.com/at-edu
        </a>
        ) richtet sich an <strong>Studierende, Lehrkräfte und
        Hochschulmitarbeitende</strong>. Oberstufenschüler:innen sind dort{" "}
        <strong>in der Regel nicht direkt berechtigt</strong>. Für vergünstigte
        Apple-Geräte als Schüler:in nutzen Sie stattdessen einen Händler wie{" "}
        <strong>edustore.at</strong> (siehe unten), der gezielt auch höhere
        Schulstufen bedient.
      </Callout>

      <Table
        headers={["Anbieter", "Für wen", "Rabatt", "Nachweis"]}
        rows={[
          [
            "edustore.at (österreichisch)",
            "Schüler:innen, Studierende, Lehrkräfte",
            "bis zu 500 € auf Notebooks (Apple, HP, Lenovo, Microsoft)",
            "Bildungsnachweis nötig",
          ],
          [
            "Lenovo Campus",
            "Schüler:innen & Studierende",
            "bis zu 25 % auf ThinkPad, ThinkBook, Legion",
            "Statusnachweis (Upload beim Bestellen)",
          ],
          [
            "HP Campus Advantage",
            "Schüler:innen ausdrücklich zugelassen",
            "Notebook-Rabatte, max. 2 Angebote pro Kalenderjahr",
            "abgestempelter Schülerausweis (Vorder- & Rückseite)",
          ],
          [
            "Microsoft Store (Education)",
            "Schüler:innen, deren Eltern, Lehrkräfte",
            "bis zu 10 % (inkl. Surface), ganzes Schuljahr",
            "Verifizierung über das Microsoft-Konto",
          ],
          [
            "notebooksbilliger.de (Campus)",
            "Schüler:innen, Azubis, Lehrkräfte (DE + AT)",
            "Campus-Preise + gratis Versand",
            "Nachweis nötig; nicht mit anderen Rabatten kombinierbar",
          ],
        ]}
      />

      <LinkCards
        items={[
          {
            href: "https://www.edustore.at/landingpages/apple-fur-hohere-schulstufen",
            label: "edustore.at — Apple für höhere Schulstufen",
            desc: "Österreichischer Händler, Top-Marken mit Schülerrabatt",
          },
          {
            href: "https://www.lenovocampus.at/",
            label: "Lenovo Campus",
            desc: "ThinkPad, ThinkBook & Legion bis zu 25 % günstiger",
          },
          {
            href: "https://www.hp.com/de-de/shop/offer.aspx?p=students-offers",
            label: "HP Campus Advantage",
            desc: "HP-Notebooks für Schüler:innen (Schülerausweis-Nachweis)",
          },
          {
            href: "https://www.microsoft.com/de-at/store/b/student",
            label: "Microsoft Store (Education)",
            desc: "Surface & mehr, bis zu 10 % — auch für Eltern",
          },
          {
            href: "https://www.notebooksbilliger.de/infocenter/section/campusprogramm",
            label: "notebooksbilliger.de — Campus",
            desc: "Schüler:innen aus AT zugelassen, gratis Versand",
          },
        ]}
      />

      <Callout type="info" title="Tipp: Vor dem Kauf Preise vergleichen">
        Bildungspreise sind <strong>nicht immer</strong> der absolute Bestpreis
        — auch bei Apple bringt z.&nbsp;B. die Back-to-School-Aktion nicht
        automatisch den günstigsten Preis. Vergleichen Sie den Bildungsrabatt
        vor dem Kauf mit regulären Angeboten und Aktionen.
      </Callout>

      <P>
        <em>
          Hinweis: Diese Übersicht dient nur zur Orientierung. Die Schule
          empfiehlt oder bevorzugt keinen bestimmten Händler; Angebote, Preise
          und Berechtigung können sich jederzeit ändern.
        </em>
      </P>

      {/* ═══ Eigenverantwortung ═══ */}
      <H2>Wichtig: Eigenverantwortung</H2>

      <UL>
        <li>
          <strong>Virenschutz:</strong> Liegt in der Verantwortung der
          Schüler (<strong>Microsoft Defender</strong> ist in Windows 11
          vorinstalliert und ausreichend)
        </li>
        <li>
          <strong>Backups:</strong> Regelmäßig sichern! OneDrive (5 TB)
          synchronisiert automatisch, aber lokale Daten zusätzlich sichern
        </li>
        <li>
          <strong>Systemkonfiguration:</strong> Lehrkräfte führen aus
          Haftungsgründen keine System- oder Hardwarekonfigurationen durch
        </li>
        <li>
          <strong>Softwareinstallation:</strong> Sie benötigen lokale
          Admin-Rechte, um Schulsoftware installieren zu können
        </li>
      </UL>

      <Callout type="info" title="Fragen?">
        Bei Fragen zu den Laptop-Vorgaben wenden Sie sich an die IT:{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary hover:underline"
        >
          admin@bgzwn.at
        </a>
      </Callout>

      {/* ═══ Rechtsquellen ═══ */}
      <H2>Rechtsquellen</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=43"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            SchUG, BGBl. Nr. 472/1986 i.d.g.F.
          </a>{" "}
          — § 43 Abs. 1 (Mitwirkungspflicht: Arbeitsmittel in
          ordnungsgemäßem Zustand bereithalten)
        </li>
      </UL>
    </>
  );
}
