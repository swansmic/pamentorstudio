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

const oneYearPhases = [
  {
    title: "Phase 1: Readiness, Strategy, and Gap Identification",
    question: "What must be fixed, clarified, or completed immediately?",
    description:
      "This phase includes intake, readiness assessment, timeline planning, academic/prerequisite review, experience audit, school list strategy, and gap prioritization.",
  },
  {
    title: "Phase 2: Application Materials and Submission Preparation",
    question: "How does the student present a coherent, accurate, and compelling application?",
    description:
      "This phase includes personal statement work, CASPA experience descriptions, recommendation strategy, supplemental planning, and final checklist review.",
  },
  {
    title: "Phase 3: Interviews, Decisions, and Transition",
    question: "How does the student navigate the active cycle with professionalism and strong interview performance?",
    description:
      "This phase includes interview story development, mock interviews, ethical reasoning, program-specific preparation, post-interview communication, decision support, and transition or reapplication planning.",
  },
];

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

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold">
                The application year, phase by phase
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Twelve months is one continuous cycle, not three separate
                blocks, but the work still moves through distinct phases.
                Here is what each is generally built around.
              </p>
            </div>

            {oneYearPhases.map((phase) => (
              <div key={phase.title} className="space-y-4 border-t border-border pt-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mt-1">
                    {phase.question}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Mentorship structure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sessions are held once per month, virtually, for 60 minutes,
              structured around your application timeline rather than a
              predetermined curriculum. Focus is calibrated to where you are
              in the process and what requires the most attention at each
              stage. Between sessions, written feedback and asynchronous
              support are available as needed.
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
