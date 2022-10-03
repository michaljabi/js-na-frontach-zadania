import {Product} from "./product";

export class BuyNowProduct extends Product {
    constructor(
        id: number,
        name: string,
        quantity: number,
        public price: number,
    ) {
        super(id, name, quantity)
    }
}
