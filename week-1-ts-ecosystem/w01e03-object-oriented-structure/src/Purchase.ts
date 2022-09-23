export interface Purchase {
    getPrice: () => number
}

export class Purchasable implements Purchase {
    private readonly price: number

    constructor (price: number) {
        this.price = price
    }

    getPrice (): number {
        return this.price
    }
}

export class NonPurchasable implements Purchase {
    getPrice () {
        return 0
    }
}