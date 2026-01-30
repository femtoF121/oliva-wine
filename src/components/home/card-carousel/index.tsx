"use client";

import { WineCard } from "@/components/wine-card";
import { Wine } from "@/types/wine";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ComponentProps } from "react";
import { CarouselButton } from "./carousel-button";
import { CarouselDots } from "./carousel-dots";

interface CardCarouselProps extends ComponentProps<"div"> {
  wines: Wine[];
  spacing?: number;
  slidesToShow?: number;
  autoplay?: boolean;
}

export function CardCarousel({
  wines,
  spacing = 24,
  slidesToShow = 4,
  autoplay = true,
}: CardCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: slidesToShow },
    [
      Autoplay({
        active: autoplay,
        delay: 5000,
        stopOnInteraction: true,
      }),
    ],
  );

  const stopAutoplay = () => emblaApi?.plugins().autoplay?.stop();

  return (
    <div>
      <div className="overflow-hidden pb-7.5" ref={emblaRef}>
        <div
          className="flex touch-pan-y touch-pinch-zoom -ml-6"
          style={{ marginLeft: spacing * -1 }}
        >
          {wines.map((wine) => (
            <div
              key={wine.id}
              style={{
                paddingLeft: spacing,
                flex: `0 0 ${100 / slidesToShow}%`,
              }}
            >
              <WineCard key={wine.id} wine={wine} withButton />{" "}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <CarouselButton
          emblaApi={emblaApi}
          variant="prev"
          onAction={stopAutoplay}
        />
        <CarouselDots emblaApi={emblaApi} onAction={stopAutoplay} />
        <CarouselButton
          emblaApi={emblaApi}
          variant="next"
          onAction={stopAutoplay}
        />
      </div>
    </div>
  );
}
