"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search } from "./Search";

type NavItem = {
  href: string;
  label: string;
  icon: string;
  children?: { href: string; label: string }[];
};

const navItemsDE: NavItem[] = [
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
  {
    href: "/infohub/vwa",
    label: "VWA / ABA",
    icon: "🎓",
    children: [
      { href: "/infohub/vwa/aufbau", label: "Aufbau & Forschungsfrage" },
      { href: "/infohub/vwa/schreiben", label: "Wissenschaftliches Schreiben" },
      { href: "/infohub/vwa/zitieren", label: "Zitieren & Zotero" },
      { href: "/infohub/vwa/vorlagen", label: "Vorlagen & Tools" },
      { href: "/infohub/vwa/praesentation", label: "Präsentation" },
    ],
  },
  // Ausgeblendet (Seite existiert weiterhin, nur nicht verlinkt):
  // { href: "/infohub/lizenzen", label: "Gratis Software", icon: "🎁" },
  { href: "/infohub/lehrkraefte", label: "Lehrkräfte: IT-Schnellhilfe", icon: "🧑‍🏫" },
  { href: "/infohub/iqes", label: "IQES", icon: "📊" },
  { href: "/infohub/hilfe", label: "Hilfe & Kontakte", icon: "🆘" },
];

const navItemsEN: NavItem[] = [
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
  {
    href: "/en/infohub/vwa",
    label: "VWA / ABA (Thesis)",
    icon: "🎓",
    children: [
      { href: "/en/infohub/vwa/aufbau", label: "Structure & Research Question" },
      { href: "/en/infohub/vwa/schreiben", label: "Academic Writing" },
      { href: "/en/infohub/vwa/zitieren", label: "Citations & Zotero" },
      { href: "/en/infohub/vwa/vorlagen", label: "Templates & Tools" },
      { href: "/en/infohub/vwa/praesentation", label: "Presentation" },
    ],
  },
  // Hidden (page still exists, just not linked):
  // { href: "/en/infohub/lizenzen", label: "Free Software", icon: "🎁" },
  { href: "/en/infohub/lehrkraefte", label: "Teachers: IT Quick Help", icon: "🧑‍🏫" },
  { href: "/en/infohub/iqes", label: "IQES", icon: "📊" },
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
      className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-hover-bg transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span aria-hidden="true">{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // In-page section sub-menu (H2 anchors of the current page).
  const [sections, setSections] = useState<{ id: string; label: string }[]>([]);
  const [activeSection, setActiveSection] = useState("");

  const isEN = pathname.startsWith("/en/") || pathname === "/en";
  const navItems = isEN ? navItemsEN : navItemsDE;
  const basePath = isEN ? "/en/infohub" : "/infohub";

  // trailing-slash-tolerant current path (static export uses trailingSlash: true,
  // so usePathname() can return e.g. "/infohub/vwa/" while nav hrefs have no slash)
  const current = pathname.replace(/\/+$/, "") || "/";

  // WCAG 3.1.1: keep <html lang> in sync with the page language.
  // (Root layout statically renders lang="de"; this corrects EN routes.)
  useEffect(() => {
    document.documentElement.lang = isEN ? "en" : "de";
  }, [isEN]);

  // Close the mobile menu with Escape (keyboard accessibility).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Scan the current page for its H2 section anchors → sidebar sub-menu.
  // Runs after each navigation. The previous version wrapped the scan in
  // requestAnimationFrame plus a 200ms rescan; rAF is suspended while a tab is
  // hidden, so the sub-menu stayed empty until the tab became visible, and the
  // 200ms guess was the only safeguard against late-rendered content. Scanning
  // synchronously and observing #main removes both dependencies.
  useEffect(() => {
    setActiveSection("");
    const scan = () => {
      const main = document.getElementById("main");
      if (!main) return;
      const next = Array.from(main.querySelectorAll("h2"))
        .filter((h) => h.id && h.textContent && h.textContent.trim())
        .map((h) => ({ id: h.id, label: h.textContent!.trim() }));
      // Bail out when nothing changed so observer callbacks cannot loop.
      setSections((prev) =>
        prev.length === next.length &&
        prev.every((p, i) => p.id === next[i].id && p.label === next[i].label)
          ? prev
          : next
      );
    };
    scan();
    const target = document.getElementById("main") ?? document.body;
    const mo = new MutationObserver(scan);
    mo.observe(target, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, [pathname]);

  // Highlight the section currently in view (scroll-spy): the last heading
  // whose top has scrolled above a threshold near the top of the viewport.
  useEffect(() => {
    if (sections.length === 0) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      let cur = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 100) cur = s.id;
        else break; // headings are in document order → the rest are below
      }
      setActiveSection(cur);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sections]);

  // Build the language switch URL
  const langSwitchHref = isEN
    ? pathname.replace("/en/infohub", "/infohub")
    : "/en" + pathname;

  // Renders the current page's H2 section anchors (in-page jump links).
  // Used both under a top-level page and under the active sub-page.
  const sectionAnchors = (wrapperClass: string) => (
    <div
      className={`mt-1 space-y-0.5 border-l-2 border-border-app pl-3 ${wrapperClass}`}
    >
      {sections.map((s) => {
        const secActive = activeSection === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            aria-current={secActive ? "location" : undefined}
            onClick={(e) => {
              const el = document.getElementById(s.id);
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", `#${s.id}`);
                setActiveSection(s.id);
                setOpen(false);
              }
            }}
            className={`
              block px-2 py-1.5 rounded text-xs transition-all
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
              ${
                secActive
                  ? "text-primary font-semibold bg-nav-active-bg"
                  : "text-txt-light hover:text-txt hover:bg-hover-bg"
              }
            `}
          >
            {s.label}
          </a>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-nav-bg border-b border-nav-border px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-hover-bg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={
            open
              ? isEN
                ? "Close menu"
                : "Menü schließen"
              : isEN
                ? "Open menu"
                : "Menü öffnen"
          }
          aria-expanded={open}
          aria-controls="sidebar-nav"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-txt"
            aria-hidden="true"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
        <span className="flex items-center gap-2 font-bold text-primary text-sm">
          <img
            src="/bgz-logo.png"
            alt="BG Zehnergasse Logo"
            width={24}
            height={24}
          />
          BG Zehnergasse InfoHub
        </span>
        <div className="flex items-center gap-1">
          <Link
            href={langSwitchHref}
            aria-label={isEN ? "Auf Deutsch wechseln" : "Switch to English"}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded text-xs font-medium hover:bg-hover-bg transition-colors text-txt-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
        id="sidebar-nav"
        aria-label={isEN ? "Main navigation" : "Hauptnavigation"}
        className={`
          fixed lg:sticky top-0 left-0 z-40 h-screen w-64 flex-shrink-0
          bg-nav-bg border-r border-nav-border
          transform transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto
        `}
      >
        <div className="p-5 border-b border-nav-border">
          <Link
            href={basePath}
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/bgz-logo.png"
              alt="BG Zehnergasse Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div>
              <div className="font-bold text-primary text-lg leading-tight">
                BG Zehnergasse
              </div>
              <div className="text-xs text-txt-light">
                InfoHub — {isEN ? "Information Portal" : "Informationsportal"}
              </div>
            </div>
          </Link>
        </div>

        <div className="p-3 pb-0">
          <Search onNavigate={() => setOpen(false)} />
        </div>

        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              current === item.href ||
              (item.href !== basePath && current.startsWith(item.href + "/"));
            const showChildren =
              !!item.children &&
              (current === item.href || current.startsWith(item.href + "/"));
            return (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={current === item.href ? "page" : undefined}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 min-h-[44px] rounded-lg text-sm transition-all
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1
                    ${
                      isActive
                        ? "bg-nav-active-bg text-primary font-semibold"
                        : "text-txt hover:bg-hover-bg"
                    }
                  `}
                >
                  <span className="text-base" aria-hidden="true">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
                {showChildren && (
                  <div className="ml-7 mt-1 space-y-0.5 border-l-2 border-border-app pl-3">
                    {item.children!.map((child) => {
                      const childActive = current === child.href;
                      return (
                        <div key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            aria-current={childActive ? "page" : undefined}
                            className={`
                              block px-2 py-1.5 rounded text-xs transition-all
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
                              ${
                                childActive
                                  ? "text-primary font-semibold bg-nav-active-bg"
                                  : "text-txt-light hover:text-txt hover:bg-hover-bg"
                              }
                            `}
                          >
                            {child.label}
                          </Link>
                          {/* Active sub-page → expand its own H2 sections. */}
                          {childActive &&
                            sections.length > 0 &&
                            sectionAnchors("ml-2")}
                        </div>
                      );
                    })}
                  </div>
                )}
                {/* In-page section anchors for the active page (no sub-pages). */}
                {!item.children &&
                  isActive &&
                  sections.length > 0 &&
                  sectionAnchors("ml-7")}
              </div>
            );
          })}
        </nav>

        <div className="p-3 mt-auto border-t border-nav-border">
          <div className="flex items-center justify-between px-3 mb-2">
            <Link
              href={langSwitchHref}
              aria-label={isEN ? "Auf Deutsch wechseln" : "Switch to English"}
              className="flex items-center gap-1.5 -mx-2 px-2 py-1.5 rounded text-xs text-txt-light hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span aria-hidden="true">🌐</span>
              <span>{isEN ? "Deutsch" : "English"}</span>
            </Link>
            <ThemeToggle />
          </div>
          <a
            href="https://www.bgzwn.at"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-xs text-txt-light hover:text-primary transition-colors"
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
