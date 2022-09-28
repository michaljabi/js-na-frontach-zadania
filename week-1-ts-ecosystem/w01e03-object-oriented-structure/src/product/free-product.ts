import {Product} from "./product";
import {ProductProperties} from "./models/product-properties.model";

export class FreeProduct extends Product {
    constructor({name, amount}: ProductProperties) {
        super({name, amount, price: 0})
    }
}