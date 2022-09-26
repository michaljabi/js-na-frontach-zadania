type CartItemProductSnapshotType = {
  id: string;
  name: string;
  price: number | null;
};

type SalesPolicyType = Record<string, string | number>;

export type { CartItemProductSnapshotType, SalesPolicyType };
