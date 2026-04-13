import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Unmasked & Untamed.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-sacred-cream pt-32 section-padding">
      <div className="container-narrow">
        <h1 className="font-heading font-light text-display text-deep-plum mb-8">
          Privacy Policy
        </h1>
        <p className="font-body text-sm text-plum-muted mb-10">
          Last updated: March 2026
        </p>

        <div className="prose prose-sm max-w-none font-body text-dark-plum/70 leading-relaxed space-y-6">
          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              1. Who we are
            </h2>
            <p>
              Unmasked & Untamed is operated by Lia Dominique. This privacy
              policy explains how we collect, use, and protect your personal
              data when you use this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              2. What data we collect
            </h2>
            <p>
              We collect your email address when you subscribe to The Spark
              newsletter or request the Perimenopause Starter Kit. We do not
              collect sensitive health data unless you explicitly share it with
              us in correspondence.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              3. How we use your data
            </h2>
            <p>
              Your email address is used to send you the newsletter and any
              content you have requested. We do not sell your data to third
              parties. We do not share your data without your consent except
              as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              4. Your rights
            </h2>
            <p>
              You may unsubscribe from all communications at any time using the
              unsubscribe link in any email. You may request deletion of your
              data by contacting us at privacy@unmaskedanduntamed.com.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              5. Cookies
            </h2>
            <p>
              This website uses essential cookies required for basic
              functionality. We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              6. Contact
            </h2>
            <p>
              For any privacy-related enquiries, please contact
              privacy@unmaskedanduntamed.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
