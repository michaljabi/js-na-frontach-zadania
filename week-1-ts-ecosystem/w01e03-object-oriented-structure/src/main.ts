import {
  Cart,
  PRODUCT_TYPE,
  ProductAuction,
  ProductBuyNow,
  ProductFree,
} from './models';
import { testCart } from './utils/testCart';

// Available products
const iPhone13 = new ProductAuction('iPhone 13', 4900);
const iPhone13Pro = new ProductAuction('iPhone 13 Pro', 5900);
const iPad = new ProductBuyNow('iPad', 2590);
const iPadPro = new ProductBuyNow('iPad Pro', 3590);
const kindle = new ProductFree('Kindle Paperwhite');

const cartActions = (cart: Cart): void => {
  cart.addItem(iPhone13);
  cart.addItem(iPhone13Pro);
  cart.addItem(iPhone13);
  cart.addItem(iPad);
  cart.addItem(iPadPro);
  cart.addItem(kindle);
};

testCart(
  new Cart('Buy now products', PRODUCT_TYPE.auction),
  (cart) => {
    cartActions(cart);

    console.log(`Item: ${iPhone13Pro.id}`);
    cart.updateItem(iPhone13Pro.id, { test: 'test' });
    console.log(cart.getItem(iPhone13Pro.id));
    console.log('');

    console.log('All items');
    console.log(cart.items);
    console.log('');

    console.log('Removing items from cart:');
    cart.removeItem(kindle.id);
    cart.removeItem(iPhone13.id);
    cart.removeItem(iPhone13Pro.id);
  },
  {
    expectedNumberOfItems: 1,
    expectedAmount: 4900,
  }
);

testCart(new Cart('Buy now products', PRODUCT_TYPE.buyNow), cartActions, {
  expectedNumberOfItems: 2,
  expectedAmount: 6180,
});

testCart(new Cart('Free products', PRODUCT_TYPE.free), cartActions, {
  expectedNumberOfItems: 1,
  expectedAmount: 0,
});
