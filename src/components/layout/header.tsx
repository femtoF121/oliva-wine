import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@public/logo.svg";
import Link from "next/link";
import { FiHome, FiShoppingCart } from "react-icons/fi";

export function Header({
  variant = "fill",
}: {
  variant?: "gradient" | "fill";
}) {
  return (
    <header
      className={cn(
        "sticky z-20 top-0 w-full font-lora text-on-background",
        variant === "gradient" ? "bg-gradient-accent-variant" : "bg-background",
      )}
    >
      <div className="mx-auto max-w-layout px-20 py-4 flex justify-between items-center">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <FiHome className="size-7" />
          </Button>
        </Link>
        <div className="flex gap-14 items-center justify-center">
          <Link href="/catalog">
            <Button variant="link" className="text-xl">
              Catalog
            </Button>
          </Link>
          <Logo height={48} fill="#211F1A" />
          <Link href="/contact-us">
            <Button variant="link" className="text-xl">
              Contact Us
            </Button>
          </Link>
        </div>
        <Link href="/cart">
          <Button variant="ghost" size="icon">
            <FiShoppingCart className="size-7" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
