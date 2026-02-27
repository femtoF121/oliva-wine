import { Typography } from "@/components/ui/typography";
import { MARQUEE_TEXT } from "@/constants/home-page";
import Grapes from "@public/icons/grapes.svg";
import { Fragment } from "react";

export const Marquee = () => {
  return (
    <div className="bg-secondary-variant overflow-hidden py-7">
      <div className="flex animate-scroll-text w-max">
        <TextRow />
        <TextRow />
      </div>
    </div>
  );
};

const TextRow = () => {
  return (
    <div className="pr-20 flex items-center gap-20">
      {MARQUEE_TEXT.map((t, i) => (
        <Fragment key={i}>
          <Typography variant="title-2">{t}</Typography>
          <Grapes />
        </Fragment>
      ))}
    </div>
  );
};
