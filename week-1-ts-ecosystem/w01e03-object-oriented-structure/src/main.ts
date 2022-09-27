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

import { Product } from "./modules/product/product.module";
import { ShoppingCart } from "./modules/cart/cart.module";
// const Products = Array<Product>
const cart1 = new ShoppingCart("first cart", "PLN", "Kup Teraz");
const product1 = new Product("telewizor", 2, 23,"Kup Teraz", 1);
const mleko = new Product("mleko uht", 2, 3,"Kup Teraz", 2);
const product2 = new Product("chleb", 2, 13,"Aukcja" ,3);
const product3 = new Product("cukier",2, 9991, "Kup Teraz", 4);

cart1.addProduct(product1);
cart1.addProduct(mleko);
cart1.removeProduct(mleko);
cart1.addProduct(product2);
cart1.addProduct(product3);
cart1.updateProduct(new Product("jaja", 4, 3,"Kup Teraz" , 1 ));
cart1.displayAllProducts();
cart1.displayTotalPrice();

