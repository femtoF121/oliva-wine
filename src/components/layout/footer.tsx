import { ToTopButton } from "@/components/to-top-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full font-inter bg-secondary-variant">
      <div className="flex gap-6 justify-between items-center mx-auto max-w-360 px-20 py-12">
        <div
          className={cn(
            "flex gap-16 text-on-secondary leading-5",
            "[&_h5]:mb-6 [&_h5]:text-2xl [&_h5]:text-on-secondary-variant [&_h5]:font-medium [&_h5]:uppercase [&_h5]:font-lora",
            "[&_ul]:space-y-4",
            "[&_a]:hover:text-on-secondary-variant [&_a]:transition-colors",
          )}
        >
          <div>
            <h5>INFO</h5>
            <ul>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping & Delivery</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>PAYMENT</h5>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/mastercard.png"
                alt="Mastercard"
                width={56}
                height={32}
              />
              <Image src="/visa.png" alt="Visa" width={56} height={32} />
              <Image
                src="/google-pay.png"
                alt="Google Pay"
                width={56}
                height={32}
              />
              <Image
                src="/apple-pay.png"
                alt="Apple Pay"
                width={56}
                height={32}
              />
            </div>
          </div>
          <div>
            <h5>WORK HOURS</h5>
            <ul>
              <li>Monday - Sunday</li>
              <li>9:00 - 20:00</li>
            </ul>
          </div>
          <div>
            <h5>CONTACTS</h5>
            <ul>
              <li>
                <Link href="mailto:olivawine.support@gmail.com">
                  olivawine.support@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+123456789000">+ 12 (345) 67 89 000</Link>
              </li>
            </ul>
          </div>
        </div>
        <ToTopButton />
      </div>
    </footer>
  );
}
