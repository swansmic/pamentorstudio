"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface QaItem {
  category: string;
  question: string;
  brief: string;
  paragraphs: string[];
  takeaway: string;
}

interface StudentQaListProps {
  items: QaItem[];
}

export function StudentQaList({ items }: StudentQaListProps) {
  return (
    <div className="space-y-14">
      {items.map((item, index) => (
        <article key={index}>
          <div className="space-y-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {item.category}
            </span>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-snug">
              {item.question}
            </h2>
          </div>

          <p className="text-base text-foreground leading-relaxed mb-4">
            {item.brief}
          </p>

          <Accordion multiple={false}>
            <AccordionItem value="full-answer" className="border-none">
              <AccordionTrigger className="text-sm font-medium text-primary hover:no-underline py-0 w-auto inline-flex gap-2">
                Full answer
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {item.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  <p className="text-base font-medium text-foreground border-l-2 border-primary pl-4 italic leading-relaxed mt-6">
                    {item.takeaway}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {index < items.length - 1 && (
            <hr className="border-border mt-12" />
          )}
        </article>
      ))}
    </div>
  );
}