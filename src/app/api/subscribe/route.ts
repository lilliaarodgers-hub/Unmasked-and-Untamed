import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  let email: string;
  let formId: string;
  try {
    const body = await request.json();
    email = body.email?.trim();
    formId = body.formId?.trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !formId) {
    return NextResponse.json({ error: "Email and form ID are required." }, { status: 400 });
  }

  const res = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email_address: email }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error("[Kit] Subscribe failed:", res.status, data);
    return NextResponse.json(
      { error: "Could not subscribe. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
