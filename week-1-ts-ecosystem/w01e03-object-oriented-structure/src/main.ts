import { Basket } from "../models/Basket";
import { Product } from "../models/Product";

const product = new Product(1, "but", 1, 3.14, "BUY_NOW");
const product2 = new Product(2, "but", 2, 3.14, "FOR_FREE");
const product3 = new Product(3, "but", 3, 3.14, "BUY_NOW");
console.log(product.toString());
// const basket = new Basket("Basket 1", undefined, "ON_AUCTION"); // throw err
// const basket = new Basket("Basket 1", [product, product2]); // throw err
const basket = new Basket("Basket 1");

basket.addProduct(product);
// basket.addProduct(product2); throw err
console.log(basket.toString());
console.log(basket.getProductById(1)?.toString());
// console.log(basket.getProductById(2)?.toString()); throw err
console.log(
  "After update",
  basket.updateProductById(1, { name: "shoe 2" }).toString()
);

console.log(
  "After update",
  basket.updateProductById(1, { name: "" }).toString()
);

basket.addProduct(product3);
console.log(basket.readAllProducts());
basket.deleteProductById(1);
console.log("After remove #1", basket.readAllProducts());
basket.addProduct(product);
console.log("Quantity of basket products: ", basket.getQuantityOfProducts());
console.log("Sum of basket products: ", basket.getSumOfProducts());
const product4 = new Product(4, "blouse", 1, 3, "FOR_FREE"); // throw err
basket.addProduct(product4);
// console.log(basket.#products); // throw err
// basket.#products = [product, product2]; //throw err
