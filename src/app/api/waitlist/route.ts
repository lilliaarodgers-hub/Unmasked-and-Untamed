import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let name: string, email: string, phone: string;

  try {
    const body = await request.json();
    name = body.name?.trim();
    email = body.email?.trim();
    phone = body.phone?.trim();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const kitApiKey = process.env.KIT_API_KEY;
  const waitlistFormId = process.env.KIT_WAITLIST_FORM_ID;

  if (kitApiKey && waitlistFormId) {
    const res = await fetch(`https://api.kit.com/v4/forms/${waitlistFormId}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${kitApiKey}`,
      },
      body: JSON.stringify({
        email_address: email,
        first_name: name.split(" ")[0],
        fields: { phone, full_name: name },
      }),
    });

    if (!res.ok) {
      console.error("[Kit] Waitlist subscribe failed:", res.status);
    }
  }

  return NextResponse.json({ success: true });
}
