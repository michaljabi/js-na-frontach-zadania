import {Product} from "./product";

export class FreeProduct extends Product {
    constructor(
        id: number,
        name: string,
        quantity: number,
    ) {
        super(id, name, quantity)
    }
}
