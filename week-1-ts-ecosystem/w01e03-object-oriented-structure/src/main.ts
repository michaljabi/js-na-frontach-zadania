import Cart from "./shop/cart.class";
import Products from "./shop/products.class";

const products = new Products();
const existingCarts = new Map();

products.add({
    name: 'Produkt 1',
    price: 122,
    amount: 0,
    type: "AUCTION"
});

products.add({
    name: 'Produkt 2',
    amount: 0,
    type: "FREE"
});

products.add({
    name: 'Produkt 2',
    amount: 0,
    type: "BUY_NOW",
    price: 132
});

console.log('products', products.getAll());

function addItemToCart(product) {
    const existingCart = existingCarts.get(product.type);

    if (!existingCart) {
        const cart = new Cart(product.type);

        cart.addItem(product);
        existingCarts.set(product.type, cart);

        return true;
    }

    existingCart.addItem(product);
}

addItemToCart(products.get(1));

console.log('SUMA Koszyk Aukcje: ', existingCarts.get('AUCTION').getSum());

addItemToCart(products.get(2));

addItemToCart(products.get(1));

console.log('SUMA Koszyk Aukcje: ', existingCarts.get('AUCTION')?.getSum());

console.log('SUMA Koszyk Free: ', existingCarts.get('FREE')?.getSum());

console.log('SUMA Koszyk Buy now: ', existingCarts.get('BUY_NOW')?.getSum());

console.log(existingCarts.get('AUCTION').getItems());

existingCarts.get('AUCTION').removeItem(1);

console.log(existingCarts.get('AUCTION').getItems());

console.log('SUMA Koszyk Aukcje: ', existingCarts.get('AUCTION')?.getSum());
