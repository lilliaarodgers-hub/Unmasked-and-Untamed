"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { primaryNav, footerNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";
import { useState } from "react";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <MenuIcon className="size-5 text-deep-plum" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-sacred-cream">
        <SheetHeader className="mb-8">
          <SheetTitle className="font-heading text-2xl text-deep-plum">
            {SITE_NAME}
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) =>
              item.isCTA ? (
                <li key={item.href} className="mt-4">
                  <SheetClose asChild>
                    <Link href={item.href}>
                      <Button className="w-full" size="lg">
                        {item.label}
                      </Button>
                    </Link>
                  </SheetClose>
                </li>
              ) : (
                <li key={item.href}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex rounded-md px-3 py-3 font-body text-base transition-colors hover:bg-soft-plum hover:text-deep-plum",
                        pathname === item.href
                          ? "text-deep-plum font-medium bg-soft-plum"
                          : "text-dark-plum/70"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-3 font-body text-xs uppercase tracking-widest text-plum-muted">
            More
          </p>
          <ul className="flex flex-col gap-1">
            {footerNav.slice(0, 5).map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className="flex rounded-md px-3 py-2 font-body text-sm text-dark-plum/60 transition-colors hover:text-deep-plum hover:bg-soft-plum"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
