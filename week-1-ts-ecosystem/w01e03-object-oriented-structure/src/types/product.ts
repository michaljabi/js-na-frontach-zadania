export interface Product<Type extends ProductType> {
  name: string;
  id: string;
  price: number;
  type: Type;
  count: number;
}

export enum ProductType {
  BuyNow = 'buyNow',
  Auction = 'auction',
  Free = 'free'
}

export interface NewProductArgs<Type extends ProductType> {
  name: string;
  price: number;
  type: Type;
}

export type UpdateProductArgs<Type extends ProductType> = Partial<NewProductArgs<Type>>;
