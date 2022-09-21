export interface Price {
  value: number;
  currency: string;
}

export interface CartItem {
  name: string;
  amount: number;
  unit: string;
  price: Price;
}

export type CartItems = CartItem[];
