import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, H3, P, UL, Table } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";
import { CardGrid, Card } from "@/components/ui/CardGrid";
import { StepList, Step } from "@/components/ui/StepList";

export const metadata: Metadata = {
  title: "Education Portal & IT Services",
  description:
    "Austrian Education Portal for parents and students, edu.digicard, BMBWF IT services and learning platforms.",
};

export default function BildungsportalPageEN() {
  return (
    <>
      <PageHeader title="Education Portal & IT Services" />

      <P>
        The Bildungsportal (
        <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">bildung.gv.at</a>
        ) is Austria&apos;s central digital education platform, operated by the
        Federal Ministry of Education. It offers a unified login and a
        personalised dashboard for students, parents and teachers.
      </P>

      <Callout type="info" title="Education Portal Hotline">
        <strong>+43 1 53120 3344</strong> or{" "}
        <a href="mailto:support@bildung.gv.at" className="text-primary dark:text-blue-400 hover:underline">support@bildung.gv.at</a>
      </Callout>

      <H2>Guide for Parents</H2>

      <P>As a parent or guardian, the Education Portal offers you:</P>

      <UL>
        <li><strong>Timetable</strong> of your child</li>
        <li><strong>Message book</strong> — read and reply</li>
        <li><strong>Sick notes</strong> — submit digitally</li>
        <li><strong>edu.digicard</strong> — activate for children under 14</li>
        <li><strong>Exam dates</strong> and absences via WebUntis</li>
        <li><strong>Personal archive</strong> with important school documents</li>
        <li><strong>Notifications</strong> via app</li>
      </UL>

      <H3>How to sign in</H3>

      <Table
        headers={["Method", "For whom"]}
        rows={[
          ["ID Austria (recommended)", "Austrian citizens — most secure method"],
          ["Username / Password", "Credentials received from the school"],
        ]}
      />

      <StepList>
        <Step title="Receive credentials">
          The school provides you with the necessary email address or login information.
        </Step>
        <Step title="Registration">
          Open{" "}
          <a href="https://www.bildung.gv.at" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">bildung.gv.at</a>{" "}
          and register with the received data or directly with ID Austria.
        </Step>
        <Step title="Personalise dashboard">
          After login you see a personalised dashboard with widgets for timetable, message book and more.
        </Step>
      </StepList>

      <Callout type="danger" title="Login not working?">
        <p>Common cause: data at school does not match the Central Register of Residents (e.g. wrong address, missing middle name). Contact the school with a current registration confirmation.</p>
        <p>ID Austria help hotline: <strong>+43 50 233770</strong></p>
      </Callout>

      <H2>Education Portal App</H2>

      <P>
        The Education Portal is also available as a mobile app with
        push notifications and access to all linked applications.
      </P>

      <CardGrid>
        <Card href="https://apps.apple.com/at/app/bildungsportal/id6473028659" icon="🍎" title="App Store">
          Download Bildungsportal for iPhone and iPad.
        </Card>
        <Card href="https://play.google.com/store/apps/details?id=at.gv.bmbwf.bildungsportal" icon="🤖" title="Google Play">
          Download Bildungsportal for Android.
        </Card>
      </CardGrid>

      <H2>edu.digicard — Digital Student ID</H2>

      <P>
        The edu.digicard is the free digital student ID on your smartphone,
        showing photo, name, date of birth, school and validity date.
      </P>

      <Table
        headers={["Age", "Who activates", "How"]}
        rows={[
          ["Under 14", "Parents / Guardians", "With their own ID Austria"],
          ["14 and older", "Student themselves", "With their own ID Austria"],
        ]}
      />

      <StepList>
        <Step title="Directly via ID Austria (recommended)">
          Open the &quot;Digitales Amt&quot; app and activate the edu.digicard directly on your smartphone.
        </Step>
        <Step title="Via QR code (alternative)">
          Sign in via the Education Portal on PC → open edu.digicard → generate QR code → scan with the edu.digicard app on your phone.
        </Step>
      </StepList>

      <Callout type="info" title="Download the app">
        The edu.digicard app is free in the{" "}
        <a href="https://apps.apple.com/at/app/edu-digicard/id1635556317" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-blue-400 hover:underline">Apple App Store</a>{" "}
        and Google Play Store.
      </Callout>

      <H2>BMBWF IT Services</H2>

      <P>
        The Federal Ministry of Education provides all Austrian schools with
        the following central IT services:
      </P>

      <CardGrid>
        <Card icon="🪪" title="edu.digicard">Digital student ID on smartphone — replaces the physical card.</Card>
        <Card icon="🌐" title="Bildungsportal">Central portal with single login for all school services.</Card>
        <Card icon="💻" title="eEducation Austria">Network of schools promoting digitalisation with open educational resources.</Card>
        <Card icon="📚" title="eduthek">Platform with teaching materials, sorted by school level and subject.</Card>
        <Card icon="🎓" title="eduvidual.at">Central Moodle learning platform with cross-school resource catalogue.</Card>
        <Card icon="📖" title="LMS.at">Free platform for individualised, competence-oriented learning (GDPR compliant).</Card>
      </CardGrid>

      <Callout type="success" title="All services GDPR compliant">
        All BMBWF IT services comply with the General Data Protection Regulation (GDPR).
      </Callout>
    </>
  );
}
