"use client";

import { cn } from "@/lib/utils";
import MinusIcon from "@public/icons/minus.svg";
import PlusIcon from "@public/icons/plus.svg";
import React from "react";
import { Button } from "./button";
import { Typography } from "./typography";

interface QuantityPickerProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

const QuantityPicker: React.FC<QuantityPickerProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
}) => {
  const buttonClassName =
    "border-none p-0 hover:[&_svg]:scale-none rounded-none";

  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div
      className={cn(
        "flex items-center w-fit rounded-xs border border-on-surface-variant-low *:size-8 *:flex *:justify-center *:items-center",
        className,
      )}
    >
      <Button
        onClick={handleDecrement}
        disabled={value <= min}
        variant="icon"
        className={buttonClassName}
      >
        <MinusIcon />
      </Button>
      <Typography
        variant="caption-2"
        className="select-none border-x border-inherit"
      >
        {value}
      </Typography>
      <Button
        onClick={handleIncrement}
        disabled={value >= max}
        variant="icon"
        className={buttonClassName}
      >
        <PlusIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default QuantityPicker;
