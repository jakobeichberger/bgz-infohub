import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { LastUpdated } from "@/components/LastUpdated";
import { SkipLink } from "@/components/SkipLink";

export const metadata: Metadata = {
  title: {
    default: "InfoHub — BG Zehnergasse",
    template: "%s — BG Zehnergasse InfoHub",
  },
  description:
    "Zentrales Informationsportal für Eltern und Schüler am BG Zehnergasse.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' ||
                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <SkipLink />
        <div className="flex min-h-screen">
          <Sidebar />
          <main id="main" className="flex-1 min-w-0 px-4 sm:px-8 py-8 max-w-4xl mx-auto w-full">
            {children}
            <LastUpdated />
          </main>
        </div>
      </body>
    </html>
  );
}
