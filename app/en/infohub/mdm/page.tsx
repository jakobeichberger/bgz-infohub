import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "MDM Setup",
  description:
    "Step-by-step instructions for device management (Mobile Device Management) on iOS, Android and Windows.",
};

export default function MdmPageEN() {
  return (
    <>
      <PageHeader title="MDM Setup" />

      <P>
        The school uses <strong>Microsoft InTune</strong> for device management
        (Mobile Device Management). Here you will find instructions for each
        platform — explained step by step.
      </P>

      <H2>Which management level do I need?</H2>

      <Table
        headers={["Level", "What happens?", "Recommended for"]}
        rows={[
          ["Apps Only", "You install school apps yourself from the app store — the device is not registered", "Private devices, if no management desired"],
          ["Partial Management ✅", "A work profile is created — school and private data are separated", "Most students (recommended)"],
          ["Full Management", "The device is fully managed by the school", "Devices from the iPad initiative (automatic)"],
        ]}
      />

      <Callout type="success" title="Privacy">
        With <strong>Partial Management</strong>, IT has no access to your
        personal photos, messages, apps or files. Only the work profile with
        school apps is managed.
      </Callout>

      <H2>iOS (iPhone / iPad)</H2>

      <H3>Option 1: Apps Only</H3>
      <P>Install the required apps (WebUntis, Teams, etc.) directly from the App Store. No registration needed.</P>

      <H3>Option 2: Partial Management (recommended)</H3>

      <StepList>
        <Step title="Install Company Portal">
          Download the &quot;Intune Company Portal&quot; app from the App Store.
        </Step>
        <Step title="Sign in with school account">
          Sign in with <code>lastname.firstname@bgzwn.at</code> and your personal password.
        </Step>
        <Step title="Install management profile">
          Follow the instructions in the app. You will be asked to confirm a management profile in iOS Settings.
        </Step>
        <Step title="Load school apps">
          After registration, all school apps are available in the Company Portal. Required apps like WebUntis and Teams are installed automatically.
        </Step>
      </StepList>

      <H3>Option 3: Full Management</H3>
      <P>Configured automatically for devices from the device initiative. No manual setup needed.</P>

      <H2>Android</H2>

      <H3>Option 1: Apps Only</H3>
      <P>Install the required apps directly from the Google Play Store.</P>

      <H3>Option 2: Partial Management (recommended)</H3>

      <StepList>
        <Step title="Install Company Portal">
          Download &quot;Intune Company Portal&quot; from the Google Play Store.
        </Step>
        <Step title="Sign in with school account">
          Sign in with your school account.
        </Step>
        <Step title="Set up work profile">
          The app creates a separate work profile. School apps appear with a briefcase icon in the &quot;Business&quot; tab.
        </Step>
        <Step title="Done!">
          Personal and school data are now completely separated. IT has no access to your private apps and data.
        </Step>
      </StepList>

      <Callout type="success" title="Data separation on Android">
        The work profile creates a complete separation between school and private data. Your personal photos, messages and apps remain private.
      </Callout>

      <H2>Windows</H2>

      <H3>Option 1: Use browser only</H3>
      <P>You can use all school services (Office 365, WebUntis, edu.Suite) directly in the browser without registering your device. This is the simplest option.</P>

      <H3>Option 2: Partial Management</H3>

      <StepList>
        <Step title="Open Settings">
          Go to Settings → Accounts → Access work or school.
        </Step>
        <Step title="Connect">
          Click &quot;Connect&quot; and sign in with your school account (<code>lastname.firstname@bgzwn.at</code>).
        </Step>
        <Step title="Complete setup">
          Follow the instructions to register the device.
        </Step>
      </StepList>

      <Callout type="danger" title="Warning: Avoid full management!">
        During setup, do <strong>not</strong> select &quot;Alternative action&quot; or &quot;Join this device&quot;. This would unintentionally add your device to full school management!
      </Callout>

      <H2>General Notes</H2>

      <UL>
        <li>With Partial Management, IT has <strong>no access</strong> to personal files, photos or messages</li>
        <li>Required apps like WebUntis and Teams are provided automatically after registration</li>
        <li>You can undo the registration at any time in device settings</li>
        <li>For problems: <a href="mailto:admin@bgzwn.at" className="text-[var(--primary)] hover:underline">admin@bgzwn.at</a></li>
      </UL>

      {/* ═══ Legal Sources ═══ */}
      <H2>Legal Sources</H2>

      <UL>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10009600&Paragraf=14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            SchUG, BGBl. Nr. 472/1986 i.d.g.F.
          </a>{" "}
          — § 14 Abs. 8a (use of digital devices in the classroom)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011647"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:underline"
          >
            IKT-Schulverordnung, BGBl. II Nr. 382/2021
          </a>{" "}
          — § 10 (device management and configuration), § 5
          (authentication and secure access)
        </li>
      </UL>
    </>
  );
}
