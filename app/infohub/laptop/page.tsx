import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Laptop-Vorgaben — Oberstufe",
  description:
    "Offizielle Notebook-Anforderungen für die Oberstufe am BG Zehnergasse: Mindestspezifikationen, Kaufberatung und Tipps.",
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

      <Callout type="info" title="Offizielles Dokument">
        Die vollständigen Vorgaben finden Sie im offiziellen PDF der Schule:{" "}
        <a
          href="https://www.bgzwn.at/wp-content/uploads/Information-zum-Notebook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
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
          ["Prozessor", "Intel Core i5 (aktuelle Generation) oder gleichwertiger AMD-Prozessor"],
          ["Arbeitsspeicher", "Mindestens 16 GB RAM"],
          ["Speicher", "Mindestens 512 GB SSD"],
          ["Betriebssystem", "Windows 11 (nicht die S-Version!)"],
          ["Admin-Rechte", "Lokale Administratorrechte erforderlich"],
          ["WLAN", "Wi-Fi-fähig"],
          ["Anschlüsse", "USB-Ports, 3,5mm Kopfhöreranschluss (oder Bluetooth/USB-Adapter)"],
          ["Gewicht", "Leicht transportierbar (typisch 1,3–1,6 kg bei 14 Zoll)"],
        ]}
      />

      <Callout type="danger" title="Nicht geeignet">
        <ul>
          <li>
            <strong>ARM-Prozessoren (z.B. Qualcomm Snapdragon):</strong>{" "}
            Ausdrücklich nicht empfohlen! Viele Schulprogramme laufen nur
            über Emulation, was zu Leistungsproblemen und
            Kompatibilitätsproblemen führt.
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
          Sie <strong>müssen</strong> eine funktionierende
          Windows-Installation einrichten (Dual-Boot oder Virtualisierung
          über Parallels / UTM)
        </li>
        <li>
          Dies liegt in der <strong>Verantwortung der Schülerin / des
          Schülers</strong> — Lehrkräfte helfen dabei nicht
        </li>
        <li>
          Next-Exam hat eine eigene macOS-Version (Intel + Apple Silicon)
        </li>
        <li>Microsoft 365 läuft nativ auf macOS</li>
      </UL>

      <Callout type="warning" title="ARM-Hinweis für MacBooks">
        Neuere MacBooks mit M1/M2/M3/M4-Chip verwenden ARM-Architektur.
        Windows 11 ARM kann in einer VM laufen, aber die Schule warnt vor
        Kompatibilitätsproblemen bei Spezialsoftware. Klären Sie vor dem
        Kauf mit der IT (<a href="mailto:admin@bgzwn.at" className="text-[var(--primary)] hover:underline">admin@bgzwn.at</a>),
        ob alle benötigten Programme funktionieren.
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
            "Intel i5 / AMD Ryzen 5",
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
            "x86/x64 (kein ARM)",
            "Manche Schulprogramme und Next-Exam laufen nur nativ auf x86/x64. ARM-Emulation ist langsamer und fehleranfällig.",
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
            "Lenovo ThinkPad T/X, Dell XPS, HP EliteBook",
          ],
        ]}
      />

      <Callout type="success" title="Tipp: Garantie & Versicherung">
        Kaufen Sie eine <strong>erweiterte Garantie für 3–4 Jahre</strong>{" "}
        (Oberstufe dauert 4 Jahre). Prüfen Sie auch eine
        Geräteversicherung gegen Sturz- und Flüssigkeitsschäden.
      </Callout>

      {/* ═══ Eigenverantwortung ═══ */}
      <H2>Wichtig: Eigenverantwortung</H2>

      <UL>
        <li>
          <strong>Virenschutz:</strong> Liegt in der Verantwortung der
          Schüler (Windows Defender ist vorinstalliert und ausreichend)
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
          className="text-[var(--primary)] hover:underline"
        >
          admin@bgzwn.at
        </a>
      </Callout>
    </>
  );
}
