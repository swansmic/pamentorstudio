import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About the Mentor",
  description:
    "PA Mentor Studio was founded by an experienced PA school admissions committee chair with a commitment to grounded, ethical, longitudinal mentorship.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About PA Mentor Studio"
        title="Mentorship built from genuine admissions experience."
        description="PA Mentor Studio was founded on a single premise: the applicants who benefit most from expert guidance are those who receive it early, consistently, and honestly."
      />

      <ContentSection narrow>
        <div className="space-y-8 text-foreground">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">The foundation</h2>
            <p className="text-muted-foreground leading-relaxed">
              PA Mentor Studio was created by a PA who has spent years on the
              other side of the admissions process, as a committee chair
              reviewing applications, contributing to selection decisions, and
              watching what distinguishes candidates who are genuinely prepared
              from those who are simply trying to look that way.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              More than 3,000 applications reviewed. Multiple admissions cycles.
              A 2025 PAEA Regional Conference speaking engagement. This is the
              foundation the mentorship is built on, not a general familiarity
              with the process, but direct, structured experience inside it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">Why longitudinal mentorship</h2>
            <p className="text-muted-foreground leading-relaxed">
              The most common form of admissions consulting is also the least
              effective: a single application review, performed close to the
              deadline, with limited context about the applicant&apos;s actual
              background and goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PA Mentor Studio was designed around a different model. Mentorship
              that begins months or years before the application, when there is
              still time to build clinical experience thoughtfully, develop a
              coherent professional narrative, and approach the process with
              genuine readiness rather than reactive scrambling.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">What this work is not</h2>
            <p className="text-muted-foreground leading-relaxed">
              PA Mentor Studio does not offer ghostwriting, essay writing
              services, or guarantees of any outcome. No admissions process can
              be gamed, and any consultant who suggests otherwise is not serving
              you honestly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This work is about helping serious applicants become genuinely
              stronger candidates: through clearer thinking, better
              self-awareness, and a more grounded understanding of what PA
              programs are actually looking for.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-2xl font-semibold">On selective enrollment</h2>
            <p className="text-muted-foreground leading-relaxed">
              PA Mentor Studio maintains a small, intentionally limited client
              roster. This is not artificial scarcity; it is a structural
              requirement of meaningful mentorship. Each client receives
              sustained attention across the full arc of their preparation. That
              is only possible when enrollment remains small.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Applications are reviewed individually, and not every applicant
              will be a fit. That is by design.
            </p>
          </div>
        </div>
      </ContentSection>

      <CtaSection
        heading="If this approach resonates with you."
        body="Review the mentorship pathways and, if you are ready, submit an application for coaching."
        secondaryLabel="View mentorship pathways"
        secondaryHref="/services"
        variant="muted"
      />
    </>
  );
}
