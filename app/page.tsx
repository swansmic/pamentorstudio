import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicePathways } from "@/data/services";
import { CtaSection } from "@/components/sections/cta-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "PA School Admissions Mentorship",
  description:
    "Longitudinal PA school admissions mentorship from an experienced admissions committee chair. Structured guidance for serious applicants.",
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.pamentorstudio.com/#organization",
      name: "PA Mentor Studio",
      url: "https://www.pamentorstudio.com",
      description:
        "Longitudinal PA school admissions mentorship from an experienced admissions committee chair.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.pamentorstudio.com/#website",
      url: "https://www.pamentorstudio.com",
      name: "PA Mentor Studio",
      publisher: { "@id": "https://www.pamentorstudio.com/#organization" },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="py-24 md:py-36 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            PA School Admissions Mentorship
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight max-w-3xl mb-8">
            The guidance to apply with clarity and confidence.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
            PA Mentor Studio offers longitudinal mentorship for PA school
            applicants: structured, unhurried, and grounded in genuine
            admissions expertise.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            Apply for Coaching
          </Link>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
            This is not a quick-fix course or an application review service.
            It is a mentorship relationship built over months or years, with
            someone who has reviewed thousands of applications and sat on
            the other side of the table.
          </p>
        </div>
      </section>

      {/* Service Pathways */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Mentorship Pathways
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight max-w-xl">
              Three structured pathways. One approach.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePathways.map((pathway) => (
              <Link
                key={pathway.slug}
                href={pathway.href}
                className="group block border border-border rounded bg-card p-8 hover:border-primary/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {pathway.duration}
                </p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {pathway.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pathway.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {pathway.investment}
                  </span>
                  <span className="text-sm text-primary">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-8 max-w-xl">
            Each pathway is a distinct structure, not a tier. The right fit
            depends on where you are in your journey, not how much you&apos;re
            willing to invest.{" "}
            <Link
              href="/services"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Compare pathways
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-20 md:py-28 border-b border-border bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start">
            <div className="max-w-[240px]">
              <Image
                src="/images/michelle.jpg"
                alt="Michelle Strange, DMSc, PA-C, RDCS"
                width={480}
                height={640}
                className="w-full h-auto rounded"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                About the Mentor
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
                Insight earned from the inside.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The mentorship offered through PA Mentor Studio is grounded in
                direct admissions committee experience, including reviewing
                more than 3,000 PA school applications and contributing to
                admissions selection decisions across multiple cycles.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This is not coaching built on secondhand advice or general
                application strategy. It is mentorship shaped by knowing, in
                concrete terms, what matters to programs, and what doesn&apos;t.
              </p>
              <Link
                href="/about"
                className="text-sm text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                More about the founder
              </Link>

              <div className="mt-10 space-y-6">
                {[
                  {
                    stat: "3,000+",
                    label:
                      "PA school applications reviewed as an admissions committee chair",
                  },
                  {
                    stat: "Longitudinal",
                    label:
                      "Mentorship across 1, 2, and 3-year structures, not one-time reviews",
                  },
                ].map((item) => (
                  <div key={item.stat} className="border-l-2 border-accent pl-6">
                    <p className="font-heading text-2xl font-semibold text-foreground mb-1">
                      {item.stat}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <blockquote className="border-l-2 border-accent pl-8">
            <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed italic mb-6">
              &ldquo;Strong applications are built over time, not assembled at
              the last minute. The applicants who benefit most from this work
              are those who want to understand the process, not just survive
              it.&rdquo;
            </p>
            <footer className="text-sm text-muted-foreground">
              PA Mentor Studio
            </footer>
          </blockquote>
        </div>
      </section>

      <CtaSection
        heading="Ready to approach this differently?"
        body="Applications are reviewed individually. Enrollment is limited by design. If you are serious about this process, begin with an inquiry."
        secondaryLabel="Read the FAQ first"
        secondaryHref="/faq"
        variant="muted"
      />
    </>
  );
}
