"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/infohub", label: "Startseite", icon: "🏠" },
  { href: "/infohub/geraete", label: "iPad & Geräte", icon: "📱" },
  { href: "/infohub/schulaccount", label: "Schulaccount & Office", icon: "🔑" },
  { href: "/infohub/services", label: "Schulservices", icon: "🏫" },
  { href: "/infohub/mdm", label: "MDM-Einrichtung", icon: "⚙️" },
  { href: "/infohub/bildungsportal", label: "Bildungsportal", icon: "🏛️" },
  { href: "/infohub/hilfe", label: "Hilfe & Kontakte", icon: "🆘" },
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
      className="p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors text-lg"
      aria-label="Farbmodus wechseln"
      title={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] border-b border-[var(--nav-border)] px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
          aria-label="Menü öffnen"
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
        <ThemeToggle />
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
            href="/infohub"
            className="block"
            onClick={() => setOpen(false)}
          >
            <div className="font-bold text-[var(--primary)] text-lg">
              BG Zehnergasse
            </div>
            <div className="text-xs text-[var(--text-light)]">
              InfoHub — Informationsportal
            </div>
          </Link>
        </div>

        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/infohub" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
                  ${
                    isActive
                      ? "bg-[var(--primary)]/10 text-[var(--primary)] font-semibold"
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
          <div className="flex items-center justify-between px-3">
            <span className="text-xs text-[var(--text-light)]">
              Farbmodus
            </span>
            <ThemeToggle />
          </div>
          <a
            href="https://www.bgzwn.at"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 px-3 py-2 text-xs text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
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
