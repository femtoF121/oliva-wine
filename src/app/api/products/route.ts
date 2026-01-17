import { wines } from "@/data/wines";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: wines,
  });
}
