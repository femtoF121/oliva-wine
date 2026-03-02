import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";
import { Typography } from "@/components/ui/typography";
import { SUMMARY_INFO } from "@/constants/cart-page";
import ArrowRightIcon from "@public/icons/arrow-right.svg";

export function CartSummary() {
  return (
    <aside className="max-w-130 w-full flex flex-col gap-6">
      <div className="rounded-sm p-6 bg-surface flex">
        <TextInput placeholder="Enter promo code" className="rounded-r-none" />
        <Button className="w-54 rounded-l-none">Apply</Button>
      </div>
      <div className="rounded-sm p-6 bg-surface">
        <div className="space-y-4 *:flex *:justify-between text-on-surface-variant-high">
          <Typography variant="label-2" className="text-inherit">
            <span>Items</span>
            <span>1 200.00 ₴</span>
          </Typography>
          <Typography variant="label-2" className="text-inherit">
            <span>Discounts</span>
            <span>- 0.00 ₴</span>
          </Typography>
          <div className="h-px w-full bg-divider" />
          <Typography variant="label-1" className="text-inherit">
            <span>Total</span>
            <span className="text-on-surface">1 200.00 ₴</span>
          </Typography>
        </div>
        <Button className="gap-2 w-full mt-8">
          <span>Continue to Shipping</span>
          <ArrowRightIcon />
        </Button>
      </div>
      <ul className="px-6 space-y-4">
        {SUMMARY_INFO.map(({ text, icon: Icon }, i) => (
          <li key={i} className="flex items-center gap-3">
            <Icon />
            <Typography variant="caption-2">{text}</Typography>
          </li>
        ))}
      </ul>
    </aside>
  );
}
