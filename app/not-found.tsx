"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type PageEntry = {
  href: string;
  label: string;
  desc: string;
  labelEN: string;
  descEN: string;
  icon: string;
};

const allPages: PageEntry[] = [
  { href: "/infohub/", label: "Startseite", desc: "Hauptseite des InfoHub", labelEN: "Home", descEN: "InfoHub main page", icon: "🏠" },
  { href: "/infohub/geraete/", label: "iPad & Geräte", desc: "Geräteinitiative, iPad, Zubehör", labelEN: "iPad & Devices", descEN: "Device initiative, iPad, accessories", icon: "📱" },
  { href: "/infohub/wlan/", label: "WLAN-Anleitung", desc: "Schul-WLAN verbinden, Zertifikate", labelEN: "WiFi Guide", descEN: "Connect to school WiFi, certificates", icon: "📶" },
  { href: "/infohub/schulaccount/", label: "Schulaccount", desc: "Login, Passwort, E-Mail", labelEN: "School Account", descEN: "Login, password, email", icon: "🔑" },
  { href: "/infohub/office365/", label: "Microsoft 365", desc: "Office-Apps, OneDrive, Teams", labelEN: "Microsoft 365", descEN: "Office apps, OneDrive, Teams", icon: "💻" },
  { href: "/infohub/services/", label: "Schulservices", desc: "WebUntis, edu.Flow, edu.Pay", labelEN: "School Services", descEN: "WebUntis, edu.Flow, edu.Pay", icon: "🏫" },
  { href: "/infohub/educard/", label: "edu.Card", desc: "Schülerausweis, Kopierkarte", labelEN: "edu.Card", descEN: "Student ID, copy card", icon: "🪪" },
  { href: "/infohub/chip/", label: "Schüler:innen-Chip", desc: "Zutritt, Chip aktualisieren, Verlust", labelEN: "Student Access Chip", descEN: "Entry, updating the chip, loss", icon: "🔐" },
  { href: "/infohub/nextexam/", label: "Next-Exam", desc: "Digitale Prüfungen", labelEN: "Next-Exam", descEN: "Digital exams", icon: "📝" },
  { href: "/infohub/laptop/", label: "Laptop-Vorgaben", desc: "Notebook für die Oberstufe", labelEN: "Laptop Requirements", descEN: "Notebook for upper secondary", icon: "💻" },
  { href: "/infohub/mdm/", label: "MDM-Einrichtung", desc: "Geräteverwaltung", labelEN: "MDM Setup", descEN: "Device management", icon: "⚙️" },
  { href: "/infohub/tipp10/", label: "TIPP10", desc: "10-Finger-Schreibtrainer", labelEN: "TIPP10", descEN: "Touch typing trainer", icon: "⌨️" },
  { href: "/infohub/bildungsportal/", label: "Bildungsportal", desc: "Bildungsportal für Eltern", labelEN: "Education Portal", descEN: "Education Portal for parents", icon: "🏛️" },
  { href: "/infohub/vwa/", label: "VWA / ABA", desc: "Vorwissenschaftliche Arbeit", labelEN: "VWA / ABA (Thesis)", descEN: "Pre-scientific thesis", icon: "🎓" },
  { href: "/infohub/vwa/aufbau/", label: "VWA Aufbau", desc: "Gliederung, Forschungsfrage, Formatierung", labelEN: "Thesis Structure", descEN: "Outline, research question, formatting", icon: "📋" },
  { href: "/infohub/vwa/schreiben/", label: "Wissenschaftliches Schreiben", desc: "Stil, Sprache, Plagiat", labelEN: "Academic Writing", descEN: "Style, language, plagiarism", icon: "✍️" },
  { href: "/infohub/vwa/zitieren/", label: "Zitieren & Zotero", desc: "Literaturverwaltung, KI-Nutzung", labelEN: "Citations & Zotero", descEN: "Reference management, AI usage", icon: "📚" },
  { href: "/infohub/vwa/vorlagen/", label: "VWA Vorlagen", desc: "Word-Vorlage, Tipps, Downloads", labelEN: "Thesis Templates", descEN: "Word template, tips, downloads", icon: "📄" },
  { href: "/infohub/vwa/praesentation/", label: "VWA Präsentation", desc: "Aufbau, Fragen, Tipps", labelEN: "Thesis Presentation", descEN: "Structure, questions, tips", icon: "🎤" },
  // Ausgeblendet: lizenzen (Gratis Software / Free Software)
  { href: "/infohub/lehrkraefte/", label: "Lehrkräfte: IT-Schnellhilfe", desc: "Beamer, Computer, Ton, Quickfixes", labelEN: "Teachers: IT Quick Help", descEN: "Projector, computer, audio, quick fixes", icon: "🧑‍🏫" },
  { href: "/infohub/iqes/", label: "IQES", desc: "Evaluation, Umfragen, Fragebögen (Lehrkräfte)", labelEN: "IQES", descEN: "Evaluation, surveys, questionnaires (teachers)", icon: "📊" },
  { href: "/infohub/hilfe/", label: "Hilfe & Kontakte", desc: "Support, FAQ, Links", labelEN: "Help & Contacts", descEN: "Support, FAQ, links", icon: "🆘" },
];

export default function NotFound() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en/") || pathname === "/en";

  // Simple fuzzy match: find pages that share path segments with the requested URL.
  // "infohub" is part of every URL, so it must not count as a keyword.
  const keywords = pathname
    .replace(/^\/en/, "")
    .split("/")
    .filter((s) => s.length > 2 && s.toLowerCase() !== "infohub");

  const suggestions = allPages
    .filter((p) => {
      // last path segment, e.g. "wlan" — lets typos like "wlann" or
      // "wlan-anleitung" still find the page
      const slug = p.href.split("/").filter(Boolean).pop() ?? "";
      return keywords.some((k) => {
        const kw = k.toLowerCase();
        // match both languages, so e.g. "/en/infohub/password" still works
        const text = [p.label, p.desc, p.labelEN, p.descEN].join(" ").toLowerCase();
        return (
          p.href.includes(kw) ||
          text.includes(kw) ||
          (slug !== "infohub" && slug.length > 2 && kw.includes(slug))
        );
      });
    })
    .slice(0, 3);

  const prefix = isEN ? "/en" : "";

  return (
    <div className="max-w-2xl mx-auto text-center py-16 px-4">
      <div className="text-6xl mb-6">🔍</div>
      <h1
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)", color: "var(--primary)" }}
      >
        {isEN ? "Page Not Found" : "Seite nicht gefunden"}
      </h1>
      <p className="text-lg mb-8" style={{ color: "var(--text-light)" }}>
        {isEN
          ? `The page "${pathname}" does not exist. It may have been moved or the URL is incorrect.`
          : `Die Seite „${pathname}" existiert nicht. Möglicherweise wurde sie verschoben oder die URL ist falsch.`}
      </p>

      {suggestions.length > 0 && (
        <div className="mb-8">
          <p
            className="text-sm font-semibold mb-3"
            style={{ color: "var(--text)" }}
          >
            {isEN ? "Did you mean:" : "Meinten Sie:"}
          </p>
          <div className="space-y-2">
            {suggestions.map((s) => (
              <Link
                key={s.href}
                href={prefix + s.href}
                className="flex items-center gap-3 p-3 rounded-lg mx-auto max-w-sm text-left transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span className="text-xl">{s.icon}</span>
                <div>
                  <span
                    className="text-sm font-semibold block"
                    style={{ color: "var(--primary)" }}
                  >
                    {isEN ? s.labelEN : s.label}
                  </span>
                  <span
                    className="text-xs block"
                    style={{ color: "var(--text-light)" }}
                  >
                    {isEN ? s.descEN : s.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        <Link
          href={prefix + "/infohub/"}
          className="inline-block px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: "var(--primary)" }}
        >
          {isEN ? "Go to Homepage" : "Zur Startseite"}
        </Link>
        <p className="text-xs" style={{ color: "var(--text-light)" }}>
          {isEN
            ? "Or use the navigation on the left side."
            : "Oder nutzen Sie die Navigation auf der linken Seite."}
        </p>
      </div>
    </div>
  );
}
