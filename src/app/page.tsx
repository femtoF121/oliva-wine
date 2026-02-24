import { BenefitsSection } from "@/components/home/benefits-section";
import { CardCarousel } from "@/components/home/card-carousel";
import { HeroSection } from "@/components/home/hero-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { SectionDivider } from "@/components/home/section-divider";
import { getProductById, getProducts } from "@/lib/api/products";

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
          <CardCarousel
            wines={data.filter(({ feature }) => feature === "best")}
          />
        </section>
        <NewsletterSection />
        <section className="container-layout">
          <SectionDivider className="mb-14" text="Explore wines" />
        </section>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
