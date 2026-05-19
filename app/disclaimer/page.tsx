import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description: "PA Mentor Studio educational disclaimer — no outcome guarantees, no ghostwriting, no admissions promises.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Disclaimer"
        description="Please read this disclaimer carefully before engaging with any content or services provided by PA Mentor Studio."
      />
      <ContentSection narrow>
        <div className="space-y-6 text-muted-foreground">
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              No guarantee of admission
            </h2>
            <p className="leading-relaxed">
              PA Mentor Studio provides educational mentorship and strategic
              guidance. Nothing on this website, in any mentorship session, or
              in any written communication from PA Mentor Studio constitutes a
              guarantee, promise, or representation that a client will be
              admitted to any PA school program. Admissions decisions are made
              exclusively by individual programs and are subject to many factors
              outside our control or influence.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Not ghostwriting
            </h2>
            <p className="leading-relaxed">
              PA Mentor Studio does not write, ghostwrite, or substantially
              author application materials on behalf of clients. All written
              submissions to PA school programs — including personal statements,
              supplemental essays, and experience descriptions — must represent
              the applicant&apos;s own work and authentic voice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Educational content
            </h2>
            <p className="leading-relaxed">
              Blog articles, guides, and other educational content published by
              PA Mentor Studio are provided for general informational purposes
              only. They do not constitute individualized admissions advising and
              should not be treated as such. The applicability of any general
              guidance to your specific circumstances depends on factors we
              cannot assess through published content alone.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Testimonials and outcomes
            </h2>
            <p className="leading-relaxed">
              Any testimonials or reflections shared by past clients describe
              their individual experience of the mentorship process. They do not
              represent typical outcomes and should not be interpreted as
              evidence of what any prospective client should expect to achieve.
              Outcomes are the product of the applicant&apos;s own effort, preparation,
              and individual circumstances.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Professional advice disclaimer
            </h2>
            <p className="leading-relaxed">
              PA Mentor Studio does not provide legal, financial, medical, or
              psychological advice. The mentorship is limited to admissions
              strategy, professional development guidance, and application
              support within the scope of educational consulting.
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
