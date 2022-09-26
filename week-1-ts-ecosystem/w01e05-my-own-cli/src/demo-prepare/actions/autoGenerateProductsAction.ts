import { chooseProductTypeAction } from './choseProductTypeAction';
import prompts from 'prompts';
import chalk from 'chalk';
import { v4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';
import { MAX_NUMBER_OF_PRODUCTS } from './consts';
import { Data } from './utils';
import { DataItem } from './types';

export const autoGenerateProductsAction = async (): Promise<void> => {
  const productType = await chooseProductTypeAction();
  let isNumberOfProductsValid = false;
  let numberOfProducts = 1;

  while (!isNumberOfProductsValid) {
    const { numberOfProducts: givenNumberOfProducts } = await prompts({
      name: 'numberOfProducts',
      type: 'number',
      message: 'Podaj ile produktów wygenerować (max 8):',
    });

    if (
      givenNumberOfProducts < 1 ||
      givenNumberOfProducts > MAX_NUMBER_OF_PRODUCTS
    ) {
      console.log(chalk.red('Nieprawidłowa ilość produktów'));
    } else {
      isNumberOfProductsValid = true;
      numberOfProducts = givenNumberOfProducts;
    }
  }

  const products: DataItem[] = Array(numberOfProducts - 1)
    .fill(null)
    .map(() => ({
      id: v4(),
      name: faker.commerce.productName(),
      price:
        productType === PRODUCT_TYPE.free
          ? null
          : parseInt(faker.commerce.price()),
      amount: faker.datatype.number({ min: 1, max: 10 }),
    }));
  const data = { ...Data.read() };

  data[productType] = products;

  Data.write(data);
};
