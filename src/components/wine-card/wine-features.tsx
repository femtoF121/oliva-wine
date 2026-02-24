import { cn } from "@/lib/utils";
import type { Wine } from "@/types/wine";
import { ComponentProps } from "react";
import { Typography } from "../ui/typography";

interface WineFeaturesProps extends ComponentProps<"div"> {
  wine: Wine;
}

export function WineFeatures({ wine, className, ...rest }: WineFeaturesProps) {
  const { feature, price, discountedPrice } = wine;

  if (!feature && !discountedPrice) return;

  return (
    <div
      {...rest}
      className={cn("absolute top-32 left-0 space-y-1", className)}
    >
      {discountedPrice && (
        <FeatureTag
          discount
          text={`-${Math.round(((price - discountedPrice) * 100) / price)}%`}
        />
      )}
      {feature && <FeatureTag text={feature} />}
    </div>
  );
}

function FeatureTag({
  discount = false,
  text,
}: {
  text: string;
  discount?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center pl-5 h-8 w-22 uppercase",
        discount
          ? "rounded-tr-4xl rounded-br-[1px] bg-red"
          : "rounded-br-4xl rounded-tr-[1px] bg-secondary",
      )}
    >
      <Typography variant="label-2" as="span" className="text-surface">
        {text}
      </Typography>
    </div>
  );
}
