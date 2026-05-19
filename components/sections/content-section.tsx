import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}

export function ContentSection({
  children,
  narrow = false,
  className,
}: ContentSectionProps) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className={cn("mx-auto px-6", narrow ? "max-w-3xl" : "max-w-6xl")}>
        {children}
      </div>
    </section>
  );
}
