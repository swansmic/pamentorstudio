import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "PA Mentor Studio terms of service governing use of the website and mentorship programs.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHeader label="Legal" title="Terms of Service" />
      <ContentSection narrow>
        <div className="prose prose-editorial prose-sm max-w-none text-muted-foreground">
          <p className="text-xs text-muted-foreground mb-8">
            Effective Date: July 21, 2026
          </p>

          <p className="leading-relaxed">
            Welcome to PA Mentor Studio (&ldquo;PA Mentor Studio,&rdquo;
            &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These
            Terms of Service (&ldquo;Terms&rdquo;) govern your use of our
            website, services, educational materials, and coaching programs.
            By accessing or using this website, you agree to be bound by these
            Terms.
          </p>
          <p className="leading-relaxed">
            If you do not agree to these Terms, please do not use this website
            or purchase our services.
          </p>

          <h2>1. About PA Mentor Studio</h2>
          <p className="leading-relaxed">
            PA Mentor Studio provides educational resources, mentorship,
            coaching, webinars, and guidance for individuals pursuing
            admission to Physician Assistant/Associate (PA) programs.
          </p>
          <p className="leading-relaxed">
            Our services are educational in nature and are intended to help
            applicants strengthen their understanding of the admissions
            process and improve their overall application strategy.
          </p>

          <h2>2. No Guarantee of Admission</h2>
          <p className="leading-relaxed">
            While our mentorship is informed by extensive admissions committee
            experience, <strong>PA Mentor Studio does not guarantee admission
            to any Physician Assistant program.</strong>
          </p>
          <p className="leading-relaxed">
            Admission decisions are made solely by each institution and depend
            on numerous factors outside our control, including but not limited
            to:
          </p>
          <ul>
            <li>Academic performance</li>
            <li>Prerequisite completion</li>
            <li>Clinical experience</li>
            <li>Letters of recommendation</li>
            <li>Interview performance</li>
            <li>Program-specific admissions criteria</li>
            <li>Applicant pool competitiveness</li>
          </ul>
          <p className="leading-relaxed">
            Purchasing coaching or educational services does not create any
            promise or guarantee of admission.
          </p>

          <h2>3. Educational Purposes Only</h2>
          <p className="leading-relaxed">
            The information provided through PA Mentor Studio is intended for
            educational purposes only.
          </p>
          <p className="leading-relaxed">
            Nothing on this website or within our coaching programs should be
            interpreted as:
          </p>
          <ul>
            <li>Legal advice</li>
            <li>Medical advice</li>
            <li>Academic advising on behalf of any university</li>
            <li>Official admissions decisions</li>
            <li>Representation of any Physician Assistant program</li>
          </ul>
          <p className="leading-relaxed">
            Any opinions expressed are those of PA Mentor Studio and do not
            represent the views of any employer, university, admissions
            committee, accrediting organization, or professional association.
          </p>

          <h2>4. User Responsibilities</h2>
          <p className="leading-relaxed">By using this website, you agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Use the website lawfully</li>
            <li>Maintain the confidentiality of your account credentials (if applicable)</li>
            <li>Refrain from attempting to interfere with website functionality</li>
            <li>Refrain from copying, distributing, or selling our educational materials without written permission</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p className="leading-relaxed">
            Unless otherwise stated, all content on this website is the
            property of PA Mentor Studio and is protected by applicable
            copyright, trademark, and intellectual property laws.
          </p>
          <p className="leading-relaxed">This includes, but is not limited to:</p>
          <ul>
            <li>Course materials</li>
            <li>Coaching frameworks</li>
            <li>Guides</li>
            <li>PDFs</li>
            <li>Videos</li>
            <li>Blog articles</li>
            <li>Graphics</li>
            <li>Branding</li>
            <li>Logos</li>
            <li>Website design</li>
          </ul>
          <p className="leading-relaxed">
            You may not reproduce, distribute, modify, or commercially use our
            content without prior written permission.
          </p>

          <h2>6. Coaching Services</h2>
          <p className="leading-relaxed">
            Coaching is intended to provide individualized guidance and
            strategic mentorship.
          </p>
          <p className="leading-relaxed">Clients are responsible for:</p>
          <ul>
            <li>Meeting application deadlines</li>
            <li>Preparing required documentation</li>
            <li>Making their own admissions decisions</li>
            <li>Implementing recommendations</li>
          </ul>
          <p className="leading-relaxed">
            PA Mentor Studio does not complete applications or submit
            materials on behalf of clients.
          </p>

          <h2>7. Payments</h2>
          <p className="leading-relaxed">
            Payments are processed securely through Stripe.
          </p>
          <p className="leading-relaxed">
            By purchasing services, you authorize the applicable charges
            according to the selected payment option.
          </p>
          <p className="leading-relaxed">
            For payment plans, you authorize recurring charges according to
            your chosen payment schedule until the agreed payment obligation
            has been fulfilled.
          </p>

          <h2>8. Refund Policy</h2>
          <p className="leading-relaxed">
            Refund eligibility is structured around the stage of the
            mentorship and is outlined in your enrollment agreement. Refund
            eligibility decreases as the mentorship progresses, reflecting the
            time and attention already invested. No refunds are available in
            the final year of a pathway, as the financial commitment has been
            fulfilled prior to that year.
          </p>
          <p className="leading-relaxed">
            Full refund policy details are provided before any enrollment is
            finalized. Fees paid for memberships, digital products, webinars,
            and other educational materials outside of a mentorship pathway
            are non-refundable unless otherwise stated in writing at the time
            of purchase.
          </p>
          <p className="leading-relaxed">
            If PA Mentor Studio cancels a purchased service and cannot
            reasonably reschedule or provide an equivalent service, a refund
            or alternative solution may be offered at our discretion.
          </p>

          <h2>9. Scheduling and Cancellations</h2>
          <p className="leading-relaxed">
            Clients are responsible for attending scheduled coaching sessions.
          </p>
          <p className="leading-relaxed">
            If you need to reschedule, please provide reasonable advance
            notice whenever possible.
          </p>
          <p className="leading-relaxed">
            Repeated missed appointments or failure to communicate may result
            in forfeiture of that session.
          </p>

          <h2>10. Website Availability</h2>
          <p className="leading-relaxed">
            We strive to keep our website available and functioning properly
            but cannot guarantee uninterrupted access.
          </p>
          <p className="leading-relaxed">
            We reserve the right to modify, suspend, or discontinue portions
            of the website or services at any time.
          </p>

          <h2>11. Third-Party Services</h2>
          <p className="leading-relaxed">
            Our website may use third-party services, including but not
            limited to:
          </p>
          <ul>
            <li>Stripe</li>
            <li>Resend</li>
            <li>Kit</li>
            <li>Meta</li>
            <li>Microsoft Clarity</li>
            <li>Vercel</li>
          </ul>
          <p className="leading-relaxed">
            Your use of those services is governed by their respective terms
            and privacy policies.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p className="leading-relaxed">
            To the fullest extent permitted by law, PA Mentor Studio shall not
            be liable for any indirect, incidental, consequential, special, or
            punitive damages arising from:
          </p>
          <ul>
            <li>Use of the website</li>
            <li>Coaching services</li>
            <li>Educational materials</li>
            <li>Admissions outcomes</li>
            <li>Technical issues</li>
            <li>Lost opportunities</li>
          </ul>
          <p className="leading-relaxed">
            Our total liability shall not exceed the amount you paid for the
            applicable service giving rise to the claim.
          </p>

          <h2>13. Indemnification</h2>
          <p className="leading-relaxed">
            You agree to indemnify and hold harmless PA Mentor Studio and its
            owner from claims, damages, liabilities, and expenses arising from
            your misuse of the website, violation of these Terms, or
            infringement of another person&apos;s rights.
          </p>

          <h2>14. Privacy</h2>
          <p className="leading-relaxed">
            Your use of this website is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>15. Governing Law</h2>
          <p className="leading-relaxed">
            These Terms shall be governed by and interpreted under the laws of
            the State of Michigan, without regard to its conflict of law
            principles.
          </p>
          <p className="leading-relaxed">
            Any disputes arising under these Terms shall be resolved in the
            appropriate state or federal courts located within Michigan.
          </p>

          <h2>16. Changes to These Terms</h2>
          <p className="leading-relaxed">
            We reserve the right to update these Terms at any time.
          </p>
          <p className="leading-relaxed">
            Any revisions will become effective upon posting to this page with
            an updated Effective Date. Continued use of the website after
            changes are posted constitutes acceptance of the revised Terms.
          </p>

          <h2>17. Contact Information</h2>
          <p className="leading-relaxed">
            If you have questions regarding these Terms, please contact:
          </p>
          <p className="leading-relaxed">
            Dr. Michelle Strange, DMSc, PA-C, RDCS (AE)(PE)
            <br />
            PA Mentor Studio
            <br />
            Email: <a href="mailto:michelle@pamentorstudio.com">michelle@pamentorstudio.com</a>
          </p>
        </div>
      </ContentSection>
    </>
  );
}