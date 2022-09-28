import {Product} from "./product";
import {ProductProperties} from "./models/product-properties.model";

export class AuctionProduct extends Product {
    constructor(productProperties: ProductProperties) {
        super(productProperties);
    }

    changePrice(newPrice: number) {
        this._price  = newPrice;
    }


}