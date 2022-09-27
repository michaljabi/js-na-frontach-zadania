import { ShoppingBasket } from './models';
import { ProductType, NewProductArgs } from './types';

function testShoppingBasket<Type extends ProductType>(items: NewProductArgs<Type>[], id: number) {
  console.log('-------------------------');

  const shoppingBasket = new ShoppingBasket<Type>();

  items.forEach((item) => {
    shoppingBasket.addProduct(item);
  });

  console.log(`Shopping basket ${id}:`);
  console.log('Products list:');

  shoppingBasket.getProducts().forEach((product) => {
    console.log(`Product name: ${product.name}, product price: ${product.price}, product type: ${product.type}`);
  });

  console.log('Total products in shopping basket:', shoppingBasket.total);
  console.log('Total price of products in shopping basket:', shoppingBasket.totalPrice);

  shoppingBasket.removeProductById('1');

  console.log('Total products in shopping basket after removing product with id 1:');
  console.log('Total products in shopping basket:', shoppingBasket.total);
}

testShoppingBasket<ProductType.BuyNow>(
  [
    { name: 'T-shirt', price: 20, type: ProductType.BuyNow },
    { name: 'Hat', price: 10, type: ProductType.BuyNow }
  ],
  1
);

testShoppingBasket<ProductType.Auction>(
  [
    { name: 'T-shirt', price: 15, type: ProductType.Auction },
    { name: 'Hat', price: 5, type: ProductType.Auction }
  ],
  2
);

testShoppingBasket<ProductType.Free>(
  [
    { name: 'T-shirt', price: 0, type: ProductType.Free },
    { name: 'Hat', price: 0, type: ProductType.Free }
  ],
  3
);
