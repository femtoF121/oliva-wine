import { WINE_CATEGORIES } from "@/constants/home-page";
import { CategoryCard } from "./category-card";
import { SectionDivider } from "./section-divider";

export function CategorySection() {
  return (
    <section className="container-layout">
      <SectionDivider className="mb-14" text="Explore wines" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {WINE_CATEGORIES.map(({ category, src }) => (
          <CategoryCard
            key={category}
            category={category}
            subTitle="67 products"
            img={src}
          />
        ))}
      </div>
    </section>
  );
}
