import * as React from "react";

import { cn } from "@/lib/utils";

export function TextInput({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "h-12 px-3 py-3.5 min-w-72 rounded-sm bg-surface-variant border border-on-surface-variant-low text-on-surface placeholder:text-on-surface-variant-high text-base hover:border-secondary focus:outline-0 focus:border-secondary focus:border-2",
        className,
      )}
      {...props}
    />
  );
}
