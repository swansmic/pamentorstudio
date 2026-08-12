import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { SubscribeForm } from "./subscribe-form";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Stay Updated",
  description:
    "Sign up to receive admissions insights and updates directly from Michelle Strange, DMSc, PA-C, RDCS, founder of PA Mentor Studio.",
  path: "/updates",
});

export default function UpdatesPage() {
  return (
    <>
      <PageHeader
        label="Stay Updated"
        title="Admissions insight, sent directly to your inbox."
        description="Enter your email to receive periodic updates on PA school admissions, application timing, and guidance from Michelle Strange, straight from someone who has sat on the other side of the process."
      />

      <ContentSection narrow>
        <div className="max-w-md mx-auto">
          <SubscribeForm />
        </div>
      </ContentSection>
    </>
  );
}
