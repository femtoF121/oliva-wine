// components/ui/typography.tsx
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground font-inter", {
  variants: {
    variant: {
      "heading-1":
        "font-lora text-[56px] leading-[72px] font-medium tracking-[0.01em]",
      "heading-2":
        "font-lora text-[48px] leading-[64px] font-normal tracking-[0.02em]",
      "heading-3":
        "font-lora text-[40px] leading-[56px] font-medium tracking-[0.01em]",
      "heading-4": "font-lora text-[32px] leading-[40px] font-semibold",
      "title-1":
        "font-lora text-[32px] leading-[40px] font-medium tracking-[0.01em]",
      "title-2": "font-lora text-[24px] leading-[32px] font-medium",
      "title-3": "font-lora text-[20px] leading-[28px] font-medium",
      "body-1": "text-[20px] leading-[32px] font-normal",
      "body-2": "text-[18px] leading-[24px] font-light",
      "label-1": "text-[18px] leading-[24px] font-medium",
      "label-2": "text-[16px] leading-[20px] font-normal",
      "label-3": "text-[14px] leading-[20px] font-normal",
      "caption-1": "text-[16px] leading-[20px] font-light",
      "caption-2": "text-[14px] leading-[18px] font-light",
    },
  },
  defaultVariants: {
    variant: "body-1",
  },
});

type AllowedTags = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "label";

type Variant = NonNullable<VariantProps<typeof typographyVariants>["variant"]>;

const defaultTagByVariant: Partial<Record<Variant, AllowedTags>> = {
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  "heading-4": "h4",
};

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & { as?: AllowedTags };

const Typography: React.FC<TypographyProps> = ({
  className,
  variant = "body-1",
  as,
  ...props
}) => {
  const Comp = as ?? defaultTagByVariant[variant!] ?? "p";
  return (
    <Comp
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};

export { Typography, typographyVariants };
