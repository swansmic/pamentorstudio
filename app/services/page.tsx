import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { servicePathways } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Mentorship Pathways",
  description:
    "Three structured mentorship pathways for PA school applicants: 1-Year, 2-Year, and 3-Year. Each is a distinct structure suited to a different stage of preparation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Mentorship Pathways"
        title="Three structures. One approach to preparation."
        description="Each pathway is designed for a different stage of the admissions journey. They are not tiers; they are distinct structures. The right fit depends on where you are, not how much you want to invest."
      />

      <ContentSection>
        <div className="space-y-6 mb-16">
          {servicePathways.map((pathway) => (
            <Link
              key={pathway.slug}
              href={pathway.href}
              className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-10 border border-border rounded bg-card p-8 md:p-10 hover:border-primary/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
            >
              <div className="md:w-40 shrink-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                  {pathway.duration}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {pathway.investment}
                </p>
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pathway.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic">
                  {pathway.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {pathway.description}
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Meeting structure
                  </p>
                  {pathway.cadence.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="md:self-center shrink-0">
                <span className="text-sm text-primary group-hover:underline underline-offset-2">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-border pt-12 max-w-3xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-5">
            How to choose a pathway
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              If you are within 12 months of your intended application cycle and
              your foundational preparation, including GPA, clinical hours, and references,
              is largely in place, the <strong className="text-foreground">1-Year pathway</strong> is likely
              the right fit.
            </p>
            <p className="leading-relaxed">
              If you have two years before your target cycle and want time to
              be deliberate about your clinical development and narrative, the{" "}
              <strong className="text-foreground">2-Year pathway</strong> provides that structure.
            </p>
            <p className="leading-relaxed">
              If you are early in your pre-PA journey, still completing
              prerequisites, beginning clinical experience, or uncertain about
              your timeline, the <strong className="text-foreground">3-Year pathway</strong> is designed
              for sustained, long-horizon mentorship from the ground up.
            </p>
            <p className="leading-relaxed">
              If you are uncertain which pathway fits, the application process
              includes a consultation. Questions about fit are part of what
              that conversation is for.
            </p>
          </div>
        </div>
      </ContentSection>

      <CtaSection
        heading="Applications are reviewed individually."
        body="Enrollment is limited. If you are ready to apply, begin there. If you have questions, the FAQ covers most of what applicants ask before applying."
        secondaryLabel="Read the FAQ"
        secondaryHref="/faq"
        variant="muted"
      />
    </>
  );
}
