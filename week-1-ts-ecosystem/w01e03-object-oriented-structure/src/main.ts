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

const auctionCart = new Cart<AuctionItem>();

const auctionItem1 = new AuctionItem('Książka', 54, Date.now() + 3600);
const auctionItem2 = new AuctionItem('Książka', 54, Date.now() + 3600);

auctionCart.addProduct(auctionItem1);
auctionCart.addProduct(auctionItem2);

console.log(auctionCart);
