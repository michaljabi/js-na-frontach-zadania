type PriceType = {
  value: number;
  currency: string;
};

type ItemType = {
  name: string;
  amount: number;
  unit: string;
  price: PriceType;
};

export type { PriceType, ItemType };
