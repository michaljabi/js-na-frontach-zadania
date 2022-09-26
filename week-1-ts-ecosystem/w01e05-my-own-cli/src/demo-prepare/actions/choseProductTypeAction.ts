import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';
import prompts from 'prompts';
import { PRODUCT_TYPE_NAMES } from './consts';

export const chooseProductTypeAction = async (): Promise<PRODUCT_TYPE> => {
  const { productType } = await prompts({
    type: 'select',
    name: 'productType',
    message: 'Jakiego typu produkt chcesz utworzyć?',
    choices: [
      {
        title: PRODUCT_TYPE_NAMES[PRODUCT_TYPE.buyNow],
        value: PRODUCT_TYPE.buyNow,
      },
      {
        title: PRODUCT_TYPE_NAMES[PRODUCT_TYPE.free],
        value: PRODUCT_TYPE.free,
      },
      {
        title: PRODUCT_TYPE_NAMES[PRODUCT_TYPE.auction],
        value: PRODUCT_TYPE.auction,
      },
    ],
  });

  return productType;
};
