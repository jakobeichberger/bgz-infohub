import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";
import { LinkCards } from "@/components/ui/LinkCards";

export const metadata: Metadata = {
  title: "iPad & Devices",
  description:
    "Digital Learning device initiative, iPad management, child protection, warranty, accessories and device exchange at BG Zehnergasse.",
};

export default function GeraetePageEN() {
  return (
    <>
      <PageHeader title="iPad & Devices" />

      <P>
        As part of the Austrian &quot;Digital Learning&quot; initiative,
        students in lower secondary school receive an Apple iPad. Here you
        will find all information about procurement, management, child
        protection and accessories.
      </P>

      {/* ═══════════════ Device Initiative ═══════════════ */}
      <H2>Device Initiative &quot;Digital Learning&quot;</H2>

      <P>
        The device initiative is part of the 8-point plan for digitising
        education by the Austrian Federal Ministry of Education (BMB). The
        goal is to provide all students in lower secondary education with
        equal access to digital learning. Its legal basis is the School
        Digitalisation Act (Schulunterrichts-Digitalisierungsgesetz,
        SchulDigiG).
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Device", "Apple iPad (chosen by the school)"],
          ["Management", "Microsoft Intune (MDM)"],
          [
            "Parental contribution",
            "25% of the device price (per SchulDigiG § 5 para. 2)",
          ],
          [
            "Eligible",
            "Students in the 5th school year (MS, AHS lower secondary, special schools)",
          ],
          [
            "Managed by",
            "OeAD — Agency for Education and Internationalisation",
          ],
          ["Legal basis", "SchulDigiG (BGBl. I Nr. 9/2021)"],
        ]}
      />

      <Callout type="success" title="EU Recovery Plan">
        The initiative is funded with <strong>EUR 171.7 million</strong> from
        the EU Recovery and Resilience Facility. Several year groups have
        already been equipped since the 2021/22 school year.{" "}
        <a
          href="https://digitaleslernen.oead.at/de/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          More at digitaleslernen.oead.at
        </a>
      </Callout>

      {/* ─── Procurement & Payment ─── */}
      <H3>Procurement &amp; Payment</H3>

      <P>
        Student and parent/guardian data is transferred from the school
        administration to the OeAD, which organises ordering and delivery.
        The school does not process any payments.
      </P>

      <UL>
        <li>
          Parents receive a payment request with a{" "}
          <strong>unique payment reference</strong> — please copy it exactly
        </li>
        <li>
          The parental contribution is 25% of the device price (legal basis:{" "}
          <a
            href="https://www.ris.bka.gv.at/eli/bgbl/i/2021/9/P5/NOR40229759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            SchulDigiG § 5
          </a>
          )
        </li>
        <li>
          <a
            href="https://digitaleslernen.oead.at/fileadmin/Dokumente/digitaleslernen.oead.at/Allgemeine_Vertragsbedingungen.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            General Terms and Conditions (Allgemeine Vertragsbedingungen, PDF,
            German)
          </a>
        </li>
      </UL>

      <H3>Exemption from payment</H3>

      <P>
        Under certain social circumstances, an exemption from the parental
        contribution can be applied for:
      </P>

      <UL>
        <li>
          Online via the OeAD website:{" "}
          <a
            href="https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Payment &amp; exemption on digitaleslernen.oead.at
          </a>
        </li>
        <li>Or via the PoDS parent portal</li>
        <li>The ministry decides on approval — not the school</li>
      </UL>

      {/* ─── Warranty & Hardware Support ─── */}
      <H3>Warranty &amp; Hardware Support</H3>

      <Callout type="warning" title="Important: The school does not provide hardware support">
        For hardware defects (display, battery, charging cable etc.) the
        supplier <strong>ACP TechRent</strong> is responsible —{" "}
        <strong>not the school</strong>. The school only assists with
        configuring apps and programmes for lessons.
      </Callout>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Supplier", "ACP TechRent GmbH"],
          ["Address", "Ernst Krenek Gasse 4, 1230 Vienna"],
          ["Phone", "+43 1 813 0000"],
          ["Fax", "+43 1 813 0000 159"],
          ["Email", "sales@acptechrent.at"],
          ["Website", "acptechrent.at"],
        ]}
      />

      <P>
        More about warranty and insurance:{" "}
        <a
          href="https://digitaleslernen.oead.at/de/fuer-eltern/garantie-versicherung-reparaturen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          digitaleslernen.oead.at/de/fuer-eltern/garantie-versicherung-reparaturen
        </a>
      </P>

      <H3>School transfer — Device exchange</H3>

      <P>
        When transferring to BG Zehnergasse, the next steps depend on which
        device was used at the previous school:
      </P>

      <UL>
        <li>
          <strong>Same device at the previous school (Apple iPad):</strong>{" "}
          Bring the device to the IT department (to{" "}
          <strong>Prof. Bruckschwaiger</strong>) so it can be added to the
          school&apos;s management system. <strong>Important:</strong> The
          device must <strong>not</strong> be registered in Apple Family
          Sharing at this point — it must be removed from the family before
          the appointment.
        </li>
        <li>
          <strong>Different device at the previous school:</strong> Exchange
          the device for an Apple iPad via the{" "}
          <a
            href="https://digitaleslernen.oead.at/de/fuer-eltern/schulwechsel-geraeteboerse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            OeAD device exchange
          </a>
          , then have it registered with the school IT.
        </li>
      </UL>

      <Callout type="warning" title="Disable Apple Family Sharing">
        If the iPad is registered in Apple Family Sharing, the school IT
        cannot add it to the management system. Remove the device before
        your appointment in the iPad settings:
        <ul>
          <li>
            Settings → Apple ID (top) → Family Sharing → Remove device from
            family
          </li>
        </ul>
      </Callout>

      {/* ─── OeAD Contact ─── */}
      <Callout type="info" title="OeAD hotline for all device initiative questions">
        <ul>
          <li>
            <strong>Phone:</strong> +43 720 080 356 (Mon–Fri 07:30–18:00)
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:digitaleslernen@oead.at"
              className="text-primary hover:underline"
            >
              digitaleslernen@oead.at
            </a>
          </li>
          <li>
            <strong>Post:</strong> OeAD — Digitales Lernen,
            Ebendorferstraße 7, 1010 Vienna
          </li>
          <li>
            <strong>FAQ:</strong>{" "}
            <a
              href="https://digitaleslernen.oead.at/de/faqs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              digitaleslernen.oead.at/de/faqs
            </a>
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Child Protection & MDM ═══════════════ */}
      <H2>Child Protection &amp; MDM</H2>

      <P>
        In accordance with{" "}
        <a
          href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=14a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          SchUG § 14a
        </a>{" "}
        and the{" "}
        <a
          href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011647"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          IKT-Schulverordnung
        </a>{" "}
        (BGBl. II Nr. 382/2021, § 10 Z 6), child protection measures are
        active on lower secondary devices:
      </P>

      <UL>
        <li>Web filter for age-appropriate browsing</li>
        <li>App Store restrictions</li>
        <li>Blocking of private Apple IDs on fully managed devices</li>
      </UL>

      <Callout type="info" title="Adjust settings">
        Parents can adjust child protection settings via the{" "}
        <strong>PoDS portal</strong> (Portal Digitale Schule). Tips for safe
        internet use:{" "}
        <a
          href="https://www.saferinternet.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          SaferInternet.at
        </a>
      </Callout>

      {/* ═══════════════ Device Management (Entra ID) ═══════════════ */}
      <H2>Device Management (Microsoft Entra ID / Intune)</H2>

      <P>
        The school uses Microsoft Entra ID and Intune with three management
        levels:
      </P>

      <Table
        headers={["Level", "Description", "IT access"]}
        rows={[
          ["Apps Only", "Only school apps installed, no management", "None"],
          [
            "Partial (Entra registered)",
            "Work profile created, school data separated",
            "No access to personal data",
          ],
          [
            "Full (Entra joined)",
            "Fully school-managed (iPad initiative)",
            "Device policies enforced",
          ],
        ]}
      />

      <Callout type="success" title="Privacy with Partial Management">
        With partial registration, IT has <strong>no access</strong> to
        personal photos, documents or messages. Only the work profile is
        managed.
      </Callout>

      <H3>iOS settings in detail</H3>
      <UL>
        <li>SSO profiles for seamless access to school services</li>
        <li>
          Required apps (WebUntis, Teams) are installed via the Company Portal
        </li>
        <li>iOS updates: weekdays 15:00–23:00, any time at weekends</li>
        <li>A private Apple ID can be added for personal app purchases</li>
        <li>OneDrive backup is pre-configured automatically</li>
      </UL>

      {/* ═══════════════ iPad Factory Reset ═══════════════ */}
      <H2>iPad Factory Reset</H2>

      <P>
        If the iPad has serious problems, you can reset it to factory
        settings. You will need a Mac or Windows PC.
      </P>

      <StepList>
        <Step title="Prepare your computer">
          <strong>Mac:</strong> use the Finder — no installation needed.{" "}
          <strong>Windows:</strong> install the <strong>Apple Devices</strong>{" "}
          app from the Microsoft Store.
        </Step>
        <Step title="Activate recovery mode">
          Follow Apple&apos;s official instructions to put the iPad into
          recovery mode.
        </Step>
        <Step title="Restore iPad">
          Select &quot;Restore&quot; in the Finder or the Apple Devices app
          and wait for the process to complete.
        </Step>
        <Step title="Set up again">
          Select: German → Austria → Configure manually → Connect WiFi →
          Register school management → Use school Apple ID.
        </Step>
        <Step title="Wait for Company Portal">
          The Company Portal app will be downloaded automatically. You will
          receive all school apps through it.
        </Step>
      </StepList>

      {/* ═══════════════ Accessories ═══════════════ */}
      <H2>Order Accessories</H2>

      <P>
        Spare parts, accessories and replacement devices can be ordered
        directly from the justEDU web shop:
      </P>

      <LinkCards
        items={[
          {
            href: "https://www.justedu.at/justedu-active-pen-ipad-mit-palm-rejection-tilt/",
            label: "justEDU Active Pen (iPad)",
            desc: "Stylus with palm rejection & tilt",
          },
          {
            href: "https://www.justedu.at/justedu-active-pen-ipad-2xersatzspitzen-fuer-stift-der-generation-2/",
            label: "Active Pen replacement tips (Gen 2)",
            desc: "2-pack of replacement tips for the pen",
          },
          {
            href: "https://www.justedu.at/justedu-active-pen-ipad-ersatzladekabel/",
            label: "Active Pen charging cable",
            desc: "Replacement charging cable for the justEDU Active Pen",
          },
          {
            href: "https://www.justedu.at/justedu-cover-nur-huelle-fuer-das-ipad-89/",
            label: "Case for iPad 8/9",
            desc: "Protective case (cover only) for the iPad 8/9",
          },
          {
            href: "https://www.justedu.at/justedu-rundum-sorglos-paket/",
            label: "All-round worry-free package",
            desc: "Protection and service package for the iPad",
          },
        ]}
      />

      <Callout type="info" title="School web shop">
        All products are available in the justEDU web shop at{" "}
        <a
          href="https://www.justedu.at"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          justedu.at
        </a>
        . Delivery is handled directly by justEDU.
      </Callout>

      {/* ═══════════════ Decouple iPad ═══════════════ */}
      <H2>Decouple iPad (Leaving School / End of 4th Form)</H2>

      <P>
        When your child leaves lower secondary school, the iPad is removed
        from school management:
      </P>

      <StepList>
        <Step title="IT releases serial number">
          The IT department removes the device from management.
        </Step>
        <Step title="Perform factory reset">
          Reset the iPad to factory settings via Settings → General →
          Transfer or Reset iPad.
        </Step>
        <Step title="Set up privately">
          The iPad can now be set up with a private Apple ID without school
          management.
        </Step>
      </StepList>

      {/* ═══════════════ Further Links ═══════════════ */}
      <H2>Further Links</H2>

      <LinkCards
        items={[
          {
            href: "https://digitaleslernen.oead.at/de/",
            label: "OeAD Digital Learning",
            desc: "Device initiative — main page",
          },
          {
            href: "https://digitaleslernen.oead.at/de/faqs",
            label: "OeAD FAQ",
            desc: "Frequently asked questions",
          },
          {
            href: "https://digitaleslernen.oead.at/de/fuer-schulen/geraeteinformationen",
            label: "Device information",
            desc: "Technical specifications",
          },
          {
            href: "https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung",
            label: "Payment & exemption",
            desc: "Pay the parental contribution or apply for an exemption",
          },
          {
            href: "https://digitaleslernen.oead.at/de/fuer-eltern/garantie-versicherung-reparaturen",
            label: "Warranty & insurance",
            desc: "Information on warranty and repairs",
          },
          {
            href: "https://digitaleschule.gv.at/",
            label: "Digitale Schule",
            desc: "Ministry portal",
          },
        ]}
      />

      {/* ═══ Legal Sources ═══ */}
      <H2>Legal Sources</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=14a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            SchUG, BGBl. Nr. 472/1986 i.d.g.F.
          </a>{" "}
          — § 14a (use of digital devices in the classroom)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            IKT-Schulverordnung, BGBl. II Nr. 382/2021 i.d.g.F.
          </a>{" "}
          — § 10 (device management, child protection)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/eli/bgbl/i/2021/9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            SchulDigiG, BGBl. I Nr. 9/2021 i.d.g.F.
          </a>{" "}
          — § 5 (parental contribution; legal framework for the &quot;Digital
          Learning&quot; device initiative)
        </li>
      </UL>
    </>
  );
}
