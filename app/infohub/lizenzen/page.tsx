import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Kostenlose Software & Lizenzen für Schüler",
  description:
    "Gratis Software-Lizenzen für Schüler: GitHub Copilot, JetBrains, Autodesk, Unity, Figma, Canva und mehr.",
};

export default function LizenzenPage() {
  return (
    <>
      <PageHeader title="Kostenlose Software & Lizenzen" />

      <P>
        Als Schülerin oder Schüler haben Sie Zugang zu einer Vielzahl von
        kostenlosen Software-Lizenzen. Viele Unternehmen bieten
        professionelle Produkte gratis für den Bildungsbereich an.
      </P>

      <Callout type="success" title="Tipp">
        Für die meisten Angebote benötigen Sie nur Ihre Schul-E-Mail-Adresse
        (<code>nachname.vorname@bgzwn.at</code>) als Nachweis.
      </Callout>

      {/* ═══ GitHub ═══ */}
      <H2>GitHub Education — Student Developer Pack</H2>

      <P>
        Das umfangreichste Paket für Schüler mit über 100 Partnerangeboten:
      </P>

      <UL>
        <li><strong>GitHub Copilot</strong> — KI-gestützte Code-Vervollständigung (kostenlos für Schüler)</li>
        <li><strong>GitHub Codespaces</strong> — Cloud-Entwicklungsumgebungen</li>
        <li><strong>Microsoft Azure</strong> — 100 USD Guthaben + 25 kostenlose Services (ab 18)</li>
        <li><strong>JetBrains</strong> — Alle professionellen IDEs kostenlos</li>
        <li><strong>Namecheap</strong> — Kostenlose .me Domain</li>
        <li><strong>DigitalOcean</strong> — 200 USD Cloud-Guthaben</li>
        <li><strong>Notion</strong> — Kostenloser Plus-Plan</li>
        <li>Und über 90 weitere Angebote</li>
      </UL>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Berechtigt", "Schüler ab 13 Jahren an akkreditierten Schulen"],
          ["Nachweis", "Schul-E-Mail oder Immatrikulationsbestätigung"],
          ["Gültigkeit", "2 Jahre, dann erneut verifizieren"],
          ["Link", "education.github.com/pack"],
        ]}
      />

      {/* ═══ JetBrains ═══ */}
      <H2>JetBrains — Professionelle IDEs</H2>

      <P>
        Alle JetBrains-Entwicklungsumgebungen kostenlos für Schüler:
      </P>

      <UL>
        <li><strong>IntelliJ IDEA Ultimate</strong> — Java, Kotlin, Scala</li>
        <li><strong>PyCharm Professional</strong> — Python</li>
        <li><strong>WebStorm</strong> — JavaScript, TypeScript</li>
        <li><strong>CLion</strong> — C, C++</li>
        <li><strong>Rider</strong> — .NET, C#</li>
        <li><strong>PhpStorm, DataGrip, GoLand, RubyMine, RustRover</strong> und alle weiteren Tools</li>
      </UL>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Berechtigt", "Vollzeitschüler an akkreditierten Schulen (Programm ab 1 Jahr)"],
          ["Nachweis", "Schul-E-Mail, ISIC-Karte, oder GitHub Student Pack"],
          ["Gültigkeit", "1 Jahr, jährlich verlängerbar solange eingeschrieben"],
          ["Einschränkung", "Nur für nicht-kommerzielle Nutzung"],
          ["Link", "jetbrains.com/academy/student-pack"],
        ]}
      />

      {/* ═══ Autodesk ═══ */}
      <H2>Autodesk — CAD &amp; 3D-Design</H2>

      <P>Professionelle Design-Software kostenlos für Schüler:</P>

      <UL>
        <li><strong>AutoCAD</strong> — 2D/3D-CAD-Zeichnungen</li>
        <li><strong>Fusion 360</strong> — 3D-Modellierung, Simulation, CAM</li>
        <li><strong>Inventor</strong> — Mechanisches 3D-Design</li>
        <li><strong>Maya</strong> — 3D-Animation und Visual Effects</li>
        <li><strong>3ds Max</strong> — 3D-Modellierung und Rendering</li>
        <li><strong>Revit, Civil 3D</strong> und weitere</li>
      </UL>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Berechtigt", "Schüler und Lehrkräfte ab Mittelschule"],
          ["Gültigkeit", "1 Jahr, jährlich verlängerbar"],
          ["Link", "autodesk.com/education/edu-software/overview"],
        ]}
      />

      {/* ═══ Weitere ═══ */}
      <H2>Weitere kostenlose Software</H2>

      <CardGrid>
        <Card icon="🎨" title="Figma (Design)">
          Kostenloser Professional-Plan für Schüler. Design, Prototyping und
          Zusammenarbeit.{" "}
          <a href="https://www.figma.com/education/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">figma.com/education</a>
        </Card>
        <Card icon="🖌️" title="Canva (Grafikdesign)">
          100% kostenlos für Schüler und Lehrkräfte. Präsentationen, Poster,
          Videos erstellen.{" "}
          <a href="https://www.canva.com/education/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">canva.com/education</a>
        </Card>
        <Card icon="🎮" title="Unity (Spieleentwicklung)">
          Kostenloser Student Plan. Spiele und interaktive 3D-Anwendungen
          entwickeln.{" "}
          <a href="https://unity.com/products/unity-student" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">unity.com/student</a>
        </Card>
        <Card icon="🎬" title="Unreal Engine">
          Komplett kostenlos für Bildung. Professionelle Game Engine für 3D,
          VR und Simulation.{" "}
          <a href="https://www.unrealengine.com/education" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">unrealengine.com/education</a>
        </Card>
        <Card icon="📝" title="Notion (Notizen & Planung)">
          Kostenloser Plus-Plan für Schüler. Notizen, Aufgaben, Wikis und
          Datenbanken.{" "}
          <a href="https://www.notion.com/product/notion-for-education" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">notion.com/education</a>
        </Card>
        <Card icon="🍎" title="Apple Developer (kostenlos)">
          Kostenlose Entwicklertools (Xcode, Swift Playgrounds, TestFlight)
          für Schulen.{" "}
          <a href="https://developer.apple.com/education/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">developer.apple.com/education</a>
        </Card>
      </CardGrid>

      <H2>Google Workspace for Education</H2>

      <P>
        Google bietet Schulen eine kostenlose Basisversion von Google
        Workspace an:
      </P>

      <UL>
        <li>Gmail, Calendar, Drive, Docs, Sheets, Slides, Forms</li>
        <li>Google Meet und Google Classroom</li>
        <li>Gemini KI in Classroom (ab 18 Jahren)</li>
      </UL>

      <P>
        Ob Ihre Schule Google Workspace nutzt, erfahren Sie bei der
        IT-Administration.
      </P>

      <H2>Adobe Creative Cloud</H2>

      <Callout type="warning" title="Nicht kostenlos für Einzelpersonen">
        Adobe bietet <strong>keine kostenlosen Einzellizenzen</strong> für
        Schüler an. Es gibt einen vergünstigten Studententarif (ca. 75 %
        Rabatt) und institutionelle Lizenzen ab ca. 5 EUR/Schüler/Jahr für
        Schulen. <strong>Adobe Express for Education</strong> ist kostenlos
        wenn von der Schule bereitgestellt.
      </Callout>

      <H2>Zusammenfassung</H2>

      <Table
        headers={["Software", "Kostenlos?", "Nachweis"]}
        rows={[
          ["Microsoft 365 (A3)", "Ja (MS-ACH)", "Schulkonto"],
          ["GitHub Student Pack", "Ja", "Schul-E-Mail"],
          ["GitHub Copilot", "Ja (im Student Pack)", "Schul-E-Mail"],
          ["JetBrains (alle IDEs)", "Ja", "Schul-E-Mail / ISIC"],
          ["Autodesk (AutoCAD etc.)", "Ja", "Schul-E-Mail"],
          ["Figma", "Ja", "Schul-E-Mail"],
          ["Canva", "Ja", "Schul-E-Mail"],
          ["Unity", "Ja", "Schul-E-Mail"],
          ["Unreal Engine", "Ja", "Für alle kostenlos"],
          ["Notion", "Ja", "Schul-E-Mail"],
          ["Apple Developer Tools", "Ja", "Für alle kostenlos"],
          ["Google Workspace", "Ja (für Schulen)", "Über die Schule"],
          ["Adobe Creative Cloud", "Nein (vergünstigt)", "Studententarif"],
        ]}
      />
    </>
  );
}
