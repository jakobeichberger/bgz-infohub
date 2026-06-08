import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table, InlineCode } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Lehrkräfte — IT-Schnellhilfe",
  description:
    "IT-Schnellhilfe für Lehrkräfte am BG Zehnergasse: Quickfixes für Beamer-, Computer-, Ton-, WLAN- und Präsentationsprobleme im Unterricht.",
};

export default function LehrkraeftePage() {
  return (
    <>
      <PageHeader title="Lehrkräfte — IT-Schnellhilfe" />

      <P>
        Diese Seite richtet sich an <strong>Lehrkräfte</strong> und bietet
        schnelle Selbsthilfe bei den häufigsten IT-Problemen im
        Unterrichtsalltag — Beamer, Computer, Ton, WLAN und Präsentation. Die
        meisten Probleme lassen sich in unter einer Minute selbst beheben.
      </P>

      {/* ═══════════════ Goldene Regeln ═══════════════ */}
      <Callout type="success" title="Die 5 goldenen Regeln (zuerst probieren!)">
        Bevor Sie die IT kontaktieren, lösen diese fünf Schritte die meisten
        Probleme:
        <ul>
          <li>
            <strong>1. Neustart</strong> — Gerät aus- und wieder einschalten
            löst rund 80 % aller Probleme.
          </li>
          <li>
            <strong>2. Kabel prüfen</strong> — Sitzt jedes Kabel fest an beiden
            Enden? (Strom, HDMI, USB)
          </li>
          <li>
            <strong>3. Kurz warten</strong> — Manche Geräte (besonders Beamer)
            brauchen 1–2 Minuten zum Hochfahren.
          </li>
          <li>
            <strong>4. Quelle wechseln</strong> — Ist die richtige Eingangs­quelle
            am Beamer gewählt? Funktioniert ein anderes Kabel/Gerät?
          </li>
          <li>
            <strong>5. Notieren</strong> — Wenn nichts hilft: genaue
            Fehlermeldung und Raum notieren, dann IT kontaktieren.
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Beamer ═══════════════ */}
      <H2>Beamer / Projektor</H2>

      <Callout type="info" title="HDMI-Belegung am BG Zehnergasse">
        In den Klassenräumen sind die Beamer-Eingänge fest belegt:
        <ul>
          <li>
            <strong>HDMI 1</strong> — der fest installierte{" "}
            <strong>Klassenlaptop</strong>
          </li>
          <li>
            <strong>HDMI 2</strong> — der <strong>j5create</strong> für{" "}
            <strong>kabelloses Übertragen</strong> von Windows- und Apple-/iOS-Geräten
            (siehe Abschnitt &quot;Kabellos übertragen&quot; weiter unten)
          </li>
        </ul>
        Wählen Sie die passende Quelle über die Beamer-Fernbedienung
        (&quot;Source&quot; / &quot;Input&quot;).
      </Callout>

      <H3>Beamer zeigt kein Bild</H3>

      <StepList>
        <Step title="Ist der Beamer eingeschaltet?">
          Power-LED prüfen. Leuchtet sie rot/orange, ist der Beamer im
          Standby — mit der Fernbedienung oder dem Power-Knopf einschalten.
          Nach dem Einschalten 1–2 Minuten Aufwärmzeit abwarten.
        </Step>
        <Step title="Richtige Eingangsquelle wählen">
          Drücken Sie auf der Fernbedienung <strong>&quot;Source&quot;</strong>{" "}
          oder <strong>&quot;Input&quot;</strong> und wählen Sie die richtige
          Quelle: <InlineCode>HDMI 1</InlineCode> für den{" "}
          <strong>Klassenlaptop</strong>, <InlineCode>HDMI 2</InlineCode> für
          das <strong>kabellose Übertragen (j5create)</strong>.
        </Step>
        <Step title="Kabel kontrollieren">
          HDMI-Kabel an beiden Enden (PC und Beamer) fest einstecken. Bei
          mehreren Anschlüssen das Kabel testweise umstecken.
        </Step>
        <Step title="Bild am PC auf den Beamer schicken">
          Drücken Sie <InlineCode>Windows-Taste + P</InlineCode> und wählen
          Sie <strong>&quot;Duplizieren&quot;</strong> oder
          <strong> &quot;Erweitern&quot;</strong> (siehe Tabelle unten).
        </Step>
      </StepList>

      <H3>Bildschirm auf den Beamer übertragen (Windows + P)</H3>

      <P>
        Die Tastenkombination <InlineCode>Windows-Taste + P</InlineCode> ist
        die schnellste Lösung für die meisten Beamer-Probleme:
      </P>

      <Table
        headers={["Modus", "Was passiert?", "Wann verwenden?"]}
        rows={[
          ["Nur PC-Bildschirm", "Beamer bleibt schwarz", "Wenn der Beamer nichts zeigen soll"],
          ["Duplizieren", "Gleiches Bild auf PC und Beamer", "Standard für den Unterricht (empfohlen)"],
          ["Erweitern", "Beamer als zweiter Bildschirm", "Notizen am PC, Präsentation am Beamer"],
          ["Nur zweiter Bildschirm", "Nur Beamer zeigt Bild, PC bleibt schwarz", "Selten — nur wenn gewünscht"],
        ]}
      />

      <H3>So wechseln Sie zwischen den Modi</H3>

      <StepList>
        <Step title="Win + P drücken">
          Halten Sie die <InlineCode>Windows-Taste</InlineCode> gedrückt und
          tippen Sie einmal auf <InlineCode>P</InlineCode>. Am rechten
          Bildschirmrand erscheint ein Auswahlbalken mit den vier Modi.
        </Step>
        <Step title="Modus auswählen — zwei Möglichkeiten">
          <ul>
            <li>
              <strong>Mit der Maus:</strong> den gewünschten Modus (z.B.
              &quot;Duplizieren&quot; oder &quot;Erweitern&quot;) direkt
              anklicken.
            </li>
            <li>
              <strong>Nur mit der Tastatur:</strong> die{" "}
              <InlineCode>Windows-Taste</InlineCode> gedrückt halten und{" "}
              <InlineCode>P</InlineCode> mehrmals tippen — bei jedem Druck
              springt die Markierung einen Modus weiter. Beim richtigen Modus
              die Windows-Taste loslassen.
            </li>
          </ul>
        </Step>
        <Step title="Bestätigen">
          Die Umschaltung erfolgt sofort. Es ist kein Neustart und kein
          weiterer Klick nötig.
        </Step>
      </StepList>

      <Callout type="info" title="Spiegeln ↔ Erweitern — was ist der Unterschied?">
        <ul>
          <li>
            <strong>Duplizieren (Spiegeln):</strong> Beamer und PC zeigen
            <strong> dasselbe Bild</strong>. Was Sie am PC sehen, sieht auch
            die Klasse. <strong>Das ist der Normalfall für den Unterricht.</strong>
          </li>
          <li>
            <strong>Erweitern:</strong> Der Beamer wird zur{" "}
            <strong>Verlängerung</strong> des PC-Bildschirms. Sie können
            Fenster vom PC auf den Beamer ziehen — ideal, um die
            PowerPoint-Referentenansicht (Notizen) am PC zu behalten, während
            die Klasse nur die Folien sieht.
          </li>
        </ul>
        <p>
          <strong>Schnellster Wechsel:</strong>{" "}
          <InlineCode>Windows + P</InlineCode> drücken und zwischen
          &quot;Duplizieren&quot; und &quot;Erweitern&quot; wählen — jederzeit
          während des Unterrichts möglich.
        </p>
      </Callout>

      <Callout type="warning" title="Bei &quot;Erweitern&quot;: Bild erscheint nicht / Fenster verschwindet">
        Im Modus <strong>&quot;Erweitern&quot;</strong> liegt der Beamer-Bereich
        rechts neben dem PC-Bildschirm. Wenn ein Programm &quot;verschwindet&quot;,
        wurde es auf den Beamer geschoben. Lösung: Fenster anklicken und mit{" "}
        <InlineCode>Windows + Shift + Pfeil ←/→</InlineCode> zwischen den
        Bildschirmen hin- und herschieben. Wenn Sie nur ein gespiegeltes Bild
        wollen: zurück auf <strong>&quot;Duplizieren&quot;</strong> wechseln.
      </Callout>

      <H3>Laptop-Bildschirm bleibt schwarz, Beamer zeigt aber Bild</H3>
      <P>
        Ursache ist fast immer der Anzeigemodus: Der Laptop steht auf{" "}
        <strong>&quot;Nur zweiter Bildschirm&quot;</strong> — dann bekommt nur
        der Beamer ein Bild, der Laptop-Bildschirm bleibt schwarz.
      </P>
      <StepList>
        <Step title="Win + P drücken (auch blind)">
          Auch wenn der Laptop-Bildschirm schwarz ist:{" "}
          <InlineCode>Windows + P</InlineCode> drücken — das Auswahlmenü ist auf
          dem Beamer sichtbar.
        </Step>
        <Step title="Auf „Duplizieren“ umschalten">
          <InlineCode>Windows</InlineCode> gedrückt halten und{" "}
          <InlineCode>P</InlineCode> so oft tippen, bis{" "}
          <strong>&quot;Duplizieren&quot;</strong> markiert ist — dann
          loslassen. Reihenfolge: Nur PC-Bildschirm → Duplizieren → Erweitern →
          Nur zweiter Bildschirm (läuft um).
        </Step>
      </StepList>
      <Callout type="info" title="Laptop-Bildschirm bleibt auch ohne Beamer schwarz?">
        <ul>
          <li>
            Helligkeit hochregeln (<InlineCode>Fn</InlineCode> +
            Helligkeitstaste, meist F-Taste mit Sonnensymbol)
          </li>
          <li>Laptop neu starten (Power-Knopf lang drücken, falls nötig)</li>
          <li>
            Hilft nichts → Hard-Reset (siehe Abschnitt &quot;Laptop startet
            nicht&quot;)
          </li>
        </ul>
      </Callout>

      <H3>Bild ist unscharf oder verschwommen</H3>
      <UL>
        <li>
          <strong>Fokusring</strong> am Objektiv des Beamers drehen, bis das
          Bild scharf ist
        </li>
        <li>
          Bei dauerhaft schlechtem Bild: Objektivlinse vorsichtig mit einem
          Mikrofasertuch reinigen
        </li>
      </UL>

      <H3>Bild ist abgeschnitten oder verzerrt</H3>
      <UL>
        <li>
          Auflösung am PC anpassen: <strong>Rechtsklick auf den Desktop →
          Anzeigeeinstellungen</strong> → empfohlene Auflösung wählen (meist{" "}
          <InlineCode>1920 × 1080</InlineCode>)
        </li>
        <li>
          Im Beamer-Menü &quot;Auto&quot; oder &quot;Auto Sync&quot; auslösen,
          um das Bild automatisch anzupassen
        </li>
        <li>
          Seitenverhältnis im Beamer-Menü auf <InlineCode>16:9</InlineCode>{" "}
          stellen
        </li>
      </UL>

      <H3>Beamer reagiert nicht / kein Strom</H3>
      <UL>
        <li>Steckdosenleiste eingeschaltet? Schalter und Sicherung prüfen</li>
        <li>
          Fernbedienung: Batterien könnten leer sein — am Gerät selbst
          einschalten
        </li>
        <li>
          Manche Beamer haben eine <strong>Abkühlphase</strong> nach dem
          Ausschalten und lassen sich erst nach 1–2 Minuten neu starten
        </li>
      </UL>

      {/* ═══════════════ Kabellos übertragen (j5create) ═══════════════ */}
      <H2>Kabellos übertragen (j5create auf HDMI 2)</H2>

      <P>
        An jedem Beamer ist auf <InlineCode>HDMI 2</InlineCode> ein{" "}
        <strong>j5create ScreenCast</strong>-Empfänger angeschlossen. Damit
        lassen sich <strong>Windows-Laptops</strong> sowie{" "}
        <strong>Apple-/iOS-Geräte</strong> (iPad, iPhone, MacBook) kabellos auf
        den Beamer übertragen.
      </P>

      <StepList>
        <Step title="Beamer auf HDMI 2 stellen">
          Mit der Fernbedienung <strong>&quot;Source&quot;</strong> /{" "}
          <strong>&quot;Input&quot;</strong> → <InlineCode>HDMI 2</InlineCode>{" "}
          wählen. Auf dem Beamer erscheint der Startbildschirm des j5create mit
          dem <strong>Gerätenamen</strong> und einer Anleitung.
        </Step>
        <Step title="Gerät verbinden — je nach Plattform (siehe unten)">
          Windows verbindet sich über <strong>Miracast</strong>, Apple-Geräte
          über <strong>AirPlay</strong>. Wählen Sie dabei den am Beamer
          angezeigten <strong>j5create-Gerätenamen</strong>.
        </Step>
      </StepList>

      <H3>Windows-Laptop (Miracast)</H3>

      <StepList>
        <Step title="Verbindungsmenü öffnen">
          <InlineCode>Windows-Taste + K</InlineCode> drücken (oder{" "}
          <InlineCode>Windows + P</InlineCode> →{" "}
          <strong>&quot;Mit drahtloser Anzeige verbinden&quot;</strong>).
        </Step>
        <Step title="j5create auswählen">
          In der Liste den am Beamer angezeigten{" "}
          <strong>j5create-Gerätenamen</strong> antippen. Die Verbindung wird
          nach wenigen Sekunden aufgebaut — kein WLAN-Wechsel nötig.
        </Step>
        <Step title="Anzeigemodus wählen">
          Wie bei Kabel: <InlineCode>Windows + P</InlineCode> →
          &quot;Duplizieren&quot; (Spiegeln) oder &quot;Erweitern&quot;.
        </Step>
      </StepList>

      <H3>Apple iPad / iPhone / MacBook (AirPlay)</H3>

      <StepList>
        <Step title="Mit dem Schul-WLAN verbinden">
          Das Apple-Gerät muss im <strong>Schul-WLAN</strong> sein (nicht
          Gast-WLAN) — derselbe Netzwerkzugang wie der j5create-Empfänger.
        </Step>
        <Step title="Bildschirmsynchronisierung öffnen">
          <strong>iPad/iPhone:</strong> vom oberen rechten Bildschirmrand nach
          unten wischen (Kontrollzentrum) →{" "}
          <strong>&quot;Bildschirmsynchr.&quot;</strong> (zwei
          übereinanderliegende Rechtecke).{" "}
          <strong>MacBook:</strong> Kontrollzentrum oben rechts →{" "}
          <strong>&quot;Bildschirmsynchronisierung&quot;</strong>.
        </Step>
        <Step title="j5create auswählen">
          Den am Beamer angezeigten <strong>j5create-Gerätenamen</strong>{" "}
          wählen.
        </Step>
        <Step title="Code eingeben (falls verlangt)">
          Erscheint ein <strong>AirPlay-Code</strong> am Beamer, geben Sie ihn
          am Apple-Gerät ein.
        </Step>
      </StepList>

      <Callout type="warning" title="Kabellose Übertragung klappt nicht?">
        <ul>
          <li>
            Beamer wirklich auf <InlineCode>HDMI 2</InlineCode>? Der
            j5create-Startbildschirm muss sichtbar sein.
          </li>
          <li>
            <strong>Apple-Geräte:</strong> im <strong>Schul-WLAN</strong>
            angemeldet (nicht Gast-WLAN)?
          </li>
          <li>
            <strong>Windows:</strong> WLAN <strong>und</strong> Bluetooth
            aktiviert? Miracast braucht beides zur Geräteerkennung.
          </li>
          <li>
            Gerät wird nicht gefunden: WLAN am Gerät kurz aus- und einschalten,
            dann erneut suchen.
          </li>
          <li>
            Noch eine alte Verbindung aktiv? Am j5create-Startbildschirm sehen
            Sie, ob bereits jemand verbunden ist — ggf. die bestehende
            Verbindung trennen.
          </li>
          <li>
            Hilft nichts: kurz den Klassenlaptop per{" "}
            <InlineCode>HDMI 1</InlineCode> verwenden und das Problem an die IT
            melden.
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Computer ═══════════════ */}
      <H2>Computer / PC</H2>

      <H3>PC startet nicht</H3>
      <UL>
        <li>Stromkabel und Steckdosenleiste prüfen (Schalter, Sicherung)</li>
        <li>Power-Knopf am PC-Gehäuse 3–5 Sekunden gedrückt halten</li>
        <li>
          Leuchtet/lüftet der PC, bleibt aber der Bildschirm schwarz → siehe
          nächster Punkt
        </li>
      </UL>

      <H3>Laptop startet nicht / keine Reaktion (Hard-Reset)</H3>
      <P>
        Reagiert der Laptop gar nicht (kein Licht, kein Lüfter, schwarzer
        Bildschirm), hilft oft ein <strong>Strom-Reset</strong> — dabei wird
        der Reststrom entladen und die Hardware zurückgesetzt:
      </P>
      <StepList>
        <Step title="Alles abstecken">
          Netzteil abziehen und alle Geräte entfernen (USB-Sticks, HDMI-/
          Beamer-Kabel, Maus, Dock).
        </Step>
        <Step title="Akku entfernen (falls möglich)">
          Bei Geräten mit herausnehmbarem Akku diesen entnehmen. Bei fest
          verbautem Akku diesen Schritt überspringen.
        </Step>
        <Step title="Power-Knopf 15–30 Sekunden halten">
          Den Power-Knopf <strong>15 bis 30 Sekunden</strong> gedrückt
          halten — auch wenn das Gerät bereits aus ist. Das entlädt den
          Reststrom.
        </Step>
        <Step title="Wieder anstecken und einschalten">
          Netzteil (und ggf. Akku) wieder anschließen und den Laptop normal
          einschalten.
        </Step>
      </StepList>
      <Callout type="info" title="Tipp">
        Lassen Sie den Laptop nach einem Hard-Reset einige Minuten am
        Netzteil — ein tiefentladener Akku braucht etwas, bis das Gerät wieder
        startet.
      </Callout>

      <H3>PC läuft, aber Monitor bleibt schwarz</H3>
      <UL>
        <li>Monitor eingeschaltet? Power-LED prüfen</li>
        <li>
          Richtige Eingangsquelle am Monitor gewählt? (Knopf am Monitor →
          HDMI/DisplayPort)
        </li>
        <li>Monitorkabel an beiden Enden fest einstecken</li>
        <li>
          <InlineCode>Windows + P</InlineCode> → &quot;Nur PC-Bildschirm&quot;
          wählen (evtl. ist das Bild auf einen nicht vorhandenen zweiten
          Monitor umgeleitet)
        </li>
      </UL>

      <H3>Anmeldung schlägt fehl</H3>
      <UL>
        <li>
          Benutzername korrekt? Format{" "}
          <InlineCode>nachname.vorname</InlineCode> (ohne @bgzwn.at am Schul-PC)
        </li>
        <li>
          <strong>Feststelltaste (Caps Lock)</strong> aktiviert? Kontrollleuchte
          auf der Tastatur prüfen
        </li>
        <li>
          Nach 10 Fehlversuchen wird das Konto <strong>10 Minuten
          gesperrt</strong> — kurz warten und erneut versuchen
        </li>
        <li>
          Passwort kürzlich geändert? Es kann bis zu 15 Minuten dauern, bis es
          überall gilt
        </li>
      </UL>

      <H3>Programm reagiert nicht / hängt</H3>
      <StepList>
        <Step title="Task-Manager öffnen">
          Drücken Sie <InlineCode>Strg + Shift + Esc</InlineCode>.
        </Step>
        <Step title="Programm beenden">
          Das hängende Programm in der Liste anklicken →{" "}
          <strong>&quot;Task beenden&quot;</strong>.
        </Step>
        <Step title="Programm neu starten">
          Das Programm erneut öffnen. Ungespeicherte Änderungen gehen leider
          verloren — daher regelmäßig speichern (<InlineCode>Strg + S</InlineCode>).
        </Step>
      </StepList>

      <H3>PC ist sehr langsam</H3>
      <UL>
        <li>
          Neustart durchführen — schließt alle Hintergrundprogramme und gibt
          Arbeitsspeicher frei
        </li>
        <li>Nicht benötigte Programme und Browser-Tabs schließen</li>
        <li>
          Bei vielen offenen Browser-Tabs: Browser komplett schließen und neu
          öffnen
        </li>
      </UL>

      <H3>USB-Gerät (Stick, Maus, Tastatur) wird nicht erkannt</H3>
      <UL>
        <li>USB-Stecker in einen anderen Anschluss stecken</li>
        <li>Bei USB-Sticks 5–10 Sekunden warten, bis er erkannt wird</li>
        <li>
          Funkmaus/-tastatur: Batterien prüfen, USB-Empfänger fest einstecken
        </li>
        <li>Kabelgebundene Geräte: Kabel auf Bruchstellen prüfen</li>
      </UL>

      {/* ═══════════════ BitLocker ═══════════════ */}
      <H2>BitLocker-Code wird beim Start verlangt</H2>

      <P>
        <strong>BitLocker</strong> ist die Festplattenverschlüsselung von
        Windows — sie schützt die Daten auf dem Gerät. Normalerweise entsperrt
        sich das Laufwerk beim Start automatisch. Erscheint ein{" "}
        <strong>blauer Bildschirm, der einen Wiederherstellungsschlüssel (48
        Ziffern) verlangt</strong>, wurde BitLocker ausgelöst — meist nach einem
        Update, einer Hardware-Änderung, einer geänderten Boot-Reihenfolge oder
        durch ein angeschlossenes USB-Gerät.
      </P>

      <H3>Zuerst ohne Code probieren</H3>
      <StepList>
        <Step title="USB-Geräte abziehen">
          Alle USB-Sticks, externen Festplatten und ggf. das Beamer-Kabel
          abziehen — ein versehentlicher Startversuch von einem USB-Gerät löst
          BitLocker häufig aus.
        </Step>
        <Step title="Komplett neu starten">
          Den Laptop <strong>vollständig ausschalten</strong> (Power-Knopf lang
          drücken) und wieder einschalten. Oft war es nur ein einmaliger
          Auslöser und Windows startet normal.
        </Step>
        <Step title="Esc / Enter probieren">
          Manche Geräte bieten auf dem BitLocker-Bildschirm mit{" "}
          <InlineCode>Esc</InlineCode> oder <InlineCode>Enter</InlineCode> einen
          weiteren Startversuch an — ausprobieren.
        </Step>
      </StepList>

      <Callout type="danger" title="Code nicht erraten — Ticket erstellen">
        Geben Sie den Wiederherstellungsschlüssel <strong>nicht aufs
        Geratewohl</strong> ein. Wenn das Gerät nach dem Neustart weiterhin den
        Code verlangt, erstellen Sie ein Ticket über den{" "}
        <strong>Helpdesk in Microsoft Teams</strong>. Die IT kann den für Ihr
        Gerät hinterlegten Wiederherstellungsschlüssel bereitstellen. Halten Sie
        die am Bildschirm angezeigte <strong>Schlüssel-ID</strong> (kurze
        Kennung) bereit.
      </Callout>

      {/* ═══════════════ Ton ═══════════════ */}
      <H2>Ton / Audio</H2>

      <H3>Kein Ton</H3>
      <StepList>
        <Step title="Lautstärke prüfen">
          Lautsprecher-Symbol unten rechts in der Taskleiste anklicken —
          Lautstärke aufdrehen und sicherstellen, dass nicht stummgeschaltet
          ist (kein durchgestrichenes Symbol).
        </Step>
        <Step title="Richtiges Ausgabegerät wählen">
          Auf das Lautsprecher-Symbol klicken → kleinen Pfeil/Gerätenamen
          antippen → das richtige Gerät wählen (z.B.{" "}
          <strong>Beamer-Name</strong> oder <strong>Lautsprecher</strong>{" "}
          statt &quot;Kopfhörer&quot;).
        </Step>
        <Step title="Lautstärke in der App prüfen">
          Manche Programme (z.B. YouTube, Media Player) haben eine eigene
          Lautstärkeregelung — dort ebenfalls aufdrehen.
        </Step>
      </StepList>

      <Callout type="info" title="Ton soll über den Beamer/die Box laufen?">
        Bei Übertragung per HDMI läuft der Ton normalerweise mit. Wählen Sie
        als Audio-Ausgabegerät den <strong>Beamer-Namen</strong> bzw. die{" "}
        <strong>HDMI-Ausgabe</strong>. Bei separaten Lautsprechern muss das
        Audiokabel (meist 3,5-mm-Klinke) eingesteckt und das richtige Gerät
        gewählt sein.
      </Callout>

      <H3>Tonsteuerung in Windows 11</H3>
      <P>
        In Windows 11 wird der Ton über die{" "}
        <strong>Schnelleinstellungen</strong> unten rechts gesteuert:
      </P>
      <UL>
        <li>
          <strong>Lautstärke:</strong> auf das Lautsprecher-Symbol unten rechts
          klicken (oder <InlineCode>Windows + A</InlineCode> für die
          Schnelleinstellungen) → Schieberegler bewegen
        </li>
        <li>
          <strong>Stummschalten:</strong> Lautsprecher-Symbol einmal
          anklicken — ein durchgestrichenes Symbol bedeutet stumm
        </li>
        <li>
          <strong>Tastatur:</strong> viele Laptops haben eigene Lautstärke- und
          Stummschalt-Tasten (oben in der F-Tasten-Reihe)
        </li>
      </UL>

      <H3>Zwischen Audioausgängen wechseln (HDMI ↔ Laptop-Lautsprecher)</H3>
      <P>
        Über HDMI wird der Ton an den Beamer geschickt. Soll er stattdessen aus
        den Laptop-Lautsprechern kommen (oder umgekehrt), wechseln Sie das
        Ausgabegerät:
      </P>
      <StepList>
        <Step title="Lautstärke-Regler öffnen">
          Auf das <strong>Lautsprecher-Symbol</strong> unten rechts in der
          Taskleiste klicken.
        </Step>
        <Step title="Geräteliste aufklappen">
          Auf den kleinen <strong>Pfeil &quot;&gt;&quot;</strong> rechts neben
          dem Lautstärkeregler klicken — es erscheint die Liste aller
          Audioausgänge.
        </Step>
        <Step title="Gerät auswählen">
          Das gewünschte Gerät wählen:
          <ul>
            <li><strong>Beamer-/HDMI-Name</strong> → Ton läuft über den Beamer</li>
            <li><strong>&quot;Lautsprecher&quot;</strong> → Ton läuft über die Laptop-Lautsprecher</li>
            <li><strong>Kopfhörer-Name</strong> → Ton läuft über die angeschlossene Klinke (Kopfhörer/Box)</li>
          </ul>
        </Step>
        <Step title="Testen">
          Ein kurzes Video oder einen Systemton abspielen, um zu prüfen, ob der
          Ton aus dem richtigen Gerät kommt.
        </Step>
      </StepList>
      <Callout type="warning" title="Ton kommt aus dem Laptop statt dem Beamer?">
        Dann ist das falsche Ausgabegerät aktiv. Über die Geräteliste (Schritte
        oben) auf den <strong>HDMI-/Beamer-Namen</strong> umstellen. Wird der
        Beamer nicht in der Liste angezeigt: HDMI-Kabel neu einstecken und das
        Bild erneut per <InlineCode>Windows + P</InlineCode> übertragen.
      </Callout>

      {/* ═══════════════ Internet / WLAN ═══════════════ */}
      <H2>Internet / WLAN</H2>

      <H3>Keine Internetverbindung</H3>
      <UL>
        <li>
          WLAN-Symbol in der Taskleiste prüfen — bestehen Verbindung und
          Signal?
        </li>
        <li>
          WLAN aus- und wieder einschalten (oder Flugmodus kurz an/aus)
        </li>
        <li>Neustart des Geräts löst die meisten Verbindungsprobleme</li>
        <li>
          Detaillierte WLAN-Anleitung:{" "}
          <Link href="/infohub/wlan" className="text-primary hover:underline">
            WLAN-Seite
          </Link>
        </li>
      </UL>

      <H3>Eine bestimmte Website lädt nicht</H3>
      <UL>
        <li>Seite neu laden (<InlineCode>F5</InlineCode> oder <InlineCode>Strg + R</InlineCode>)</li>
        <li>
          Manche Seiten sind durch den <strong>Webfilter</strong> der Schule
          blockiert (Kinderschutz) — fälschlich blockierte Seiten an{" "}
          <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">
            admin@bgzwn.at
          </a>{" "}
          melden
        </li>
        <li>Anderen Browser testen (Edge, Firefox, Chrome)</li>
      </UL>

      {/* ═══════════════ Drucken ═══════════════ */}
      <H2>Drucken</H2>

      <H3>Drucker druckt nicht</H3>
      <UL>
        <li>Ist der richtige Drucker ausgewählt? (nicht &quot;PDF&quot; oder ein altes Gerät)</li>
        <li>Drucker eingeschaltet, Papier eingelegt, kein Fehler im Display?</li>
        <li>
          Beim SafeQ-System: Druckauftrag wird erst am Drucker mit edu.Card
          oder Login freigegeben (FollowMe-Printing)
        </li>
        <li>
          Druckaufträge bleiben <strong>4 Tage</strong> in der Warteschlange —
          ggf. erneut senden
        </li>
      </UL>

      <H3>Papierstau</H3>
      <UL>
        <li>Klappen am Drucker öffnen und gestautes Papier vorsichtig in Laufrichtung herausziehen</li>
        <li>Keine Papierfetzen zurücklassen — sie verursachen den nächsten Stau</li>
        <li>Papierfach korrekt einsetzen und nicht überfüllen</li>
      </UL>

      {/* ═══════════════ Online-Unterricht / Teams ═══════════════ */}
      <H2>Online-Unterricht / Microsoft Teams</H2>

      <H3>Kamera oder Mikrofon funktioniert nicht</H3>
      <StepList>
        <Step title="In Teams das richtige Gerät wählen">
          In der Besprechung: <strong>&quot;…&quot; (Mehr) → Einstellungen →
          Geräte</strong> → richtige Kamera und richtiges Mikrofon auswählen.
        </Step>
        <Step title="Stummschaltung prüfen">
          Ist das Mikrofon-Symbol durchgestrichen? Einmal anklicken zum
          Aktivieren. Manche Headsets haben einen eigenen Stummschaltknopf.
        </Step>
        <Step title="Berechtigung prüfen (Windows)">
          <strong>Einstellungen → Datenschutz → Kamera/Mikrofon</strong> →
          Zugriff für Apps erlauben.
        </Step>
        <Step title="Andere Apps schließen">
          Kamera/Mikrofon können nur von einer App gleichzeitig genutzt werden
          — andere Video-Apps (Zoom etc.) schließen.
        </Step>
      </StepList>

      <H3>Bildschirm in Teams teilen</H3>
      <UL>
        <li>
          In der Besprechung auf das <strong>Symbol &quot;Teilen&quot;</strong>{" "}
          (Quadrat mit Pfeil) klicken
        </li>
        <li>
          <strong>&quot;Bildschirm&quot;</strong> für alles oder{" "}
          <strong>&quot;Fenster&quot;</strong> für ein einzelnes Programm
          wählen
        </li>
        <li>
          Soll Ton mitübertragen werden (Video): Häkchen bei{" "}
          <strong>&quot;Computersound einschließen&quot;</strong> setzen
        </li>
      </UL>

      {/* ═══════════════ Dokumentenkamera ═══════════════ */}
      <H2>Dokumentenkamera / Visualizer</H2>
      <UL>
        <li>Gerät einschalten und am Beamer die richtige HDMI-Quelle wählen</li>
        <li>
          Liefert die Kamera über USB an den PC: passende Software/App öffnen
          und dort das Kamerabild anzeigen
        </li>
        <li>Schärfe über den Fokus-Knopf einstellen, ausreichend Licht sicherstellen</li>
      </UL>

      {/* ═══════════════ Interaktives Display / Smartboard ═══════════════ */}
      <H2>Interaktives Display / Smartboard</H2>
      <UL>
        <li>
          <strong>Touch reagiert nicht / ungenau:</strong> USB-Touch-Kabel
          zwischen Display und PC prüfen; Display neu starten
        </li>
        <li>
          <strong>Stift schreibt nicht:</strong> richtigen Eingang/Modus am
          Display wählen; bei Akku-Stiften Ladung prüfen
        </li>
        <li>
          <strong>Kein Bild:</strong> wie beim Beamer — richtige Quelle (HDMI)
          und <InlineCode>Windows + P</InlineCode> &quot;Duplizieren&quot;
        </li>
      </UL>

      {/* ═══════════════ Präsentation ═══════════════ */}
      <H2>Präsentation (PowerPoint &amp; PDF)</H2>
      <UL>
        <li>
          <strong>Präsentation starten:</strong> <InlineCode>F5</InlineCode>{" "}
          (von Anfang) oder <InlineCode>Shift + F5</InlineCode> (ab aktueller
          Folie)
        </li>
        <li>
          <strong>Präsentation beenden:</strong> <InlineCode>Esc</InlineCode>
        </li>
        <li>
          <strong>Referentenansicht</strong> (Notizen am PC, Folie am Beamer):
          erfordert Modus &quot;Erweitern&quot; (<InlineCode>Windows + P</InlineCode>)
        </li>
        <li>
          <strong>Bildschirm schwärzen</strong> während der Präsentation:
          Taste <InlineCode>B</InlineCode> (schwarz) oder{" "}
          <InlineCode>W</InlineCode> (weiß) — erneut drücken zum Fortsetzen
        </li>
      </UL>

      {/* ═══════════════ Steckertypen ═══════════════ */}
      <H2>Steckertypen &amp; Anschlüsse</H2>

      <P>
        Die wichtigsten Stecker im Schulalltag — so sehen sie aus und dafür
        werden sie verwendet:
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
            Flacher, rechteckiger Stecker — passt nur in einer Richtung.{" "}
            <strong>Für:</strong> USB-Sticks, Maus, Tastatur, Drucker, ältere
            Geräte.
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
            Kleiner, ovaler Stecker — beidseitig einsteckbar.{" "}
            <strong>Für:</strong> Laden, moderne Laptops/Tablets, Bildausgabe
            und Daten — der neue Standard.
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
            Breiter Stecker mit abgeschrägten unteren Ecken — überträgt{" "}
            <strong>Bild und Ton</strong> zugleich. <strong>Für:</strong>{" "}
            Beamer, Monitore, Fernseher.
          </p>
        </div>

        {/* Klinke 3,5 mm */}
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
          <h3 className="text-base font-semibold text-txt mb-1">Klinke (3,5 mm)</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Dünner runder Stift mit Rillen (Audiostecker).{" "}
            <strong>Für:</strong> Kopfhörer, Lautsprecher, Mikrofone (analoger
            Ton).
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
          <h3 className="text-base font-semibold text-txt mb-1">RJ45 (LAN / Netzwerk)</h3>
          <p className="text-sm text-txt-light leading-relaxed">
            Breiter Stecker mit Rastnase — wie ein dicker Telefonstecker.{" "}
            <strong>Für:</strong> kabelgebundenes Internet/Netzwerk.
          </p>
        </div>
      </div>

      <Callout type="info" title="Adapter &amp; Tipps">
        <ul>
          <li>
            Moderne Laptops haben oft nur <strong>USB-C</strong> — für Beamer
            (HDMI) oder Netzwerk (RJ45) wird dann ein{" "}
            <strong>USB-C-Adapter / Dock</strong> benötigt.
          </li>
          <li>
            Stecker nie mit Gewalt einstecken — passt er nicht, ist es der
            falsche Typ oder er ist verkehrt herum (außer USB-C: passt beidseitig).
          </li>
          <li>
            Kein Bild trotz HDMI? Siehe Abschnitt{" "}
            <strong>&quot;Beamer zeigt kein Bild&quot;</strong> weiter oben.
          </li>
        </ul>
      </Callout>

      {/* ═══════════════ Tastenkombinationen ═══════════════ */}
      <H2>Nützliche Tastenkombinationen (Windows)</H2>

      <Table
        headers={["Tastenkombination", "Funktion"]}
        rows={[
          ["Windows + P", "Beamer-/Bildschirmmodus wählen"],
          ["Strg + Shift + Esc", "Task-Manager (hängende Programme beenden)"],
          ["Strg + S", "Speichern (regelmäßig nutzen!)"],
          ["Strg + Z", "Letzte Aktion rückgängig machen"],
          ["Alt + Tab", "Zwischen offenen Fenstern wechseln"],
          ["Windows + L", "PC sperren (beim Verlassen des Raums)"],
          ["Windows + D", "Alle Fenster minimieren (Desktop zeigen)"],
          ["F5", "Seite neu laden / Präsentation starten"],
          ["Windows + Punkt (.)", "Emoji- und Sonderzeichen-Auswahl"],
        ]}
      />

      {/* ═══════════════ Wann IT kontaktieren ═══════════════ */}
      <H2>Wann die IT kontaktieren?</H2>

      <P>
        Wenn die Schnellhilfe nicht weiterhilft, wenden Sie sich an die
        IT-Administration. Geben Sie dabei <strong>so genau wie möglich</strong>{" "}
        an:
      </P>

      <UL>
        <li><strong>Raum</strong> (z.B. Raum 204, EDV-Saal 2)</li>
        <li><strong>Gerät</strong> (PC, Beamer, Display, iPad …)</li>
        <li><strong>Was funktioniert nicht?</strong> Möglichst genaue Beschreibung</li>
        <li><strong>Genaue Fehlermeldung</strong> (am besten ein Foto)</li>
        <li><strong>Was wurde bereits versucht?</strong> (z.B. Neustart)</li>
        <li><strong>Wie dringend?</strong> (z.B. laufende Stunde betroffen)</li>
      </UL>

      <Callout type="info" title="IT-Administration kontaktieren">
        <a href="mailto:admin@bgzwn.at" className="text-primary hover:underline">
          admin@bgzwn.at
        </a>
        {" "}— bei akuten Problemen während des Unterrichts wenden Sie sich
        direkt an die IT vor Ort. Ein Foto der Fehlermeldung beschleunigt die
        Lösung erheblich.
      </Callout>
    </>
  );
}
