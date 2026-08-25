import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { LinkCards } from "@/components/ui/LinkCards";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Laptop Requirements — Upper Secondary",
  description:
    "Official notebook requirements for upper secondary at BG Zehnergasse: minimum specifications, buying guide, education discounts, and the eduabo school offer (rent or buy) for 2026/27.",
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
          className="text-primary hover:underline"
        >
          Section 43(1) SchUG
        </a>
        , students are required to bring the necessary work tools in proper
        working condition and have them ready for classes. A non-functioning
        notebook may be considered a breach of the duty to cooperate.
      </Callout>

      <Callout type="info" title="Official Document">
        The complete requirements can be found in the official school PDF
        (as of June 2026):{" "}
        <a
          href="/templates/Information-zum-Notebook-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
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
          ["Processor", "Intel Core i5 / Core Ultra 5 (current generation) or equivalent AMD Ryzen 5"],
          ["RAM", "At least 16 GB RAM"],
          ["Storage", "At least 512 GB SSD"],
          ["Operating System", "Windows 11 (not the S version!)"],
          ["Admin Rights", "Local administrator rights required"],
          ["Wi-Fi", "Wi-Fi capable"],
          ["Ports", "USB ports, 3.5mm headphone jack (or Bluetooth/USB adapter)"],
          ["Weight", "Easy to carry (typically 1.3-1.6 kg for 14 inches)"],
          ["Optional", "External mouse (wireless/wired), external DVD drive"],
        ]}
      />

      <Callout type="danger" title="Not Suitable">
        <ul>
          <li>
            <strong>Windows 10:</strong> No longer receives security updates
            since <strong>14 October 2025</strong> — when buying new, be sure
            to choose <strong>Windows 11</strong>.
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

      <Callout type="warning" title="ARM processors (Apple Silicon &amp; Windows on ARM)">
        <p>
          Devices with an ARM processor — i.e. <strong>MacBooks with
          M1/M2/M3/M4 chips</strong> as well as <strong>Windows laptops on ARM
          (e.g. Qualcomm Snapdragon)</strong> — should{" "}
          <strong>generally work</strong> for everyday school use (Office 365,
          Teams, browser, and Next-Exam with its own macOS/ARM version).
        </p>
        <p>
          With <strong>specialised software</strong>, however, compatibility or
          performance issues can occur (some programs only run via emulation).
          In that case the student must <strong>resolve it themselves</strong> —
          teachers and IT do not provide support for this.
        </p>
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
            "Intel Core i5 / Core Ultra 5 · AMD Ryzen 5",
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
            "x86/x64 (recommended)",
            "Maximum compatibility — all school programs run natively. ARM devices (Apple Silicon, Snapdragon) usually work too; but for specialised software, resolving any issues is the student's own responsibility.",
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

      <H3>Ports</H3>
      <UL>
        <li>
          Many current laptops have almost only <strong>USB-C</strong> — a{" "}
          <strong>USB-C hub/adapter</strong> (for USB-A sticks, HDMI/projector)
          may be needed
        </li>
        <li>
          A <strong>3.5 mm headphone jack</strong> is handy; otherwise connect
          headphones via USB-C or Bluetooth
        </li>
        <li>
          Prefer <strong>USB-C charging</strong> — one charger for laptop and
          smartphone
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
        <li>
          <strong>External DVD drive</strong> (optional) — modern laptops have
          no built-in drive
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
            "Lenovo ThinkPad T/X, Dell Pro / XPS, HP EliteBook",
          ],
        ]}
      />

      <Callout type="success" title="Tip: Warranty & Insurance">
        Purchase an <strong>extended warranty for 3-4 years</strong>{" "}
        (upper secondary lasts 4 years). Also consider device insurance
        against drop and liquid damage.
      </Callout>

      {/* === eduabo School Offer === */}
      <H2>School Offer: Notebook via eduabo (School Year 2026/27)</H2>

      <P>
        You do <strong>not</strong> have to research a suitable notebook
        yourself: for the <strong>2026/27</strong> school year, the school and
        the provider <strong>eduabo</strong> jointly offer a pre-approved
        device. You only choose between two options —{" "}
        <strong>subscription rental</strong> or{" "}
        <strong>one-time purchase</strong> — and the notebook is delivered to
        your home: immediately when you buy, and in time for the start of
        school when you subscribe.
      </P>

      <Callout type="info" title="Parent Letter (German)">
        All information in this section comes from the official parent letter
        (as of 25 August 2026):{" "}
        <a
          href="/templates/Elternbrief-eduabo-2026-27.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Parent letter eduabo — Notebook selection 2026/27 (PDF, German)
        </a>
      </Callout>

      <H3>The Device on Offer</H3>

      <P>
        <strong>One</strong> model, agreed with the school management, is
        offered: the <strong>Lenovo IdeaPad Slim 3 Gen8</strong>, a slim
        all-rounder for everyday school use. The table shows how it compares
        against the school minimum requirements listed above:
      </P>

      <Table
        headers={[
          "Feature",
          "School Requirement",
          "Lenovo IdeaPad Slim 3 Gen8",
          "Met?",
        ]}
        rows={[
          [
            "Display",
            "At least 14 inches, FullHD",
            "14 inches, 1920x1080, IPS matte",
            "Yes",
          ],
          [
            "Processor",
            "Core i5 / Core Ultra 5 or Ryzen 5",
            "AMD Ryzen 5 7520U (4 cores / 8 threads), 2.8-4.3 GHz",
            "Yes - entry level",
          ],
          ["Memory", "At least 16 GB", "16 GB LPDDR5", "Yes"],
          ["Storage", "At least 512 GB SSD", "512 GB SSD", "Yes"],
          [
            "Operating system",
            "Windows 11 (not the S version)",
            "Windows 11 Home",
            "Yes",
          ],
          [
            "Graphics",
            "No requirement",
            "AMD Radeon 610M (integrated in the processor)",
            "-",
          ],
        ]}
      />

      <H3>The Two Options Compared</H3>

      <Table
        headers={["Criterion", "Option 1: Subscription", "Option 2: Purchase"]}
        rows={[
          ["Price", "EUR 20.99 per month for 46 months", "EUR 599 one-time"],
          [
            "Total cost",
            "EUR 965.54 (46 x EUR 20.99, our own calculation)",
            "EUR 599 plus protection package, if desired",
          ],
          [
            "All-round protection package",
            "Automatically included for the entire rental period",
            "Optional add-on (extra charge)",
          ],
          [
            "Ownership",
            "Rental device from eduabo",
            "Yours immediately - also after school",
          ],
          ["Credit check", "None", "Not applicable (you pay immediately)"],
          [
            "Cancellation",
            "Can be cancelled when leaving the school",
            "Not applicable",
          ],
          [
            "Charged when ordering",
            "Deposit (amount not stated in the parent letter)",
            "Full purchase price",
          ],
          [
            "Home delivery",
            "In time for the start of school",
            "Immediately",
          ],
        ]}
      />

      <H3>The All-Round Protection Package</H3>

      <P>
        The all-round protection package goes well beyond the statutory
        warranty. It covers exactly the situations that actually happen at
        school: the notebook falls out of the backpack, a drink spills, or the
        device is stolen. The protection period automatically matches the
        contract term. It is <strong>included with the subscription</strong>{" "}
        and <strong>can be added when purchasing</strong>.
      </P>

      <Table
        headers={["Coverage", "Standard Warranty", "All-Round Protection"]}
        rows={[
          ["Immediate protection from delivery day", "Yes", "Yes"],
          ["Material, production and design defects", "Yes", "Yes"],
          ["Labour and spare parts", "Yes", "Yes"],
          ["Travel and shipping costs", "No", "Yes"],
          ["Replacement in case of total loss", "No", "Yes"],
          ["Loan device at school for immediate replacement", "No", "Yes"],
          ["Drop, fall and glass breakage damage", "No", "Yes"],
          ["Water and moisture damage", "No", "Yes"],
          ["Power surge and electronics damage", "No", "Yes"],
          ["Battery defects (capacity below 50 % within 4 years)", "No", "Yes"],
          ["Data recovery and data backup", "No", "Yes"],
          ["Operating system reinstallation", "No", "Yes"],
          ["Theft protection", "No", "Yes"],
        ]}
      />

      <Callout type="info" title="Excess (Deductible)">
        In the event of a claim you pay at most <strong>EUR 50</strong> per
        incident. According to the parent letter, no further costs apply.
      </Callout>

      <H3>Advice: Rent or Buy?</H3>

      <P>
        The school offer is an <strong>option, not an obligation</strong>. You
        are equally free to buy your own notebook as long as it meets the
        minimum requirements above — for example using the education discounts
        in the next section. The following points are intended to make the
        decision easier.
      </P>

      <P>
        <strong>Arguments for the subscription:</strong>
      </P>
      <UL>
        <li>
          <strong>If you want damage covered:</strong> drops, water, theft and
          battery wear are all insured — precisely the risks that are
          realistic across four years of school
        </li>
        <li>
          <strong>If downtime would be a problem:</strong> during a repair your
          child receives a <strong>loan device directly at school</strong> and
          loses no lesson time
        </li>
        <li>
          <strong>If a large one-off payment is difficult:</strong> around 21
          euros a month instead of almost 600 euros at once — and with no
          credit check, so the offer is open to every family
        </li>
        <li>
          <strong>If a change of school is possible:</strong> the subscription
          can be cancelled when leaving the school
        </li>
      </UL>

      <P>
        <strong>Arguments for the one-time purchase:</strong>
      </P>
      <UL>
        <li>
          <strong>If you do the maths:</strong> at EUR 599 the purchase is
          around <strong>EUR 367 cheaper</strong> than the 46 monthly
          instalments (EUR 965.54) — provided nothing breaks and you do not add
          the protection package
        </li>
        <li>
          <strong>If the device should stay with you:</strong> it is yours
          immediately and also after upper secondary — as a second device, for
          siblings, or to resell
        </li>
        <li>
          <strong>If you want to choose the protection yourself:</strong> you
          can add the all-round protection package deliberately — or
          deliberately go without it
        </li>
      </UL>

      <Callout type="warning" title="What to Know Before Ordering">
        <ul>
          <li>
            <strong>The processor is entry level.</strong> The Ryzen 5 7520U
            meets the school requirement and is perfectly adequate for Office,
            Teams, browsing and normal lessons. If you plan a lot of{" "}
            <strong>photo and video editing, larger programming projects or
            virtual machines</strong>, a stronger device from the 600-900 euro
            class is the better choice.
          </li>
          <li>
            <strong>Two prices are missing from the parent letter:</strong> the{" "}
            <strong>amount of the deposit</strong> for the subscription and the{" "}
            <strong>surcharge for the all-round protection package</strong>{" "}
            when purchasing. Ask eduabo about both before signing — otherwise
            the two options cannot be compared properly.
          </li>
          <li>
            <strong>Prices may change at short notice.</strong> eduabo itself
            points out component shortages that can lead to price increases and
            supply bottlenecks. There is no price guarantee.
          </li>
        </ul>
      </Callout>

      <H3>How to Order</H3>

      <StepList>
        <Step title="Open the school store">
          Go to the school shop:{" "}
          <a
            href="https://eduabo.at/pages/brg-zehnergasse"
            target="_blank"
            rel="noopener noreferrer"
          >
            eduabo.at/pages/brg-zehnergasse
          </a>
        </Step>
        <Step title="Choose your option">
          Select the model and then <strong>Miete</strong> (rent) or{" "}
          <strong>Kauf</strong> (buy). When buying, you additionally decide
          whether to add the all-round protection package.
        </Step>
        <Step title="Complete the order">
          When buying, the <strong>purchase price</strong> is charged; with the
          subscription, the <strong>deposit</strong> is charged. Delivery then
          goes to your home — immediately when buying, and in time for the
          start of school with the subscription.
        </Step>
      </StepList>

      <Callout type="success" title="Straight to the School Shop">
        You will find all details and the order form at{" "}
        <a
          href="https://eduabo.at/pages/brg-zehnergasse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          eduabo.at/pages/brg-zehnergasse
        </a>
      </Callout>

      <Callout type="info" title="Questions About Your Order? - eduabo Contact">
        For questions about ordering, the deposit, the protection package or
        delivery, please contact <strong>eduabo directly</strong>, not the
        school:
        <ul>
          <li>
            Email:{" "}
            <a
              href="mailto:service@eduabo.at"
              className="text-primary hover:underline"
            >
              service@eduabo.at
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:06787800" className="text-primary hover:underline">
              06787800
            </a>{" "}
            (Mon-Fri 10:00-18:00)
          </li>
          <li>Address: Universitaetsstrasse 4, A-1090 Vienna</li>
        </ul>
      </Callout>

      <P>
        <em>
          Note: the device selection was agreed with the school management.
          However, the contract is concluded exclusively between you and
          eduabo — the school is not a contracting party and accepts no
          liability for prices, delivery or processing. Prices and availability
          may change at any time.
        </em>
      </P>

      {/* === Education Discounts === */}
      <H2>Education Discounts When Buying a Notebook</H2>

      <P>
        Upper-secondary students can use <strong>education discounts</strong> at
        many retailers — savings of several hundred euros depending on the
        device. Almost all programmes require <strong>proof of education
        status</strong> (e.g. a student ID stamped by the school or a school
        attendance confirmation).
      </P>

      <Callout
        type="warning"
        title="Apple Education Store — Caution for school pupils"
      >
        The official Apple education discount (
        <a
          href="https://www.apple.com/at-edu/store"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          apple.com/at-edu
        </a>
        ) is aimed at <strong>university students, teachers and higher-education
        staff</strong>. Upper-secondary pupils are <strong>usually not
        directly eligible</strong> there. To get discounted Apple devices as a
        pupil, use a retailer such as <strong>edustore.at</strong> (see below),
        which specifically serves higher school levels.
      </Callout>

      <Table
        headers={["Provider", "Who qualifies", "Discount", "Proof"]}
        rows={[
          [
            "edustore.at (Austrian)",
            "Pupils, students, teachers",
            "up to €500 on notebooks (Apple, HP, Lenovo, Microsoft)",
            "Proof of education status required",
          ],
          [
            "Lenovo Campus",
            "Pupils & students",
            "up to 25% on ThinkPad, ThinkBook, Legion",
            "Status proof (upload when ordering)",
          ],
          [
            "HP Campus Advantage",
            "Pupils explicitly admitted",
            "Notebook discounts, max. 2 offers per calendar year",
            "School-stamped student ID (front & back)",
          ],
          [
            "Microsoft Store (Education)",
            "Pupils, their parents, teachers",
            "up to 10% (incl. Surface), whole academic year",
            "Verification via the Microsoft account",
          ],
          [
            "notebooksbilliger.de (Campus)",
            "Pupils, apprentices, teachers (DE + AT)",
            "Campus prices + free shipping",
            "Proof required; not combinable with other discounts",
          ],
        ]}
      />

      <LinkCards
        items={[
          {
            href: "https://www.edustore.at/landingpages/apple-fur-hohere-schulstufen",
            label: "edustore.at — Apple for higher school levels",
            desc: "Austrian retailer, top brands with a pupil discount",
          },
          {
            href: "https://www.lenovocampus.at/",
            label: "Lenovo Campus",
            desc: "ThinkPad, ThinkBook & Legion up to 25% off",
          },
          {
            href: "https://www.hp.com/de-de/shop/offer.aspx?p=students-offers",
            label: "HP Campus Advantage",
            desc: "HP notebooks for pupils (student-ID proof)",
          },
          {
            href: "https://www.microsoft.com/de-at/store/b/student",
            label: "Microsoft Store (Education)",
            desc: "Surface & more, up to 10% — parents included",
          },
          {
            href: "https://www.notebooksbilliger.de/infocenter/section/campusprogramm",
            label: "notebooksbilliger.de — Campus",
            desc: "Pupils from AT admitted, free shipping",
          },
        ]}
      />

      <Callout type="info" title="Tip: Compare prices before buying">
        Education prices are <strong>not always</strong> the absolute best
        price — even at Apple, the back-to-school promotion does not
        automatically give the cheapest price. Compare the education discount
        against regular offers and promotions before you buy.
      </Callout>

      <P>
        <em>
          Note: This overview is for orientation only. The school does not
          recommend or favour any particular retailer; offers, prices and
          eligibility may change at any time.
        </em>
      </P>

      {/* === Personal Responsibility === */}
      <H2>Important: Personal Responsibility</H2>

      <UL>
        <li>
          <strong>Antivirus:</strong> Is the responsibility of the
          student (<strong>Microsoft Defender</strong> is pre-installed in
          Windows 11 and sufficient)
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
          className="text-primary hover:underline"
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
            className="text-primary hover:underline"
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
