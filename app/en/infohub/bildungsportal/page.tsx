import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";
import { LinkCards } from "@/components/ui/LinkCards";

export const metadata: Metadata = {
  title: "Education Portal & IT Services",
  description:
    "Austrian Education Portal for parents and students, edu.digicard, BMB IT services and learning platforms.",
};

export default function BildungsportalPageEN() {
  return (
    <>
      <PageHeader title="Education Portal & IT Services" />

      <P>
        The Bildungsportal (
        <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bildung.gv.at</a>
        ) is Austria&apos;s central digital education platform, operated by the
        BMB (Federal Ministry of Education). It offers a unified login and a
        personalised dashboard for students, parents and teachers.
      </P>

      <Callout type="info" title="Education Portal Hotline">
        <strong>+43 1 53120 3344</strong> or{" "}
        <a href="mailto:support@bildung.gv.at" className="text-primary hover:underline">support@bildung.gv.at</a>
      </Callout>

      {/* ═══════════════ Parents Guide ═══════════════ */}
      <H2>Guide for Parents</H2>

      <P>As a parent or guardian, the Education Portal offers you the following features:</P>

      <UL>
        <li>View your child&apos;s <strong>timetable</strong></li>
        <li>Read and reply to the <strong>message book</strong> (Mitteilungsheft)</li>
        <li>Submit <strong>sick notes</strong> digitally</li>
        <li>Activate your child&apos;s <strong>edu.digicard</strong> (for children under 14)</li>
        <li>View <strong>exam dates</strong> and absences via WebUntis</li>
        <li><strong>Personal archive</strong> with important school documents</li>
        <li>Receive <strong>notifications</strong> via the app</li>
      </UL>

      <Callout type="warning" title="Note">
        Parents and guardians cannot view the timetables of students who are
        of legal age (18 or older).
      </Callout>

      <H3>How to sign in</H3>

      <Table
        headers={["Method", "For whom"]}
        rows={[
          ["ID Austria (recommended)", "Anyone with an ID Austria — most secure method"],
          ["Username / Password", "Credentials received from the school"],
        ]}
      />

      <StepList>
        <Step title="Receive credentials">
          The school provides you with the necessary email address or login information.
        </Step>
        <Step title="Registration">
          Open{" "}
          <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bildung.gv.at</a>{" "}
          and register with the received data or directly with ID Austria.
        </Step>
        <Step title="Personalise dashboard">
          After login you see a personalised dashboard with widgets for timetable, message book and more.
        </Step>
      </StepList>

      <Callout type="danger" title="Login not working?">
        <p>Common cause: data at school does not match the Central Register of Residents (e.g. wrong address, missing middle name). Contact the school with a current registration confirmation (Meldebestätigung).</p>
        <p>ID Austria help hotline: <strong>+43 50 233770</strong></p>
      </Callout>

      {/* ═══════════════ Mobile App ═══════════════ */}
      <H2>Education Portal App</H2>

      <P>
        The Education Portal is also available as a mobile app. The app offers
        the same dashboard with widgets, push notifications and access to all
        linked applications.
      </P>

      <CardGrid>
        <Card href="https://apps.apple.com/at/app/bildungsportal/id6473028659" icon="🍎" title="App Store">
          Download Bildungsportal for iPhone and iPad.
        </Card>
        <Card href="https://play.google.com/store/apps/details?id=at.gv.bmbwf.bildungsportal" icon="🤖" title="Google Play">
          Download Bildungsportal for Android.
        </Card>
      </CardGrid>

      <H3>Connect WebUntis to the app</H3>
      <StepList>
        <Step title="Sign in on a computer">
          Sign in on a computer at{" "}
          <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bildung.gv.at</a>{" "}
          and open WebUntis.
        </Step>
        <Step title="Generate a QR code">
          In WebUntis, go to Settings (Einstellungen) → Sharing (Freigaben) →
          &quot;Zugriff über Untis Mobile&quot; (access via Untis Mobile) and
          generate a QR code.
        </Step>
        <Step title="Scan the QR code">
          Scan the QR code with the Untis Mobile app on your smartphone.
        </Step>
      </StepList>

      {/* ═══════════════ edu.digicard ═══════════════ */}
      <H2>edu.digicard — Digital Student ID</H2>

      <P>
        The edu.digicard is the free digital student ID on your smartphone.
        It shows photo, name, date of birth, school and validity date.
      </P>

      <H3>Who activates it?</H3>

      <Table
        headers={["Age", "Who activates", "How"]}
        rows={[
          ["Under 14", "Parents / Guardians", "With their own ID Austria"],
          ["14 and older", "Student themselves", "With their own ID Austria"],
        ]}
      />

      <H3>Ways to activate</H3>

      <StepList>
        <Step title="Directly via ID Austria (recommended)">
          Open the &quot;Digitales Amt&quot; app and activate the edu.digicard directly on your smartphone.
        </Step>
        <Step title="Via QR code (alternative)">
          Sign in via the Education Portal on a PC → open edu.digicard → generate QR code → scan it with the edu.digicard app on your phone.
        </Step>
      </StepList>

      <Callout type="info" title="Download the app">
        The edu.digicard app is free in the{" "}
        <a href="https://apps.apple.com/at/app/edu-digicard/id1635556317" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple App Store</a>{" "}
        and Google Play Store.
      </Callout>

      {/* ═══════════════ BMB IT Services ═══════════════ */}
      <H2>BMB IT Services</H2>

      <P>
        The Federal Ministry of Education (BMB) provides all Austrian schools
        with the following central IT services:
      </P>

      <CardGrid>
        <Card icon="🪪" title="edu.digicard">Digital student ID on smartphone — complements the physical card.</Card>
        <Card icon="🌐" title="Bildungsportal">Central portal with single login for all school services and a personalised dashboard.</Card>
        <Card icon="💻" title="eEducation Austria">Network of schools promoting digitalisation. Offers &quot;eTapas&quot; — teaching units as Open Educational Resources.</Card>
        <Card icon="📚" title="eduthek">Platform with teaching materials and exercises, sorted by school level and subject.</Card>
        <Card icon="🎓" title="eduvidual.at">Central Moodle learning platform with a cross-school resource catalogue and integrations.</Card>
        <Card icon="📖" title="LMS.at">Free platform for individualised, competence-oriented learning (GDPR compliant).</Card>
      </CardGrid>

      <Callout type="success" title="All services GDPR compliant">
        All BMB IT services comply with the General Data Protection Regulation (GDPR).
      </Callout>

      {/* ═══════════════ SOKRATES ═══════════════ */}
      <H2>SOKRATES Bund</H2>

      <P>
        SOKRATES Bund is the school administration software used by all
        Austrian federal schools (AHS, BMHS). It manages:
      </P>

      <UL>
        <li>Student, parent and teacher data</li>
        <li>Class and subject information</li>
        <li>Curricula and report cards</li>
        <li>Enrolments and educational careers</li>
        <li>Grades, notifications, statistics</li>
      </UL>

      <P>
        SOKRATES feeds data into the Education Portal and edu.Flow.
      </P>

      {/* ═══════════════ Links ═══════════════ */}
      <H2>Further Links</H2>

      <LinkCards
        items={[
          {
            href: "https://www.bildung.gv.at",
            label: "Bildungsportal",
            desc: "Main portal — login & dashboard",
          },
          {
            href: "https://www.bmbwf.gv.at/Themen/schule/zrp/dibi/pods.html",
            label: "BMB on PoDS",
            desc: "Official information on Portal Digitale Schule",
          },
          {
            href: "https://www.digitalaustria.gv.at/themen/digitale-dekade/bildungsportal.html",
            label: "Digital Austria",
            desc: "The Education Portal in the context of the Digital Decade",
          },
          {
            href: "https://digitaleschule.gv.at/",
            label: "Digitale Schule",
            desc: "Federal portal for digital education",
          },
        ]}
      />
    </>
  );
}
