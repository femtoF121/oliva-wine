import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Typography } from "../ui/typography";

interface SectionDivider extends ComponentProps<"div"> {
  text: string;
}

export function SectionDivider({ text, className, ...rest }: SectionDivider) {
  return (
    <div {...rest} className={cn("flex items-center gap-8", className)}>
      <Divider />
      <Typography variant="heading-2" as="h2" className="text-secondary">
        {text}
      </Typography>
      <Divider />
    </div>
  );
}

function Divider() {
  return (
    <div className="flex-1 h-0.5 bg-gradient-secondary-variant rounded-full" />
  );
}
