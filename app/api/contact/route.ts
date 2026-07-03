import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 400 });
  }

  const delivery = await sendContactEmail(parsed.data);

  return NextResponse.json({
    success: true,
    message: "Your consultation request has been received.",
    delivery,
  });
}
