import { wines } from "@/data/wines";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const product = wines.find((wine) => wine.id === id);

  if (!product)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });

  return NextResponse.json({ data: product });
}
