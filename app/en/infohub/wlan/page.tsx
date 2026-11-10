import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "WLAN Guide — Connect to School Wi-Fi",
  description:
    "Guide for connecting to Wi-Fi at BG Zehnergasse: install the school certificate bgzwn-NEO-CA, set up WPA2/WPA3 Enterprise (PEAP/MSCHAPv2), and troubleshooting.",
};

const fileLink =
  "flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group";

export default function WlanPageEN() {
  return (
    <>
      <PageHeader title="WLAN — Connecting to the School Network" />

      <P>
        The school Wi-Fi uses <strong>WPA2/WPA3 Enterprise</strong> with
        RADIUS authentication. This means you log in with your personal
        school account — there is no shared Wi-Fi password. Before
        connecting, install the school certificate <strong>once</strong> so
        that your device recognises the genuine school Wi-Fi.
      </P>

      <Callout type="info" title="Login Credentials">
        <ul>
          <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode> (your school account — without @bgzwn.at)</li>
          <li><strong>Password:</strong> Your personal school account password</li>
        </ul>
      </Callout>

      <Callout type="success" title="School PCs: nothing to do">
        The school&apos;s Windows PCs (domain) already trust the school
        certificate. This guide is for <strong>private / personal
        devices</strong>: Windows laptop, Mac, phone, tablet.
      </Callout>

      {/* ═══ Step 1: Certificate ═══ */}
      <H2>Step 1: Install the School Certificate</H2>

      <P>
        Download the school certificate authority{" "}
        <InlineCode>bgzwn-NEO-CA</InlineCode> and install it on your device
        once. The file is public and contains no password and no secret key.
        It is valid until <strong>August 2030</strong>.
      </P>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        <a href="/templates/bgzwn-NEO-CA.cer" className={fileLink}>
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          <div>
            <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
              Download school certificate
            </span>
            <span className="text-xs text-txt-light block">
              bgzwn-NEO-CA.cer (1 KB)
            </span>
          </div>
        </a>
        <a
          href="/templates/wlan-zertifikat-anleitung.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={fileLink}
        >
          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          <div>
            <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
              Guide as PDF (German)
            </span>
            <span className="text-xs text-txt-light block">
              For printing — all devices on one page
            </span>
          </div>
        </a>
      </div>

      <H3>Windows (personal device)</H3>
      <StepList>
        <Step title="Open the file">
          Double-click <InlineCode>bgzwn-NEO-CA.cer</InlineCode> →{" "}
          <strong>Install Certificate…</strong>
        </Step>
        <Step title="Choose the store location">
          <strong>Current User</strong> (or <strong>Local Machine</strong> if
          you are an administrator).
        </Step>
        <Step title="Choose the certificate store">
          <strong>Place all certificates in the following store</strong> →
          Browse → <strong>Trusted Root Certification Authorities</strong> →
          OK → Next → Finish.
        </Step>
        <Step title="Confirm">
          Confirm the security warning with <strong>Yes</strong> if it
          appears.
        </Step>
      </StepList>

      <H3>macOS</H3>
      <StepList>
        <Step title="Open the file">
          Double-click <InlineCode>bgzwn-NEO-CA.cer</InlineCode> — Keychain
          Access opens.
        </Step>
        <Step title="Choose the keychain">
          Choose the <strong>System</strong> or <strong>login</strong>{" "}
          keychain → Add.
        </Step>
        <Step title="Set trust">
          Find the certificate <InlineCode>bgzwn-NEO-CA</InlineCode> →
          double-click → expand <strong>Trust</strong> → “When using this
          certificate”: <strong>Always Trust</strong>.
        </Step>
        <Step title="Save">
          Close the window and confirm with your Mac password or Touch ID.
        </Step>
      </StepList>

      <H3>iPhone / iPad</H3>
      <StepList>
        <Step title="Download the certificate">
          Open the download link above in <strong>Safari</strong> →{" "}
          <strong>Allow</strong>.
        </Step>
        <Step title="Install the profile">
          Settings → General → <strong>VPN &amp; Device Management</strong>{" "}
          → profile <InlineCode>bgzwn-NEO-CA</InlineCode> → Install.
        </Step>
        <Step title="Turn on trust">
          Settings → General → About →{" "}
          <strong>Certificate Trust Settings</strong> → turn on{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>. Don&apos;t skip this step!
        </Step>
      </StepList>

      <H3>Android</H3>
      <StepList>
        <Step title="Open the file">
          Open <InlineCode>bgzwn-NEO-CA.cer</InlineCode> → install it as a{" "}
          <strong>CA certificate</strong> (not as a “VPN and app user
          certificate”).
        </Step>
        <Step title="Name it">
          Name <InlineCode>bgzwn-NEO-CA</InlineCode> → OK (enter your device
          PIN if asked).
        </Step>
        <Step title="If the file does not open">
          Settings → Security → Install a certificate →{" "}
          <strong>CA certificate</strong> → select the downloaded file.
        </Step>
      </StepList>

      <Callout type="warning" title="Android: menus differ by manufacturer">
        Menu names differ by manufacturer — Samsung: Biometrics/Security →
        Install certificates; Pixel: Security &amp; privacy → Install a
        certificate. You can usually check the
        installation under “Trusted credentials” → User.
      </Callout>

      {/* ═══ Step 2: Settings ═══ */}
      <H2>Step 2: Wi-Fi Settings (All Devices)</H2>

      <P>
        If your device asks for details, use these settings. The guides for
        the individual devices follow below.
      </P>

      <Table
        headers={["Field", "Setting"]}
        rows={[
          ["Security", "WPA2/WPA3 Enterprise (802.1X)"],
          ["EAP method", "PEAP"],
          ["Phase 2 / inner authentication", "MSCHAPv2"],
          ["CA certificate", "bgzwn-NEO-CA (or system certificates after installation)"],
          ["Server / domain", "neo.bgzwn.at"],
          ["Anonymous identity", "leave empty"],
          ["Username / identity", "nachname.vorname"],
          ["Password", "Your school password"],
        ]}
      />

      {/* ═══ Windows ═══ */}
      <H2>Windows 10 / 11</H2>

      <StepList>
        <Step title="Click the Wi-Fi icon in the taskbar">
          Click the Wi-Fi icon in the bottom right and select the school
          network.
        </Step>
        <Step title="Enter your credentials">
          <ul>
            <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Check the certificate">
          If Windows asks whether to continue connecting, click{" "}
          <strong>Show certificate details</strong>. If it shows{" "}
          <InlineCode>neo.bgzwn.at</InlineCode>, issued by{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>, click{" "}
          <strong>Connect</strong>.
        </Step>
        <Step title="Done">
          You are now connected. The connection is saved until your next
          password change.
        </Step>
      </StepList>

      <Callout type="info" title="Manual setup (if needed)">
        Wi-Fi properties → Security → <strong>Microsoft: Protected EAP
        (PEAP)</strong> → Settings → under Trusted Root Certification
        Authorities tick <InlineCode>bgzwn-NEO-CA</InlineCode> → server name{" "}
        <InlineCode>neo.bgzwn.at</InlineCode> (if the field exists) →
        authentication method <strong>Secured password
        (EAP-MSCHAP v2)</strong>.
      </Callout>

      <Callout type="warning" title="Windows asks for a domain?">
        If Windows asks for a domain, leave the field empty or enter{" "}
        <InlineCode>bgzwn.at</InlineCode>.
      </Callout>

      {/* ═══ macOS ═══ */}
      <H2>macOS (MacBook)</H2>

      <StepList>
        <Step title="Click the Wi-Fi icon in the top right">
          Select the school network from the list.
        </Step>
        <Step title="Enter your credentials">
          <ul>
            <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Check the certificate">
          If macOS shows a certificate, click{" "}
          <strong>Show Certificate</strong>. If it shows{" "}
          <InlineCode>neo.bgzwn.at</InlineCode>, issued by{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>, click{" "}
          <strong>Continue</strong> and confirm with your Mac password or
          Touch ID if asked.
        </Step>
        <Step title="Done">
          The connection is saved in your Keychain.
        </Step>
      </StepList>

      {/* ═══ iOS ═══ */}
      <H2>iOS (iPhone / iPad)</H2>

      <StepList>
        <Step title="Settings → Wi-Fi">
          Open the Wi-Fi settings and tap the school network.
        </Step>
        <Step title="Enter your credentials">
          <ul>
            <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Check the certificate">
          If a certificate appears, check: name{" "}
          <InlineCode>neo.bgzwn.at</InlineCode>, issued by{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode>. Then tap{" "}
          <strong>Trust</strong> in the top right.
        </Step>
        <Step title="Done">
          The Wi-Fi will now connect automatically.
        </Step>
      </StepList>

      {/* ═══ Android ═══ */}
      <H2>Android</H2>

      <StepList>
        <Step title="Settings → Wi-Fi">
          Tap the school network.
        </Step>
        <Step title="Fill in the advanced settings">
          <ul>
            <li><strong>EAP method:</strong> PEAP</li>
            <li><strong>Phase 2 authentication:</strong> MSCHAPV2</li>
            <li><strong>CA certificate:</strong> <InlineCode>bgzwn-NEO-CA</InlineCode> (installed in step 1)</li>
            <li><strong>Domain:</strong> <InlineCode>neo.bgzwn.at</InlineCode></li>
            <li><strong>Identity:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Anonymous identity:</strong> leave empty</li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Connect">
          Tap &quot;Connect&quot;.
        </Step>
      </StepList>

      <Callout type="info" title="Android versions vary">
        Menu names vary by manufacturer (Samsung, Xiaomi, Pixel, etc.) and
        Android version. The settings are always the same: PEAP + MSCHAPV2,
        CA certificate <InlineCode>bgzwn-NEO-CA</InlineCode>, domain{" "}
        <InlineCode>neo.bgzwn.at</InlineCode>.
      </Callout>

      {/* ═══ Linux ═══ */}
      <H2>Linux (Ubuntu / Fedora)</H2>

      <P>
        Use the following settings for the Wi-Fi connection:
      </P>

      <Table
        headers={["Setting", "Value"]}
        rows={[
          ["Security", "WPA & WPA2 Enterprise"],
          ["Authentication", "Protected EAP (PEAP)"],
          ["Anonymous identity", "(leave empty)"],
          ["CA certificate", "Select the file bgzwn-NEO-CA.cer"],
          ["Domain (if available)", "neo.bgzwn.at"],
          ["PEAP version", "Automatic"],
          ["Inner authentication", "MSCHAPv2"],
          ["Username", "nachname.vorname"],
          ["Password", "Your school password"],
        ]}
      />

      {/* ═══ Certificate ═══ */}
      <H2>Why a Certificate?</H2>

      <P>
        When you log in, the school&apos;s Wi-Fi login server (
        <InlineCode>neo.bgzwn.at</InlineCode>) identifies itself with a
        certificate. This lets your device check that it is really connected
        to the school network — and not to a <strong>fake hotspot</strong>{" "}
        that only wants to steal your school password.
      </P>

      <UL>
        <li>
          The certificate is issued by the school itself (
          <InlineCode>bgzwn-NEO-CA</InlineCode>). That is why your device only
          knows it after you have installed it once (step 1).
        </li>
        <li>
          After that, your device recognises the school server automatically
          — installing it once is enough until August 2030.
        </li>
        <li>
          Installing it is safe: it is only the school&apos;s public root
          certificate — no password, no secret key.
        </li>
      </UL>

      <Callout type="danger" title="Unknown certificate? Do not connect!">
        If your device shows a certificate that is <strong>not</strong> for{" "}
        <InlineCode>neo.bgzwn.at</InlineCode> or was not issued by{" "}
        <InlineCode>bgzwn-NEO-CA</InlineCode>, do not enter your password and
        report it to{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary hover:underline"
        >
          admin@bgzwn.at
        </a>
        .
      </Callout>

      <H3>Verify the certificate yourself (optional)</H3>
      <P>
        If you want to be completely sure, compare the fingerprint (SHA-256)
        of the downloaded file:
      </P>
      <p className="text-sm bg-code-bg text-txt px-3 py-2 rounded font-mono break-all mb-4">
        2E:D1:29:57:A8:0E:B6:07:FD:B9:8E:2D:85:55:D4:EA:BE:D8:BF:21:46:02:75:96:E6:C0:F2:E5:A4:1E:B9:22
      </p>

      <H3>Summary by device</H3>

      <Table
        headers={["Device", "Install certificate", "When connecting"]}
        rows={[
          ["Windows", "Trusted Root Certification Authorities", "Check details → \"Connect\""],
          ["macOS", "Keychain → \"Always Trust\"", "Show Certificate → \"Continue\""],
          ["iPhone / iPad", "Install profile + turn on trust", "Check certificate → \"Trust\""],
          ["Android", "Install as CA certificate", "CA bgzwn-NEO-CA, domain neo.bgzwn.at"],
          ["Linux", "Not needed", "Select bgzwn-NEO-CA.cer as CA certificate"],
        ]}
      />

      {/* ═══ Troubleshooting ═══ */}
      <H2>Common Problems &amp; Solutions</H2>

      <H3>Wi-Fi does not connect / Login fails</H3>
      <UL>
        <li>
          <strong>Check your username:</strong> Only{" "}
          <InlineCode>nachname.vorname</InlineCode> — not the full email
          address with @bgzwn.at
        </li>
        <li>
          <strong>Check your password:</strong> The same password as for
          Office 365, WebUntis, and the school PC
        </li>
        <li>
          <strong>Account locked?</strong> After 10 failed attempts, the
          account is locked for 10 minutes — wait and try again
        </li>
        <li>
          <strong>Password recently changed?</strong> The new password can
          take up to 15 minutes to reach the Wi-Fi system
        </li>
      </UL>

      <H3>Connection keeps dropping</H3>
      <UL>
        <li>&quot;Forget&quot; the Wi-Fi network on your device and reconnect</li>
        <li>Restart your device</li>
        <li>Check that your device is not switching between multiple Wi-Fi networks (e.g., delete the guest Wi-Fi)</li>
      </UL>

      <H3>Certificate warning keeps appearing</H3>
      <UL>
        <li>
          <strong>All devices:</strong> “Forget” or remove the school
          network, check that <InlineCode>bgzwn-NEO-CA</InlineCode> is
          installed, then reconnect
        </li>
        <li>
          <strong>iPhone/iPad:</strong> Settings → General → About →
          Certificate Trust Settings → is{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode> turned on?
        </li>
        <li>
          <strong>macOS:</strong> Keychain Access → is{" "}
          <InlineCode>bgzwn-NEO-CA</InlineCode> set to “Always Trust”? Delete
          old saved school Wi-Fi entries → reconnect
        </li>
        <li>
          <strong>Windows:</strong> Delete the Wi-Fi profile: Settings →
          Network → Wi-Fi → Manage known networks → Forget the school network
          → reconnect
        </li>
      </UL>

      <H3>Android: &quot;Authentication failed&quot;</H3>
      <UL>
        <li>Set EAP method to <strong>PEAP</strong> (not TLS or TTLS)</li>
        <li>Set Phase 2 to <strong>MSCHAPV2</strong></li>
        <li>Set CA certificate to <InlineCode>bgzwn-NEO-CA</InlineCode> — if it is not in the list, complete step 1 first</li>
        <li>Set domain to <InlineCode>neo.bgzwn.at</InlineCode></li>
        <li>Leave anonymous identity <strong>empty</strong></li>
      </UL>

      <H3>Certain websites do not load</H3>
      <UL>
        <li>
          Certain websites are blocked on the school Wi-Fi (web filter).
          This is intentional and part of child protection measures
        </li>
        <li>
          If a page is blocked by mistake, report it to{" "}
          <a
            href="mailto:admin@bgzwn.at"
            className="text-primary hover:underline"
          >
            admin@bgzwn.at
          </a>
        </li>
      </UL>

      <H3>Nothing helps — what now?</H3>
      <Callout type="info" title="Contact IT">
        If none of the solutions work, contact the IT administration:{" "}
        <a
          href="mailto:admin@bgzwn.at"
          className="text-primary hover:underline"
        >
          admin@bgzwn.at
        </a>
        . Please include: your device (e.g., iPhone 15, Windows 11), which
        network, and the exact error message.
      </Callout>

      {/* ═══ Legal Sources ═══ */}
      <H2>Legal Sources</H2>

      <UL>
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
          — § 5 (authentication and secure access to school IT systems)
        </li>
        <li>
          §{" "}
          <a
            href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20011451"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            BilDokG 2020, BGBl. I Nr. 20/2021
          </a>{" "}
          (processing of login data in the school network)
        </li>
      </UL>
    </>
  );
}
