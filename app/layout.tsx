import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Zum Inhalt springen
        </a>
        <div className="flex min-h-screen">
          <Sidebar />
          <main id="main" className="flex-1 min-w-0 px-4 sm:px-8 py-8 max-w-4xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
