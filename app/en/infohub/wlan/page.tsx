import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "WLAN Guide — Connect to School Wi-Fi",
  description:
    "Guide for connecting to Wi-Fi at BG Zehnergasse: WPA2/WPA3 Enterprise, RADIUS login, certificates, and troubleshooting.",
};

export default function WlanPageEN() {
  return (
    <>
      <PageHeader title="WLAN — Connecting to the School Network" />

      <P>
        The school Wi-Fi uses <strong>WPA2/WPA3 Enterprise</strong> with
        RADIUS authentication. This means you log in with your personal
        school account — there is no shared Wi-Fi password.
      </P>

      <Callout type="info" title="Login Credentials">
        <ul>
          <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode> (your school account — without @bgzwn.at)</li>
          <li><strong>Password:</strong> Your personal school account password</li>
        </ul>
      </Callout>

      {/* ═══ Windows ═══ */}
      <H2>Windows 10 / 11</H2>

      <StepList>
        <Step title="Click the Wi-Fi icon in the taskbar">
          Click the Wi-Fi icon in the bottom right corner and select the
          school network.
        </Step>
        <Step title="Enter your credentials">
          <ul>
            <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Accept the certificate warning">
          A server certificate warning will appear. Click
          <strong> &quot;Connect&quot;</strong> or
          <strong> &quot;Connect anyway&quot;</strong>. This is normal
          and safe — see the section below.
        </Step>
        <Step title="Done">
          You are now connected. The connection will be saved until your
          next password change.
        </Step>
      </StepList>

      <Callout type="warning" title="Windows asks for a domain?">
        If Windows asks for a domain, leave the field empty or
        enter <InlineCode>bgzwn.at</InlineCode>.
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
        <Step title="Accept the certificate">
          macOS will display a window with certificate details. Click
          <strong> &quot;Continue&quot;</strong>. You may need to
          confirm with your Mac password or Touch ID.
        </Step>
        <Step title="Done">
          The connection will be saved in the Keychain.
        </Step>
      </StepList>

      {/* ═══ iOS ═══ */}
      <H2>iOS (iPhone / iPad)</H2>

      <StepList>
        <Step title="Settings → Wi-Fi">
          Open the Wi-Fi settings and tap on the school network.
        </Step>
        <Step title="Enter your credentials">
          <ul>
            <li><strong>Username:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Trust the certificate">
          A message &quot;Certificate Not Trusted&quot; will appear — tap
          <strong> &quot;Trust&quot;</strong> in the top right corner. This is
          normal and safe.
        </Step>
        <Step title="Done">
          The Wi-Fi will now connect automatically from now on.
        </Step>
      </StepList>

      {/* ═══ Android ═══ */}
      <H2>Android</H2>

      <StepList>
        <Step title="Settings → Wi-Fi">
          Tap on the school network.
        </Step>
        <Step title="Fill in the advanced settings">
          <ul>
            <li><strong>EAP method:</strong> PEAP</li>
            <li><strong>Phase 2 authentication:</strong> MSCHAPV2</li>
            <li><strong>CA certificate:</strong> &quot;Do not validate&quot; or &quot;Use system certificates&quot;</li>
            <li><strong>Domain:</strong> <InlineCode>bgzwn.at</InlineCode> (if prompted)</li>
            <li><strong>Identity:</strong> <InlineCode>nachname.vorname</InlineCode></li>
            <li><strong>Anonymous identity:</strong> leave empty</li>
            <li><strong>Password:</strong> Your school password</li>
          </ul>
        </Step>
        <Step title="Connect">
          Tap &quot;Connect&quot;. If a certificate warning appears,
          tap &quot;Accept&quot;.
        </Step>
      </StepList>

      <Callout type="info" title="Android versions vary">
        The menu labels vary depending on the manufacturer (Samsung, Xiaomi,
        Pixel, etc.) and Android version. However, the settings are always
        the same: PEAP + MSCHAPV2.
      </Callout>

      {/* ═══ Linux ═══ */}
      <H2>Linux (Ubuntu / Fedora)</H2>

      <P>
        Use the following settings when connecting to the Wi-Fi network:
      </P>

      <Table
        headers={["Setting", "Value"]}
        rows={[
          ["Security", "WPA & WPA2 Enterprise"],
          ["Authentication", "Protected EAP (PEAP)"],
          ["Anonymous identity", "(leave empty)"],
          ["CA certificate", "\"Not required\" or system certificates"],
          ["PEAP version", "Automatic"],
          ["Inner authentication", "MSCHAPv2"],
          ["Username", "nachname.vorname"],
          ["Password", "Your school password"],
        ]}
      />

      {/* ═══ Certificate Warning ═══ */}
      <H2>Certificate Warning — What Does It Mean?</H2>

      <P>
        When connecting to the school Wi-Fi for the first time, your device
        will display a server certificate warning. <strong>This is normal
        and can be safely accepted.</strong>
      </P>

      <H3>Why does the warning appear?</H3>

      <UL>
        <li>
          The school Wi-Fi uses a <strong>RADIUS server</strong> that
          identifies itself to your device with a certificate
        </li>
        <li>
          Since this certificate is issued internally by the school (and
          not by a public certificate authority like Let&apos;s
          Encrypt), your device classifies it as
          &quot;unknown&quot; the first time
        </li>
        <li>
          Once you accept it, it will be saved and the warning will
          not appear again
        </li>
      </UL>

      <Callout type="success" title="Safe to accept">
        You are in the school building and connecting to the official
        school network. The certificate warning can be{" "}
        <strong>safely accepted</strong>. If in doubt,
        contact the IT administration.
      </Callout>

      <H3>Summary by device</H3>

      <Table
        headers={["Device", "What to do with the certificate warning?"]}
        rows={[
          ["Windows", "Click \"Connect\" / \"Connect anyway\""],
          ["macOS", "Click \"Continue\", confirm with Mac password if needed"],
          ["iPhone / iPad", "Tap \"Trust\" (top right)"],
          ["Android", "Tap \"Accept\" or set CA certificate to \"Do not validate\""],
          ["Linux", "Set CA certificate to \"Not required\""],
        ]}
      />

      {/* ═══ Troubleshooting ═══ */}
      <H2>Common Problems &amp; Solutions</H2>

      <H3>Wi-Fi does not connect / Login fails</H3>
      <UL>
        <li>
          <strong>Check your username:</strong> Only{" "}
          <InlineCode>nachname.vorname</InlineCode> — not the full
          email address with @bgzwn.at
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
          <strong>Recently changed your password?</strong> The new password
          can take up to 15 minutes to propagate to the Wi-Fi system
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
          <strong>iPhone/iPad:</strong> Settings → General → VPN &amp;
          Device Management → check installed profiles
        </li>
        <li>
          <strong>macOS:</strong> Open Keychain Access → delete the old
          school Wi-Fi certificate → reconnect
        </li>
        <li>
          <strong>Windows:</strong> Delete the Wi-Fi profile: Settings →
          Network → Wi-Fi → Manage known networks → forget the school
          network → reconnect
        </li>
      </UL>

      <H3>Android: &quot;Authentication failed&quot;</H3>
      <UL>
        <li>Set EAP method to <strong>PEAP</strong> (not TLS or TTLS)</li>
        <li>Set Phase 2 to <strong>MSCHAPV2</strong></li>
        <li>Set CA certificate to &quot;Do not validate&quot;</li>
        <li>Set domain to <InlineCode>bgzwn.at</InlineCode> (if the field is present)</li>
        <li>Leave anonymous identity <strong>empty</strong></li>
      </UL>

      <H3>Certain websites do not load</H3>
      <UL>
        <li>
          Certain websites are blocked on the school Wi-Fi (web filter). This
          is intentional and part of the child protection measures
        </li>
        <li>
          If a page is incorrectly blocked, report it to{" "}
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
