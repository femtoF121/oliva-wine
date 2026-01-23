"use client";

import { Button } from "@/components/ui/button";
import { FiChevronUp } from "react-icons/fi";

export function ToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button size="icon" variant="ghost" onClick={scrollToTop}>
      <FiChevronUp className="size-6" />
    </Button>
  );
}
