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

import { Cart } from './cart';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './product';

const buyNowCart = new Cart('KUP TERAZ');
const auctionCart = new Cart('AUKCJA');
const freeCart = new Cart('ODDAM ZA DARMO');

// KUP TERAZ cart PoC

const idMap = {
  item1: ['Buty', uuidv4()],
  item2: ['Kosiarka', uuidv4()],
  item3: ['Szampon', uuidv4()],
  item4: ['Kanister', uuidv4()],
  item5: ['Spodnie', uuidv4()],
  item6: ['Słuchawki', uuidv4()],
};

console.log(idMap);

try {
  buyNowCart.addProduct(new Product('AUKCJA', idMap.item1[1], idMap.item1[0], 1, { value: 200, currency: 'PLN' })); // poleci throw Error
} catch (e) {
  console.log(e);
}

buyNowCart.addProduct(new Product('KUP TERAZ', idMap.item2[1], idMap.item2[0], 1, { value: 1700, currency: 'PLN' }));
buyNowCart.addProduct(new Product('KUP TERAZ', idMap.item3[1], idMap.item3[0], 1, { value: 7, currency: 'PLN' }));
buyNowCart.addProduct(new Product('KUP TERAZ', idMap.item4[1], idMap.item4[0], 2, { value: 150, currency: 'PLN' }));
buyNowCart.addProduct(new Product('KUP TERAZ', idMap.item5[1], idMap.item5[0], 4, { value: 110, currency: 'PLN' }));
buyNowCart.addProduct(new Product('KUP TERAZ', idMap.item6[1], idMap.item6[0], 1, { value: 350, currency: 'PLN' }));
console.log(buyNowCart.getCartItemsQuantity());
console.table(buyNowCart.getAllProducts());
buyNowCart.updateProductById(idMap.item4[1], { quantity: 3, price: { value: 179, currency: 'PLN' } }); // update ceny i ilości
console.log(buyNowCart.getCartItemsQuantity());
console.table(buyNowCart.getAllProducts());
console.log(buyNowCart.getTotalCost());
console.log(buyNowCart.getProductById(idMap.item6[1]));
buyNowCart.deleteProductById(idMap.item6[1]);
console.log(buyNowCart.getProductById(idMap.item6[1])); // po usunięciu
console.table(buyNowCart.getAllProducts());
