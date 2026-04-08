import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Laptop Requirements — Upper Secondary",
  description:
    "Official notebook requirements for upper secondary at BG Zehnergasse: minimum specifications, buying guide, and tips.",
};

export default function LaptopPageEN() {
  return (
    <>
      <PageHeader title="Laptop Requirements for Upper Secondary" />

      <P>
        Starting from upper secondary (5th year / 9th school level), students
        need their own notebook for classes. Here you will find the official
        minimum requirements of the school and a buying guide.
      </P>

      <Callout type="warning" title="Work Equipment — Duty of Care">
        The notebook is considered a <strong>work tool</strong> under
        Austrian school law. Pursuant to{" "}
        <a
          href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=43"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          Section 43(1) SchUG
        </a>
        , students are required to bring the necessary work tools in proper
        working condition and have them ready for classes. A non-functioning
        notebook may be considered a breach of the duty to cooperate.
      </Callout>

      <Callout type="info" title="Official Document">
        The complete requirements can be found in the official school PDF:{" "}
        <a
          href="https://www.bgzwn.at/wp-content/uploads/Information-zum-Notebook.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] hover:underline"
        >
          Notebook Information (PDF)
        </a>
      </Callout>

      {/* === Minimum Requirements === */}
      <H2>Minimum Requirements</H2>

      <Table
        headers={["Feature", "Requirement"]}
        rows={[
          ["Display", "At least 14 inches, recommended 14 or 15.4 inches, FullHD (1920x1080)"],
          ["Processor", "Intel Core i5 (current generation) or equivalent AMD processor"],
          ["RAM", "At least 16 GB RAM"],
          ["Storage", "At least 512 GB SSD"],
          ["Operating System", "Windows 11 (not the S version!)"],
          ["Admin Rights", "Local administrator rights required"],
          ["Wi-Fi", "Wi-Fi capable"],
          ["Ports", "USB ports, 3.5mm headphone jack (or Bluetooth/USB adapter)"],
          ["Weight", "Easy to carry (typically 1.3-1.6 kg for 14 inches)"],
        ]}
      />

      <Callout type="danger" title="Not Suitable">
        <ul>
          <li>
            <strong>ARM processors (e.g. Qualcomm Snapdragon):</strong>{" "}
            Explicitly not recommended! Many school programs only run
            through emulation, which leads to performance issues and
            compatibility problems.
          </li>
          <li>
            <strong>Windows 11 S-Mode:</strong> Cannot install programs outside
            the Microsoft Store — not suitable for school use.
          </li>
          <li>
            <strong>Chromebooks:</strong> Cannot run Windows,
            Next-Exam does not work, many school programs do not run.
          </li>
        </ul>
      </Callout>

      {/* === MacBooks === */}
      <H2>MacBooks — Allowed, but with Limitations</H2>

      <P>
        Apple MacBooks are generally allowed, however the school partially uses
        Windows-exclusive software. If you use a MacBook:
      </P>

      <UL>
        <li>
          You may need to set up a working Windows installation
          (dual-boot or virtualization via Parallels / UTM) — this is{" "}
          <strong>not mandatory</strong>, but may be necessary for
          certain Windows-exclusive software
        </li>
        <li>
          Setting this up is the{" "}
          <strong>responsibility of the student</strong> — teachers will
          not assist with this
        </li>
        <li>
          Next-Exam has its own macOS version (Intel + Apple Silicon)
        </li>
        <li>Microsoft 365 runs natively on macOS</li>
      </UL>

      <Callout type="warning" title="ARM Note for MacBooks">
        Newer MacBooks with M1/M2/M3/M4 chips use ARM architecture.
        Windows 11 ARM can run in a VM, but the school warns about
        compatibility issues with specialized software. Check with
        IT before purchasing (<a href="mailto:admin@bgzwn.at" className="text-[var(--primary)] hover:underline">admin@bgzwn.at</a>)
        whether all required programs will work.
      </Callout>

      {/* === Why These Specs === */}
      <H2>Why These Specifications?</H2>

      <Table
        headers={["Requirement", "Why?"]}
        rows={[
          [
            "Windows 11",
            "Next-Exam (exam software) requires Windows. Many school programs are Windows-exclusive.",
          ],
          [
            "Intel i5 / AMD Ryzen 5",
            "Sufficient performance for Microsoft Teams (video conferencing), Office 365, programming, and multimedia.",
          ],
          [
            "16 GB RAM",
            "Teams + browser + Office simultaneously easily consume 10+ GB. With 8 GB, the device quickly becomes slow.",
          ],
          [
            "512 GB SSD",
            "Windows 11 + Office + programs take up approx. 100 GB. Add files, projects, and updates on top of that.",
          ],
          [
            "14-inch FullHD",
            "Good balance between screen size (for split-screen work) and portability.",
          ],
          [
            "x86/x64 (no ARM)",
            "Some school programs and Next-Exam only run natively on x86/x64. ARM emulation is slower and error-prone.",
          ],
        ]}
      />

      {/* === Buying Guide === */}
      <H2>Buying Guide — What to Look For</H2>

      <H3>Display</H3>
      <UL>
        <li>
          <strong>14 inches</strong> — Best compromise: large enough to
          work on, light enough for commuting to school (approx. 1.3-1.5 kg)
        </li>
        <li>
          <strong>15.4 inches</strong> — More room for split-screen, but
          heavier in the backpack (approx. 1.7-2.0 kg)
        </li>
        <li>
          <strong>FullHD (1920x1080)</strong> is a must — HD (1366x768)
          is too low for productive work
        </li>
        <li>
          <strong>IPS panel</strong> preferred (better viewing angles and
          colors than TN panels)
        </li>
      </UL>

      <H3>Battery</H3>
      <UL>
        <li>
          <strong>At least 8 hours</strong> of battery life, so a
          school day without a power outlet is possible
        </li>
        <li>
          Pay attention to manufacturer specifications and independent reviews
        </li>
        <li>
          <strong>USB-C charging</strong> is convenient — one charger for
          laptop and smartphone
        </li>
      </UL>

      <H3>Keyboard</H3>
      <UL>
        <li>
          <strong>German layout (QWERTZ)</strong> — important for
          touch typing and umlauts
        </li>
        <li>
          <strong>Backlit keyboard</strong> is a plus for dark
          classrooms
        </li>
      </UL>

      <H3>Accessories (Recommended)</H3>
      <UL>
        <li>
          <strong>External mouse</strong> (wireless or USB) — more precise than
          the touchpad
        </li>
        <li>
          <strong>Headphones</strong> — for video conferences and
          language exercises
        </li>
        <li>
          <strong>Laptop bag or sleeve</strong> — protects the device in
          the backpack
        </li>
        <li>
          <strong>USB stick</strong> — for quick file transfers
        </li>
      </UL>

      {/* === Recommendations by Budget === */}
      <H2>Recommendations by Budget</H2>

      <Table
        headers={["Budget", "What You Can Expect", "Example Devices"]}
        rows={[
          [
            "400-600 EUR",
            "Meets minimum requirements: i5, 16 GB, 512 GB SSD, 14\" FullHD",
            "Lenovo IdeaPad, Acer Aspire, HP 14s",
          ],
          [
            "600-900 EUR",
            "Better battery, lighter, faster SSD, higher-quality build",
            "Lenovo ThinkPad E-Series, HP ProBook, ASUS VivoBook Pro",
          ],
          [
            "900+ EUR",
            "Premium: lightweight, very long battery, top keyboard, metal chassis",
            "Lenovo ThinkPad T/X, Dell XPS, HP EliteBook",
          ],
        ]}
      />

      <Callout type="success" title="Tip: Warranty & Insurance">
        Purchase an <strong>extended warranty for 3-4 years</strong>{" "}
        (upper secondary lasts 4 years). Also consider device insurance
        against drop and liquid damage.
      </Callout>

      {/* === Personal Responsibility === */}
      <H2>Important: Personal Responsibility</H2>

      <UL>
        <li>
          <strong>Antivirus:</strong> Is the responsibility of the
          student (Windows Defender is pre-installed and sufficient)
        </li>
        <li>
          <strong>Backups:</strong> Back up regularly! OneDrive (5 TB)
          syncs automatically, but also back up local data separately
        </li>
        <li>
          <strong>System configuration:</strong> Teachers do not perform
          system or hardware configurations for liability reasons
        </li>
        <li>
          <strong>Software installation:</strong> You need local
          admin rights to be able to install school software
        </li>
      </UL>

      <Callout type="info" title="Questions?">
        For questions about laptop requirements, contact IT:{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-[var(--primary)] hover:underline"
        >
          admin@bgzwn.at
        </a>
      </Callout>

      {/* ═══ Legal Sources ═══ */}
      <H2>Legal Sources</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=43"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            SchUG, BGBl. Nr. 472/1986 i.d.g.F.
          </a>{" "}
          — § 43 Abs. 1 (duty to cooperate: keep work tools in proper
          working condition)
        </li>
      </UL>
    </>
  );
}
