"use client";

import { usePathname } from "next/navigation";
import data from "@/lib/last-updated.json";

const dates = data as Record<string, string>;

const MONTHS_DE = [
  "Jänner", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];
const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Deterministic formatting (no Intl / no Date) to avoid hydration mismatches.
function formatDate(iso: string, isEN: boolean): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  const months = isEN ? MONTHS_EN : MONTHS_DE;
  const month = months[m - 1] ?? "";
  return isEN ? `${d} ${month} ${y}` : `${d}. ${month} ${y}`;
}

export function LastUpdated() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en/") || pathname === "/en";

  // normalise: strip trailing slash (keep root "/")
  const key = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
  const iso = dates[key];
  if (!iso) return null;

  return (
    <p className="mt-12 pt-4 border-t border-border-app text-xs text-txt-light">
      {isEN ? "Last updated: " : "Zuletzt aktualisiert: "}
      <time dateTime={iso.slice(0, 10)} className="font-medium">
        {formatDate(iso, isEN)}
      </time>
    </p>
  );
}
