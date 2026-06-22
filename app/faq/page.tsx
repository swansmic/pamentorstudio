import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ContentSection } from "@/components/sections/content-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { createMetadata } from "@/lib/metadata";
import type { FaqSection } from "@/components/faq/faq-accordion";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about PA Mentor Studio's mentorship programs, application process, payment, and what to expect.",
  path: "/faq",
});

const faqSections: FaqSection[] = [
  {
    title: "About the mentorship",
    items: [
      {
        question: "What makes this different from other PA school consulting services?",
        answer:
          "PA Mentor Studio is built around longitudinal mentorship, not one-time application reviews or essay editing packages. The mentorship is grounded in direct admissions committee experience, including reviewing more than 3,000 PA school applications. The focus is on helping you become a genuinely stronger candidate, not on manufacturing the appearance of one.",
      },
      {
        question: "Do you write personal statements or application essays for clients?",
        answer:
          "No. PA Mentor Studio does not write, ghostwrite, or heavily edit application materials on your behalf. Your personal statement must be your own work, in your own voice. The mentorship supports your development of that work, through structural guidance, reflective questions, and honest feedback, but the writing is yours.",
      },
      {
        question: "Can you guarantee admission to PA school?",
        answer:
          "No. No ethical admissions consultant can guarantee admission. PA school admissions involves many factors outside any mentor's control, including program-specific priorities, applicant pool competitiveness, and circumstances unique to each cycle. What this mentorship offers is expert, sustained guidance that helps serious applicants present their strongest possible candidacy.",
      },
      {
        question: "How many clients do you work with at one time?",
        answer:
          "Enrollment is intentionally limited. Meaningful mentorship requires sustained attention, and that is only possible with a small roster. The exact number varies by pathway and timing. When capacity is full, a waitlist is maintained.",
      },
    ],
  },
  {
    title: "Choosing a pathway",
    items: [
      {
        question: "How do I know which pathway is right for me?",
        answer:
          "The right pathway depends on where you are in your preparation and how much time you have before your intended application cycle. If you are within 12 months of applying and your foundational preparation is in place, the 1-Year pathway is likely appropriate. If you have 2 years, the 2-Year pathway provides structured development time. If you are early in your pre-PA journey, still completing prerequisites or beginning clinical experience, the 3-Year pathway is designed for that stage. If you are uncertain, the consultation process is the right place to explore this.",
      },
      {
        question: "Are the pathways tiered, like good, better, best?",
        answer:
          "No. The pathways are distinct structures suited to different stages of preparation, not quality tiers. The 3-Year pathway is not better than the 1-Year pathway; it is different. It is designed for applicants who are earlier in their journey and who will benefit from sustained mentorship across a longer horizon. Choosing the right pathway is about fit, not budget.",
      },
      {
        question: "What if I am not sure I am ready to apply this cycle?",
        answer:
          "That uncertainty is worth exploring honestly. If you are unsure whether your preparation supports a competitive application, the consultation process can help clarify that, and, if appropriate, help you think about what a more deliberate preparation timeline might look like.",
      },
    ],
  },
  {
    title: "The application and enrollment process",
    items: [
      {
        question: "What happens after I submit an application for coaching?",
        answer:
          "Applications are reviewed individually. If your application suggests a potential fit, you will be invited to schedule a consultation: a structured conversation to explore your goals, your preparation, and whether the mentorship is appropriate for your situation. Enrollment is only extended after that conversation.",
      },
      {
        question: "Is the consultation free?",
        answer:
          "Yes. The consultation is part of the application process, not a paid service.",
      },
      {
        question: "What if I am not selected after applying?",
        answer:
          "Not every applicant will be a fit, for reasons of capacity, timeline, preparation stage, or other factors. If your application does not move forward, you will receive a clear, respectful response. In some cases, a different pathway or a different timing may be a better match.",
      },
    ],
  },
  {
    title: "Payment and financial policies",
    items: [
      {
        question: "What are the payment options for each pathway?",
        answer:
          "The 1-Year pathway ($5,000) is paid in full at enrollment; no payment plans are available. The 2-Year ($7,000) and 3-Year ($10,000) pathways offer payment plans for qualified applicants. For the 2-Year pathway, all payments are completed within the first 12 months. For the 3-Year pathway, within the first 24 months. Pay-in-full is preferred for both. Payment plan details are discussed during the enrollment conversation.",
      },
      {
        question: "What is the refund policy?",
        answer:
          "The refund policy is structured around the stage of the mentorship. Refund eligibility is outlined in the enrollment agreement and decreases as the mentorship progresses, reflecting the time and attention already invested. No refunds are available in the final year of a pathway, as the financial commitment has been fulfilled prior to that year. Full policy details are provided before any enrollment is finalized.",
      },
      {
        question: "Is financial assistance available?",
        answer:
          "PA Mentor Studio does not offer scholarships, sliding-scale pricing, or needs-based discounts at this time. The payment plan options for the 2-Year and 3-Year pathways are designed to provide some flexibility for qualified applicants.",
      },
    ],
  },
  {
    title: "Working together",
    items: [
      {
        question: "How often do we meet?",
        answer:
          "Session frequency varies by pathway and stage of preparation. In general, sessions are structured around what is most useful at each point in your process, more frequent during active application periods and less frequent in developmental phases. The specifics are established during onboarding and adjusted as needed.",
      },
      {
        question: "Is the mentorship conducted virtually?",
        answer:
          "Yes. All mentorship sessions are conducted virtually. This allows the work to be scheduled around your life, not a geographic constraint.",
      },
      {
        question: "What if my circumstances change during the mentorship?",
        answer:
          "Life changes. The mentorship is designed to be responsive, not rigid. If your timeline shifts, if you decide to postpone an application cycle, or if significant circumstances change, those are conversations to have. The enrollment agreement includes provisions for pauses and schedule adjustments.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title="Questions about the mentorship."
        description="Answers to what applicants most often ask before applying. If something you need is not here, the application process includes space for additional questions."
      />

      <ContentSection narrow>
        <FaqAccordion sections={faqSections} />
      </ContentSection>

      <CtaSection
        heading="Still have questions?"
        body="The application for coaching includes a space for additional questions. You do not need to have everything figured out before applying."
        variant="muted"
      />
    </>
  );
}
