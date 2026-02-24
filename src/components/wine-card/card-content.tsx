import { cn } from "@/lib/utils";
import { Wine } from "@/types/wine";
import Image from "next/image";
import { ComponentProps } from "react";
import { Typography } from "../ui/typography";
import { WineFeatures } from "./wine-features";

interface CardContentProps extends ComponentProps<"div"> {
  wine: Wine;
}

export function CardContent({ wine, className, ...rest }: CardContentProps) {
  const { price, discountedPrice, name, type, image } = wine;

  return (
    <div
      {...rest}
      className={cn(
        "relative flex flex-col items-center px-3 pt-6 pb-8 group",
        className,
      )}
    >
      <Typography variant="title-2" as="span" className="text-on-surface mb-2">
        {name}
      </Typography>
      <Typography
        variant="body-2"
        as="span"
        className="text-secondary uppercase mb-8"
      >
        {type}
      </Typography>
      <Image
        width={112}
        height={224}
        src={image}
        alt="bottle of wine"
        className="group-hover:scale-110 transition-all duration-400 drop-shadow-[15px_0_12px_rgba(0,0,0,0.3)]"
      />
      <Typography variant="title-1" className="text-on-surface mt-8">
        {discountedPrice && (
          <>
            <Typography
              variant="title-2"
              as="span"
              className="line-through text-on-surface-variant-high"
            >
              {discountedPrice}₴
            </Typography>{" "}
          </>
        )}
        {price}₴
      </Typography>
      <WineFeatures wine={wine} />
    </div>
  );
}
