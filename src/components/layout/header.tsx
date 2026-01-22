import Image from "next/image";
import Link from "next/link";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="fixed top-0 w-full font-lora">
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
          <Image src={"/logo.svg"} alt="Oliva wine" height={48} width={92} />
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
