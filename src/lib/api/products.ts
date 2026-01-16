import { Wine } from "@/types/wine";
import { notFound } from "next/navigation";

export const getProducts = async (): Promise<{ data: Wine[] }> => {
  const res = await fetch(`${process.env.API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};

export const getProductById = async (id: string): Promise<{ data: Wine }> => {
  const res = await fetch(`${process.env.API_URL}/products/${id}`);
  if (res.status === 404) return notFound();
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
};
