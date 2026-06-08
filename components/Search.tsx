"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef, useId } from "react";

type Entry = {
  url: string;
  lang: "de" | "en";
  title: string;
  desc: string;
  headings: string;
  text: string;
};

type Result = Entry & { score: number; snippet: { text: string; mark: boolean }[] };

const MIN = 2; // minimum query length
const MAX_RESULTS = 8;

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .split(/[^\p{L}\p{N}.]+/u)
    .map((t) => t.replace(/^\.+|\.+$/g, ""))
    .filter((t) => t.length >= MIN);
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function countOcc(haystack: string, needle: string): number {
  let n = 0;
  let i = haystack.indexOf(needle);
  while (i !== -1 && n < 6) {
    n++;
    i = haystack.indexOf(needle, i + needle.length);
  }
  return n;
}

// Build a highlighted snippet around the first matched token.
function buildSnippet(entry: Entry, tokens: string[]): { text: string; mark: boolean }[] {
  const text = entry.text;
  const lower = text.toLowerCase();
  let pos = -1;
  for (const t of tokens) {
    const i = lower.indexOf(t);
    if (i !== -1 && (pos === -1 || i < pos)) pos = i;
  }
  // Fall back to the page description if the match is only in title/headings.
  const source = pos === -1 ? entry.desc : text;
  const sStart = pos === -1 ? 0 : Math.max(0, pos - 45);
  const sEnd = pos === -1 ? source.length : Math.min(source.length, pos + 95);
  let snip = source.slice(sStart, sEnd);
  if (sStart > 0) snip = "… " + snip;
  if (sEnd < source.length) snip = snip + " …";

  const re = new RegExp("(" + tokens.map(escapeRe).join("|") + ")", "gi");
  const parts = snip.split(re);
  return parts
    .filter((p) => p !== "")
    .map((p) => ({ text: p, mark: re.test(p) && tokens.includes(p.toLowerCase()) }));
}

function scoreEntry(entry: Entry, tokens: string[]): number {
  const title = entry.title.toLowerCase();
  const desc = entry.desc.toLowerCase();
  const headings = entry.headings.toLowerCase();
  const text = entry.text.toLowerCase();
  let total = 0;
  let matched = 0;
  for (const tok of tokens) {
    let s = 0;
    if (title.includes(tok)) s += 10;
    // desc is the curated metadata summary → strong relevance signal
    const dOcc = countOcc(desc, tok);
    if (dOcc > 0) s += 5 + (Math.min(dOcc, 3) - 1) * 1.5;
    if (headings.includes(tok)) s += 3;
    const occ = countOcc(text, tok);
    if (occ > 0) s += 1 + Math.min(occ, 5) * 0.3;
    if (s > 0) matched++;
    total += s;
  }
  if (matched === 0) return 0;
  // Prefer pages that match every typed word (AND-ish), without hiding partials.
  if (tokens.length > 1 && matched < tokens.length) total *= 0.35;
  if (title === tokens.join(" ")) total += 20;
  return total;
}

export function Search({
  onNavigate,
  variant = "sidebar",
  placeholder,
}: {
  onNavigate?: () => void;
  variant?: "sidebar" | "hero";
  placeholder?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isEN = pathname.startsWith("/en/") || pathname === "/en";

  const [data, setData] = useState<Entry[] | null>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const hero = variant === "hero";

  // Lazy-load the index on first interaction (kept out of the page bundle).
  const load = () => {
    if (data) return;
    fetch("/search-index.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((d: Entry[]) => setData(Array.isArray(d) ? d : []))
      .catch(() => setData([]));
  };

  // Close on outside click.
  useEffect(() => {
    if (!focused) return;
    const onDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [focused]);

  const tokens = tokenize(query);
  let results: Result[] = [];
  if (data && tokens.length > 0 && query.trim().length >= MIN) {
    results = data
      .filter((e) => e.lang === (isEN ? "en" : "de"))
      .map((e) => ({ ...e, score: scoreEntry(e, tokens), snippet: [] as Result["snippet"] }))
      .filter((e) => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RESULTS)
      .map((e) => ({ ...e, snippet: buildSnippet(e, tokens) }));
  }

  const showList = focused && query.trim().length >= MIN;
  const safeActive = Math.min(active, Math.max(0, results.length - 1));

  const go = (url: string) => {
    setQuery("");
    setFocused(false);
    setActive(0);
    onNavigate?.();
    router.push(url);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      if (query) setQuery("");
      else setFocused(false);
      return;
    }
    if (!showList || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const r = results[safeActive] ?? results[0];
      if (r) go(r.url);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <span
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-txt-light ${
            hero ? "left-4 text-lg" : "left-3"
          }`}
          aria-hidden="true"
        >
          🔍
        </span>
        <input
          type="search"
          role="combobox"
          aria-expanded={showList && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={
            showList && results.length > 0 ? `${listId}-opt-${safeActive}` : undefined
          }
          aria-label={isEN ? "Search the site" : "Website durchsuchen"}
          placeholder={placeholder ?? (isEN ? "Search…" : "Suchen…")}
          value={query}
          onFocus={() => {
            setFocused(true);
            load();
          }}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
            load();
          }}
          onKeyDown={onKeyDown}
          className={`w-full bg-card border border-border-app text-txt placeholder:text-txt-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-colors ${
            hero
              ? "min-h-[52px] pl-12 pr-4 py-3 text-base rounded-xl shadow-sm"
              : "min-h-[44px] pl-9 pr-3 py-2 text-sm rounded-lg"
          }`}
        />
      </div>

      {/* Screen-reader result count */}
      <div className="sr-only" aria-live="polite">
        {showList
          ? isEN
            ? `${results.length} result${results.length === 1 ? "" : "s"}`
            : `${results.length} Ergebnis${results.length === 1 ? "" : "se"}`
          : ""}
      </div>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          aria-label={isEN ? "Search results" : "Suchergebnisse"}
          className="absolute left-0 right-0 z-50 mt-1 max-h-[70vh] overflow-y-auto rounded-lg bg-nav-bg border border-border-app shadow-lg py-1"
        >
          {results.length === 0 ? (
            <li className="px-3 py-3 text-sm text-txt-light">
              {isEN ? "No results found." : "Keine Ergebnisse gefunden."}
            </li>
          ) : (
            results.map((r, i) => (
              <li key={r.url} role="option" id={`${listId}-opt-${i}`} aria-selected={i === safeActive}>
                <Link
                  href={r.url}
                  onMouseDown={(e) => {
                    // navigate before the input's blur closes the list
                    e.preventDefault();
                    go(r.url);
                  }}
                  onMouseEnter={() => setActive(i)}
                  className={`block px-3 py-2 ${
                    i === safeActive ? "bg-nav-active-bg" : "hover:bg-hover-bg"
                  }`}
                >
                  <span className="block text-sm font-semibold text-primary">{r.title}</span>
                  <span className="block text-xs text-txt-light leading-snug mt-0.5">
                    {r.snippet.map((part, j) =>
                      part.mark ? (
                        <mark key={j} className="bg-primary/20 text-txt rounded px-0.5">
                          {part.text}
                        </mark>
                      ) : (
                        <span key={j}>{part.text}</span>
                      )
                    )}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
