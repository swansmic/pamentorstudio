import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { ApplyForm } from "./apply-form";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Book a Free Call",
  description:
    "Request a free call to talk through PA Mentor Studio's mentorship programs. Requests are reviewed individually. A consultation is included before any enrollment is extended.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        label="Book a Free Call"
        title="Let's talk about your path."
        description="Share a bit about where you are, and we'll follow up to schedule your free call. This isn't an enrollment commitment, just a conversation to see if the mentorship is a good fit."
      />

      <ContentSection narrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* What to expect */}
          <div className="md:col-span-1 order-2 md:order-1">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
              What to expect
            </h2>
            <ol className="space-y-4">
              {[
                {
                  step: "01",
                  label: "Submit this form",
                  detail: "Your request is reviewed individually, typically within 5–7 business days.",
                },
                {
                  step: "02",
                  label: "Receive a response",
                  detail: "If it looks like a good fit, you will be invited to schedule your free call.",
                },
                {
                  step: "03",
                  label: "Free call",
                  detail: "A structured conversation to explore your goals and determine whether the mentorship is appropriate.",
                },
                {
                  step: "04",
                  label: "Enrollment decision",
                  detail: "Enrollment is extended, or not, after the call. No pressure in either direction.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0 w-6">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Submitting this form does not create a financial
                obligation. All enrollment decisions are made after a
                free call, and no payment is required before that
                conversation.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 order-1 md:order-2">
            <ApplyForm />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
