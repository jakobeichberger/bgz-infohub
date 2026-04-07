import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

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

      <H2>Device Initiative &quot;Digital Learning&quot;</H2>

      <P>
        The device initiative is part of the 8-point plan for digitising
        education by the Austrian Federal Ministry of Education (BMBWF). The
        goal is to provide all students in lower secondary education with
        equal access to digital learning.
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Device", "Apple iPad (chosen by the school)"],
          ["Management", "Microsoft InTune (MDM)"],
          ["Parental contribution", "25% of device price (per SchDigiG § 5 para. 2)"],
          ["Eligible", "Students in 5th school year (lower secondary)"],
          ["Managed by", "OeAD — Agency for Education and Internationalisation"],
        ]}
      />

      <Callout type="success" title="EU Recovery Plan">
        The initiative is funded with <strong>EUR 171.7 million</strong> from
        the EU Recovery and Resilience Facility.{" "}
        <a href="https://digitaleslernen.oead.at/de/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          More at digitaleslernen.oead.at
        </a>
      </Callout>

      <H3>Procurement &amp; Payment</H3>

      <UL>
        <li>Parents receive a payment request with a <strong>unique reference number</strong> — please use it exactly</li>
        <li>The parental contribution is 25% of the device price</li>
        <li>The school does not receive or process payments</li>
      </UL>

      <H3>Exemption from payment</H3>

      <P>
        Under certain social circumstances, an exemption from the parental
        contribution can be applied for:
      </P>

      <UL>
        <li>Online via{" "}
          <a href="https://digitaleslernen.oead.at/de/fuer-eltern/avb-bezahlung-befreiung" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">
            Payment &amp; exemption on digitaleslernen.oead.at
          </a>
        </li>
        <li>Or via the PoDS parent portal</li>
        <li>The ministry decides on approval — not the school</li>
      </UL>

      <H3>Warranty &amp; Hardware Support</H3>

      <Callout type="warning" title="Important: The school does not provide hardware support">
        For hardware defects (display, battery, charging cable etc.) the
        supplier <strong>ACP TechRent</strong> is responsible — not the school.
        The school only assists with configuring apps and programmes for
        lessons.
      </Callout>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["Supplier", "ACP TechRent GmbH"],
          ["Address", "Ernst Krenek Gasse 4, 1230 Vienna"],
          ["Phone", "+43 1 813 0000"],
          ["Email", "sales@acptechrent.at"],
          ["Website", "acptechrent.at"],
        ]}
      />

      <P>
        More about warranty:{" "}
        <a href="https://digitaleslernen.oead.at/de/garantie-versicherung" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">
          digitaleslernen.oead.at/de/garantie-versicherung
        </a>
      </P>

      <H3>School transfer — Device exchange</H3>

      <P>
        When changing schools, devices can be exchanged via the OeAD device
        exchange:{" "}
        <a href="https://digitaleslernen.oead.at/de/fuer-eltern/geraete-support/geraeteboerse" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">
          Device exchange
        </a>
      </P>

      <Callout type="info" title="OeAD hotline for all device initiative questions">
        <ul>
          <li><strong>Phone:</strong> +43 720 080 356 (Mon–Fri 07:30–18:00)</li>
          <li><strong>Email:</strong>{" "}
            <a href="mailto:digitaleslernen@oead.at" className="text-primary dark:text-blue-400 hover:underline">digitaleslernen@oead.at</a>
          </li>
          <li><strong>FAQ:</strong>{" "}
            <a href="https://digitaleslernen.oead.at/de/faqs" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">digitaleslernen.oead.at/de/faqs</a>
          </li>
        </ul>
      </Callout>

      <H2>Child Protection &amp; MDM</H2>

      <P>
        Child protection measures are active on lower secondary devices in
        accordance with Austrian school law:
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
        <a href="https://www.saferinternet.at" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">SaferInternet.at</a>
      </Callout>

      <H2>Device Management (Azure AD / InTune)</H2>

      <Table
        headers={["Level", "Description", "IT access"]}
        rows={[
          ["Apps Only", "Only school apps installed, no management", "None"],
          ["Partial (AAD Registered)", "Work profile created, school data separated", "No access to personal data"],
          ["Full (AAD Joined)", "Fully school-managed (iPad initiative)", "Device policies enforced"],
        ]}
      />

      <Callout type="success" title="Privacy with Partial Management">
        With partial registration, IT has <strong>no access</strong> to
        personal photos, documents or messages.
      </Callout>

      <H2>iPad Factory Reset</H2>

      <P>
        If the iPad has serious problems, you can reset it to factory
        settings. You will need a computer with iTunes.
      </P>

      <StepList>
        <Step title="Install iTunes">
          Download and install iTunes on your computer.
        </Step>
        <Step title="Activate recovery mode">
          Follow Apple&apos;s official instructions to put the iPad into
          recovery mode.
        </Step>
        <Step title="Restore iPad">
          Select &quot;Restore&quot; in iTunes and wait for the process to
          complete.
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

      <H2>Order Accessories</H2>

      <Table
        headers={["Product", "Order via"]}
        rows={[
          ["Active Pen replacement tips (Gen 1)", "justedu.at"],
          ["Active Pen replacement tips (Gen 2)", "justedu.at"],
          ["Slim Keyboard Cover (iPad 8/9)", "justedu.at"],
        ]}
      />

      <H2>Decouple iPad (Leaving School)</H2>

      <StepList>
        <Step title="IT releases serial number">
          The IT department removes the device from management.
        </Step>
        <Step title="Perform factory reset">
          Reset the iPad via Settings → General → Transfer or Reset iPad.
        </Step>
        <Step title="Set up privately">
          The iPad can now be set up with a private Apple ID without school
          management.
        </Step>
      </StepList>
    </>
  );
}
