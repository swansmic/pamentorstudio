import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "2-Year Mentorship",
  description:
    "Structured 24-month mentorship for PA school applicants who want time to build their clinical foundation, refine their narrative, and apply with confidence. $7,000.",
  path: "/services/2-year",
});

export default function TwoYearPage() {
  return (
    <>
      <PageHeader
        label="2-Year Mentorship · $7,000"
        title="Structured development across two intentional years."
        description="A two-year mentorship arc for applicants who want the time to build thoughtfully, strengthening their clinical experience, developing their professional narrative, and arriving at the application cycle genuinely prepared."
      />

      <ContentSection narrow>
        <div className="space-y-10 text-foreground">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Who this pathway serves</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 2-Year pathway is designed for applicants who have
              approximately two years before their intended application cycle.
              Clinical experience is underway but not complete. The academic
              record is largely established. The central work is building a
              coherent professional narrative and arriving at the application
              as a genuinely strong candidate, not just a technically
              eligible one.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Year One: Foundation and Development</h2>
            <p className="text-muted-foreground leading-relaxed">
              The first year focuses on understanding your current standing,
              identifying gaps, and building deliberately. Clinical experience
              strategy, shadowing, references, and early professional narrative
              work. Sessions are structured around where you are and what
              needs to develop before the application opens.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Year Two: Application and Candidacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The second year transitions into application strategy: personal
              statement development, school selection, supplemental essays, and
              interview preparation. By the time the application cycle opens,
              you have had a year of mentored preparation behind it. That
              context matters.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Investment and payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 2-Year pathway is priced at{" "}
              <strong className="text-foreground">$7,000</strong>. Pay-in-full
              is preferred. A structured payment plan is available for
              qualified applicants, with all payments completed within the
              first 12 months of the mentorship, before Year Two begins.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Payment structure details are discussed during the enrollment
              conversation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">What this mentorship is not</h2>
            <p className="text-muted-foreground leading-relaxed">
              No application materials are written on your behalf. No outcomes
              are guaranteed. This is strategic mentorship; the goal is to
              help you become a stronger candidate, not to manufacture one.
            </p>
          </div>
        </div>
      </ContentSection>

      <CtaSection
        heading="If you are two years from your application cycle."
        body="Apply for coaching to begin the inquiry process. A consultation is included before any enrollment is extended."
        variant="muted"
      />
    </>
  );
}
