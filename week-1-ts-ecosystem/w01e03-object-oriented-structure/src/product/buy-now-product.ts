import {ProductProperties} from "./models/product-properties.model";
import {Product} from "./product";

export class BuyNowProduct extends Product {
    constructor(productProperties: ProductProperties) {
        super(productProperties)
    }
}