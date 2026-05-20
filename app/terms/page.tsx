import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description: "PA Mentor Studio terms of service governing use of the website and mentorship programs.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHeader label="Legal" title="Terms of Service" />
      <ContentSection narrow>
        <div className="prose prose-editorial prose-sm max-w-none text-muted-foreground">
          <p className="text-xs text-muted-foreground mb-8">
            Last updated: [DATE: to be completed by attorney before launch]
          </p>
          <p className="leading-relaxed">
            These terms of service govern your use of pamentorstudio.com and
            engagement with PA Mentor Studio&apos;s mentorship programs. By
            accessing this website or enrolling in a mentorship pathway, you
            agree to be bound by these terms.
          </p>
          <p className="mt-4 leading-relaxed italic text-muted-foreground/70 text-xs">
            [Full terms of service to be drafted and reviewed by a licensed
            attorney before site launch. This placeholder should not be treated
            as a legally complete document.]
          </p>
        </div>
      </ContentSection>
    </>
  );
}
