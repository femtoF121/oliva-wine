import { Wine } from "@/types/wine";

export const wines: Wine[] = [
  {
    id: "wine-1",
    name: "Château Margaux",
    type: "red",
    country: "France",
    region: "Bordeaux",
    year: 2018,
    alcohol: 13.5,
    volume: 750,
    rating: 4.9,
    price: 450,
    image: "/images/wines/margaux.jpg",
    description:
      "One of the most prestigious Bordeaux wines with exceptional balance and aging potential.",
  },
  {
    id: "wine-2",
    name: "Riesling Kabinett",
    type: "white",
    country: "Germany",
    region: "Mosel",
    year: 2021,
    alcohol: 8.5,
    volume: 750,
    price: 28,
    rating: 4.4,
    image: "/images/wines/riesling.jpg",
    description:
      "Light-bodied white wine with fresh acidity, floral aromas and notes of green apple.",
  },
  {
    id: "wine-3",
    name: "Prosecco Superiore",
    type: "sparkling",
    country: "Italy",
    region: "Veneto",
    year: 2022,
    alcohol: 11,
    volume: 750,
    price: 22,
    rating: 4.2,
    image: "/images/wines/prosecco.jpg",
    description:
      "Elegant sparkling wine with fine bubbles, citrus notes and a crisp finish.",
  },
];
