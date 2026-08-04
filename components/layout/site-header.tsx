import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
          aria-label="PA Mentor Studio: go to homepage"
        >
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={34}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-heading text-lg font-semibold">
            PA Mentor Studio
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
          >
            Book a Free Call
          </Link>
        </div>

        <MobileNav items={navItems} />
      </div>
    </header>
  );
}
