import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { ApplyForm } from "./apply-form";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Apply for Coaching",
  description:
    "Submit an application for PA Mentor Studio's mentorship programs. Applications are reviewed individually. A consultation is included before any enrollment is extended.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        label="Apply for Coaching"
        title="Begin with an inquiry."
        description="Applications are reviewed individually. Submitting this form initiates the inquiry process — it is not an enrollment commitment. A consultation will be offered if there appears to be a potential fit."
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
                  detail: "Your application is reviewed individually, typically within 5–7 business days.",
                },
                {
                  step: "02",
                  label: "Receive a response",
                  detail: "If your application suggests a potential fit, you will be invited to schedule a consultation.",
                },
                {
                  step: "03",
                  label: "Consultation",
                  detail: "A structured conversation to explore your goals and determine whether the mentorship is appropriate.",
                },
                {
                  step: "04",
                  label: "Enrollment decision",
                  detail: "Enrollment is extended — or not — after the consultation. No pressure in either direction.",
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
                Submitting this application does not create a financial
                obligation. All enrollment decisions are made after a
                consultation, and no payment is required before that
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
