import {FreeProductInterface, ProductInterface} from "./product.interface";
import {CartType} from "./cart.type";


export default class Cart {
    #products: (ProductInterface | FreeProductInterface)[] = [];
    #type: CartType;
    #sum = 0;

    constructor(type: CartType) {
        this.#type = type;
    }

    getSum(): number {
        return this.#sum;
    }

    addItem(product: ProductInterface | FreeProductInterface) {
        if (product.type === this.#type) {
            this.#products.push({...product, id: this.#products.length + 1});
        }

        if (product.type !== 'FREE') {
            this.#sum += product.price;
        }
    }

    removeItem(id: number) {
        this.#products = this.#products.filter(product => {
            if (product.id === id && 'price' in product) {
                this.#sum -= product.price;
            }
            return product.id !== id
        });
    }

    getItems(): (ProductInterface | FreeProductInterface)[] {
        return this.#products;
    }
}
