"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

const CHROMELESS_ROUTES = ["/coming-soon"];

export function ConditionalHeader() {
  const pathname = usePathname();
  if (CHROMELESS_ROUTES.includes(pathname)) return null;
  return <SiteHeader />;
}

export function ConditionalFooter() {
  const pathname = usePathname();
  if (CHROMELESS_ROUTES.includes(pathname)) return null;
  return <SiteFooter />;
}
