import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "TIPP10 — 10-Finger-Schreibtrainer",
  description:
    "TIPP10: Kostenloses 10-Finger-Schreibtraining für Schüler am BG Zehnergasse. Online, als Software und als Schulversion.",
};

export default function Tipp10Page() {
  return (
    <>
      <PageHeader title="TIPP10 — 10-Finger-Schreibtrainer" />

      <P>
        TIPP10 ist ein <strong>kostenloser</strong>, preisgekrönter
        Schreibtrainer, mit dem Sie das 10-Finger-System erlernen und
        verbessern können. Das Programm wurde von Stiftung Warentest als
        Testsieger ausgezeichnet.
      </P>

      <Callout type="success" title="Komplett kostenlos">
        Alle Versionen von TIPP10 sind <strong>100 % kostenlos</strong> —
        Online-Version, Software und Schulversion.
      </Callout>

      <H2>Warum 10-Finger-Tippen lernen?</H2>

      <UL>
        <li>
          <strong>Schneller:</strong> 10-Finger-Tipper erreichen 200–300
          Anschläge pro Minute — Adler-Such-System nur 80–120
        </li>
        <li>
          <strong>Weniger Fehler:</strong> Sie müssen nicht mehr auf die
          Tastatur schauen und können sich auf den Inhalt konzentrieren
        </li>
        <li>
          <strong>Gesünder:</strong> Ergonomische Handhaltung statt
          verkrampfter Finger
        </li>
        <li>
          <strong>Zeitersparnis:</strong> VWA, Referate, Mitschriften und
          E-Mails gehen deutlich schneller
        </li>
        <li>
          <strong>Berufsleben:</strong> Schnelles Tippen ist in fast jedem
          Beruf eine Grundkompetenz
        </li>
      </UL>

      <H2>Die drei Versionen</H2>

      <CardGrid>
        <Card
          href="https://www.tipp10.com/de/online/"
          icon="🌐"
          title="Online-Version"
        >
          Direkt im Browser üben — kostenlose Registrierung, Fortschritt
          wird gespeichert. Ideal für den Einstieg.
        </Card>
        <Card
          href="https://www.tipp10.com/de/download/"
          icon="💻"
          title="Software (Open Source)"
        >
          Für Windows, macOS und Linux herunterladen. Offline nutzbar, Open
          Source.
        </Card>
        <Card
          href="https://www.tipp10.com/de/schulversion/"
          icon="🏫"
          title="Schulversion"
        >
          Für Lehrkräfte: Klassenverwaltung, Aufgaben verteilen, Prüfungen
          mit Zertifikaten erstellen.
        </Card>
      </CardGrid>

      <H2>So starten Sie</H2>

      <StepList>
        <Step title="Auf tipp10.com registrieren">
          Gehen Sie zu{" "}
          <a
            href="https://www.tipp10.com/de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-blue-400 hover:underline"
          >
            tipp10.com
          </a>{" "}
          und erstellen Sie ein kostenloses Konto (oder starten Sie direkt
          mit der Online-Version).
        </Step>
        <Step title="Grundstellung lernen">
          Beginnen Sie mit den Lektionen zur Grundstellung: Linke Hand auf
          A-S-D-F, rechte Hand auf J-K-L-Ö. Die Zeigefinger ruhen auf F
          und J (die kleinen Erhebungen auf der Tastatur).
        </Step>
        <Step title="Regelmäßig üben">
          Am effektivsten: <strong>10–15 Minuten täglich</strong>. TIPP10
          steigert den Schwierigkeitsgrad automatisch basierend auf Ihrem
          Fortschritt.
        </Step>
        <Step title="Fortschritt messen">
          TIPP10 zeigt Anschläge pro Minute, Fehlerquote und Lernkurve.
          Ziel: 150+ Anschläge/Minute bei unter 2 % Fehlerquote.
        </Step>
      </StepList>

      <H2>Tipps für effektives Üben</H2>

      <UL>
        <li>
          <strong>Nicht auf die Tastatur schauen!</strong> — Das ist die
          wichtigste Regel. Decken Sie die Tastatur notfalls ab.
        </li>
        <li>
          <strong>Genauigkeit vor Geschwindigkeit:</strong> Lieber langsam
          und fehlerfrei als schnell und fehlerhaft
        </li>
        <li>
          <strong>Täglich kurz &gt; wöchentlich lang:</strong> 10 Minuten
          pro Tag bringt mehr als 1 Stunde pro Woche
        </li>
        <li>
          <strong>Richtige Sitzhaltung:</strong> Füße flach am Boden,
          Unterarme waagerecht, Blick auf den Bildschirm
        </li>
        <li>
          <strong>Im Alltag anwenden:</strong> Versuchen Sie, auch
          Nachrichten und Hausübungen mit dem 10-Finger-System zu tippen
        </li>
      </UL>

      <H2>Meilensteine</H2>

      <Table
        headers={["Anschläge/Min.", "Niveau", "Dauer bis dahin"]}
        rows={[
          ["80–120", "Anfänger — Adler-Such-System", "0 (Ausgangspunkt)"],
          ["120–150", "Grundkenntnisse — alle Tasten bekannt", "2–4 Wochen"],
          ["150–200", "Fortgeschritten — flüssiges Tippen", "1–3 Monate"],
          ["200–300", "Routiniert — berufstauglich", "3–6 Monate"],
          ["300+", "Profi — überdurchschnittlich schnell", "6–12 Monate"],
        ]}
      />

      <Callout type="info" title="10-Minuten-Diktat mit Zertifikat">
        TIPP10 bietet ein offizielles 10-Minuten-Diktat an. Bei
        erfolgreichem Abschluss erhalten Sie ein{" "}
        <strong>Zertifikat</strong>, das Sie z.B. einer Bewerbung beilegen
        können.
      </Callout>

      <H2>Links</H2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {[
          {
            href: "https://www.tipp10.com/de/",
            label: "TIPP10 Startseite",
            desc: "Hauptseite mit allen Versionen",
          },
          {
            href: "https://www.tipp10.com/de/online/",
            label: "Online üben",
            desc: "Direkt im Browser starten",
          },
          {
            href: "https://www.tipp10.com/de/download/",
            label: "Software herunterladen",
            desc: "Für Windows, macOS, Linux",
          },
          {
            href: "https://www.tipp10.com/de/schulversion/",
            label: "Schulversion",
            desc: "Für Lehrkräfte und Klassen",
          },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] hover:border-primary/40 dark:hover:border-blue-400/40 transition-all hover:-translate-y-0.5 hover:shadow-md group"
          >
            <div className="w-2 h-2 rounded-full bg-primary dark:bg-blue-400 flex-shrink-0" />
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
