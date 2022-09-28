import {Product} from "../product/product";
import {ProductId} from "../product/models/product-properties.model";

export class Basket<Type extends Product> {
    private products: Map<ProductId, Type> = new Map<ProductId, Type>();

    addProduct(product: Type) {
        this.products.set(product.id, product);
    }

    getProductById(id: ProductId) {
        return this.products.get(id);
    }

    increaseAmount(id: ProductId, amount: number) {
        this.products.get(id)?.increaseAmount(amount);
    }

    decreaseAmount(id: ProductId, amount: number) {
        const product = this.products.get(id);
        if(product){
            product.decreaseAmount(amount);
            if(product.amount <= 0) {
                this.products.delete(id);
            }
        }
    }

    removeProduct(id: ProductId) {
        this.products.delete(id);
    }

    get getAllProducts() {
        return Array.from(this.products.values());
    }

    get numberOfProducts() {
        return this.getAllProducts.reduce((acc, product)=>
                acc +=product.amount
            ,0)
    }

    get totalPrice() {
        return this.getAllProducts.reduce((acc, product)=>
                acc +=(product.price*product.amount)
            ,0)
    }


}