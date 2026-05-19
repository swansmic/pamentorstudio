import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-heading text-base font-semibold text-foreground mb-3">
              PA Mentor Studio
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategic admissions mentorship for serious PA school applicants.
              Thoughtful guidance at every stage of the journey.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Mentorship Pathways
            </p>
            <ul role="list" className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Resources
            </p>
            <ul role="list" className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              Legal
            </p>
            <ul role="list" className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-3">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            PA Mentor Studio provides educational mentorship and strategic
            guidance to PA school applicants. This is not a guarantee of
            admission and does not constitute a promise of outcome. Results are
            the product of the applicant&apos;s own effort, merit, and individual
            circumstances.{" "}
            <Link
              href="/disclaimer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Full disclaimer
            </Link>
            .
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PA Mentor Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
