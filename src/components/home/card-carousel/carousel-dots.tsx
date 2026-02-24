"use client";

import { cn } from "@/lib/utils";
import { EmblaCarouselType } from "embla-carousel";
import { ComponentProps, useEffect, useState } from "react";

interface CarouselDotsProps extends ComponentProps<"div"> {
  emblaApi: EmblaCarouselType | undefined;
  onAction?: () => void;
}

export function CarouselDots({
  emblaApi,
  onAction,
  className,
  ...rest
}: CarouselDotsProps) {
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
    onAction?.();
    emblaApi?.scrollTo(index);
  };

  return (
    <div {...rest} className={cn("mt-4 flex justify-center gap-2", className)}>
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
