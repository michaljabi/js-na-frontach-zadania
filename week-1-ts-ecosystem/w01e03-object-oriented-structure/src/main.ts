/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

import { ShoppingCart } from "./controllers/cart";
import { Product } from "./controllers/product";
import { AuctionType } from "./controllers/product-types";

// FREE AUCTION
const glasses = new Product("1", "glasses", AuctionType.free, 12);
const hoodie = new Product("2", "hoodie", AuctionType.free, 8);

const freeShoppingCart = new ShoppingCart(AuctionType.free);

freeShoppingCart.addProduct(glasses);
freeShoppingCart.addProduct(hoodie);

console.log(freeShoppingCart.editProduct("2", glasses));
console.log(freeShoppingCart.getSingleProduct("2"));

console.log(freeShoppingCart.getCartQuantity());
console.log(freeShoppingCart.getCartTotalPrice());
console.log(freeShoppingCart.getProducts());

freeShoppingCart.removeProduct("1");
console.log(freeShoppingCart.getProducts());

//BUY AUCTION

const hat = new Product("1", "hat", AuctionType.buy, 2, 33);
const watch = new Product("2", "watch", AuctionType.free, 8, 123);
const shirt = new Product("3", "shirt", AuctionType.buy, 3, 44);

const paidShoppingCart = new ShoppingCart(AuctionType.buy);

paidShoppingCart.addProduct(hat);
paidShoppingCart.addProduct(shirt);

// paidShoppingCart.addProduct(watch); // ---> error

console.log(paidShoppingCart.editProduct("3", hat));
console.log(paidShoppingCart.getSingleProduct("3"));

console.log(paidShoppingCart.getCartQuantity());
console.log(paidShoppingCart.getCartTotalPrice());
console.log(paidShoppingCart.getProducts());

paidShoppingCart.removeProduct("1");
console.log(paidShoppingCart.getProducts());

// AUCTION

const table = new Product("1", "table", AuctionType.buy, 2, 33);
const lamp = new Product("2", "lamp", AuctionType.auction, 8, 123);
const desk = new Product("3", "desk", AuctionType.auction, 3, 44);

const auctionShoppingCart = new ShoppingCart(AuctionType.auction);

auctionShoppingCart.addProduct(lamp);
auctionShoppingCart.addProduct(desk);

// auctionShoppingCart.addProduct(table); // ---> error

console.log(auctionShoppingCart.editProduct("3", hat));
console.log(auctionShoppingCart.getSingleProduct("3"));

console.log(auctionShoppingCart.getCartQuantity());
console.log(auctionShoppingCart.getCartTotalPrice());
console.log(auctionShoppingCart.getProducts());

auctionShoppingCart.removeProduct("1");
console.log(auctionShoppingCart.getProducts());
