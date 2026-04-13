// ─── Site metadata ────────────────────────────────────────────────────────────

export const SITE_NAME = "Unmasked & Untamed";
export const SITE_TAGLINE = "For the woman who is done pretending.";
export const SITE_DESCRIPTION =
  "Perimenopause education, nervous system support, and whole-woman transformation built specifically for neurodivergent women who have been dismissed, misdiagnosed, and left without answers.";
export const SITE_URL = "https://unmaskedanduntamed.com";

// ─── Brand names ──────────────────────────────────────────────────────────────

export const PROGRAM_NAME = "Her Sacred Fire";
export const NEWSLETTER_NAME = "The Spark";
export const COMMUNITY_NAME = "The Fire Circle";
export const COACH_NAME = "Lia Dominique";

// ─── Brand colors ─────────────────────────────────────────────────────────────

export const BRAND_COLORS = {
  sacredCream: "#faf7f2",
  deepPlum: "#4a1968",
  warmGold: "#c9a050",
  emberTerracotta: "#c4622d",
  softPlum: "#f5eef8",
  darkPlum: "#1a0a24",
  plumMuted: "#7b4fa0",
  plumLight: "#e8d8f5",
} as const;

// ─── Framer Motion variants ───────────────────────────────────────────────────

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
