import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@public/logo.svg";
import Link from "next/link";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { Typography } from "../ui/typography";

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
      <div className="container-layout py-4 flex justify-between items-center">
        <Button variant="ghost-icon" size="icon" asChild>
          <Link href="/">
            <FiHome className="size-7" />
          </Link>
        </Button>
        <div className="flex gap-14 items-center justify-center">
          <Button variant="link" asChild>
            <Link href="/catalog">
              <Typography variant="title-3" as="span">
                Catalog
              </Typography>
            </Link>
          </Button>
          <Logo height={48} className="fill-on-background" />
          <Button variant="link" asChild>
            <Link href="/contact-us">
              <Typography variant="title-3" as="span">
                Contact Us
              </Typography>
            </Link>
          </Button>
        </div>
        <Button variant="ghost-icon" size="icon" asChild>
          <Link href="/cart">
            <FiShoppingCart className="size-7" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
