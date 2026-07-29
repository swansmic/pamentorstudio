"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface InfoAccordionItem {
  number: string;
  title: string;
  body: string;
}

interface InfoAccordionProps {
  items: InfoAccordionItem[];
  idPrefix: string;
  numberStyle?: "plain" | "badge";
  className?: string;
}

export function InfoAccordion({
  items,
  idPrefix,
  numberStyle = "plain",
  className,
}: InfoAccordionProps) {
  return (
    <Accordion multiple={false} className={className}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.number}
          value={`${idPrefix}-${i}`}
          className="border border-border rounded bg-card px-6 not-last:mb-4 not-last:border-b"
        >
          <AccordionTrigger className="py-5 gap-4 hover:no-underline">
            <span className="flex items-center gap-4 text-left">
              {numberStyle === "badge" ? (
                <span className="inline-flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-muted border border-border text-xs font-semibold text-muted-foreground font-sans">
                  {item.number}
                </span>
              ) : (
                <span className="text-xs font-semibold tracking-widest text-muted-foreground font-sans">
                  {item.number}
                </span>
              )}
              <span className="font-heading text-lg font-semibold text-foreground leading-snug">
                {item.title}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6 pl-12">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}