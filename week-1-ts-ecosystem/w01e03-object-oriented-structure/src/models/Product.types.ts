enum PRODUCT_TYPE {
  buyNow = 'buyNow',
  auction = 'auction',
  free = 'free',
}

type ProductType = {
  name: string;
  price: number;
  currency?: string;
};

export { PRODUCT_TYPE };
export type { ProductType };
