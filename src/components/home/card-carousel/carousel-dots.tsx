"use client";

import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import { useEffect, useState } from "react";

export function CarouselDots({
  emblaApi,
}: {
  emblaApi: EmblaCarouselType | undefined;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("init", onInit);
    emblaApi.on("select", onSelect);

    if (emblaApi) {
      onInit();
    }

    return () => {
      emblaApi.off("init", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const goToIndex = (index: number) => {
    emblaApi?.plugins().autoplay?.stop();
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="mt-4 flex justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => goToIndex(index)}
          className={cn(
            "h-3 w-3 rounded-full transition-colors",
            index === selectedIndex
              ? "bg-on-surface-variant-high"
              : "bg-on-surface-variant-low hover:brightness-90",
          )}
        />
      ))}
    </div>
  );
}
