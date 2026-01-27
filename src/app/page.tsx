import { getProductById, getProducts } from "@/lib/api/products";
import Image from "next/image";

export default async function Home() {
  const { data } = await getProducts();
  const { data: dataById } = await getProductById("wine-2");

  return (
    <div className="flex-1">
      <div className="relative w-full">
        <div className="sticky inset-0">
          <Image
            width={1500}
            height={698}
            className="w-full object-cover"
            src="/hero-section-bg.webp"
            alt="vineyard with bootle of wine"
          />
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
