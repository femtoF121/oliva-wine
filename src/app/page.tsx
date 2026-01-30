import { BenefitsSection } from "@/components/home/benefits-section";
import { CardCarousel } from "@/components/home/card-carousel";
import { HeroSection } from "@/components/home/hero-section";
import { SectionDivider } from "@/components/home/section-divider";
import { getProductById, getProducts } from "@/lib/api/products";
import Image from "next/image";

export default async function Home() {
  const { data } = await getProducts();
  const { data: dataById } = await getProductById("wine-2");

  return (
    <div className="flex-1">
      <HeroSection />
      <div className="mx-auto mt-10 mb-20 flex flex-col items-center gap-20">
        <section className="container-layout">
          <SectionDivider className="mb-14" text="Fine wines, great prices" />
          <CardCarousel wines={data} />
        </section>
        <BenefitsSection />
        <section className="container-layout">
          <SectionDivider className="mb-14" text="Best-selling wines" />
        </section>
        <section>join ours newsletter</section>
        <section className="container-layout">
          <SectionDivider className="mb-14" text="Explore wines" />
        </section>
        <section className="h-85 w-full overflow-hidden">
          <Image
            width={1440}
            height={340}
            src="/home/divider.webp"
            alt="grape"
            className="w-full h-full object-cover object-center"
          />
        </section>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
