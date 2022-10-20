export type ProductType = 'Casual' | 'Basic';

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  type: ProductType;
}
