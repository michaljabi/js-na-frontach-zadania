import {FreeProductInterface, ProductInterface} from "./product.interface";

export default class Products {
    #products: (ProductInterface | FreeProductInterface)[] = []

    add(product: ProductInterface | FreeProductInterface) {
        this.#products.push({...product, id: this.#products.length + 1});
    }

    remove(id: number) {
        this.#products = this.#products.filter(item => item.id !== id);
    }

    get(id: number): ProductInterface | FreeProductInterface {
        return this.#products.find(item => item.id === id);
    }

    getAll(): (ProductInterface | FreeProductInterface)[] {
        return this.#products;
    }

    changeAmount(id: number, type: 'plus' | 'minus' = 'plus') {
        this.#products = this.#products.filter(item => {
            if(item.id === id && type === 'plus') {
                item.amount++
            }
            if(item.id === id && type === 'minus' && item.amount > 0) {
                item.amount--
            }
        })
    }

}
