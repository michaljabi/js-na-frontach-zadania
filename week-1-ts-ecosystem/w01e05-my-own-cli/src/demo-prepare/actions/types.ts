import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';

type DataItem = {
  id: string;
  name: string;
  amount: number;
  price: number | null;
};

type DataCollection = {
  [PRODUCT_TYPE.free]: DataItem[];
  [PRODUCT_TYPE.buyNow]: DataItem[];
  [PRODUCT_TYPE.auction]: DataItem[];
};

export type { DataItem, DataCollection };
