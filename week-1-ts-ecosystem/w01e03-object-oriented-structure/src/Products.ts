import { Purchase, Purchasable, NonPurchasable } from './Purchase.js'

type ProductInit = {
    readonly id: string
    readonly name: string
    readonly quantity: number
    readonly purchase: Purchase
}

type NonPurchasableInit = Omit<ProductInit, 'purchase'>

type PurchasableInit = {
    readonly price: number
} & NonPurchasableInit

export abstract class Product {
    readonly id: string
    readonly name: string
    readonly quantity: number
    private readonly purchase: Purchase

    protected constructor (data: ProductInit) {
        this.id = data.id
        this.name = data.name
        this.quantity = data.quantity
        this.purchase = data.purchase
    }

    get price (): number {
        return this.purchase.getPrice()
    }
}

export class ProductBuyNow extends Product {
    constructor (data: PurchasableInit) {
        const { price, ...rest } = data
        super({ ...rest, purchase: new Purchasable(price) })
    }
}

export class ProductAuction extends Product {
    constructor (data: PurchasableInit) {
        const { price, ...rest } = data
        super({ ...rest, purchase: new Purchasable(price) })
    }
}

export class ProductFree extends Product {
    constructor (data: NonPurchasableInit) {
        super({ ...data, purchase: new NonPurchasable() })
    }
}