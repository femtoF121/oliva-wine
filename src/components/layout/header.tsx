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
        "sticky top-0 w-full font-lora text-[#211F1A]",
        variant === "gradient"
          ? "bg-[radial-gradient(95.41%_95.41%_at_50%_50%,#E7B10A,#FDEED1)]"
          : "bg-[#FDEED1]",
      )}
    >
      <div className="mx-auto max-w-360 px-20 py-4 flex justify-between items-center">
        <Link href="/">
          <Button variant="ghost" size="icon">
            <FiHome className="size-7" />
          </Button>
        </Link>
        <div className="flex gap-14 items-center justify-center">
          <Link href="/catalog">
            <Button variant="link">Catalog</Button>
          </Link>
          <Logo height={48} fill="#211F1A" />
          <Link href="/contact-us">
            <Button variant="link">Contact Us</Button>
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
