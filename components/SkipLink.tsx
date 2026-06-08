"use client";

import { usePathname } from "next/navigation";

// Localized skip-to-content link (WCAG 2.4.1 / 3.1.2).
// Client component so the label matches the page language (DE/EN).
export function SkipLink() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en/") || pathname === "/en";
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
    >
      {isEN ? "Skip to content" : "Zum Inhalt springen"}
    </a>
  );
}
