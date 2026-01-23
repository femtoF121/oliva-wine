import { getProductById } from "@/lib/api/products";
import { notFound } from "next/navigation";

export default async function Catalog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const wine = await getProductById(id);

  if (!wine) return notFound();

  return (
    <div className="flex items-center justify-center bg-zinc-100 gap-4">
      Wine details page id: {id}
    </div>
  );
}
