import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";

export const metadata: Metadata = {
  title: "Free Software & Licences for Students",
  description:
    "Free software licences for students: GitHub Copilot, JetBrains, Autodesk, Unity, Figma, Canva and more.",
};

export default function LizenzenPageEN() {
  return (
    <>
      <PageHeader title="Free Software & Licences" />

      <P>
        As a student you have access to a wide range of free software
        licences. Many companies offer their professional products free of
        charge for educational use.
      </P>

      <Callout type="success" title="Tip">
        For most offers you only need your school email address
        (<code>lastname.firstname@bgzwn.at</code>) as proof. The school does
        <strong> not need a partnership</strong> with the provider — you can
        register independently.
      </Callout>

      {/* ═══ GitHub ═══ */}
      <H2>GitHub Education — Student Developer Pack</H2>

      <P>
        The most comprehensive package for students with over 100 partner offers:
      </P>

      <UL>
        <li><strong>GitHub Copilot</strong> — AI-powered code completion (free for students)</li>
        <li><strong>GitHub Codespaces</strong> — Cloud development environments</li>
        <li><strong>Microsoft Azure</strong> — USD 100 credit + 25 free services (18+)</li>
        <li><strong>JetBrains</strong> — All professional IDEs for free</li>
        <li><strong>Namecheap</strong> — Free .me domain</li>
        <li><strong>DigitalOcean</strong> — USD 200 cloud credit</li>
        <li><strong>Notion</strong> — Free Plus plan</li>
        <li>And over 90 more offers</li>
      </UL>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Eligible", "Students aged 13+ at accredited schools"],
          ["Proof", "School email or enrolment confirmation"],
          ["Validity", "2 years, then re-verify"],
          ["Link", "education.github.com/pack"],
        ]}
      />

      {/* ═══ JetBrains ═══ */}
      <H2>JetBrains — Professional IDEs</H2>

      <P>
        All JetBrains development environments free for students:
      </P>

      <UL>
        <li><strong>IntelliJ IDEA Ultimate</strong> — Java, Kotlin, Scala</li>
        <li><strong>PyCharm Professional</strong> — Python</li>
        <li><strong>WebStorm</strong> — JavaScript, TypeScript</li>
        <li><strong>CLion</strong> — C, C++</li>
        <li><strong>Rider</strong> — .NET, C#</li>
        <li><strong>PhpStorm, DataGrip, GoLand, RubyMine, RustRover</strong> and all other tools</li>
      </UL>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Eligible", "Full-time students at accredited schools (programme of 1 year+)"],
          ["Proof", "School email, ISIC card, or GitHub Student Pack"],
          ["Validity", "1 year, renewable annually while enrolled"],
          ["Restriction", "Non-commercial use only"],
          ["Link", "jetbrains.com/academy/student-pack"],
        ]}
      />

      {/* ═══ Autodesk ═══ */}
      <H2>Autodesk — CAD &amp; 3D Design</H2>

      <P>Professional design software free for students:</P>

      <UL>
        <li><strong>AutoCAD</strong> — 2D/3D CAD drawings</li>
        <li><strong>Fusion 360</strong> — 3D modelling, simulation, CAM</li>
        <li><strong>Inventor</strong> — Mechanical 3D design</li>
        <li><strong>Maya</strong> — 3D animation and visual effects</li>
        <li><strong>3ds Max</strong> — 3D modelling and rendering</li>
        <li><strong>Revit, Civil 3D</strong> and more</li>
      </UL>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Eligible", "Students and teachers from secondary school onwards"],
          ["Validity", "1 year, renewable annually"],
          ["Link", "autodesk.com/education/edu-software/overview"],
        ]}
      />

      {/* ═══ More ═══ */}
      <H2>More Free Software</H2>

      <CardGrid>
        <Card icon="🎨" title="Figma (Design)">
          Free Professional plan for students. Design, prototyping and
          collaboration.{" "}
          <a href="https://www.figma.com/education/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">figma.com/education</a>
        </Card>
        <Card icon="🖌️" title="Canva (Graphic Design)">
          100% free for students and teachers. Create presentations, posters,
          videos.{" "}
          <a href="https://www.canva.com/education/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">canva.com/education</a>
        </Card>
        <Card icon="🎮" title="Unity (Game Development)">
          Free Student Plan. Develop games and interactive 3D applications.{" "}
          <a href="https://unity.com/products/unity-student" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">unity.com/student</a>
        </Card>
        <Card icon="🎬" title="Unreal Engine">
          Completely free for education. Professional game engine for 3D,
          VR and simulation.{" "}
          <a href="https://www.unrealengine.com/education" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">unrealengine.com/education</a>
        </Card>
        <Card icon="📝" title="Notion (Notes & Planning)">
          Free Plus plan for students. Notes, tasks, wikis and
          databases.{" "}
          <a href="https://www.notion.com/product/notion-for-education" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">notion.com/education</a>
        </Card>
        <Card icon="🍎" title="Apple Developer (free)">
          Free developer tools (Xcode, Swift Playgrounds, TestFlight)
          for schools.{" "}
          <a href="https://developer.apple.com/education/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">developer.apple.com/education</a>
        </Card>
      </CardGrid>

      <H2>Summary</H2>

      <Table
        headers={["Software", "Free?", "Self-register?", "Proof"]}
        rows={[
          ["Microsoft 365 (A3)", "Yes (MS-ACH)", "No — via the school", "School account provided"],
          ["GitHub Student Pack", "Yes", "Yes ✅", "School email"],
          ["GitHub Copilot", "Yes (in Student Pack)", "Yes ✅", "School email"],
          ["JetBrains (all IDEs)", "Yes", "Yes ✅", "School email / ISIC"],
          ["Autodesk (AutoCAD etc.)", "Yes", "Yes ✅", "School email"],
          ["Figma", "Yes", "Yes ✅", "School email"],
          ["Canva", "Yes", "Yes ✅", "School email"],
          ["Unity", "Yes", "Yes ✅", "School email"],
          ["Unreal Engine", "Yes", "Yes ✅", "Free for everyone"],
          ["Notion", "Yes", "Yes ✅", "School email"],
          ["Apple Developer Tools", "Yes", "Yes ✅", "Free for everyone"],
        ]}
      />

      <Callout type="info" title="Self-register = no school partnership needed">
        All items marked with ✅ can be activated by students{" "}
        <strong>independently</strong> using their school email address. The
        school does not need any partnership or agreement with the provider.
        Only Microsoft 365 (via the MS-ACH agreement) requires an
        institutional arrangement.
      </Callout>
    </>
  );
}
