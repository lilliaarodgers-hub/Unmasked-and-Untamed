"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-sacred-cream/95 backdrop-blur-md shadow-sm"
          : "bg-sacred-cream/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold rounded"
          aria-label="Unmasked & Untamed — Home"
        >
          <span className="font-heading text-xl font-light tracking-wide text-deep-plum">
            Unmasked
          </span>
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-warm-gold">
            &amp; Untamed
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-1"
        >
          {primaryNav.map((item) =>
            item.isCTA ? (
              <Button key={item.href} asChild variant="outline-gold" size="sm" className="ml-3">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md font-body text-sm transition-colors hover:text-deep-plum hover:bg-soft-plum",
                  pathname === item.href
                    ? "text-deep-plum font-medium"
                    : "text-dark-plum/65"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile nav trigger */}
        <MobileNav />
      </div>
    </header>
  );
}
