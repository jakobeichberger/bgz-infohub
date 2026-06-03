import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "MDM Setup",
  description:
    "Step-by-step instructions for device management (Mobile Device Management) on iOS and Windows.",
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

      {/* ═══ Company Portal ═══ */}
      <H2>Intune Company Portal</H2>

      <P>
        The <strong>Intune Company Portal</strong> is Microsoft&apos;s central
        app for device management. It is the entry point for registering your
        device and obtaining school apps on iOS and Windows.
      </P>

      <Table
        headers={["Detail", "Information"]}
        rows={[
          ["App name", "Intune Company Portal"],
          ["Developer", "Microsoft Corporation"],
          ["Price", "Free"],
          ["Available for", "iOS (App Store), Windows (Microsoft Store)"],
          ["Login credentials", "lastname.firstname@bgzwn.at + school password"],
        ]}
      />

      <H3>What can the app do?</H3>

      <UL>
        <li>
          <strong>Device registration</strong> — register your device with
          the school IT (Partial or Full Management)
        </li>
        <li>
          <strong>Install school apps</strong> — required apps (WebUntis,
          Teams) are deployed automatically; additional apps can be installed
          from the app catalogue
        </li>
        <li>
          <strong>Check compliance status</strong> — shows whether your
          device meets school policies (e.g. passcode set, OS up to date)
        </li>
        <li>
          <strong>Rename device</strong> — optionally give your device a
          recognisable name
        </li>
        <li>
          <strong>Unregister device</strong> — the registration can be
          reversed at any time
        </li>
      </UL>

      <Callout type="info" title="How to find the app">
        <div className="flex items-start gap-4">
          <img
            src="/intune-company-portal.png"
            alt="Intune Company Portal app icon"
            width={64}
            height={64}
            className="rounded-xl flex-shrink-0"
          />
          <div>
            <p>
              Search the App Store for{" "}
              <strong>&quot;Intune&quot;</strong> or{" "}
              <strong>&quot;Company Portal&quot;</strong>. Look for the app
              icon shown on the left. Publisher:{" "}
              <strong>Microsoft Corporation</strong>.
            </p>
            <p>
              <a
                href="https://apps.apple.com/at/app/intune-unternehmensportal/id719171358"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Open directly in the App Store
              </a>
            </p>
          </div>
        </div>
      </Callout>

      {/* ═══ iOS ═══ */}
      <H2>iOS (iPhone / iPad)</H2>

      <H3>Option 1: Apps Only</H3>
      <P>
        Install the required apps (WebUntis, Teams, etc.) directly from the
        App Store. No registration needed.
      </P>

      <H3>Option 2: Partial Management (recommended)</H3>

      <StepList>
        <Step title="Install Company Portal">
          Download the{" "}
          <a
            href="https://apps.apple.com/at/app/intune-unternehmensportal/id719171358"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Intune Company Portal
          </a>{" "}
          from the App Store. Search for &quot;Intune&quot; or &quot;Company
          Portal&quot;.
        </Step>
        <Step title="Sign in with school account">
          Open the app and sign in with{" "}
          <code>lastname.firstname@bgzwn.at</code> and your personal
          password.
        </Step>
        <Step title="Register device">
          Tap &quot;Begin registration&quot; and follow the instructions. The
          app will ask you to install a{" "}
          <strong>management profile</strong>.
        </Step>
        <Step title="Confirm management profile">
          You will be redirected to iOS Settings. Tap &quot;Profile
          Downloaded&quot; → &quot;Install&quot; → enter your device
          passcode → confirm &quot;Install&quot; → &quot;Trust&quot;.
        </Step>
        <Step title="Return to the app">
          Switch back to the Company Portal. The compliance check runs
          automatically. Once everything is green, the school apps will be
          installed.
        </Step>
        <Step title="Use school apps">
          Required apps like WebUntis and Teams are installed automatically.
          Additional apps are available in the &quot;Apps&quot; tab in the
          Company Portal.
        </Step>
      </StepList>

      <H3>Option 3: Full Management</H3>
      <P>
        Configured automatically for devices from the device initiative. The
        iPad is enrolled via Apple DEP (Device Enrollment Program) on first
        boot — no manual setup needed.
      </P>

      {/* ═══ iOS Troubleshooting ═══ */}
      <H3>Common iOS Issues</H3>

      <UL>
        <li>
          <strong>&quot;Registration failed&quot;</strong> — Make sure you are
          connected to the school Wi-Fi and the password is correct. After 10
          failed attempts the account is locked for 10 minutes.
        </li>
        <li>
          <strong>Profile installation aborts</strong> — Go to Settings →
          General → VPN &amp; Device Management and check if a
          &quot;Downloaded Profile&quot; is waiting. If so, tap it and
          install manually.
        </li>
        <li>
          <strong>&quot;Device not compliant&quot;</strong> — Most common
          cause: no device passcode set. Go to Settings → Face ID &amp;
          Passcode (or Touch ID &amp; Passcode) and set up a passcode.
        </li>
        <li>
          <strong>Apps are not installing</strong> — Open the Company Portal →
          &quot;Devices&quot; tab → tap your device → &quot;Check
          compliance&quot;. If all green: wait 5–10 minutes, apps are
          downloading in the background.
        </li>
        <li>
          <strong>Company Portal won&apos;t open</strong> — Uninstall and
          reinstall from the App Store. Your registration is preserved.
        </li>
      </UL>

      <H2>Windows 10 / 11</H2>

      <P>
        For Windows there are three paths — from &quot;don&apos;t register at
        all&quot; to &quot;fully managed&quot;. For{" "}
        <strong>private laptops</strong> we recommend connecting via your
        school account (Partial Management).
      </P>

      <H3>Option 1: Use browser only (no registration)</H3>
      <P>
        You can use all school services (Office 365, WebUntis, edu.Suite)
        directly in the browser without registering your device. Just sign in
        at{" "}
        <a
          href="https://portal.office.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          portal.office.com
        </a>{" "}
        with your school account. This is the simplest and most
        privacy-friendly option.
      </P>

      <H3>Option 2: Connect with your school account (Partial Management — recommended)</H3>
      <P>
        This <strong>registers</strong> your private device with{" "}
        <strong>Microsoft Entra ID</strong> (formerly Azure AD) — it is not
        fully managed. You remain the owner and administrator of the device;
        the school only gets limited access (deploying school apps, compliance
        checks). Personal files stay private.
      </P>

      <StepList>
        <Step title="Open Settings">
          <code>Windows key + i</code> → <strong>Accounts</strong> →{" "}
          <strong>Access work or school</strong>.
        </Step>
        <Step title="Click “Connect”">
          Click <strong>&quot;Connect&quot;</strong> (not the alternative
          actions further down — see warning).
        </Step>
        <Step title="Enter your school account">
          Enter <code>lastname.firstname@bgzwn.at</code> and your personal
          password.
        </Step>
        <Step title="Confirm">
          Follow the instructions and confirm. <strong>No</strong> new Windows
          user account is created — you keep working with your usual account.
        </Step>
        <Step title="Done">
          The school account now appears under &quot;Access work or
          school&quot;. School apps and policies are deployed in the
          background.
        </Step>
      </StepList>

      <Callout type="danger" title="Warning: Avoid full management (Entra Join)!">
        In the sign-in dialog, a link appears at the bottom:{" "}
        <strong>&quot;Alternative action: Join this device to Microsoft Entra
        ID&quot;</strong>. <strong>Do NOT click it!</strong> It would add your
        private device to <strong>full</strong> school management (a separate
        managed user account, full policies). For private laptops, always use
        the normal <strong>&quot;Connect&quot;</strong> path.
      </Callout>

      <H3>Option 3: Full management (school devices)</H3>
      <P>
        Windows devices issued by the school are already fully managed via{" "}
        <strong>Windows Autopilot</strong> (like the iPads). No manual setup is
        needed — the device enrols automatically on first start.
      </P>

      {/* ═══ Windows Troubleshooting ═══ */}
      <H3>Common Windows issues</H3>
      <UL>
        <li>
          <strong>&quot;Something went wrong&quot; when connecting</strong> —
          Connected to the school Wi-Fi/internet? Are the PC&apos;s date and
          time correct? Then try again.
        </li>
        <li>
          <strong>Login fails</strong> — Always use the full email{" "}
          <code>lastname.firstname@bgzwn.at</code> as the username. After 10
          failed attempts the account is locked for 10 minutes.
        </li>
        <li>
          <strong>School apps missing</strong> — after connecting, wait 10–15
          minutes; apps install in the background. Optionally install the{" "}
          <strong>Company Portal</strong> from the Microsoft Store to get apps
          manually.
        </li>
        <li>
          <strong>Accidentally &quot;joined&quot; (full join)?</strong>{" "}
          Disconnect (see below) and set it up again via &quot;Connect&quot;.
        </li>
      </UL>

      <H3>Remove the registration</H3>
      <P>
        Settings → Accounts → Access work or school → click the school account
        → <strong>&quot;Disconnect&quot;</strong> → confirm. Then restart the
        device.
      </P>

      <H2>General Notes</H2>

      <UL>
        <li>With Partial Management, IT has <strong>no access</strong> to personal files, photos or messages</li>
        <li>Required apps like WebUntis and Teams are provided automatically after registration</li>
        <li>You can undo the registration at any time in device settings</li>
        <li>For problems: <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">admin@bgzwn.at</a></li>
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
            className="text-primary hover:underline"
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
            className="text-primary hover:underline"
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
