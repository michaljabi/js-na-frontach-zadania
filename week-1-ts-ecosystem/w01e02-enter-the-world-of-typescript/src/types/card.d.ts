export interface CartPanel {
  heading?: string;
  items: CartItem[];
}

export interface CartItemSum {
  value: number;
  currency?: string;
}

export interface CartItemPrice {
  value: number;
  currency: string;
}

export interface CartItem {
  name: string;
  amount: number;
  unit: string;
  price: CartItemPrice;
}
