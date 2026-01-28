import { BENEFITS } from "@/constants/benefits";
import { Typography } from "../ui/typography";

export function BenefitsSection() {
  return (
    <section className="w-full bg-surface py-4 border-y [border-image:var(--gradient-secondary-variant)1]">
      <div className="container-layout flex gap-6">
        {BENEFITS.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="p-4 pb-8 flex flex-col gap-4 items-center"
          >
            <Icon />
            <Typography variant="title-2" as="h3" className="text-secondary">
              {title}
            </Typography>
            <div className="w-full h-0.5 mx-2 bg-divider" />
            <Typography
              variant="body-2"
              className="text-on-surface text-center"
            >
              {description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
