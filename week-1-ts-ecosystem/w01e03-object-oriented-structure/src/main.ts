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
import {AuctionProduct} from "./cart/models/auctionProduct";
import {Cart} from "./cart/models/cart";
import {BuyNowProduct} from "./cart/models/buyNowProduct";
import {FreeProduct} from "./cart/models/freeProduct";

const auctionCart = new Cart<AuctionProduct>();

const auctionProduct1 = new AuctionProduct(1, "Auction Product 1", 1, 100);
const auctionProduct2 = new AuctionProduct(2, "Auction Product 2", 2, 200);
const auctionProduct3 = new AuctionProduct(3, "Auction Product 3", 3, 300);

auctionCart.addProduct(auctionProduct1);
auctionCart.addProduct(auctionProduct2);
auctionCart.addProduct(auctionProduct3);

console.log(`## AUCTION CART ##`);
console.table(auctionCart.getProducts());
console.log(`## AUCTION Stats ##`);
console.table([{"Product count": auctionCart.getProductCount(), price: auctionCart.getTotalPrice()}]);

const buyNowCart = new Cart<BuyNowProduct>();

const buyNowProduct1 = new BuyNowProduct(1, "Buy Now Product 1", 1, 100);
const buyNowProduct2 = new BuyNowProduct(2, "Buy Now Product 2", 2, 200);
const buyNowProduct3 = new BuyNowProduct(3, "Buy Now Product 3", 3, 300);
const buyNowProduct4 = new BuyNowProduct(4, "Buy Now Product 4", 4, 400);

buyNowCart.addProduct(buyNowProduct1);
buyNowCart.addProduct(buyNowProduct2);
buyNowCart.addProduct(buyNowProduct3);
buyNowCart.addProduct(buyNowProduct4);

console.log(`## BUY NOW CART ##`);
console.table(buyNowCart.getProducts());
console.log(`## BUY NOW Stats ##`);
console.table([{"Product count": buyNowCart.getProductCount(), price: buyNowCart.getTotalPrice()}]);

const freeCart = new Cart<FreeProduct>();

const freeProduct1 = new FreeProduct(1, "Free Product 1", 1);
const freeProduct2 = new FreeProduct(2, "Free Product 2", 2);

freeCart.addProduct(freeProduct1);
freeCart.addProduct(freeProduct2);

console.log(`## FREE CART ##`);
console.table(freeCart.getProducts());
console.log(`## FREE Stats ##`);
console.table([{"Product count": freeCart.getProductCount(), price: freeCart.getTotalPrice()}]);
