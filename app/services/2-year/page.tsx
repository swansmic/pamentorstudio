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

const twoYearArc = [
  {
    title: "Year 1: Application Readiness and Submission Preparation",
    question: "What must be built, repaired, clarified, or completed before submission?",
    description:
      "Year 1 begins with a comprehensive candidacy audit and moves quickly into application strategy. The student should leave Year 1 with a realistic school list, clear application timeline, refined narrative, accurate experience documentation, recommender plan, and a submission-readiness checklist.",
    outcomes: [
      "Student has a realistic readiness assessment and application timeline",
      "Student understands strengths, gaps, and highest-priority risks",
      "Student has a working school list based on fit and requirements",
      "Student develops personal statement and CASPA experience materials",
      "Student has a recommendation strategy and outreach plan",
      "Student has a gap-closing plan before submission",
    ],
  },
  {
    title: "Year 2: Final Execution, Interviews, Decisions, and Transition",
    question: "How does the student execute the active cycle with clarity, professionalism, and strong interview performance?",
    description:
      "Year 2 assumes the student is nearing submission, actively applying, interviewing, or navigating decisions. The work focuses on final quality control, supplemental essays, program communication, mock interviews, post-interview strategy, waitlists, acceptances, program comparison, and transition or reapplication planning.",
    outcomes: [
      "Student completes final application quality-control checks",
      "Student manages supplementals, portals, and program communication professionally",
      "Student completes structured interview preparation and mock interviews",
      "Student navigates decisions, waitlists, and uncertainty with a clear plan",
      "Student transitions into PA school or reapplication with concrete next steps",
    ],
  },
];

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
            <h2 className="font-heading text-2xl font-semibold">Meeting structure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sessions are held once per month, virtually, for 60 minutes,
              throughout both years. That consistent rhythm creates genuine
              continuity: each meeting builds on the last, and nothing gets
              lost between conversations.
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold">
                The two-year arc, year by year
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While each monthly meeting responds to where you actually are,
                the mentorship still moves through two distinct phases. Here
                is what each year is generally built around.
              </p>
            </div>

            {twoYearArc.map((year) => (
              <div key={year.title} className="space-y-4 border-t border-border pt-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {year.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic mt-1">
                    {year.question}
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {year.description}
                </p>
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Key outcomes
                  </p>
                  <ul className="space-y-2.5">
                    {year.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {outcome}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
        body="Book a free call to talk through your timeline and see if this pathway is the right fit. A consultation is included before any enrollment is extended."
        variant="muted"
      />
    </>
  );
}
