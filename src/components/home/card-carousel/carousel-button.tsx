"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ChevronRight from "@public/chevron-right.svg";
import { EmblaCarouselType } from "embla-carousel";
import { ComponentProps } from "react";

interface CarouselButtonProps extends ComponentProps<"button"> {
  emblaApi: EmblaCarouselType | undefined;
  variant: "next" | "prev";
  onAction?: () => void;
}

export function CarouselButton({
  onAction,
  emblaApi,
  variant,
  className,
  ...rest
}: CarouselButtonProps) {
  const isNext = variant === "next";

  const handleClick = () => {
    onAction?.();
    if (isNext) emblaApi?.scrollNext();
    else emblaApi?.scrollPrev();
  };

  return (
    <Button
      {...rest}
      variant="icon"
      size="icon"
      className={cn(
        "border border-secondary [&_svg]:stroke-secondary hover:[&_svg]:scale-none",
        isNext
          ? "[&_svg]:rotate-0 hover:[&_svg]:translate-x-1"
          : "[&_svg]:rotate-180 hover:[&_svg]:-translate-x-1",
        className,
      )}
      onClick={handleClick}
    >
      <ChevronRight />
    </Button>
  );
}
