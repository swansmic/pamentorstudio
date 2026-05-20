import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "PA Mentor Studio privacy policy: how we collect, use, and protect your information.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" />
      <ContentSection narrow>
        <div className="prose prose-editorial prose-sm max-w-none text-muted-foreground">
          <p className="text-xs text-muted-foreground mb-8">
            Last updated: [DATE: to be completed by attorney before launch]
          </p>
          <p className="leading-relaxed">
            This privacy policy describes how PA Mentor Studio (&ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, and protects
            information when you visit pamentorstudio.com or engage with our
            services.
          </p>
          <p className="mt-4 leading-relaxed italic text-muted-foreground/70 text-xs">
            [Full privacy policy content to be drafted and reviewed by a licensed
            attorney before site launch. This placeholder should not be treated
            as a legally complete document.]
          </p>
        </div>
      </ContentSection>
    </>
  );
}
