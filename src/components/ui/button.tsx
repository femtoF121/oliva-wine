import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-sm font-semibold inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        filled: "text-on-primary bg-gradient-accent hover:brightness-107",
        outline: "text-primary border-2 border-primary hover:border-3",
        text: "leading-5 text-surface hover:text-secondary hover:underline",
        ghost: "text-on-background hover:bg-stone-400/20",
        link: "text-on-primary font-medium underline-offset-4 decoration-2 hover:underline",
      },
      size: {
        small: "h-10 p-2 text-sm",
        medium: "h-12 p-3 text-base",
        big: "h-14 p-4 text-lg",
        icon: "w-fit aspect-square p-2.5",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "medium",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "filled",
  size = "medium",
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
