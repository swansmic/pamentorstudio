import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "PA Mentor Studio privacy policy: how we collect, use, and protect your information.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" />
      <ContentSection narrow>
        <div className="prose prose-editorial prose-sm max-w-none text-muted-foreground">
          <p className="text-xs text-muted-foreground mb-8">
            Last updated: July 21, 2026
          </p>

          <p className="leading-relaxed">
            At PA Mentor Studio, your privacy is important. This Privacy Policy
            explains what information we collect, how we use it, and the
            choices you have regarding your information when you visit
            pamentorstudio.com or engage with our services.
          </p>

          <h2>Information We Collect</h2>
          <p className="leading-relaxed">
            We may collect information you voluntarily provide, including:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Coaching application information</li>
            <li>Webinar and masterclass registrations</li>
            <li>Messages submitted through contact forms</li>
          </ul>
          <p className="leading-relaxed">
            When you visit our website, we may also automatically collect
            certain technical information such as:
          </p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on the site</li>
            <li>Referral source</li>
          </ul>
          <p className="leading-relaxed">
            This information is collected through cookies and analytics
            technologies, including Vercel Analytics, Microsoft Clarity, and
            Meta Pixel.
          </p>

          <h2>How We Use Your Information</h2>
          <p className="leading-relaxed">We use your information to:</p>
          <ul>
            <li>Respond to inquiries</li>
            <li>Provide mentorship services</li>
            <li>Process coaching applications</li>
            <li>Deliver webinar access and educational resources</li>
            <li>Send newsletters and educational emails if you choose to subscribe</li>
            <li>Process payments through Stripe</li>
            <li>Improve our website and services</li>
            <li>Measure advertising performance</li>
            <li>Prevent fraud and maintain website security</li>
          </ul>

          <h2>Email Communications</h2>
          <p className="leading-relaxed">
            If you submit a coaching application, register for a webinar, or
            subscribe to our email list, you may receive transactional and
            educational emails from PA Mentor Studio. You may unsubscribe from
            marketing emails at any time by clicking the unsubscribe link
            included in every email.
          </p>

          <h2>Payments</h2>
          <p className="leading-relaxed">
            Payments are securely processed through Stripe. PA Mentor Studio
            does not store your full payment card information.
          </p>

          <h2>Cookies and Advertising</h2>
          <p className="leading-relaxed">
            Our website uses cookies and similar technologies to improve your
            experience and understand how visitors use our site.
          </p>
          <p className="leading-relaxed">
            We use Meta Pixel and other analytics tools to measure advertising
            performance and provide more relevant advertising.
          </p>
          <p className="leading-relaxed">
            We use Microsoft Clarity to understand how visitors interact with
            our site through tools such as session recordings and heatmaps.
            Clarity helps us identify usability issues and improve the site
            experience.
          </p>
          <p className="leading-relaxed">
            You can adjust your browser settings to refuse cookies, although
            some features of the website may not function properly.
          </p>

          <h2>California Privacy Rights (CCPA/CPRA)</h2>
          <p className="leading-relaxed">
            If you are a California resident, the California Consumer Privacy
            Act, as amended by the California Privacy Rights Act, gives you
            additional rights over your personal information, including the
            right to:
          </p>
          <ul>
            <li>Know what personal information we collect and how it is used</li>
            <li>Delete personal information we have collected from you, subject to certain exceptions</li>
            <li>Correct inaccurate personal information</li>
            <li>Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information</li>
            <li>Non-discrimination for exercising your privacy rights</li>
          </ul>
          <p className="leading-relaxed">
            Our use of Meta Pixel to measure and improve advertising
            performance may be considered &ldquo;sharing&rdquo; personal
            information for cross-context behavioral advertising under
            California law. We do not sell personal information for money.
          </p>
          <p className="leading-relaxed">
            To opt out of this sharing, or to exercise any other California
            privacy right, contact us at{" "}
            <a href="mailto:michelle@pamentorstudio.com">michelle@pamentorstudio.com</a>{" "}
            with the subject line &ldquo;California Privacy Request,&rdquo; or
            adjust your cookie and ad-tracking settings through your browser
            or device.
          </p>

          <h2>Third-Party Services</h2>
          <p className="leading-relaxed">
            We may use trusted third-party providers including:
          </p>
          <ul>
            <li>Stripe (payment processing)</li>
            <li>Resend (transactional email delivery)</li>
            <li>Kit (email marketing)</li>
            <li>Meta (advertising analytics)</li>
            <li>Microsoft Clarity (behavior analytics)</li>
            <li>Vercel (website hosting and analytics)</li>
          </ul>
          <p className="leading-relaxed">
            These providers maintain their own privacy policies governing how
            they process information.
          </p>

          <h2>Data Security</h2>
          <p className="leading-relaxed">
            We use reasonable administrative and technical safeguards designed
            to protect your personal information. However, no method of
            internet transmission or electronic storage is completely secure.
          </p>

          <h2>Your Rights</h2>
          <p className="leading-relaxed">You may request to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your personal information where applicable</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="leading-relaxed">
            To make a request, contact us at{" "}
            <a href="mailto:michelle@pamentorstudio.com">michelle@pamentorstudio.com</a>.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p className="leading-relaxed">
            PA Mentor Studio is not intended for children under the age of 13,
            and we do not knowingly collect personal information from
            children.
          </p>

          <h2>Changes to This Policy</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Any updates
            will be posted on this page with a revised effective date.
          </p>

          <h2>Contact</h2>
          <p className="leading-relaxed">
            If you have questions about this Privacy Policy, please contact:
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
