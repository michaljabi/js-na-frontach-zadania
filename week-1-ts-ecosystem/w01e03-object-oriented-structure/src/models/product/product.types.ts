export type ProductType = "BUY NOW" | "AUCTION" | "FREE";

export interface ProductModel<Type extends ProductType> {
  id: string;
  name: string;
  quantity: number;
  type: Type;
  price?: Type extends "BUY NOW" | "AUCTION" ? number : never;
}