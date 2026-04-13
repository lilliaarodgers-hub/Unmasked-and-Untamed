import type { NavItem } from "@/types/content";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Free Library", href: "/library" },
  { label: "Her Sacred Fire", href: "/her-sacred-fire" },
  { label: "About", href: "/about" },
  { label: "Get Started", href: "/library#start-here", isCTA: true },
];

export const footerNav: NavItem[] = [
  { label: "The Fire Circle", href: "/fire-circle" },
  { label: "The Spark", href: "/the-spark" },
  { label: "Work With Lia", href: "/work-with-lia" },
  { label: "Research & Science", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Use", href: "/legal/terms" },
];
