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

import { Cart, CartItem } from './cart';


const cart = new Cart('BUY_NOW');

const apple = new CartItem('Apple', 2, 4, 'PLN', 'BUY_NOW');
const car = new CartItem('Car', 1, 10000, 'PLN', 'BUY_NOW');
const phone = new CartItem('Phone', 1, 900, 'PLN', 'BUY_NOW');

cart.add(apple);
cart.add(car);
cart.add(phone);

console.log(cart.getAll())
console.log(cart.getCartItemsSum())