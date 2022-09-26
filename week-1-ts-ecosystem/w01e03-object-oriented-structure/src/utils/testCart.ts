import { Cart, PRODUCT_TYPE } from '../models';

export const testCart = (
  cart: Cart,
  actions: (cart: Cart) => void,
  assertions: { expectedNumberOfItems: number; expectedAmount: number }
): void => {
  console.log(`Cart "${cart.name}":`);

  actions(cart);

  console.log(
    `- expected number of products: ${
      assertions.expectedNumberOfItems
    }. Given number of products: ${cart.getNumberOfItems()}`
  );
  console.log(
    `- expected amount: ${
      assertions.expectedAmount
    } PLN: Given amount ${cart.getAmount()} PLN`
  );
  console.log('');
};
