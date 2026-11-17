"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Cookielose Zugriffsstatistik (Auswertung: /stats/, Code: public/stats/).
// Sendet pro Seitenaufruf nur den Pfad und beim Einstieg die Herkunfts-Domain,
// bei Klick auf eine Datei unter /templates/ (Zertifikat, PDFs, Vorlagen) deren Pfad.
// Nichts wird im Browser gespeichert. Nicht lokal und nicht, wenn der Browser
// Do-Not-Track oder Global Privacy Control meldet.
const ENDPOINT = "/stats/collect.php";

function trackingAllowed(): boolean {
  const { hostname } = window.location;
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local")) return false;
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean };
  return !(nav.doNotTrack === "1" || nav.globalPrivacyControl);
}

function send(data: Record<string, unknown>) {
  const blob = new Blob([JSON.stringify(data)], { type: "text/plain" });
  if (!navigator.sendBeacon?.(ENDPOINT, blob)) {
    fetch(ENDPOINT, { method: "POST", body: blob, keepalive: true }).catch(() => {});
  }
}

export function StatsBeacon() {
  const pathname = usePathname();
  const firstHit = useRef(true);

  // Seitenaufrufe
  useEffect(() => {
    if (!trackingAllowed()) return;

    let referrer = "";
    let entry = false;
    if (firstHit.current) {
      firstHit.current = false;
      let refHost = "";
      try {
        refHost = document.referrer ? new URL(document.referrer).hostname : "";
      } catch {
        // ungültiger Referrer → wie „direkt“
      }
      entry = refHost !== window.location.hostname;
      referrer = entry ? refHost : "";
    }
    send({ p: pathname, e: entry, r: referrer });
  }, [pathname]);

  // Datei-Downloads (linke und mittlere Maustaste)
  useEffect(() => {
    if (!trackingAllowed()) return;
    const onClick = (event: MouseEvent) => {
      if (event.button > 1) return;
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (link.hostname !== window.location.hostname || !link.pathname.startsWith("/templates/")) return;
      send({ k: "dl", p: link.pathname });
    };
    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("auxclick", onClick);
    };
  }, []);

  return null;
}
