import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "muted";
  className?: string;
}

export function CtaSection({
  heading,
  body,
  ctaLabel = "Apply for Coaching",
  ctaHref = "/apply",
  secondaryLabel,
  secondaryHref,
  variant = "default",
  className,
}: CtaSectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        variant === "muted" ? "bg-muted" : "bg-background",
        className
      )}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            {ctaLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
