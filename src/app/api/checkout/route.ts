import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Shop coming soon." }, { status: 503 });
}
