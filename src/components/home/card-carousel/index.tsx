"use client";

import ChevronRight from "@public/chevron-right.svg";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ComponentProps } from "react";
import { Button } from "../../ui/button";
import { CarouselDots } from "./carousel-dots";

const slides = [
  { title: "Slide 1" },
  { title: "Slide 2" },
  { title: "Slide 3" },
  { title: "Slide 4" },
  { title: "Slide 5" },
  { title: "Slide 6" },
  { title: "Slide 7" },
  { title: "Slide 8" },
  //   { title: "Slide 9" },
];

interface CardCarouselProps extends ComponentProps<"div"> {
  spacing?: number;
  slidesToShow?: number;
  autoplay?: boolean;
}

export function CardCarousel({
  spacing = 24,
  slidesToShow = 4,
  autoplay = true,
}: CardCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: slidesToShow },
    [
      Autoplay({
        active: autoplay,
        delay: 3000,
        stopOnInteraction: true,
      }),
    ],
  );

  const goToPrev = () => {
    emblaApi?.plugins().autoplay?.stop();
    emblaApi?.scrollPrev();
  };
  const goToNext = () => {
    emblaApi?.plugins().autoplay?.stop();
    emblaApi?.scrollNext();
  };

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex touch-pan-y touch-pinch-zoom -ml-6"
          style={{ marginLeft: spacing * -1 }}
        >
          {slides.map(({ title }, index) => (
            <div
              key={index}
              style={{
                paddingLeft: spacing,
                flex: `0 0 ${100 / slidesToShow}%`,
              }}
            >
              <div className="p-4 bg-amber-500 h-48 border border-amber-700 rounded-xl flex justify-center items-center">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-7.5">
        <Button
          variant="icon"
          size="icon"
          className="border-secondary [&_svg]:stroke-secondary"
          onClick={goToPrev}
        >
          <ChevronRight className="rotate-180" />
        </Button>
        <CarouselDots emblaApi={emblaApi} />
        <Button
          variant="icon"
          size="icon"
          className="border-secondary [&_svg]:stroke-secondary"
          onClick={goToNext}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
