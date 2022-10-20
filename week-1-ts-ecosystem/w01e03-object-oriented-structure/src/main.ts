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

import { AuctionItem } from './models/AuctionItem';
import { Cart } from './models/Cart';
import { CartItem } from './models/CartItem';
import { FreeItem } from './models/FreeItem';

const auctionCart = new Cart<AuctionItem>();
const regularCart = new Cart<CartItem>();
const freeCart = new Cart<FreeItem>();

// priced items

const regularItem1 = new CartItem('Książka', 3, 54);
const regularItem2 = new CartItem('Książka', 5, 54);
const regularItem3 = new CartItem('Ebook', 3, 54);
const regularItem4 = new CartItem('Książka', 5, 69);

regularCart.addProduct(regularItem1);
regularCart.addProduct(regularItem2);
regularCart.addProduct(regularItem3);
regularCart.addProduct(regularItem4);

console.log(regularCart);

// auction items

const auctionItem1 = new AuctionItem('Książka', 3, 54, Date.now() + 3600);
const auctionItem2 = new AuctionItem('Książka', 5, 54, Date.now() + 3600);
const auctionItem3 = new AuctionItem('Ebook', 3, 54, Date.now() + 3600);
const auctionItem4 = new AuctionItem('Książka', 5, 69, Date.now() + 3600);

auctionCart.addProduct(auctionItem1);
auctionCart.addProduct(auctionItem2);
auctionCart.addProduct(auctionItem3);
auctionCart.addProduct(auctionItem4);

console.log(auctionCart);

// free items

const freeItem1 = new FreeItem('Książka', 3);
const freeItem2 = new FreeItem('Książka', 5);
const freeItem3 = new FreeItem('Ebook', 3);
const freeItem4 = new FreeItem('Książka', 5);

freeCart.addProduct(freeItem1);
freeCart.addProduct(freeItem2);
freeCart.addProduct(freeItem3);
freeCart.addProduct(freeItem4);

console.log(freeCart);

regularCart.addProduct(freeItem1);
freeCart.addProduct(regularItem1);
