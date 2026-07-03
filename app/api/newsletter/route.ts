import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: "Subscription saved.",
  });
}
