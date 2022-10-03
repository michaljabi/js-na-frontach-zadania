import {Product as BaseProduct} from "./product";

export class Cart<Product extends BaseProduct> {
    private products: Product[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    updateProduct(id: number, product: Product) {
        this.products = this.products.map(p => p.id === id ? product : p);
    }

    deleteProduct(id: number) {
        this.products = this.products.filter(product => product.id !== id);
    }

    getProducts() {
        return this.products;
    }

    getProduct(id: number) {
        return this.products.find(product => product.id === id);
    }

    getTotalPrice() {
        return this.products.reduce((acc, product) => {
            return acc + ((product?.price ?? 0) * product.quantity);
        }, 0);
    }

    getProductCount() {
        return this.products?.length ?? 0;
    }
}
