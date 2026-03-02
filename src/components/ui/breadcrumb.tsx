import { BreadcrumbItem } from "@/types/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "./button";
import { Typography } from "./typography";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1">
      {items.map((item, index) => (
        <Fragment key={index}>
          {index === items.length - 1 ? (
            <Typography
              variant="caption-1"
              className="text-on-surface-variant-low"
            >
              {item.label}
            </Typography>
          ) : (
            <>
              <Button
                variant="text"
                className="text-on-surface-variant-low font-light p-0"
                asChild
              >
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </Button>
              <Typography
                variant="caption-1"
                className="text-on-surface-variant-low"
              >
                &mdash;
              </Typography>
            </>
          )}
        </Fragment>
      ))}
    </nav>
  );
};
