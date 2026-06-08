import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Teachers — IT Quick Help",
  description:
    "IT quick help for teachers at BG Zehnergasse: quick fixes for projector, computer, audio, WiFi and presentation problems in the classroom.",
};

export default function LehrkraeftePageEN() {
  return (
    <>
      <PageHeader title="Teachers — IT Quick Help" />

      <P>
        This page is aimed at <strong>teachers</strong> and offers quick
        self-help for the most common IT problems in everyday teaching —
        projector, computer, audio, WiFi and presentation. Most problems can be
        solved by yourself in under a minute.
      </P>

      {/* ═══════════════ Golden Rules ═══════════════ */}
      <Callout type="success" title="The 5 golden rules (try these first!)">
        Before contacting IT, these five steps solve most problems:
        <ul>
          <li>
            <strong>1. Restart</strong> — turning the device off and on again
            solves around 80 % of all problems.
          </li>
          <li>
            <strong>2. Check cables</strong> — is every cable firmly connected
            at both ends? (power, HDMI, USB)
          </li>
          <li>
            <strong>3. Wait a moment</strong> — some devices (especially
            projectors) need 1–2 minutes to start up.
          </li>
          <li>
            <strong>4. Switch source</strong> — is the correct input source
            selected on the projector? Does another cable/device work?
          </li>
          <li>
            <strong>5. Take notes</strong> — if nothing helps: note the exact
            error message and room, then contact IT.
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Projector ═══════════════ */}
      <H2>Projector / Beamer</H2>

      <Callout type="info" title="HDMI assignment at BG Zehnergasse">
        In the classrooms, the projector inputs are permanently assigned:
        <ul>
          <li>
            <strong>HDMI 1</strong> — the fixed{" "}
            <strong>class laptop</strong>
          </li>
          <li>
            <strong>HDMI 2</strong> — the <strong>j5create</strong> for{" "}
            <strong>wireless casting</strong> from Windows and Apple/iOS devices
            (see the &quot;Wireless casting&quot; section below)
          </li>
        </ul>
        Select the appropriate source with the projector remote
        (&quot;Source&quot; / &quot;Input&quot;).
      </Callout>

      <H3>Projector shows no image</H3>

      <StepList>
        <Step title="Is the projector switched on?">
          Check the power LED. If it is red/orange, the projector is in
          standby — switch it on with the remote or the power button. After
          switching on, allow 1–2 minutes of warm-up time.
        </Step>
        <Step title="Select the correct input source">
          Press <strong>&quot;Source&quot;</strong> or{" "}
          <strong>&quot;Input&quot;</strong> on the remote and select the
          correct source: <InlineCode>HDMI 1</InlineCode> for the{" "}
          <strong>class laptop</strong>, <InlineCode>HDMI 2</InlineCode> for{" "}
          <strong>wireless casting (j5create)</strong>.
        </Step>
        <Step title="Check the cables">
          Plug the HDMI cable firmly into both ends (PC and projector). If
          there are several ports, try a different one.
        </Step>
        <Step title="Send the PC image to the projector">
          Press <InlineCode>Windows key + P</InlineCode> and select{" "}
          <strong>&quot;Duplicate&quot;</strong> or
          <strong> &quot;Extend&quot;</strong> (see table below).
        </Step>
      </StepList>

      <H3>Send your screen to the projector (Windows + P)</H3>

      <P>
        The keyboard shortcut <InlineCode>Windows key + P</InlineCode> is the
        fastest fix for most projector problems:
      </P>

      <Table
        headers={["Mode", "What happens?", "When to use?"]}
        rows={[
          ["PC screen only", "Projector stays black", "When the projector should show nothing"],
          ["Duplicate", "Same image on PC and projector", "Standard for teaching (recommended)"],
          ["Extend", "Projector as a second screen", "Notes on the PC, presentation on the projector"],
          ["Second screen only", "Only projector shows image, PC stays black", "Rarely — only if desired"],
        ]}
      />

      <H3>How to switch between modes</H3>

      <StepList>
        <Step title="Press Win + P">
          Hold the <InlineCode>Windows key</InlineCode> and tap{" "}
          <InlineCode>P</InlineCode> once. A selection bar with the four modes
          appears on the right edge of the screen.
        </Step>
        <Step title="Select a mode — two ways">
          <ul>
            <li>
              <strong>With the mouse:</strong> click the desired mode directly
              (e.g. &quot;Duplicate&quot; or &quot;Extend&quot;).
            </li>
            <li>
              <strong>Keyboard only:</strong> keep holding the{" "}
              <InlineCode>Windows key</InlineCode> and tap{" "}
              <InlineCode>P</InlineCode> repeatedly — each press moves the
              highlight one mode further. Release the Windows key on the
              correct mode.
            </li>
          </ul>
        </Step>
        <Step title="Confirm">
          The switch happens immediately. No restart and no further click is
          needed.
        </Step>
      </StepList>

      <Callout type="info" title="Mirror ↔ Extend — what's the difference?">
        <ul>
          <li>
            <strong>Duplicate (mirror):</strong> projector and PC show{" "}
            <strong>the same image</strong>. What you see on the PC is what the
            class sees. <strong>This is the normal case for teaching.</strong>
          </li>
          <li>
            <strong>Extend:</strong> the projector becomes an{" "}
            <strong>extension</strong> of the PC screen. You can drag windows
            from the PC onto the projector — ideal for keeping the PowerPoint
            presenter view (notes) on the PC while the class only sees the
            slides.
          </li>
        </ul>
        <p>
          <strong>Fastest switch:</strong>{" "}
          <InlineCode>Windows + P</InlineCode> and choose between
          &quot;Duplicate&quot; and &quot;Extend&quot; — possible at any time
          during the lesson.
        </p>
      </Callout>

      <Callout type="warning" title="With &quot;Extend&quot;: image doesn't appear / window disappears">
        In <strong>&quot;Extend&quot;</strong> mode the projector area sits to
        the right of the PC screen. If a program &quot;disappears&quot;, it was
        moved onto the projector. Fix: click the window and move it between
        screens with{" "}
        <InlineCode>Windows + Shift + Arrow ←/→</InlineCode>. If you just want a
        mirrored image: switch back to <strong>&quot;Duplicate&quot;</strong>.
      </Callout>

      <H3>Laptop screen stays black, but the projector shows an image</H3>
      <P>
        The cause is almost always the display mode: the laptop is set to{" "}
        <strong>&quot;Second screen only&quot;</strong> — then only the
        projector gets an image and the laptop screen stays black.
      </P>
      <StepList>
        <Step title="Press Win + P (even blind)">
          Even if the laptop screen is black: press{" "}
          <InlineCode>Windows + P</InlineCode> — the selection menu is visible
          on the projector.
        </Step>
        <Step title="Switch to “Duplicate”">
          Hold <InlineCode>Windows</InlineCode> and tap{" "}
          <InlineCode>P</InlineCode> until{" "}
          <strong>&quot;Duplicate&quot;</strong> is highlighted — then release.
          Order: PC screen only → Duplicate → Extend → Second screen only
          (cycles around).
        </Step>
      </StepList>
      <Callout type="info" title="Laptop screen stays black even without the projector?">
        <ul>
          <li>
            Turn up the brightness (<InlineCode>Fn</InlineCode> + brightness
            key, usually an F key with a sun symbol)
          </li>
          <li>Restart the laptop (long-press the power button if needed)</li>
          <li>
            If nothing helps → hard reset (see the &quot;Laptop does not
            start&quot; section)
          </li>
        </ul>
      </Callout>

      <H3>Image is blurry or out of focus</H3>
      <UL>
        <li>Turn the <strong>focus ring</strong> on the projector lens until the image is sharp</li>
        <li>If the image stays poor: carefully clean the lens with a microfibre cloth</li>
      </UL>

      <H3>Image is cut off or distorted</H3>
      <UL>
        <li>
          Adjust the resolution on the PC: <strong>right-click the desktop →
          Display settings</strong> → select the recommended resolution
          (usually <InlineCode>1920 × 1080</InlineCode>)
        </li>
        <li>In the projector menu, trigger &quot;Auto&quot; or &quot;Auto Sync&quot; to adjust the image automatically</li>
        <li>Set the aspect ratio in the projector menu to <InlineCode>16:9</InlineCode></li>
      </UL>

      <H3>Projector does not respond / no power</H3>
      <UL>
        <li>Power strip switched on? Check switch and fuse</li>
        <li>Remote: batteries may be empty — switch on at the device itself</li>
        <li>Some projectors have a <strong>cool-down phase</strong> after switching off and can only be restarted after 1–2 minutes</li>
      </UL>

      {/* ═══════════════ Wireless casting (j5create) ═══════════════ */}
      <H2>Wireless casting (j5create on HDMI 2)</H2>

      <P>
        Every projector has a <strong>j5create ScreenCast</strong> receiver
        connected to <InlineCode>HDMI 2</InlineCode>. It lets you cast{" "}
        <strong>Windows laptops</strong> as well as{" "}
        <strong>Apple/iOS devices</strong> (iPad, iPhone, MacBook) wirelessly
        to the projector.
      </P>

      <StepList>
        <Step title="Set the projector to HDMI 2">
          With the remote, select <strong>&quot;Source&quot;</strong> /{" "}
          <strong>&quot;Input&quot;</strong> → <InlineCode>HDMI 2</InlineCode>.
          The projector shows the j5create home screen with the{" "}
          <strong>device name</strong> and instructions.
        </Step>
        <Step title="Connect your device — depends on the platform (see below)">
          Windows connects via <strong>Miracast</strong>, Apple devices via{" "}
          <strong>AirPlay</strong>. In both cases, select the{" "}
          <strong>j5create device name</strong> shown on the projector.
        </Step>
      </StepList>

      <H3>Windows laptop (Miracast)</H3>

      <StepList>
        <Step title="Open the connect menu">
          Press <InlineCode>Windows key + K</InlineCode> (or{" "}
          <InlineCode>Windows + P</InlineCode> →{" "}
          <strong>&quot;Connect to a wireless display&quot;</strong>).
        </Step>
        <Step title="Select the j5create">
          Tap the <strong>j5create device name</strong> shown on the
          projector. The connection is established within a few seconds — no
          WiFi change needed.
        </Step>
        <Step title="Choose the display mode">
          As with a cable: <InlineCode>Windows + P</InlineCode> →
          &quot;Duplicate&quot; (mirror) or &quot;Extend&quot;.
        </Step>
      </StepList>

      <H3>Apple iPad / iPhone / MacBook (AirPlay)</H3>

      <StepList>
        <Step title="Connect to the school WiFi">
          The Apple device must be on the <strong>school WiFi</strong> (not
          guest WiFi) — the same network access as the j5create receiver.
        </Step>
        <Step title="Open Screen Mirroring">
          <strong>iPad/iPhone:</strong> swipe down from the top-right edge
          (Control Centre) → <strong>&quot;Screen Mirroring&quot;</strong> (two
          overlapping rectangles). <strong>MacBook:</strong> Control Centre
          top-right → <strong>&quot;Screen Mirroring&quot;</strong>.
        </Step>
        <Step title="Select the j5create">
          Choose the <strong>j5create device name</strong> shown on the
          projector.
        </Step>
        <Step title="Enter the code (if requested)">
          If an <strong>AirPlay code</strong> appears on the projector, enter
          it on the Apple device.
        </Step>
      </StepList>

      <Callout type="warning" title="Wireless casting not working?">
        <ul>
          <li>
            Is the projector really on <InlineCode>HDMI 2</InlineCode>? The
            j5create home screen must be visible.
          </li>
          <li>
            <strong>Apple devices:</strong> signed in to the{" "}
            <strong>school WiFi</strong> (not guest WiFi)?
          </li>
          <li>
            <strong>Windows:</strong> WiFi <strong>and</strong> Bluetooth
            enabled? Miracast needs both for device detection.
          </li>
          <li>
            Device not found: turn WiFi off and on again on your device, then
            search again.
          </li>
          <li>
            An old connection still active? The j5create home screen shows
            whether someone is already connected — disconnect the existing
            session if needed.
          </li>
          <li>
            If nothing helps: use the class laptop via{" "}
            <InlineCode>HDMI 1</InlineCode> for now and report the problem to
            IT.
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Computer ═══════════════ */}
      <H2>Computer / PC</H2>

      <H3>PC does not start</H3>
      <UL>
        <li>Check the power cable and power strip (switch, fuse)</li>
        <li>Hold the power button on the PC case for 3–5 seconds</li>
        <li>If the PC lights up/fans spin but the screen stays black → see next point</li>
      </UL>

      <H3>Laptop does not start / no reaction (hard reset)</H3>
      <P>
        If the laptop does not react at all (no lights, no fan, black screen), a{" "}
        <strong>power reset</strong> often helps — it drains the residual power
        and resets the hardware:
      </P>
      <StepList>
        <Step title="Disconnect everything">
          Unplug the power adapter and remove all devices (USB sticks, HDMI/
          projector cables, mouse, dock).
        </Step>
        <Step title="Remove the battery (if possible)">
          On devices with a removable battery, take it out. With a built-in
          battery, skip this step.
        </Step>
        <Step title="Hold the power button for 15–30 seconds">
          Hold the power button for <strong>15 to 30 seconds</strong> — even if
          the device is already off. This drains the residual power.
        </Step>
        <Step title="Reconnect and switch on">
          Reconnect the power adapter (and battery if applicable) and switch the
          laptop on normally.
        </Step>
      </StepList>
      <Callout type="info" title="Tip">
        After a hard reset, leave the laptop on the power adapter for a few
        minutes — a deeply discharged battery needs some time before the device
        starts again.
      </Callout>

      <H3>PC is running, but the monitor stays black</H3>
      <UL>
        <li>Monitor switched on? Check the power LED</li>
        <li>Correct input source selected on the monitor? (button on the monitor → HDMI/DisplayPort)</li>
        <li>Plug the monitor cable firmly into both ends</li>
        <li>
          <InlineCode>Windows + P</InlineCode> → select &quot;PC screen
          only&quot; (the image may be redirected to a non-existent second
          monitor)
        </li>
      </UL>

      <H3>Login fails</H3>
      <UL>
        <li>Username correct? Format <InlineCode>lastname.firstname</InlineCode> (without @bgzwn.at on the school PC)</li>
        <li><strong>Caps Lock</strong> on? Check the indicator light on the keyboard</li>
        <li>After 10 failed attempts the account is <strong>locked for 10 minutes</strong> — wait briefly and try again</li>
        <li>Recently changed your password? It can take up to 15 minutes to apply everywhere</li>
      </UL>

      <H3>Program is not responding / frozen</H3>
      <StepList>
        <Step title="Open Task Manager">
          Press <InlineCode>Ctrl + Shift + Esc</InlineCode>.
        </Step>
        <Step title="End the program">
          Click the frozen program in the list →{" "}
          <strong>&quot;End task&quot;</strong>.
        </Step>
        <Step title="Restart the program">
          Open the program again. Unsaved changes are unfortunately lost — so
          save regularly (<InlineCode>Ctrl + S</InlineCode>).
        </Step>
      </StepList>

      <H3>PC is very slow</H3>
      <UL>
        <li>Restart — closes all background programs and frees up memory</li>
        <li>Close programs and browser tabs you don't need</li>
        <li>With many open browser tabs: close the browser completely and reopen it</li>
      </UL>

      <H3>USB device (stick, mouse, keyboard) not recognised</H3>
      <UL>
        <li>Plug the USB connector into a different port</li>
        <li>With USB sticks, wait 5–10 seconds until recognised</li>
        <li>Wireless mouse/keyboard: check batteries, plug in the USB receiver firmly</li>
        <li>Wired devices: check the cable for damage</li>
      </UL>

      {/* ═══════════════ BitLocker ═══════════════ */}
      <H2>BitLocker code requested at startup</H2>

      <P>
        <strong>BitLocker</strong> is the Windows drive encryption — it protects
        the data on the device. Normally the drive unlocks automatically at
        startup. If a <strong>blue screen appears asking for a recovery key (48
        digits)</strong>, BitLocker has been triggered — usually after an
        update, a hardware change, a changed boot order, or a connected USB
        device.
      </P>

      <H3>Try first without the key</H3>
      <StepList>
        <Step title="Unplug USB devices">
          Remove all USB sticks, external drives and the projector cable if
          present — an accidental boot attempt from a USB device often triggers
          BitLocker.
        </Step>
        <Step title="Restart completely">
          <strong>Fully shut down</strong> the laptop (long-press the power
          button) and switch it on again. Often it was only a one-time trigger
          and Windows starts normally.
        </Step>
        <Step title="Try Esc / Enter">
          On the BitLocker screen, some devices offer another boot attempt with{" "}
          <InlineCode>Esc</InlineCode> or <InlineCode>Enter</InlineCode> — give
          it a try.
        </Step>
      </StepList>

      <Callout type="danger" title="Don't guess the code — create a ticket">
        Do <strong>not</strong> enter the recovery key at random. If the device
        still asks for the code after a restart, create a ticket via the{" "}
        <strong>Helpdesk in Microsoft Teams</strong>. IT can provide the
        recovery key stored for your device. Have the <strong>key ID</strong>{" "}
        (short identifier) shown on the screen ready.
      </Callout>

      {/* ═══════════════ Audio ═══════════════ */}
      <H2>Audio / Sound</H2>

      <H3>No sound</H3>
      <StepList>
        <Step title="Check the volume">
          Click the speaker icon at the bottom right of the taskbar — turn up
          the volume and make sure it is not muted (no crossed-out icon).
        </Step>
        <Step title="Select the correct output device">
          Click the speaker icon → tap the small arrow/device name → select
          the correct device (e.g. <strong>projector name</strong> or{" "}
          <strong>speakers</strong> instead of &quot;headphones&quot;).
        </Step>
        <Step title="Check the volume in the app">
          Some programs (e.g. YouTube, media player) have their own volume
          control — turn it up there too.
        </Step>
      </StepList>

      <Callout type="info" title="Should the sound play through the projector/speaker?">
        With HDMI transmission, sound is normally included. Select the{" "}
        <strong>projector name</strong> or the <strong>HDMI output</strong> as
        the audio output device. With separate speakers, the audio cable
        (usually 3.5 mm jack) must be plugged in and the correct device
        selected.
      </Callout>

      <H3>Audio control in Windows 11</H3>
      <P>
        In Windows 11, sound is controlled via the{" "}
        <strong>Quick Settings</strong> at the bottom right:
      </P>
      <UL>
        <li>
          <strong>Volume:</strong> click the speaker icon at the bottom right
          (or <InlineCode>Windows + A</InlineCode> for Quick Settings) → move
          the slider
        </li>
        <li>
          <strong>Mute:</strong> click the speaker icon once — a crossed-out
          icon means muted
        </li>
        <li>
          <strong>Keyboard:</strong> many laptops have their own volume and
          mute keys (in the F-key row at the top)
        </li>
      </UL>

      <H3>Switch between audio outputs (HDMI ↔ laptop speakers)</H3>
      <P>
        Via HDMI, sound is sent to the projector. If you want it to come from
        the laptop speakers instead (or vice versa), switch the output device:
      </P>
      <StepList>
        <Step title="Open the volume control">
          Click the <strong>speaker icon</strong> at the bottom right of the
          taskbar.
        </Step>
        <Step title="Expand the device list">
          Click the small <strong>arrow &quot;&gt;&quot;</strong> to the right
          of the volume slider — the list of all audio outputs appears.
        </Step>
        <Step title="Select a device">
          Choose the desired device:
          <ul>
            <li><strong>Projector/HDMI name</strong> → sound plays through the projector</li>
            <li><strong>&quot;Speakers&quot;</strong> → sound plays through the laptop speakers</li>
            <li><strong>Headphone name</strong> → sound plays through the connected jack (headphones/speaker)</li>
          </ul>
        </Step>
        <Step title="Test">
          Play a short video or a system sound to check that the audio comes
          from the correct device.
        </Step>
      </StepList>
      <Callout type="warning" title="Sound comes from the laptop instead of the projector?">
        Then the wrong output device is active. Use the device list (steps
        above) to switch to the <strong>HDMI/projector name</strong>. If the
        projector is not listed: re-plug the HDMI cable and send the image again
        with <InlineCode>Windows + P</InlineCode>.
      </Callout>

      {/* ═══════════════ Internet / WiFi ═══════════════ */}
      <H2>Internet / WiFi</H2>

      <H3>No internet connection</H3>
      <UL>
        <li>Check the WiFi icon in the taskbar — is there a connection and signal?</li>
        <li>Turn WiFi off and on again (or toggle airplane mode briefly)</li>
        <li>Restarting the device solves most connection problems</li>
        <li>
          Detailed WiFi guide:{" "}
          <Link href="/en/infohub/wlan" className="text-primary hover:underline">
            WiFi page
          </Link>
        </li>
      </UL>

      <H3>A specific website does not load</H3>
      <UL>
        <li>Reload the page (<InlineCode>F5</InlineCode> or <InlineCode>Ctrl + R</InlineCode>)</li>
        <li>
          Some sites are blocked by the school&apos;s <strong>web filter</strong>{" "}
          (child protection) — report incorrectly blocked sites to{" "}
          <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">
            admin@bgzwn.at
          </a>
        </li>
        <li>Try a different browser (Edge, Firefox, Chrome)</li>
      </UL>

      {/* ═══════════════ Printing ═══════════════ */}
      <H2>Printing</H2>

      <H3>Printer does not print</H3>
      <UL>
        <li>Is the correct printer selected? (not &quot;PDF&quot; or an old device)</li>
        <li>Printer switched on, paper loaded, no error on the display?</li>
        <li>With the SafeQ system: the print job is released at the printer with the edu.Card or login (FollowMe printing)</li>
        <li>Print jobs stay in the queue for <strong>4 days</strong> — resend if needed</li>
      </UL>

      <H3>Paper jam</H3>
      <UL>
        <li>Open the printer flaps and carefully pull out the jammed paper in the direction of travel</li>
        <li>Don't leave any scraps of paper behind — they cause the next jam</li>
        <li>Insert the paper tray correctly and do not overfill it</li>
      </UL>

      {/* ═══════════════ Online lessons / Teams ═══════════════ */}
      <H2>Online lessons / Microsoft Teams</H2>

      <H3>Camera or microphone not working</H3>
      <StepList>
        <Step title="Select the correct device in Teams">
          In the meeting: <strong>&quot;…&quot; (More) → Settings →
          Devices</strong> → select the correct camera and microphone.
        </Step>
        <Step title="Check mute">
          Is the microphone icon crossed out? Click it once to activate. Some
          headsets have their own mute button.
        </Step>
        <Step title="Check permissions (Windows)">
          <strong>Settings → Privacy → Camera/Microphone</strong> → allow
          access for apps.
        </Step>
        <Step title="Close other apps">
          Camera/microphone can only be used by one app at a time — close other
          video apps (Zoom, etc.).
        </Step>
      </StepList>

      <H3>Share your screen in Teams</H3>
      <UL>
        <li>In the meeting, click the <strong>&quot;Share&quot; icon</strong> (square with an arrow)</li>
        <li>Choose <strong>&quot;Screen&quot;</strong> for everything or <strong>&quot;Window&quot;</strong> for a single program</li>
        <li>To include sound (video): tick <strong>&quot;Include computer sound&quot;</strong></li>
      </UL>

      {/* ═══════════════ Document camera ═══════════════ */}
      <H2>Document camera / Visualizer</H2>
      <UL>
        <li>Switch on the device and select the correct HDMI source on the projector</li>
        <li>If the camera connects to the PC via USB: open the matching software/app and display the camera image there</li>
        <li>Set the sharpness with the focus button, ensure sufficient lighting</li>
      </UL>

      {/* ═══════════════ Interactive display / Smartboard ═══════════════ */}
      <H2>Interactive display / Smartboard</H2>
      <UL>
        <li><strong>Touch not responding / inaccurate:</strong> check the USB touch cable between display and PC; restart the display</li>
        <li><strong>Pen not writing:</strong> select the correct input/mode on the display; with battery pens, check the charge</li>
        <li><strong>No image:</strong> like the projector — correct source (HDMI) and <InlineCode>Windows + P</InlineCode> &quot;Duplicate&quot;</li>
      </UL>

      {/* ═══════════════ Presentation ═══════════════ */}
      <H2>Presentation (PowerPoint &amp; PDF)</H2>
      <UL>
        <li><strong>Start presentation:</strong> <InlineCode>F5</InlineCode> (from the beginning) or <InlineCode>Shift + F5</InlineCode> (from the current slide)</li>
        <li><strong>End presentation:</strong> <InlineCode>Esc</InlineCode></li>
        <li><strong>Presenter view</strong> (notes on the PC, slide on the projector): requires &quot;Extend&quot; mode (<InlineCode>Windows + P</InlineCode>)</li>
        <li><strong>Black out the screen</strong> during the presentation: press <InlineCode>B</InlineCode> (black) or <InlineCode>W</InlineCode> (white) — press again to resume</li>
      </UL>

      {/* ═══════════════ Connector types ═══════════════ */}
      <H2>Connector Types &amp; Ports</H2>

      <P>
        The most important connectors in everyday school life — what they look
        like and what they are used for:
      </P>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {/* USB-A */}
        <div className="p-4 rounded-xl bg-card border border-border-app">
          <svg
            viewBox="0 0 90 56"
            aria-hidden="true"
            className="text-primary w-24 h-14 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <line x1="6" y1="28" x2="24" y2="28" strokeWidth="7" />
            <rect x="24" y="14" width="46" height="28" rx="2" />
            <rect x="30" y="20" width="30" height="7" rx="1" fill="currentColor" stroke="none" opacity="0.35" />
          </svg>
          <h3 className="text-base font-semibold text-txt mb-1">USB-A</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Flat, rectangular connector — fits only one way around.{" "}
            <strong>For:</strong> USB sticks, mouse, keyboard, printers, older
            devices.
          </p>
        </div>

        {/* USB-C */}
        <div className="p-4 rounded-xl bg-card border border-border-app">
          <svg
            viewBox="0 0 90 56"
            aria-hidden="true"
            className="text-primary w-24 h-14 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <line x1="6" y1="28" x2="24" y2="28" strokeWidth="7" />
            <rect x="24" y="19" width="46" height="18" rx="9" />
            <rect x="32" y="25" width="30" height="6" rx="3" fill="currentColor" stroke="none" opacity="0.35" />
          </svg>
          <h3 className="text-base font-semibold text-txt mb-1">USB-C</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Small, oval connector — reversible (fits either way).{" "}
            <strong>For:</strong> charging, modern laptops/tablets, video output
            and data — the new standard.
          </p>
        </div>

        {/* HDMI */}
        <div className="p-4 rounded-xl bg-card border border-border-app">
          <svg
            viewBox="0 0 90 56"
            aria-hidden="true"
            className="text-primary w-24 h-14 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <line x1="6" y1="28" x2="22" y2="28" strokeWidth="7" />
            <path d="M22 15 H68 V33 L60 41 H30 L22 33 Z" />
            <rect x="29" y="21" width="32" height="6" rx="1" fill="currentColor" stroke="none" opacity="0.35" />
          </svg>
          <h3 className="text-base font-semibold text-txt mb-1">HDMI</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Wide connector with chamfered bottom corners — carries{" "}
            <strong>video and audio</strong> together. <strong>For:</strong>{" "}
            projectors, monitors, TVs.
          </p>
        </div>

        {/* Jack 3.5 mm */}
        <div className="p-4 rounded-xl bg-card border border-border-app">
          <svg
            viewBox="0 0 90 56"
            aria-hidden="true"
            className="text-primary w-24 h-14 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <rect x="8" y="23" width="12" height="10" rx="2" fill="currentColor" stroke="none" />
            <path d="M20 23 H62 a5 5 0 0 1 0 10 H20 Z" />
            <line x1="36" y1="23" x2="36" y2="33" />
            <line x1="48" y1="23" x2="48" y2="33" />
          </svg>
          <h3 className="text-base font-semibold text-txt mb-1">Jack (3.5 mm)</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Thin round pin with grooves (audio plug). <strong>For:</strong>{" "}
            headphones, speakers, microphones (analogue audio).
          </p>
        </div>

        {/* RJ45 */}
        <div className="p-4 rounded-xl bg-card border border-border-app">
          <svg
            viewBox="0 0 90 56"
            aria-hidden="true"
            className="text-primary w-24 h-14 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          >
            <line x1="6" y1="30" x2="26" y2="30" strokeWidth="7" />
            <rect x="26" y="16" width="40" height="26" rx="2" />
            <line x1="34" y1="16" x2="34" y2="22" />
            <line x1="41" y1="16" x2="41" y2="22" />
            <line x1="48" y1="16" x2="48" y2="22" />
            <line x1="55" y1="16" x2="55" y2="22" />
            <path d="M38 42 V47 H54 V42" />
          </svg>
          <h3 className="text-base font-semibold text-txt mb-1">RJ45 (LAN / network)</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Wide connector with a clip — like a thick phone plug.{" "}
            <strong>For:</strong> wired internet/network.
          </p>
        </div>
      </div>

      <Callout type="info" title="Adapters &amp; tips">
        <ul>
          <li>
            Modern laptops often only have <strong>USB-C</strong> — for a
            projector (HDMI) or network (RJ45) you then need a{" "}
            <strong>USB-C adapter / dock</strong>.
          </li>
          <li>
            Never force a connector — if it doesn&apos;t fit, it&apos;s the
            wrong type or upside down (except USB-C: fits either way).
          </li>
          <li>
            No image despite HDMI? See the{" "}
            <strong>&quot;Projector shows no image&quot;</strong> section above.
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Keyboard shortcuts ═══════════════ */}
      <H2>Useful keyboard shortcuts (Windows)</H2>

      <Table
        headers={["Shortcut", "Function"]}
        rows={[
          ["Windows + P", "Select projector/screen mode"],
          ["Ctrl + Shift + Esc", "Task Manager (end frozen programs)"],
          ["Ctrl + S", "Save (use regularly!)"],
          ["Ctrl + Z", "Undo the last action"],
          ["Alt + Tab", "Switch between open windows"],
          ["Windows + L", "Lock the PC (when leaving the room)"],
          ["Windows + D", "Minimise all windows (show desktop)"],
          ["F5", "Reload page / start presentation"],
          ["Windows + period (.)", "Emoji and special character picker"],
        ]}
      />

      {/* ═══════════════ When to contact IT ═══════════════ */}
      <H2>When to contact IT?</H2>

      <P>
        If the quick help does not solve the problem, contact the IT
        administration. Please provide <strong>as much detail as possible</strong>:
      </P>

      <UL>
        <li><strong>Room</strong> (e.g. room 204, computer lab 2)</li>
        <li><strong>Device</strong> (PC, projector, display, iPad …)</li>
        <li><strong>What isn't working?</strong> As precise a description as possible</li>
        <li><strong>Exact error message</strong> (ideally a photo)</li>
        <li><strong>What has already been tried?</strong> (e.g. restart)</li>
        <li><strong>How urgent?</strong> (e.g. current lesson affected)</li>
      </UL>

      <Callout type="info" title="Contact IT Administration">
        <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">
          admin@bgzwn.at
        </a>
        {" "}— for urgent problems during lessons, contact the IT team on site
        directly. A photo of the error message speeds up the solution
        considerably.
      </Callout>

      {/* ═══════════════ Error ticket ═══════════════ */}
      <H2>Error Ticket in the IT Helpdesk (Microsoft Teams)</H2>

      <P>
        The <strong>preferred way</strong> to report an IT problem is an{" "}
        <strong>error ticket</strong> (Fehlerticket) in the IT Helpdesk in
        Microsoft Teams. Nothing gets lost, every ticket is traceable, and you
        can always see the progress (NEU → in Bearbeitung → Erledigt / New → In
        progress → Done).
      </P>

      <H3>How to get to the error tickets</H3>

      <StepList>
        <Step title="Open Microsoft Teams">
          In the Teams app or in the browser at{" "}
          <a
            href="https://teams.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            teams.microsoft.com
          </a>{" "}
          — signed in with your school account.
        </Step>
        <Step title="Go to the right team & channel">
          Click <strong>Teams</strong> on the left, open the team{" "}
          <strong>“bgzwn.LehrerInnen”</strong> and select the{" "}
          <strong>“IT-Helpdesk”</strong> channel.
        </Step>
        <Step title="Open the “Fehlerticket” tab">
          Click the <strong>“Fehlerticket”</strong> tab at the top of the
          channel. There you see all tickets, grouped by status (NEU / in
          Bearbeitung / Erledigt).
        </Step>
      </StepList>

      <H3>Create a new error ticket</H3>

      <StepList>
        <Step title="Click “+ Neues Element hinzufügen” (Add new item)">
          The button is at the top left above the ticket list.
        </Step>
        <Step title="Fill in the fields">
          The <strong>required fields</strong> are marked with an{" "}
          <strong>asterisk (*)</strong> — without them the ticket cannot be
          saved (see the table below).
        </Step>
        <Step title="Save">
          The ticket appears with status <strong>“NEU”</strong> in the list. IT
          picks it up and sets the status to “in Bearbeitung” or “Erledigt”.
        </Step>
      </StepList>

      <H3>What goes into which field?</H3>

      <Table
        headers={["Field", "Required?", "What to enter"]}
        rows={[
          [
            "Problem (kurz) — short problem",
            "Yes",
            "Short title, e.g. “Beamer shows no image” or “No sound in 3A”",
          ],
          [
            "Problembeschreibung — description",
            "Yes",
            "Describe in detail: What happens? Since when? What did you already try (e.g. restart)?",
          ],
          [
            "Raum — room",
            "Yes",
            "Room or location, e.g. “3A”, “EDV-Saal 2”, “DAM/Werkraum”",
          ],
          [
            "Gerätetyp — device type",
            "Yes",
            "Choice: Beamer/Projektor, Ton/Beschallung, Klassennotebook, iPad, Internet/Webseiten/Firewall, LAN/WLAN/Netzwerkverbindung, Schließsystem or sonstiges",
          ],
          [
            "Priorität — priority",
            "Optional",
            "Kritisch / Hoch / Mittel / Niedrig (critical / high / medium / low) — use “Kritisch” only if an ongoing lesson is badly affected",
          ],
          [
            "Foto hochladen — upload photo",
            "Optional",
            "Screenshot or photo of the error message — speeds up the solution considerably",
          ],
          [
            "Status",
            "Set by IT",
            "Leave on “NEU” — IT updates the status while working on it",
          ],
          [
            "Zugewiesen an — assigned to",
            "Set by IT",
            "Leave empty — IT assigns the ticket to the responsible person",
          ],
          [
            "Datum — date",
            "Automatic",
            "Set automatically when the ticket is created",
          ],
        ]}
      />

      <Callout type="success" title="Tip for fast handling">
        The more precise the <strong>title</strong>, <strong>room</strong> and{" "}
        <strong>device type</strong> are — and the sooner a <strong>photo</strong>{" "}
        of the error message is attached — the faster IT can help.
      </Callout>
    </>
  );
}
