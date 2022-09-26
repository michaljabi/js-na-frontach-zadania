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

console.log('test');
const buyNowCart = new Cart('KUP TERAZ');
const auctionCart = new Cart('AUKCJA');
const freeCart = new Cart('ODDAM ZA DARMO');

// buyNowCart.addProduct(new Product('KUP TERAZ', uuidv4(), 'Kosiarka', 1, { value: 1700, currency: 'PLN' }));
// auctionCart.addProduct(new Product('KUP TERAZ', uuidv4(), 'Kosiarka', 1, { value: 1700, currency: 'PLN' }));
// freeCart.addProduct(new Product('KUP TERAZ', uuidv4(), 'Kosiarka', 1, { value: 1700, currency: 'PLN' }));
