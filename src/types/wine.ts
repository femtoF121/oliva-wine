export type WineType =
  | "red"
  | "white"
  | "rose"
  | "sparkling"
  | "dessert"
  | "fortified";

export type WineFeature = "new" | "best";

export interface Wine {
  id: string;
  name: string;
  type: WineType;
  country: string;
  region: string;
  year: number;
  alcohol: number;
  volume: number;
  price: number;
  discountedPrice?: number;
  feature?: WineFeature;
  image: string;
  description?: string;
}
