export type ProductType = 'KUP TERAZ' | 'AUKCJA' | 'ODDAM ZA DARMO';

export interface IPrice {
  value: number;
  currency: 'PLN' | 'USD' | 'EUR'; // Our shop handle only these currencies
}

export interface IProduct {
  type: ProductType;
  id: string;
  name: string;
  quantity: number;
  price?: IPrice;
}

export interface ICart {
  addProduct: (newProduct: IProduct) => void;
  getProductById: (id: string) => IProduct | undefined;
  updateProductById: (id: string, productUpdated: IProduct) => void;
  deleteProductById: (id: string) => void;
  getAllProducts: () => IProduct[];
  getCartItemsQuantity: () => number;
  getTotalCost: () => number;
}
