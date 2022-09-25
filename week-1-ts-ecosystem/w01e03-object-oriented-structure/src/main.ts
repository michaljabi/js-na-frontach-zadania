import {Cart} from './models/cart/cart';

console.log("-- BUY NOW CART -- ");
const buyNowCart = new Cart<"BUY NOW">();
buyNowCart.addProduct({id: "1", name: "test", price: 12, quantity: 1, type: "BUY NOW"});
console.log(buyNowCart.items);
buyNowCart.addProduct({id: "1", name: "test", price: 12, quantity: 1, type: "BUY NOW"});
buyNowCart.addProduct({id: "2", name: "test", price: 1, quantity: 4, type: "BUY NOW"});
console.log(buyNowCart.items);
console.log(`Products count: ${buyNowCart.getProductsCount()}`)
console.log(`Total price sum: ${buyNowCart.getTotalPriceSum()}`)


console.log("-- AUCTION CART -- ");
const auctionCart = new Cart<"AUCTION">();
auctionCart.addProduct({id: "1", name: "test", price: 12, quantity: 1, type: "AUCTION"});
console.log(auctionCart.items);
auctionCart.addProduct({id: "1", name: "test", price: 12, quantity: 1, type: "AUCTION"});
auctionCart.addProduct({id: "2", name: "test", price: 1, quantity: 4, type: "AUCTION"});
console.log(auctionCart.items);
try {
  auctionCart.removeProduct("3")
} catch(e) {
  console.log("Got error, that's good because there's no product with id: 3");
}
auctionCart.removeProduct("2");
console.log(auctionCart.items);
console.log(`Products count: ${auctionCart.getProductsCount()}`)
console.log(`Total price sum: ${auctionCart.getTotalPriceSum()}`)


console.log("-- FREE CART -- ");
const freeCart = new Cart<"FREE">();
freeCart.addProduct({id: "1", name: "test", quantity: 1, type: "FREE"});
console.log(freeCart.items);
freeCart.addProduct({id: "1", name: "test", quantity: 1, type: "FREE"});
freeCart.addProduct({id: "2", name: "test", quantity: 4, type: "FREE"});
console.log(freeCart.items);
freeCart.updateProduct("1", {name: "updated free product", quantity: 2137});
console.log(freeCart.items);
console.log(`Products count: ${freeCart.getProductsCount()}`)
console.log(`Total price sum: ${freeCart.getTotalPriceSum()}`)