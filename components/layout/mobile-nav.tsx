"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/content";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        className="p-2 -mr-2 text-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
      >
        {isOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>

      {isOpen && (
        <nav
          id="mobile-nav-menu"
          className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-sm z-40"
          aria-label="Mobile navigation"
        >
          <ul role="list" className="flex flex-col py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={cn(
                    "block px-6 py-3 text-sm font-medium transition-colors hover:text-primary hover:bg-muted",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul role="list" className="bg-muted/40">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className={cn(
                            "block px-10 py-2.5 text-sm transition-colors hover:text-primary",
                            pathname === child.href
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="px-6 py-4">
              <Link
                href="/apply"
                onClick={close}
                className="block w-full text-center py-2.5 px-4 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
              >
                Book a Free Call
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
