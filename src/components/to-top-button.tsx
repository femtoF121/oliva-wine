"use client";

import { Button } from "@/components/ui/button";
import { FiChevronUp } from "react-icons/fi";

export function ToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      size="icon"
      variant="ghost-icon"
      onClick={scrollToTop}
      className="bg-gradient-secondary group"
    >
      <span className="group-hover:-translate-y-1 transition-transform">
        <FiChevronUp className="size-6 text-on-background" />
      </span>
    </Button>
  );
}
