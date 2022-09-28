enum PRODUCT_TYPE {
  buyNow = 'buyNow',
  auction = 'auction',
  free = 'free',
}

interface IProduct {
  name: string;
  amount: number;
}

interface IProductWithPrice extends IProduct {
  price: number;
}

export { PRODUCT_TYPE };
export type {IProduct, IProductWithPrice};
