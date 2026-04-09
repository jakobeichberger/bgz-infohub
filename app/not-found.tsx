"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const allPages = [
  { href: "/infohub/", label: "Startseite", desc: "Hauptseite des InfoHub", icon: "🏠" },
  { href: "/infohub/geraete/", label: "iPad & Geräte", desc: "Geräteinitiative, iPad, Zubehör", icon: "📱" },
  { href: "/infohub/schulaccount/", label: "Schulaccount", desc: "Login, Passwort, E-Mail", icon: "🔑" },
  { href: "/infohub/office365/", label: "Microsoft 365", desc: "Office-Apps, OneDrive, Teams", icon: "💻" },
  { href: "/infohub/services/", label: "Schulservices", desc: "WebUntis, edu.Flow, edu.Pay", icon: "🏫" },
  { href: "/infohub/educard/", label: "edu.Card", desc: "Schülerausweis, Kopierkarte", icon: "🪪" },
  { href: "/infohub/nextexam/", label: "Next-Exam", desc: "Digitale Prüfungen", icon: "📝" },
  { href: "/infohub/laptop/", label: "Laptop-Vorgaben", desc: "Notebook für die Oberstufe", icon: "💻" },
  { href: "/infohub/mdm/", label: "MDM-Einrichtung", desc: "Geräteverwaltung", icon: "⚙️" },
  { href: "/infohub/tipp10/", label: "TIPP10", desc: "10-Finger-Schreibtrainer", icon: "⌨️" },
  { href: "/infohub/bildungsportal/", label: "Bildungsportal", desc: "Bildungsportal für Eltern", icon: "🏛️" },
  { href: "/infohub/vwa/", label: "VWA / ABA", desc: "Vorwissenschaftliche Arbeit", icon: "🎓" },
  { href: "/infohub/vwa/aufbau/", label: "VWA Aufbau", desc: "Gliederung, Forschungsfrage, Formatierung", icon: "📋" },
  { href: "/infohub/vwa/schreiben/", label: "Wissenschaftliches Schreiben", desc: "Stil, Sprache, Plagiat", icon: "✍️" },
  { href: "/infohub/vwa/zitieren/", label: "Zitieren & Zotero", desc: "Literaturverwaltung, KI-Nutzung", icon: "📚" },
  { href: "/infohub/vwa/vorlagen/", label: "VWA Vorlagen", desc: "LaTeX, Word, Downloads", icon: "📄" },
  { href: "/infohub/vwa/praesentation/", label: "VWA Präsentation", desc: "Aufbau, Fragen, Tipps", icon: "🎤" },
  { href: "/infohub/lizenzen/", label: "Gratis Software", desc: "Kostenlose Lizenzen", icon: "🎁" },
  { href: "/infohub/hilfe/", label: "Hilfe & Kontakte", desc: "Support, FAQ, Links", icon: "🆘" },
];

export default function NotFound() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en/") || pathname === "/en";

  // Simple fuzzy match: find pages that share path segments with the requested URL
  const keywords = pathname
    .replace(/^\/en/, "")
    .split("/")
    .filter((s) => s.length > 2);

  const suggestions = allPages
    .filter((p) =>
      keywords.some(
        (k) =>
          p.href.includes(k) ||
          p.label.toLowerCase().includes(k.toLowerCase()) ||
          p.desc.toLowerCase().includes(k.toLowerCase())
      )
    )
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
                    {s.label}
                  </span>
                  <span
                    className="text-xs block"
                    style={{ color: "var(--text-light)" }}
                  >
                    {s.desc}
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
