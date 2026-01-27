import { getProductById, getProducts } from "@/lib/api/products";

export default async function Home() {
  const { data } = await getProducts();
  const { data: dataById } = await getProductById("wine-2");

  return (
    <div className="flex-1 flex items-center justify-center gap-4">
      {data.map((wine) => (
        <div key={wine.id} className="border p-4 rounded-lg bg-background ">
          {wine.name}
        </div>
      ))}
      <div className="border p-4 rounded-lg bg-background ">
        <h2>Product by ID:</h2>
        {dataById.name}
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
