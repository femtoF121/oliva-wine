import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";
import { Typography } from "@/components/ui/typography";
import { Marquee } from "./marquee";

export function NewsletterSection() {
  return (
    <section className="w-full">
      <Marquee />
      <div className=" bg-[url(/home/newsletter-bg.jpg)] bg-center">
        <div className="container-layout h-120 flex justify-center items-center">
          <div className="max-w-210 w-full px-12 pt-10 pb-16 rounded-lg bg-surface bg-[url(/home/newsletter-texture.svg)] bg-right bg-no-repeat">
            <div className="max-w-145 w-full">
              <Typography
                variant="heading-3"
                gradient="secondary-variant"
                className="mb-2"
              >
                Join our newsletter
              </Typography>
              <Typography
                variant="body-2"
                className="mb-8 text-on-surface-variant-high"
              >
                Subscribe to our newsletter and be the first to discover new
                arrivals and exclusive offers.
              </Typography>
              <TextInput
                placeholder="Enter your email"
                className="rounded-r-none"
              />
              <Button className="w-54 rounded-l-none">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
