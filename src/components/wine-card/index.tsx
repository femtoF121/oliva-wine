import { cn } from "@/lib/utils";
import { Wine } from "@/types/wine";
import Link from "next/link";
import { ComponentProps } from "react";
import { CardButton } from "./card-button";
import { CardContent } from "./card-content";

interface WineCardProps extends ComponentProps<"div"> {
  wine: Wine;
  withButton?: boolean;
  buttonText?: string;
  buttonClassName?: string;
  buttonOnClick?: () => void;
}

export function WineCard({
  wine,
  className,
  withButton,
  buttonText,
  buttonClassName,
  buttonOnClick,
  ...rest
}: WineCardProps) {
  return (
    <div
      {...rest}
      className={cn(
        "bg-surface rounded-card overflow-hidden shadow-lg max-w-90 w-full",
        className,
      )}
    >
      <Link href={`catalog/${wine.id}`}>
        <CardContent wine={wine} />
      </Link>

      {withButton && (
        <CardButton
          text={buttonText}
          className={buttonClassName}
          onClick={buttonOnClick}
        />
      )}
    </div>
  );
}
