import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "3-Year Mentorship",
  description:
    "Long-horizon 36-month mentorship for PA school applicants beginning early. One hour of sustained, experienced guidance every month from orientation through application. $10,000.",
  path: "/services/3-year",
});

const threeYearArc = [
  {
    title: "Year 1: Foundation, Depth, and Direction",
    question: "What does strong preparation actually require?",
    description:
      "Year 1 helps the student understand the PA path, evaluate their starting point, establish academic and clinical direction, begin reflective habits, develop professional relationships, and explore scholarly interests that can mature over the full mentorship. Monthly meetings allow the student and mentor to identify patterns, respond to concerns early, and build steady accountability.",
    outcomes: [
      "Student understands the difference between interest in medicine and preparation for PA school",
      "Student has a realistic academic and prerequisite plan",
      "Student begins and evaluates clinical exposure",
      "Student starts a reflection and experience-tracking system",
      "Student creates an initial scholarly interest and opportunity plan",
      "Student begins developing service, leadership, and recommendation relationships",
      "Student can describe emerging themes in their preparation",
      "Mentor establishes baseline strengths, risks, and developmental needs",
    ],
  },
  {
    title: "Year 2: Application Preparation and Early Execution",
    question: "Is this student ready to apply, and what must be completed before submission?",
    description:
      "Year 2 becomes substantially application-focused. Many students will apply to programs during their third year of education, so the mentorship should not wait until the final year to begin application execution. This year focuses on application timing, school research, clinical refinement, transcript review, narrative development, personal statement drafting, CASPA experience preparation, recommendation planning, scholarly work development, readiness assessment, and apply-now/apply-later decision-making.",
    outcomes: [
      "Student has a realistic applicant profile assessment",
      "Student understands school fit and builds a working school list",
      "Student has identified likely recommenders",
      "Student begins or completes personal statement and CASPA experience work, depending on application timing",
      "Student advances a scholarly project plan, research assistant pathway, poster idea, research day submission, or article concept when feasible",
      "Mentor and student make an honest apply-now/apply-later assessment if needed",
    ],
  },
  {
    title: "Year 3: Final Checks, Interviews, Decisions, and Transition",
    question: "How does the student finish the process with clarity, readiness, and strong interview performance?",
    description:
      "Year 3 assumes that most major application strategy and drafting has already begun, and for many students, that the application may already be submitted or nearly ready. The work becomes highly practical: final application checklists, supplemental follow-through, scholarly work follow-through, interview preparation, mock interviews, post-interview communication, decision support, reapplication planning when needed, and transition.",
    outcomes: [
      "Student completes final application checklists without avoidable gaps",
      "Student can articulate their motivation and preparation clearly",
      "Student completes multiple rounds of interview preparation, including mock interviews",
      "Student understands how to respond to waitlists, rejections, acceptances, and uncertainty",
      "Student exits the mentorship with a clear next-step plan",
    ],
  },
];

export default function ThreeYearPage() {
  return (
    <>
      <PageHeader
        label="3-Year Mentorship · $10,000"
        title="Long-horizon mentorship from the earliest stage."
        description="A three-year mentorship relationship for applicants who are beginning early, still completing prerequisites, building clinical experience, or orienting themselves in the pre-PA landscape, and who want sustained, experienced guidance at every stage of the journey."
      />

      <ContentSection narrow>
        <div className="space-y-10 text-foreground">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Who this pathway serves</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 3-Year pathway is for applicants who are in the early stages
              of their pre-PA path. Prerequisites may be in progress.
              Healthcare experience is beginning. The goal is not yet the
              application; it is understanding what strong preparation
              actually looks like and building it thoughtfully, with experienced
              guidance at every turn.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This pathway is also for applicants who know they want mentorship
              across the full arc, not just the final sprint, and who value
              continuity with a single mentor who knows their complete history.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">What three years makes possible</h2>
            <p className="text-muted-foreground leading-relaxed">
              Over three years, the mentorship moves through distinct phases:
              academic and prerequisite strategy, clinical experience
              development, professional narrative formation, and, ultimately,
              the application itself. Each phase informs the next. By the time
              you apply, your preparation is not reconstructed from memory; it
              was built, deliberately, with expert input throughout.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Meeting structure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sessions are held once per month, virtually, for 60 minutes,
              throughout all three years. That consistent rhythm creates
              genuine continuity: each meeting builds on the last, and
              nothing gets lost between conversations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over 36 months, this amounts to 36 hours of live mentorship,
              structured around your actual development rather than a
              fixed curriculum.
            </p>
          </div>

          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold">
                The three-year arc, year by year
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While each monthly meeting responds to where you actually are,
                the mentorship still moves through three distinct phases. Here
                is what each year is generally built around.
              </p>
            </div>

            {threeYearArc.map((year) => (
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
            <h2 className="font-heading text-2xl font-semibold">Continuity</h2>
            <p className="text-muted-foreground leading-relaxed">
              One of the structural advantages of the 3-Year pathway is
              continuity. Your mentor knows your complete trajectory: your
              challenges, your growth, your reasoning, your voice. That
              accumulated context produces meaningfully different mentorship
              than a relationship that begins six months before the application.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Investment and payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              The 3-Year pathway is priced at{" "}
              <strong className="text-foreground">$10,000</strong>. Pay-in-full
              is preferred. A structured payment plan is available, with all
              payments completed within the first 24 months, before Year Three
              begins.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The final year of mentorship is focused entirely on your
              application, uninterrupted by financial logistics.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">What this mentorship is not</h2>
            <p className="text-muted-foreground leading-relaxed">
              Three years of mentorship does not mean three years of intensive
              weekly sessions. The rhythm is consistent monthly one-hour meetings,
              but what each session focuses on adjusts to your stage. In the early
              years, sessions are more exploratory and developmental. In the
              application year, more intensive and execution-focused. The
              structure is responsive, not rigid.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No application materials are written on your behalf. No outcomes
              are guaranteed. The goal is to help you become the applicant
              your preparation has been building toward.
            </p>
          </div>
        </div>
      </ContentSection>

      <CtaSection
        heading="If you are beginning early and thinking long-term."
        body="Book a free call to talk through your timeline and see if this pathway is the right fit. A consultation is part of the process before any enrollment is extended."
        variant="muted"
      />
    </>
  );
}
