import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  if (!secretKey || !priceId) {
    return NextResponse.json({ error: "Payment not configured." }, { status: 500 });
  }

  const stripe = new Stripe(secretKey, { apiVersion: "2026-03-25.dahlia" });

  let name: string, email: string, whyInvest: string, whyNow: string;

  try {
    const body = await request.json();
    name = body.name?.trim();
    email = body.email?.trim();
    whyInvest = body.whyInvest?.trim();
    whyNow = body.whyNow?.trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!name || !email || !whyInvest || !whyNow) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: email,
    metadata: { name, email, whyInvest, whyNow },
    success_url: `${baseUrl}/apply/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/apply`,
  });

  return NextResponse.json({ url: session.url });
}
