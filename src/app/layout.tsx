import type { Metadata } from "next";
import { cormorant, dmSans } from "@/lib/fonts";
import { ConditionalHeader, ConditionalFooter } from "@/components/layout/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Unmasked & Untamed | Perimenopause Education for Neurodivergent Women",
    template: "%s | Unmasked & Untamed",
  },
  description:
    "Perimenopause education, nervous system support, and whole-woman transformation built specifically for neurodivergent women who have been dismissed, misdiagnosed, and left without answers.",
  keywords: [
    "perimenopause",
    "neurodivergent",
    "ADHD perimenopause",
    "autism perimenopause",
    "perimenopause brain fog",
    "Her Sacred Fire",
    "Lia Dominique",
    "Unmasked and Untamed",
    "perimenopause women of color",
  ],
  authors: [{ name: "Lia Dominique" }],
  openGraph: {
    type: "website",
    siteName: "Unmasked & Untamed",
    title:
      "Unmasked & Untamed | Perimenopause Education for Neurodivergent Women",
    description:
      "Perimenopause education, nervous system support, and whole-woman transformation built specifically for neurodivergent women.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unmasked & Untamed",
    description:
      "Perimenopause education built specifically for neurodivergent women.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ConditionalHeader />
        <main id="main-content">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
