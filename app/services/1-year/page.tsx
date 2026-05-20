import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "1-Year Mentorship",
  description:
    "Focused 12-month mentorship for PA school applicants who are ready to apply and need expert, intensive support to present their strongest candidacy. $5,000.",
  path: "/services/1-year",
});

export default function OneYearPage() {
  return (
    <>
      <PageHeader
        label="1-Year Mentorship · $5,000"
        title="Focused preparation for the applicant who is ready."
        description="Intensive, expert mentorship across 12 months for applicants whose foundational preparation is in place and who need strategic, experienced guidance to present their strongest possible candidacy."
      />

      <ContentSection narrow>
        <div className="space-y-10 text-foreground">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Who this pathway serves</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 1-Year pathway is designed for applicants who are within 12
              months of their intended application cycle. Your clinical hours
              are substantially in place, your academic record is settled, and
              your central question is no longer whether you can apply; it is
              how to apply with clarity and strategic purpose.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is not a pathway for applicants who are still completing
              prerequisites or building clinical experience. It is for those
              who are genuinely ready to present themselves and want expert
              support to do so as effectively as possible.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">What the mentorship covers</h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Personal statement development: structure, narrative, and authentic voice",
                "CASPA application strategy and school selection",
                "Clinical experience framing and presentation",
                "Supplemental essay guidance for individual programs",
                "Interview preparation, including MMI and traditional formats",
                "Reapplicant strategy, if applicable",
                "Strategic reflection and self-assessment throughout the process",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Mentorship structure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sessions are structured around your application timeline, not a
              predetermined curriculum. Frequency and focus are calibrated to
              where you are in the process and what requires the most attention
              at each stage. Between sessions, written feedback and
              asynchronous support are available as needed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Investment</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 1-Year pathway is priced at{" "}
              <strong className="text-foreground">$5,000</strong>, paid in full
              at enrollment. Payment plans are not available for this pathway.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">What this mentorship is not</h2>
            <p className="text-muted-foreground leading-relaxed">
              PA Mentor Studio does not write application materials on your
              behalf. Ghostwriting, essay-writing services, and any form of
              misrepresentation are outside the scope of this work. The goal is
              to help you present yourself: your actual experiences, your real
              reasoning, your genuine voice, as clearly and compellingly as
              possible.
            </p>
          </div>
        </div>
      </ContentSection>

      <CtaSection
        heading="If you are ready to apply this cycle."
        body="Begin with an application for coaching. The process includes a consultation to confirm mutual fit before enrollment is extended."
        variant="muted"
      />
    </>
  );
}
