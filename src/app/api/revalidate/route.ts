/**
 * On-demand ISR revalidation webhook
 *
 * WordPress calls this endpoint whenever a post, video, or testimonial is
 * published or updated. It purges the relevant Next.js page caches so the
 * site updates within seconds instead of waiting for the timed revalidation.
 *
 * WordPress setup:
 *   1. Install the free "WP Webhooks" plugin
 *   2. Add a POST action trigger on "Post Published / Updated"
 *   3. URL:  https://unmaskedanduntamed.com/api/revalidate
 *   4. Header: x-revalidate-secret  →  (value of REVALIDATE_SECRET env var)
 */

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Verify the secret so only WordPress can trigger revalidation
  const secret = request.headers.get("x-revalidate-secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { postType?: string; slug?: string } = {};
  try {
    body = await request.json();
  } catch {
    // body is optional — revalidate everything if we can't parse it
  }

  const { postType, slug } = body;

  if (postType === "post" || !postType) {
    // Blog post changed — revalidate blog archive and individual post
    revalidatePath("/blog");
    if (slug) revalidatePath(`/blog/${slug}`);
  }

  if (postType === "uu_testimonial" || !postType) {
    // Testimonial changed — revalidate home page (social proof section)
    revalidatePath("/");
    revalidatePath("/her-sacred-fire");
  }

  if (postType === "uu_video" || !postType) {
    // Video changed — revalidate library
    revalidatePath("/library");
  }

  // Options page changed — revalidate all copy-dependent pages
  if (postType === "options" || !postType) {
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/her-sacred-fire");
    revalidatePath("/fire-circle");
    revalidatePath("/the-spark");
  }

  return NextResponse.json({ revalidated: true, postType: postType ?? "all" });
}
