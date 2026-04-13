import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { OrnamentsRow } from "@/components/shared/BrandDivider";
import { SITE_NAME, NEWSLETTER_NAME, COACH_NAME } from "@/lib/constants";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const navGroups = [
    {
      label: "Community",
      items: footerNav.filter((n) =>
        ["/fire-circle", "/the-spark"].includes(n.href)
      ),
    },
    {
      label: "Resources",
      items: footerNav.filter((n) =>
        ["/research", "/blog", "/work-with-lia"].includes(n.href)
      ),
    },
    {
      label: "Legal",
      items: footerNav.filter((n) =>
        ["/legal/privacy", "/legal/terms"].includes(n.href)
      ),
    },
  ];

  return (
    <footer className="bg-dark-plum text-sacred-cream/80">
      {/* Newsletter band */}
      <div className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="font-body text-xs uppercase tracking-widest text-warm-gold mb-4">
              {NEWSLETTER_NAME}
            </p>
            <h2 className="font-heading text-3xl font-light text-sacred-cream mb-3">
              Stay connected.
            </h2>
            <p className="font-body text-sm text-sacred-cream/60 mb-8 leading-relaxed">
              Weekly insights from Lia — perimenopause education, nervous system
              support, and honest conversation. No spam. No selling every email.
            </p>
            <NewsletterSignup
              variant="dark"
              placeholder="Enter your email"
              ctaLabel="Join The Spark"
              formId="05787d9f0c"
            />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-flex flex-col leading-none mb-4"
              aria-label="Home"
            >
              <span className="font-heading text-xl font-light tracking-wide text-sacred-cream">
                Unmasked
              </span>
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-warm-gold">
                &amp; Untamed
              </span>
            </Link>
            <p className="font-body text-sm text-sacred-cream/50 leading-relaxed mt-4">
              Perimenopause education for neurodivergent women.
              <br />
              Built by {COACH_NAME}.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="font-body text-xs uppercase tracking-widest text-warm-gold/70 mb-4">
                {group.label}
              </p>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-sacred-cream/60 hover:text-sacred-cream transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <OrnamentsRow className="my-12" />

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-body text-xs text-sacred-cream/35">
            {SITE_NAME} &copy; {currentYear}. All rights reserved.
          </p>
          <p className="font-body text-xs text-sacred-cream/25 max-w-lg leading-relaxed">
            {SITE_NAME} is an educational platform. The content is not a
            substitute for medical advice, diagnosis, or treatment. Always seek
            the guidance of a qualified healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
