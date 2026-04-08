"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItemsDE = [
  { href: "/infohub", label: "Startseite", icon: "🏠" },
  { href: "/infohub/geraete", label: "iPad & Geräte", icon: "📱" },
  { href: "/infohub/wlan", label: "WLAN-Anleitung", icon: "📶" },
  { href: "/infohub/schulaccount", label: "Schulaccount", icon: "🔑" },
  { href: "/infohub/office365", label: "Microsoft 365", icon: "💻" },
  { href: "/infohub/services", label: "Schulservices", icon: "🏫" },
  { href: "/infohub/educard", label: "edu.Card & digicard", icon: "🪪" },
  { href: "/infohub/nextexam", label: "Next-Exam", icon: "📝" },
  { href: "/infohub/laptop", label: "Laptop-Vorgaben", icon: "💻" },
  { href: "/infohub/mdm", label: "MDM-Einrichtung", icon: "⚙️" },
  { href: "/infohub/tipp10", label: "TIPP10 Tipptrainer", icon: "⌨️" },
  { href: "/infohub/bildungsportal", label: "Bildungsportal", icon: "🏛️" },
  { href: "/infohub/vwa", label: "VWA / ABA", icon: "🎓" },
  { href: "/infohub/lizenzen", label: "Gratis Software", icon: "🎁" },
  { href: "/infohub/hilfe", label: "Hilfe & Kontakte", icon: "🆘" },
];

const navItemsEN = [
  { href: "/en/infohub", label: "Home", icon: "🏠" },
  { href: "/en/infohub/geraete", label: "iPad & Devices", icon: "📱" },
  { href: "/en/infohub/wlan", label: "WiFi Guide", icon: "📶" },
  { href: "/en/infohub/schulaccount", label: "School Account", icon: "🔑" },
  { href: "/en/infohub/office365", label: "Microsoft 365", icon: "💻" },
  { href: "/en/infohub/services", label: "School Services", icon: "🏫" },
  { href: "/en/infohub/educard", label: "edu.Card & digicard", icon: "🪪" },
  { href: "/en/infohub/nextexam", label: "Next-Exam", icon: "📝" },
  { href: "/en/infohub/laptop", label: "Laptop Requirements", icon: "💻" },
  { href: "/en/infohub/mdm", label: "MDM Setup", icon: "⚙️" },
  { href: "/en/infohub/tipp10", label: "TIPP10 Typing", icon: "⌨️" },
  { href: "/en/infohub/bildungsportal", label: "Education Portal", icon: "🏛️" },
  { href: "/en/infohub/vwa", label: "VWA / ABA (Thesis)", icon: "🎓" },
  { href: "/en/infohub/lizenzen", label: "Free Software", icon: "🎁" },
  { href: "/en/infohub/hilfe", label: "Help & Contacts", icon: "🆘" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--hover-bg)] transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
      aria-label="Toggle theme"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEN = pathname.startsWith("/en/") || pathname === "/en";
  const navItems = isEN ? navItemsEN : navItemsDE;
  const basePath = isEN ? "/en/infohub" : "/infohub";

  // Build the language switch URL
  const langSwitchHref = isEN
    ? pathname.replace("/en/infohub", "/infohub")
    : "/en" + pathname;

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] border-b border-[var(--nav-border)] px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-[var(--text)]"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        <span className="font-bold text-[var(--primary)] text-sm">
          BG Zehnergasse InfoHub
        </span>
        <div className="flex items-center gap-1">
          <Link
            href={langSwitchHref}
            className="px-2 py-1 rounded text-xs font-medium hover:bg-[var(--hover-bg)] transition-colors text-[var(--text-light)]"
          >
            {isEN ? "DE" : "EN"}
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-40 h-screen w-64 flex-shrink-0
          bg-[var(--nav-bg)] border-r border-[var(--nav-border)]
          transform transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
        `}
      >
        <div className="p-5 border-b border-[var(--nav-border)]">
          <Link
            href={basePath}
            className="block"
            onClick={() => setOpen(false)}
          >
            <div className="font-bold text-[var(--primary)] text-lg">
              BG Zehnergasse
            </div>
            <div className="text-xs text-[var(--text-light)]">
              InfoHub — {isEN ? "Information Portal" : "Informationsportal"}
            </div>
          </Link>
        </div>

        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== basePath && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 min-h-[44px] rounded-lg text-sm transition-all
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-1
                  ${
                    isActive
                      ? "bg-[var(--nav-active-bg)] text-[var(--primary)] font-semibold"
                      : "text-[var(--text)] hover:bg-[var(--hover-bg)]"
                  }
                `}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 mt-auto border-t border-[var(--nav-border)]">
          <div className="flex items-center justify-between px-3 mb-2">
            <Link
              href={langSwitchHref}
              className="flex items-center gap-1.5 text-xs text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
            >
              <span>🌐</span>
              <span>{isEN ? "Deutsch" : "English"}</span>
            </Link>
            <ThemeToggle />
          </div>
          <a
            href="https://www.bgzwn.at"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-xs text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
          >
            bgzwn.at &rarr;
          </a>
        </div>
      </aside>

      {/* Spacer for mobile header */}
      <div className="lg:hidden h-14" />
    </>
  );
}
