export type WineType =
  | "red"
  | "white"
  | "rose"
  | "sparkling"
  | "dessert"
  | "fortified";

export interface Wine {
  id: string;
  name: string;
  type: WineType;
  country: string;
  region: string;
  year: number;
  alcohol: number;
  volume: number;
  rating: number; // Rating out of 100
  price: number; // Price in USD
  image: string;
  description?: string;
}
