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
              Sessions are held once per month for one hour throughout all
              three years. That consistent rhythm creates genuine continuity:
              each meeting builds on the last, and nothing gets lost between
              conversations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over 36 months, this amounts to 36 hours of live mentorship,
              structured around your actual development rather than a
              fixed curriculum.
            </p>
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
        body="Apply for coaching to begin the inquiry process. A consultation is part of the process before any enrollment is extended."
        variant="muted"
      />
    </>
  );
}
