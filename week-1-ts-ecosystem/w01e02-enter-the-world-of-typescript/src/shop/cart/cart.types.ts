export interface priceType {
  value: number;
  currency: 'PLN';
}

export interface cartItemType {
  name: string;
  amount: number;
  unit: 'kg';
  price: priceType;
}

export interface cartPanelType {
  heading?: string;
  items: cartItemType[];
}
