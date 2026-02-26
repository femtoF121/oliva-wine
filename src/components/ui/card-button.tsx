import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface WineCardProps extends ComponentProps<"button"> {
  text?: string;
}

export function CardButton({
  text = "Add to Cart",
  className,
  ...rest
}: WineCardProps) {
  return (
    <button
      {...rest}
      className={cn(
        "relative isolate flex items-center justify-center group",
        "w-full p-6 border border-primary rounded-b-card overflow-hidden",
        "text-base font-medium font-inter text-on-surface",
        className,
      )}
    >
      {text}
      <div className="absolute -z-10 inset-0 w-full bg-surface">
        <div className="h-full w-0 group-active:brightness-105 group-hover:w-full bg-gradient-accent transition-all duration-300" />
      </div>
    </button>
  );
}
