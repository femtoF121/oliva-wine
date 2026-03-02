import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Typography } from "@/components/ui/typography";
import { BreadcrumbItem } from "@/types/breadcrumb";

interface NavigationBannerProps {
  image: string;
  title: string;
  breadCrumb: BreadcrumbItem[];
}

export function NavigationBanner({
  image,
  title,
  breadCrumb,
}: NavigationBannerProps) {
  return (
    <div
      className="w-full pt-6 pb-8 flex flex-col items-center justify-center gap-2"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4)), url(${image}) center/cover no-repeat`,
      }}
    >
      <Typography variant="heading-4" className="text-primary">
        {title}
      </Typography>
      <Breadcrumb items={breadCrumb} />
    </div>
  );
}
