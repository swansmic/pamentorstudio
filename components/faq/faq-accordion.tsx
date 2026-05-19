"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  title: string;
  items: FaqItem[];
}

interface FaqAccordionProps {
  sections?: FaqSection[];
  items?: FaqItem[];
  className?: string;
}

export function FaqAccordion({ sections, items, className }: FaqAccordionProps) {
  if (sections) {
    return (
      <div className={className}>
        {sections.map((section, si) => (
          <div key={si} className="mb-12">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-5">
              {section.title}
            </h3>
            <Accordion multiple={false} className="w-full">
              {section.items.map((item, ii) => (
                <AccordionItem key={ii} value={`s${si}-i${ii}`}>
                  <AccordionTrigger className="text-left font-medium text-sm leading-relaxed py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Accordion multiple={false} className={className}>
      {(items ?? []).map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`}>
          <AccordionTrigger className="text-left font-medium text-sm leading-relaxed py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
