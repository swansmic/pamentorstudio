import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  label?: string;
  centered?: boolean;
  className?: string;
}

export function PageHeader({
  title,
  description,
  label,
  centered = false,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "py-16 md:py-24 border-b border-border",
        centered && "text-center",
        className
      )}
    >
      <div className={cn("max-w-6xl mx-auto px-6", centered && "flex flex-col items-center")}>
        {label && (
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
            {label}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-foreground leading-tight mb-6">
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed",
              centered ? "max-w-2xl" : "max-w-2xl"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
