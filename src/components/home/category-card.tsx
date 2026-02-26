import { CardButton } from "@/components/ui/card-button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

interface CategoryCardProps extends ComponentProps<"div"> {
  category: string;
  subTitle?: string;
  img?: string;
  buttonText?: string;
}

export function CategoryCard({
  category,
  subTitle,
  img,
  className,
  buttonText = "See propositions",
  ...rest
}: CategoryCardProps) {
  return (
    <div
      {...rest}
      className={cn(
        "bg-surface rounded-card overflow-hidden shadow-lg max-w-110 w-full",
        className,
      )}
    >
      <div className="pt-6 pb-12 px-3 flex flex-col items-center">
        <Typography
          variant="title-2"
          as="span"
          className="text-on-surface uppercase mb-2"
        >
          {category}
        </Typography>
        <Typography
          variant="body-2"
          as="span"
          className="text-on-surface-variant-high mb-8"
        >
          {subTitle}
        </Typography>
        {img && (
          <Image
            src={img}
            width={132}
            height={264}
            alt={`bottle of ${category} wine`}
          />
        )}
      </div>
      <Link
        href={{ pathname: "catalog", query: { color: category.toLowerCase() } }}
      >
        <CardButton text={buttonText} />
      </Link>
    </div>
  );
}
