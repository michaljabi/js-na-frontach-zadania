import {Product} from "./product";

export class AuctionProduct extends Product {
    constructor(
        id: number,
        name: string,
        quantity: number,
        public price: number,
    ) {
        super(id, name, quantity)
    }
}
