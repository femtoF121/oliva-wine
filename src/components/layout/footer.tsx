import { ToTopButton } from "@/components/to-top-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "../ui/typography";

export function Footer() {
  return (
    <footer className="w-full font-inter bg-secondary-variant">
      <div className="flex gap-6 justify-between items-center mx-auto max-w-layout px-20 py-12">
        <div
          className={cn(
            "flex gap-16 text-on-secondary leading-5",
            "[&_h5]:mb-6 [&_h5]:text-on-secondary-variant [&_h5]:uppercase",
            "[&_ul]:space-y-4",
            "[&_a]:hover:text-on-secondary-variant [&_a]:transition-colors",
          )}
        >
          <div>
            <Typography variant="title-2" as="h5">
              INFO
            </Typography>
            <ul>
              <li>
                <Link href="/contact-us">
                  <Typography variant="label-2">Contact Us</Typography>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <Typography variant="label-2">FAQ</Typography>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <Typography variant="label-2">Terms & Conditions</Typography>
                </Link>
              </li>
              <li>
                <Link href="/shipping">
                  <Typography variant="label-2">Shipping & Delivery</Typography>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="title-2" as="h5">
              PAYMENT
            </Typography>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/footer/mastercard.png"
                alt="Mastercard"
                width={56}
                height={32}
              />
              <Image src="/footer/visa.png" alt="Visa" width={56} height={32} />
              <Image
                src="/footer/google-pay.png"
                alt="Google Pay"
                width={56}
                height={32}
              />
              <Image
                src="/footer/apple-pay.png"
                alt="Apple Pay"
                width={56}
                height={32}
              />
            </div>
          </div>
          <div>
            <Typography variant="title-2" as="h5">
              WORK HOURS
            </Typography>
            <ul>
              <li>
                <Typography variant="label-2">Monday - Sunday</Typography>
              </li>
              <li>
                <Typography variant="label-2">9:00 - 20:00</Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant="title-2" as="h5">
              CONTACTS
            </Typography>
            <ul>
              <li>
                <Link href="mailto:olivawine.support@gmail.com">
                  <Typography variant="label-2">
                    olivawine.support@gmail.com
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href="tel:+123456789000">
                  <Typography variant="label-2">
                    + 12 (345) 67 89 000
                  </Typography>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ToTopButton />
      </div>
    </footer>
  );
}
