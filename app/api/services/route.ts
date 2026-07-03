import { NextResponse } from "next/server";
import { additionalServices, services } from "@/data/services";

export async function GET() {
  return NextResponse.json({ success: true, data: [...services, ...additionalServices] });
}
