import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="max-w-210 text-center absolute z-10 left-1/2 -translate-x-1/2 top-1/9">
        <div className="pb-10 bg-[radial-gradient(55%_40%_at_50%_60%,rgba(0,0,0,0.5),transparent)]">
          <Typography variant="heading-1" as="h1" className="text-primary">
            Discover your perfect bottle
          </Typography>
          <Typography className="text-on-background-inverse font-extralight mt-5">
            Explore our collection by region, grape, or style, and uncover
            bottles worth sharing. Great wine doesn’t have to be complicated —
            we’ll help you find your match.
          </Typography>
        </div>
        <Button size="big" className="w-78" asChild>
          <Link href="/catalog">Shop Now</Link>
        </Button>
      </div>
      <div className="sticky inset-0">
        <Image
          width={1500}
          height={698}
          className="w-full object-cover"
          src="/home/hero-section-bg.webp"
          alt="vineyard with bootle of wine"
        />
      </div>
    </section>
  );
}
