/**
 * WordPress GraphQL client
 *
 * All data fetching from the headless WordPress CMS lives here.
 * If NEXT_PUBLIC_WP_GRAPHQL_URL is not set (i.e. WordPress isn't wired up yet),
 * every function falls back to the static TypeScript data files so the site
 * continues to work locally and during development.
 *
 * WordPress setup required (see Part 1 of the headless integration plan):
 *   - WPGraphQL plugin
 *   - Advanced Custom Fields (ACF) plugin
 *   - WPGraphQL for ACF plugin
 *   - Custom post types: uu_video, uu_testimonial
 *   - ACF field groups on those CPTs + an ACF Options Page called "Site Content"
 */

import { GraphQLClient, gql } from "graphql-request";

// ─── Static fallbacks (used when WordPress isn't configured yet) ───────────
import { allLayers, startHereVideos } from "@/data/library";
import { testimonials } from "@/data/testimonials";
import { programModules, programFAQs, programIncludes, programIsForYou } from "@/data/program";

// ─── TypeScript types ──────────────────────────────────────────────────────
import type { Testimonial, ProgramModule, FAQ } from "@/types/content";
import type { Video, Layer, Topic, LayerId } from "@/types/library";

// ─── Client ────────────────────────────────────────────────────────────────
function getClient(): GraphQLClient | null {
  const url = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;
  if (!url) return null;
  return new GraphQLClient(url);
}

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Convert "2026-03-18T00:00:00" → "March 18, 2026" */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Estimate read time from raw HTML content */
function readTimeFromContent(html: string): string {
  const words = html.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

// ═══════════════════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════

const TESTIMONIALS_QUERY = gql`
  query GetTestimonials {
    uuTestimonials(first: 20, where: { status: PUBLISH }) {
      nodes {
        databaseId
        testimonialFields {
          quote
          personName
          context
          featured
        }
      }
    }
  }
`;

type WPTestimonialNode = {
  databaseId: number;
  testimonialFields: {
    quote: string;
    personName: string;
    context: string;
    featured: boolean;
  };
};

export async function getTestimonials(): Promise<Testimonial[]> {
  const client = getClient();
  if (!client) return testimonials;
  try {
    const data = await client.request<{ uuTestimonials: { nodes: WPTestimonialNode[] } }>(
      TESTIMONIALS_QUERY
    );
    return data.uuTestimonials.nodes.map((node) => ({
      id: String(node.databaseId),
      quote: node.testimonialFields.quote,
      name: node.testimonialFields.personName,
      context: node.testimonialFields.context,
      featured: node.testimonialFields.featured ?? false,
    }));
  } catch (err) {
    console.error("[WordPress] getTestimonials failed, using fallback:", err);
    return testimonials;
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  const all = await getTestimonials();
  return all.filter((t) => t.featured);
}

// ═══════════════════════════════════════════════════════════════════════════
// BLOG POSTS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Blog posts in WordPress use:
 *   - Standard post fields: title, excerpt, slug, date, content
 *   - ACF field group "Post Fields" with: layer (select), read_time (text)
 */

const BLOG_POSTS_QUERY = gql`
  query GetBlogPosts {
    posts(first: 50, where: { status: PUBLISH, orderby: { field: DATE, order: DESC } }) {
      nodes {
        databaseId
        title
        excerpt
        slug
        date
        content
        postFields {
          layer
          readTime
        }
      }
    }
  }
`;

const BLOG_POST_BY_SLUG_QUERY = gql`
  query GetBlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      databaseId
      title
      slug
      date
      content
      excerpt
      postFields {
        layer
        readTime
      }
    }
  }
`;

const BLOG_SLUGS_QUERY = gql`
  query GetBlogSlugs {
    posts(first: 100, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  layer: string;
  slug: string;
  readTime: string;
  content?: string;
};

type WPPostNode = {
  databaseId: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  content: string;
  postFields?: {
    layer?: string;
    readTime?: string;
  };
};

function normalisePost(node: WPPostNode): BlogPost {
  return {
    id: String(node.databaseId),
    title: node.title,
    excerpt: node.excerpt?.replace(/<[^>]+>/g, "").trim() ?? "",
    slug: node.slug,
    date: formatDate(node.date),
    layer: node.postFields?.layer ?? "Foundation",
    readTime: node.postFields?.readTime ?? readTimeFromContent(node.content ?? ""),
    content: node.content,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const client = getClient();
  if (!client) return [];
  try {
    const data = await client.request<{ posts: { nodes: WPPostNode[] } }>(BLOG_POSTS_QUERY);
    return data.posts.nodes.map(normalisePost);
  } catch (err) {
    console.error("[WordPress] getBlogPosts failed:", err);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const client = getClient();
  if (!client) return null;
  try {
    const data = await client.request<{ post: WPPostNode | null }>(BLOG_POST_BY_SLUG_QUERY, {
      slug,
    });
    if (!data.post) return null;
    return normalisePost(data.post);
  } catch (err) {
    console.error("[WordPress] getBlogPost failed for slug:", slug, err);
    return null;
  }
}

export async function getBlogSlugs(): Promise<string[]> {
  const client = getClient();
  if (!client) return [];
  try {
    const data = await client.request<{ posts: { nodes: { slug: string }[] } }>(BLOG_SLUGS_QUERY);
    return data.posts.nodes.map((n) => n.slug);
  } catch {
    return [];
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// VIDEO LIBRARY
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Videos use CPT uu_video with ACF field group "Video Fields":
 *   layer       (select: foundation/understanding/excavation/skills/integration)
 *   topic_id    (text — must match a topic slug in the layer definition)
 *   topic_title (text — display name of the topic)
 *   topic_desc  (textarea)
 *   duration    (text e.g. "14:32")
 *   tags        (text — comma-separated)
 *   is_start_here (true/false)
 *   thumbnail_url (url)
 *
 * After fetching, videos are grouped by layer → topic to reconstruct the
 * Layer[] structure that the library UI components expect.
 */

const VIDEOS_QUERY = gql`
  query GetVideos {
    uuVideos(first: 500, where: { status: PUBLISH }) {
      nodes {
        databaseId
        title
        videoFields {
          layer
          topicId
          topicTitle
          topicDesc
          duration
          tags
          isStartHere
          thumbnailUrl
        }
      }
    }
  }
`;

type WPVideoNode = {
  databaseId: number;
  title: string;
  videoFields: {
    layer: LayerId;
    topicId: string;
    topicTitle: string;
    topicDesc: string;
    duration: string;
    tags: string;
    isStartHere: boolean;
    thumbnailUrl?: string;
  };
};

function buildLayersFromVideos(nodes: WPVideoNode[]): Layer[] {
  const layerOrder: LayerId[] = [
    "foundation",
    "understanding",
    "excavation",
    "skills",
    "integration",
  ];

  const layerMeta: Record<
    LayerId,
    { number: 1 | 2 | 3 | 4 | 5; title: string; subtitle: string; description: string; accentColor: string }
  > = {
    foundation: {
      number: 1,
      title: "Foundation",
      subtitle: "Understanding your neurodivergent perimenopause",
      description: "The essential groundwork — biology, dismissal history, and what makes this experience different.",
      accentColor: "#4a1968",
    },
    understanding: {
      number: 2,
      title: "Understanding",
      subtitle: "The mechanisms behind your symptoms",
      description: "Going deeper into hormones, the brain, and the body systems involved.",
      accentColor: "#7b4fa0",
    },
    excavation: {
      number: 3,
      title: "Excavation",
      subtitle: "Identity, unmasking, and what is real",
      description: "The personal and psychological work of perimenopause — who you are without the masks.",
      accentColor: "#c4622d",
    },
    skills: {
      number: 4,
      title: "Skills",
      subtitle: "Practical tools for the transition",
      description: "Evidence-based strategies for nervous system regulation, sleep, nutrition, and advocacy.",
      accentColor: "#c9a050",
    },
    integration: {
      number: 5,
      title: "Integration",
      subtitle: "Building your whole-woman life",
      description: "Bringing everything together — relationships, purpose, and what comes next.",
      accentColor: "#c9a050",
    },
  };

  // Group nodes by layer, then by topicId
  const grouped: Record<LayerId, Record<string, WPVideoNode[]>> = {
    foundation: {},
    understanding: {},
    excavation: {},
    skills: {},
    integration: {},
  };

  for (const node of nodes) {
    const { layer, topicId } = node.videoFields;
    if (!grouped[layer]) continue;
    if (!grouped[layer][topicId]) grouped[layer][topicId] = [];
    grouped[layer][topicId].push(node);
  }

  return layerOrder.map((layerId) => {
    const meta = layerMeta[layerId];
    const topicMap = grouped[layerId];
    const topics: Topic[] = Object.entries(topicMap).map(([topicId, vids]) => {
      const first = vids[0].videoFields;
      const videos: Video[] = vids.map((v) => ({
        id: String(v.databaseId),
        title: v.title,
        duration: v.videoFields.duration,
        description: "",
        thumbnail: v.videoFields.thumbnailUrl,
        layerId,
        topicId,
        tags: v.videoFields.tags
          ? v.videoFields.tags.split(",").map((t) => t.trim()).filter(Boolean)
          : [],
        isStartHere: v.videoFields.isStartHere ?? false,
      }));
      const totalSeconds = videos.reduce((acc, v) => {
        const [m, s] = v.duration.split(":").map(Number);
        return acc + (m ?? 0) * 60 + (s ?? 0);
      }, 0);
      const totalMin = Math.round(totalSeconds / 60);
      const hrs = Math.floor(totalMin / 60);
      const mins = totalMin % 60;
      const totalTime = hrs > 0 ? `${hrs} hr ${mins} min` : `${mins} min`;
      return {
        id: topicId,
        title: first.topicTitle || topicId,
        description: first.topicDesc || "",
        layerId,
        videoCount: videos.length,
        totalTime,
        videos,
      };
    });

    const totalVideoCount = topics.reduce((acc, t) => acc + t.videoCount, 0);
    const totalSec = topics.reduce((acc, t) => {
      const [h, m] = t.totalTime.includes("hr")
        ? t.totalTime.split(" hr ").map(Number)
        : [0, parseInt(t.totalTime)];
      return acc + (h ?? 0) * 3600 + (m ?? 0) * 60;
    }, 0);
    const totalHrs = Math.floor(totalSec / 3600);
    const remainMins = Math.round((totalSec % 3600) / 60);
    const estimatedTime =
      totalHrs > 0 ? `${totalHrs} hr ${remainMins} min` : `${remainMins} min`;

    const layer: Layer = {
      id: layerId,
      number: meta.number,
      title: meta.title,
      subtitle: meta.subtitle,
      description: meta.description,
      accentColor: meta.accentColor,
      topicCount: topics.length,
      totalVideoCount,
      estimatedTime,
      topics,
    };
    return layer;
  });
}

export async function getLibraryLayers(): Promise<Layer[]> {
  const client = getClient();
  if (!client) return allLayers;
  try {
    const data = await client.request<{ uuVideos: { nodes: WPVideoNode[] } }>(VIDEOS_QUERY);
    const layers = buildLayersFromVideos(data.uuVideos.nodes);
    // Fall back to static if WordPress returns empty (content not migrated yet)
    if (layers.every((l) => l.totalVideoCount === 0)) return allLayers;
    return layers;
  } catch (err) {
    console.error("[WordPress] getLibraryLayers failed, using fallback:", err);
    return allLayers;
  }
}

export async function getStartHereVideos(): Promise<Video[]> {
  const client = getClient();
  if (!client) return startHereVideos;
  try {
    const layers = await getLibraryLayers();
    const all = layers.flatMap((l) => l.topics.flatMap((t) => t.videos));
    const filtered = all.filter((v) => v.isStartHere).slice(0, 4);
    return filtered.length > 0 ? filtered : startHereVideos;
  } catch {
    return startHereVideos;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// PROGRAM CONTENT (ACF Options Page — "Site Content")
// ═══════════════════════════════════════════════════════════════════════════

/**
 * The "Site Content" ACF options page holds editable copy for key pages.
 *
 * Options page slug: "site-content"
 * WPGraphQL for ACF query root field: acfOptionsSiteContent
 *
 * Field group: "Program Settings" with:
 *   program_modules    (repeater: number, title, themes [repeater: theme], pillar)
 *   program_faqs       (repeater: question, answer)
 *   program_includes   (repeater: item_text)
 *   program_is_for_you (repeater: item_text)
 *   hero_headline      (text)
 *   hero_subheadline   (textarea)
 *   about_body         (wysiwyg)
 */

const SITE_OPTIONS_QUERY = gql`
  query GetSiteOptions {
    acfOptionsSiteContent {
      siteContent {
        heroHeadline
        heroSubheadline
        aboutBody
        programModules {
          number
          title
          themes
          pillar
        }
        programFaqs {
          question
          answer
        }
        programIncludes
        programIsForYou
      }
    }
  }
`;

export type SiteOptions = {
  heroHeadline: string;
  heroSubheadline: string;
  aboutBody: string;
  programModules: ProgramModule[];
  programFaqs: FAQ[];
  programIncludes: string[];
  programIsForYou: string[];
};

const DEFAULT_SITE_OPTIONS: SiteOptions = {
  heroHeadline: "For the woman who is done pretending.",
  heroSubheadline:
    "Perimenopause education, nervous system support, and whole-woman transformation — built specifically for neurodivergent women who have been dismissed, misdiagnosed, and left without answers.",
  aboutBody: "",
  programModules,
  programFaqs: programFAQs,
  programIncludes,
  programIsForYou,
};

type WPSiteOptionsData = {
  acfOptionsSiteContent: {
    siteContent: {
      heroHeadline?: string;
      heroSubheadline?: string;
      aboutBody?: string;
      programModules?: Array<{
        number: number;
        title: string;
        themes: string;
        pillar: "body" | "mind" | "soul" | "nervous-system";
      }>;
      programFaqs?: Array<{ question: string; answer: string }>;
      programIncludes?: string[];
      programIsForYou?: string[];
    };
  };
};

export async function getSiteOptions(): Promise<SiteOptions> {
  const client = getClient();
  if (!client) return DEFAULT_SITE_OPTIONS;
  try {
    const data = await client.request<WPSiteOptionsData>(SITE_OPTIONS_QUERY);
    const sc = data.acfOptionsSiteContent.siteContent;
    return {
      heroHeadline: sc.heroHeadline ?? DEFAULT_SITE_OPTIONS.heroHeadline,
      heroSubheadline: sc.heroSubheadline ?? DEFAULT_SITE_OPTIONS.heroSubheadline,
      aboutBody: sc.aboutBody ?? "",
      programModules: sc.programModules?.map((m) => ({
        number: m.number,
        title: m.title,
        themes: typeof m.themes === "string" ? m.themes.split(",").map((t) => t.trim()) : [],
        pillar: m.pillar,
      })) ?? DEFAULT_SITE_OPTIONS.programModules,
      programFaqs: sc.programFaqs ?? DEFAULT_SITE_OPTIONS.programFaqs,
      programIncludes: sc.programIncludes ?? DEFAULT_SITE_OPTIONS.programIncludes,
      programIsForYou: sc.programIsForYou ?? DEFAULT_SITE_OPTIONS.programIsForYou,
    };
  } catch (err) {
    console.error("[WordPress] getSiteOptions failed, using fallback:", err);
    return DEFAULT_SITE_OPTIONS;
  }
}
