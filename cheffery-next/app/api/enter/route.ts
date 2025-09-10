import { NextResponse } from "next/server";
import { z } from "zod";
import { enterSchema } from "@/lib/schema";
import { sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/ratelimit";

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown").toString();
  const limited = rateLimit(`enter:${ip}`);
  if (!limited.ok) {
    return NextResponse.json({ ok: false, error: "Rate limit" }, { status: 429, headers: { "Retry-After": String(limited.retryAfter) } });
  }
  const body = await req.json().catch(() => ({}));
  const parsed = enterSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.flatten();
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
  const data = parsed.data;
  const html = `
    <h2>New Cheffery Lead</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;
  await sendEmail({ subject: "New Cheffery Lead", html });
  return NextResponse.json({ ok: true });
}


