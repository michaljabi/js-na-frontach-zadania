import { Cart } from './feature/cart/components/cart';
import { Product } from './feature/cart/components/product';

//Tworzenie koszyka FREE
const newCart = new Cart('Free');

//Dodawanie produktów
newCart.addProduct(1, 'Tshirt', 20, 11, 'Auction');
newCart.addProduct(2, 'Shoes', 30, 2, 'Free');
newCart.addProduct(3, 'Laptop', 130, 1, 'Free');
newCart.addProduct(3, 'Cup', 15, 4, 'Free');
newCart.addProduct(4, 'KUBOTA Slippers', 80, 4, 'Free');

//Wczytaj pojedyńczy produkt
newCart.getProductById(2);

//Usuwanie produktów
newCart.deleteProductById(1);
newCart.deleteProductById(2);

//Modyfikacja produktów
newCart.updateProductById(2, new Product(4, 'Adidas Slippers', 20, 11, 'Buy Now'));
newCart.updateProductById(4, new Product(4, 'Adidas Slippers', 20, 11, 'Buy Now'));
newCart.updateProductById(4, new Product(4, 'Adidas Slippers', 20, 11, 'Free'));

//Cena wszystkich produktów
console.log(newCart.getTotalPrice());

//Ilość wszystkich produktów
console.log(newCart.getAmountOfProducts());

// Widok klasy newCart
console.log('newCart', newCart);
console.log('---------');

//Tworzenie koszyka FREE
const newCart2 = new Cart('Auction');

//Dodawanie produktów
newCart2.addProduct(1, 'Tshirt', 20, 11, 'Auction');
newCart2.addProduct(2, 'Shoes', 30, 2, 'Auction');
newCart2.addProduct(3, 'Laptop', 130, 1, 'Auction');
newCart2.addProduct(3, 'Cup', 15, 4, 'Auction');
newCart2.addProduct(4, 'KUBOTA Slippers', 80, 4, 'Auction');

//Wczytaj pojedyńczy produkt
newCart2.getProductById(1);

//Usuwanie produktów
newCart2.deleteProductById(1);
newCart2.deleteProductById(1);

//Modyfikacja produktów
newCart2.updateProductById(2, new Product(4, 'Adidas Slippers', 20, 11, 'Auction'));
newCart2.updateProductById(4, new Product(4, 'Adidas Slippers', 20, 11, 'Buy Now'));
newCart2.updateProductById(4, new Product(4, 'Adidas Slippers', 20, 11, 'Auction'));

//Cena wszystkich produktów
console.log(newCart2.getTotalPrice());

//Ilość wszystkich produktów
console.log(newCart2.getAmountOfProducts());

// Widok klasy newCart2
console.log('newCart2', newCart2);
console.log('---------');

//Tworzenie koszyka FREE
const newCart3 = new Cart('Buy Now');

//Dodawanie produktów
newCart3.addProduct(1, 'Tshirt', 20, 11, 'Auction');
newCart3.addProduct(2, 'Shoes', 30, 2, 'Buy Now');
newCart3.addProduct(3, 'Laptop', 130, 1, 'Auction');
newCart3.addProduct(3, 'Cup', 15, 4, 'Buy Now');
newCart3.addProduct(4, 'KUBOTA Slippers', 80, 4, 'Buy Now');

//Wczytaj pojedyńczy produkt
newCart3.getProductById(3);

//Usuwanie produktów
newCart3.deleteProductById(1);
newCart3.deleteProductById(2);

//Modyfikacja produktów
newCart3.updateProductById(2, new Product(4, 'Adidas Slippers', 20, 11, 'Buy Now'));
newCart3.updateProductById(4, new Product(4, 'Adidas Slippers', 20, 11, 'Auction'));
newCart3.updateProductById(4, new Product(4, 'Adidas Slippers', 20, 11, 'Free'));

//Cena wszystkich produktów
console.log(newCart3.getTotalPrice());

//Ilość wszystkich produktów
console.log(newCart3.getAmountOfProducts());

// Widok klasy newCart3
console.log('newCart3', newCart3);
console.log('---------');
