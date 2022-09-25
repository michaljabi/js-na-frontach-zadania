import {FreeProductInterface, ProductInterface} from "./product.interface";
import { v4 as uuidv4 } from 'uuid';

export default class Products {
    #products: (ProductInterface | FreeProductInterface)[] = []

    add(product: ProductInterface | FreeProductInterface) {
        this.#products.push({...product, id: uuidv4()});
    }

    remove(id: string) {
        this.#products = this.#products.filter(item => item.id !== id);
    }

    get(id: string): ProductInterface | FreeProductInterface {
        return this.#products.find(item => item.id === id);
    }

    getAll(): (ProductInterface | FreeProductInterface)[] {
        return this.#products;
    }
}
