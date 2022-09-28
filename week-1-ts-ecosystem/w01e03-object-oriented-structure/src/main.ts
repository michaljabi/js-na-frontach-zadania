import {Cart, ProductAuction, ProductBuyNow, ProductFree} from './models';

// Catalog
const iPhone13 = new ProductAuction('iPhone 13', 4900, 1);
const iPhone13Pro = new ProductAuction('iPhone 13 Pro', 5900, 2);
const iPad = new ProductBuyNow('iPad', 2590, 3);
const iPadPro = new ProductBuyNow('iPad Pro', 3590, 2);
const kindle = new ProductFree('Kindle Paperwhitae', 1);

console.log('##### Cart with auction items #####');
const cartAuction = new Cart<ProductAuction>();
cartAuction.addItem(iPhone13);
cartAuction.addItem(iPhone13Pro);
// cartAuction.addItem(iPad); type error
// cartAuction.addItem(iPadPro); type error
// cartAuction.addItem(kindle); type error
console.log(`\n* Item: ${iPhone13Pro.id}`);
console.log(cartAuction.getItem(iPhone13Pro.id));
const item = cartAuction.getItem(iPhone13Pro.id);
try {
    if (item) {
        item.amount = -10;
    }
} catch(error: any) {
    console.log(`\n* Set amount error: ${error.message}`);
}
console.log(`\n* Update item: ${iPhone13.id}`);
cartAuction.updateItem(iPhone13.id, { name: 'iPhone12', price: 3500, amount: 2 });
cartAuction.updateItem('test1', { name: 'Apple Watch' }); // log warning
console.log(`\n* Remove item: ${iPhone13.id}`);
cartAuction.removeItem(iPhone13.id);
cartAuction.removeItem('test2'); // log warning
console.log('\n* Items:');
console.log(cartAuction.items);
console.log(`\n* Number of items: ${cartAuction.getNumberOfItems()}`);
console.log(`* Total price: ${cartAuction.getTotalPrice()}`);

console.log('\n##### Cart with buy now items #####');
const cartBuyNow = new Cart<ProductBuyNow>();
// cartBuyNow.addItem(iPhone13); type error
// cartBuyNow.addItem(iPhone13Pro); type error
cartBuyNow.addItem(iPad);
cartBuyNow.addItem(iPadPro);
// cartFree.addItem(kindle);

console.log('\n* Items:');
console.log(cartBuyNow.items);
console.log(`\n* Number of items: ${cartBuyNow.getNumberOfItems()}`);
console.log(`* Total price: ${cartBuyNow.getTotalPrice()}`);

console.log('\n##### Cart with free items #####');
const cartFree = new Cart<ProductFree>();
// cartFree.addItem(iPhone13); type error
// cartFree.addItem(iPhone13Pro); type error
// cartFree.addItem(iPad);
// cartFree.addItem(iPadPro);
cartFree.addItem(kindle);

console.log('\n* Items:');
console.log(cartFree.items);
console.log(`\n* Number of items: ${cartFree.getNumberOfItems()}`);
console.log(`* Total price: ${cartFree.getTotalPrice()}`);