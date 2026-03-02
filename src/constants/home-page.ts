import { WineType } from "@/types/wine";
import DeliveryTruck from "@public/home/delivery-truck.svg";
import LockCard from "@public/home/lock-payment-card.svg";
import SaleTag from "@public/home/sale-tag.svg";
import WineAndCheese from "@public/home/wine-and-cheese.svg";

export const BENEFITS = [
  {
    icon: WineAndCheese,
    title: "Premium Selection",
    description:
      "Handpicked wines from trusted wineries, selected for taste, balance, and quality",
  },
  {
    icon: SaleTag,
    title: "Fair Prices",
    description:
      "Enjoy competitive prices along with seasonal offers and exclusive discounts",
  },
  {
    icon: LockCard,
    title: "Secure Payment",
    description:
      "All payments are protected with trusted and secure payment methods",
  },
  {
    icon: DeliveryTruck,
    title: "Fast Delivery",
    description:
      "Quick and careful delivery to ensure your wine arrives in perfect condition",
  },
];

export const MARQUEE_TEXT = [
  "Wide range of products",
  "Natural composition",
  "Quality in every sip ",
  "Organic grapes",
  "Fast delivery",
  "No sugar",
];

export const WINE_CATEGORIES: { category: WineType; src: string }[] = [
  { category: "red", src: "/wines/wine1.png" },
  { category: "rose", src: "/wines/wine2.png" },
  { category: "white", src: "/wines/wine3.png" },
];
