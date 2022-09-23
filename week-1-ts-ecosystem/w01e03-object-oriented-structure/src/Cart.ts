import { Product } from './Products.js'

export class Cart<ProductType extends Product> {
    private products: Array<ProductType>

    constructor (initialProducts: ProductType[] = []) {
        this.products = initialProducts
    }

    addProduct (product: ProductType): void {
        this.products.push(product)
    }

    getProduct (id: Product['id']): ProductType | undefined {
        return this.products.find(product => product.id === id)
    }

    getProducts (): ProductType[] {
        return this.products
    }

    updateProduct (id: Product['id'], newProduct: ProductType): void {
        const index = this.products.findIndex(product => product.id === id)
        if (index === -1) {
            return
        }
        this.products[index] = newProduct
    }

    removeProduct (id: Product['id']): void {
        const index = this.products.findIndex(product => product.id === id)
        if (index === -1) {
            return
        }
        this.products.splice(index, 1)
    }

    get numberOfProducts (): number {
        return this.products.length
    }

    get fullPrice (): number {
        return this.products.reduce((acc: number, product) => acc + product.price * product.quantity, 0)
    }
}


