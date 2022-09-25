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

import { Cart, CartItem } from './model/cart';

// Dopisałem testy żeby nie śmiecić w głównym pliku i wypisywać console.logi :)
// Uruchomienie testów => npm run test

// Test for vite-build
const cart = new Cart('BUY_NOW');
const product = new CartItem("Apple", 2, 3, 'PLN', 'BUY_NOW')
const product2 = new CartItem("Phone", 1, 900, 'PLN', 'BUY_NOW')

cart.add(product);
cart.add(product2);

console.log(cart.getAll());