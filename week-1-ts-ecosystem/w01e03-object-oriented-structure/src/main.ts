import { Cart } from './models/cart/Cart';
import { ProductFree } from './models/product/ProductFree';
import { ProductAuction } from './models/product/ProductAuction';
import { ProductBuyNow } from './models/product/ProductBuyNow';

// Catalog
const iPhone13 = new ProductAuction('iPhone 13', 4900, 1);
const iPhone13Pro = new ProductAuction('iPhone 13 Pro', 5900, 2);
const iPad = new ProductBuyNow('iPad', 2590, 3);
const iPadPro = new ProductBuyNow('iPad Pro', 3590, 2);
const kindle = new ProductFree('Kindle Paperwhitae', 1);

try {
  new ProductAuction('Product with invalid price', -2, 2);
} catch (error: any) {
  console.log(`* Error: ${error.message}`);
}

try {
  new ProductAuction('Product with invalid amount', 12, -2);
} catch (error: any) {
  console.log(`* Error: ${error.message}`);
}

console.log('##### Cart with auction items #####');
const cartAuction = new Cart<ProductAuction>();
cartAuction.addItem(iPhone13);
cartAuction.addItem(iPhone13Pro);
// cartAuction.addItem(iPad); type error
// cartAuction.addItem(iPadPro); type error
// cartAuction.addItem(kindle); type error
console.log(`* Item: ${iPhone13Pro.id}`);
console.log(cartAuction.getItem(iPhone13Pro.id));
const item = cartAuction.getItem(iPhone13Pro.id);
try {
  if (item) {
    item.amount = -10;
  }
} catch (error: any) {
  console.log(`* Set amount error: ${error.message}`);
}
console.log(`* Update item: ${iPhone13.id}`);
cartAuction.updateItem(iPhone13.id, {
  name: 'iPhone12',
  price: 3500,
  amount: 2,
});
try {
  cartAuction.updateItem('test1', { name: 'Apple Watch' });
} catch (error: any) {
  console.log(`* Update item error: ${error.message}`);
}
console.log(`* Remove item: ${iPhone13.id}`);
cartAuction.removeItem(iPhone13.id);
try {
  cartAuction.removeItem('test2');
} catch (error: any) {
  console.log(`* Remove item error: ${error.message}`);
}
console.log('* Items:');
console.log(cartAuction.getItems());
console.log(`* Number of items: ${cartAuction.getNumberOfItems()}`);
console.log(`* Total price: ${cartAuction.getTotalPrice()}`);

console.log('\n##### Cart with buy now items #####');
const cartBuyNow = new Cart<ProductBuyNow>();
// cartBuyNow.addItem(iPhone13); type error
// cartBuyNow.addItem(iPhone13Pro); type error
cartBuyNow.addItem(iPad);
cartBuyNow.addItem(iPadPro);

console.log('* Items:');
console.log(cartBuyNow.getItems());
console.log(`* Number of items: ${cartBuyNow.getNumberOfItems()}`);
console.log(`* Total price: ${cartBuyNow.getTotalPrice()}`);

console.log('\n##### Cart with free items #####');
const cartFree = new Cart<ProductFree>();
// cartFree.addItem(iPhone13); type error
// cartFree.addItem(iPhone13Pro); type error
// cartFree.addItem(iPad); type error
// cartFree.addItem(iPadPro); type error
cartFree.addItem(kindle);

console.log('* Items:');
console.log(cartFree.getItems());
console.log(`* Number of items: ${cartFree.getNumberOfItems()}`);
console.log(`* Total price: ${cartFree.getTotalPrice()}`);
