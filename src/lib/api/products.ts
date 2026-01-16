import { Wine } from "@/types/wine";
import { notFound } from "next/navigation";
import { getBaseUrl } from "../utils";

export const getProducts = async (): Promise<{ data: Wine[] }> => {
  const res = await fetch(`${getBaseUrl()}/api/products`);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Products API failed: ${res.status} ${res.statusText}\n
      URL: ${getBaseUrl()}/api/products\n 
      Body: ${text.slice(0, 300)}`,
    );
  }
  return await res.json();
};

export const getProductById = async (id: string): Promise<{ data: Wine }> => {
  const res = await fetch(`${getBaseUrl()}/api/products/${id}`);
  if (res.status === 404) return notFound();
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `ProductById API failed: ${res.status} ${res.statusText}\n
      URL: ${getBaseUrl()}/api/products/${id}\n 
      Body: ${text.slice(0, 300)}`,
    );
  }
  return await res.json();
};
