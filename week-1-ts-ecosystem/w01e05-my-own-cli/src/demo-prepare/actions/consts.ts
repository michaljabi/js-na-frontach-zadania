import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';

enum ACTIONS {
  autogenerateProducts = 'autogenerateProducts',
  manuallyGenerateProducts = 'manuallyGenerateProducts',
  showProducts = 'showProducts',
  removeProduct = 'removeProduct',
  end = 'end',
}

const PRODUCT_TYPE_NAMES = {
  [PRODUCT_TYPE.buyNow]: 'Kup teraz',
  [PRODUCT_TYPE.auction]: 'Aukcja',
  [PRODUCT_TYPE.free]: 'Za darmo',
};

const MIN_NUMBER_OF_PRODUCTS = 1;

const MAX_NUMBER_OF_PRODUCTS = 8;

export {
  ACTIONS,
  PRODUCT_TYPE_NAMES,
  MIN_NUMBER_OF_PRODUCTS,
  MAX_NUMBER_OF_PRODUCTS,
};
