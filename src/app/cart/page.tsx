import { CartItem } from "@/components/cart-item";
import { EmptyCart } from "@/components/cart/cart-empty";
import { CartSummary } from "@/components/cart/cart-summary";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { wines } from "@/data/wines";
import PlusIcon from "@public/icons/plus.svg";

export default function Catalog() {
  const isCartEmpty = true;

  return (
    <div className="flex-1 container-layout py-12 flex gap-16">
      {isCartEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="title-3">4 item(s) added</Typography>
              <Typography
                variant="label-2"
                className="text-on-surface-variant-high"
              >
                Clear all
              </Typography>
            </div>
            <div className="space-y-3 mb-6">
              <CartItem wine={wines[0]} quantity={1} />
              <CartItem wine={wines[0]} quantity={1} />
              <CartItem wine={wines[0]} quantity={1} />
              <CartItem wine={wines[0]} quantity={1} />
            </div>
            <Button
              variant="outline"
              className="border-secondary text-secondary w-full gap-2"
            >
              <PlusIcon className="stroke-secondary w-6 h-6" />
              Add gift wrapping
            </Button>
          </div>
          <CartSummary />
        </>
      )}
    </div>
  );
}
