import {FreeProductInterface, ProductInterface} from "./product.interface";
import {CartType} from "./cart.type";


export default class Cart {
    #products: (ProductInterface | FreeProductInterface)[] = [];
    #type: CartType;
    #sum = 0;

    constructor(type: CartType) {
        this.#type = type;
    }

    addItem(product: ProductInterface | FreeProductInterface): void {
        const existingProduct = this.#products.findIndex(item => item.id === product.id);

        if (existingProduct > -1) {
            this.updateCart(product.id);
            return;
        }

        if (product.type === this.#type) {
            this.#products.push({...product, amount: 1});
        }

        if (product.type !== 'FREE') {
            this.#sum += product.price;
        }
    }

    updateCart(id: string) {
        this.#products = this.#products.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    amount: item.amount + 1
                }
            }
        });
    }

    removeItem(id: string) {
        this.#products = this.#products.filter(product => {
            if (product.id === id && 'price' in product) {
                this.#sum -= product.price;
            }

            if (product.id === id && product.amount > 1) {
                product.amount = product.amount - 1;
                return true;
            }

            return product.id !== id
        });
    }

    getItem(id: string) {
        return this.#products.find(item => item.id === id);
    }

    getItems(): (ProductInterface | FreeProductInterface)[] {
        return this.#products;
    }

    getItemsCount(): number {
        return this.#products.length;
    }

    getSum(): number {
        return this.#sum;
    }
}
