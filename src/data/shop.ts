export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in cents
  badge?: string;
  features: string[];
  stripePriceId: string; // set in Stripe dashboard, add to each product
};

export const products: Product[] = [
  {
    id: "perimenopause-guide",
    name: "The Perimenopause Clarity Guide",
    description:
      "A comprehensive 40-page PDF guide covering the full hormonal landscape of perimenopause — what's happening, why it's affecting you differently as a neurodivergent woman, and what to do about it.",
    price: 2700,
    badge: "Most Popular",
    features: [
      "40-page illustrated guide",
      "Hormone tracking templates",
      "Symptom decoding framework",
      "Neurodivergent-specific adaptations",
      "Lifetime access & updates",
    ],
    stripePriceId: "price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID",
  },
  {
    id: "nervous-system-workbook",
    name: "Nervous System Reset Workbook",
    description:
      "A practical, science-backed workbook for regulating your nervous system through the hormonal fluctuations of perimenopause. Includes daily practices, tracking pages, and grounding protocols.",
    price: 1900,
    features: [
      "28-page workbook (printable PDF)",
      "Daily regulation practices",
      "Hormonal rhythm tracker",
      "Grounding protocol library",
      "ADHD & ASD adapted exercises",
    ],
    stripePriceId: "price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID",
  },
  {
    id: "the-full-library",
    name: "The Full Digital Library",
    description:
      "Every digital resource Lia has created — the clarity guide, the workbook, and all future additions — in one access pass. The most complete self-study resource available outside the program.",
    price: 5700,
    badge: "Best Value",
    features: [
      "All current digital products",
      "All future releases included",
      "Printable + fillable PDFs",
      "Priority access to new resources",
      "Lifetime access",
    ],
    stripePriceId: "price_REPLACE_WITH_YOUR_STRIPE_PRICE_ID",
  },
];
