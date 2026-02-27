import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import PlusIcon from "@public/icons/plus.svg";
import Link from "next/link";

export function EmptyCart() {
  return (
    <div className="flex-1 flex justify-center items-center flex-col">
      <Typography variant="title-1" className="text-secondary mb-4">
        It seems your cart is empty
      </Typography>
      <Typography variant="body-1" className="font-light">
        Time to fill it with some great wines
      </Typography>
      <Button className="px-13 gap-2 bg-gradient-secondary mt-8" asChild>
        <Link href="/catalog">
          <PlusIcon className="size-5" />
          Go to Catalog
        </Link>
      </Button>
    </div>
  );
}
