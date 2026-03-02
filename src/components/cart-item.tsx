"use client";

import { Wine } from "@/types/wine";
import TrashBin from "@public/icons/trash-bin.svg";
import Image from "next/image";
import { ComponentProps } from "react";
import QuantityPicker from "./ui/quantity-picker";
import { Typography } from "./ui/typography";

interface CartItemProps extends ComponentProps<"div"> {
  wine: Wine;
  quantity: number;
  onDelete?: () => void;
}

export function CartItem({ wine, quantity, onDelete }: CartItemProps) {
  const { name, type, country, year, price, image } = wine;

  return (
    <div className="flex gap-1 w-full max-w-175 *:shadow-lg *:shadow-black/8">
      <div className="p-3 pr-6 rounded-sm flex items-center gap-5 flex-1 bg-surface">
        <div className="w-20 h-25 rounded-sm bg-surface-variant flex items-center justify-center">
          <Image src={image} alt={name} width={38} height={76} />
        </div>
        <div className="flex-1">
          <Typography variant="label-1" className="font-lora mb-2">
            {name}
          </Typography>
          <Typography
            variant="caption-2"
            className="text-on-surface-variant-high"
          >
            {country}, {type}, {year}
          </Typography>
        </div>
        <QuantityPicker onChange={() => null} value={1} />
        <Typography variant="title-3">
          {(price * quantity).toFixed(2)} ₴
        </Typography>
      </div>
      <button
        onClick={onDelete}
        className="p-3 rounded-sm bg-surface border-none h-auto hover:bg-red hover:[&_svg]:stroke-surface transition-colors"
      >
        <TrashBin />
      </button>
    </div>
  );
}
