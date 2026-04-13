import type { Testimonial } from "@/types/content";

export const testimonials: Testimonial[] = [
  {
    id: "t-001",
    quote:
      "I spent fifteen years being told my symptoms were anxiety, burnout, or just 'being too sensitive.' Lia's library was the first place I found language for what was actually happening. The neurodivergent perimenopause video made me cry with relief. Someone finally understood.",
    name: "Amara T.",
    context: "Her Sacred Fire, Cohort 2",
    featured: true,
  },
  {
    id: "t-002",
    quote:
      "I was diagnosed with ADHD at 46, right at the start of perimenopause. The combination nearly undid me. The Fire Circle gave me a community of women who actually got it — no explaining required. Her Sacred Fire gave me the tools. I feel like myself again, but a version of myself I actually like.",
    name: "Denise M.",
    context: "Her Sacred Fire, Cohort 3",
    featured: true,
  },
  {
    id: "t-003",
    quote:
      "What Lia has built is genuinely unlike anything else. This isn't wellness fluff. It's rigorous, research-grounded, and deeply personal. The program didn't just help me understand perimenopause — it changed how I understand my entire life.",
    name: "Priya K.",
    context: "Her Sacred Fire, Cohort 1",
    featured: true,
  },
  {
    id: "t-004",
    quote:
      "The Start Here videos changed the direction of my year. I watched all four in one afternoon and spent the rest of the week rereading my journal through completely new eyes. Free, available, no strings. Just profound.",
    name: "Rachel S.",
    context: "Free Library",
    featured: false,
  },
  {
    id: "t-005",
    quote:
      "I have been following Lia on TikTok for months and finally joined the free community. The quality of conversation in The Fire Circle is extraordinary. These are smart, thoughtful women who are doing the real work.",
    name: "Claudette B.",
    context: "The Fire Circle",
    featured: false,
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);
