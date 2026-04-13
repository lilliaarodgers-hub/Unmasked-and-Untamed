import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Unmasked & Untamed.",
};

export default function TermsPage() {
  return (
    <div className="bg-sacred-cream pt-32 section-padding">
      <div className="container-narrow">
        <h1 className="font-heading font-light text-display text-deep-plum mb-8">
          Terms of Use
        </h1>
        <p className="font-body text-sm text-plum-muted mb-10">
          Last updated: March 2026
        </p>

        <div className="font-body text-dark-plum/70 leading-relaxed space-y-6">
          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              1. Acceptance of terms
            </h2>
            <p>
              By using this website, you agree to these terms of use. If you do
              not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              2. Not medical advice
            </h2>
            <p>
              The content on this website — including all videos, articles,
              newsletters, and programme materials — is provided for educational
              and informational purposes only. It is not a substitute for
              professional medical advice, diagnosis, or treatment. Always seek
              the guidance of a qualified healthcare provider with any questions
              you may have regarding a medical condition.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              3. Intellectual property
            </h2>
            <p>
              All content on this website — including videos, written content,
              graphics, and programme materials — is the intellectual property
              of Lia Dominique and Unmasked & Untamed. Reproduction,
              distribution, or commercial use without explicit permission is
              prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              4. Programme terms
            </h2>
            <p>
              Specific terms for Her Sacred Fire and other paid programmes are
              provided at the point of enrollment. The refund policy is stated
              clearly during the application process.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              5. Community conduct
            </h2>
            <p>
              Membership in The Fire Circle community is subject to the
              community agreements stated on the Fire Circle page. Unmasked &
              Untamed reserves the right to remove any member who violates
              those agreements.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl text-deep-plum font-light mb-3">
              6. Contact
            </h2>
            <p>
              For any enquiries regarding these terms, please contact
              hello@unmaskedanduntamed.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
