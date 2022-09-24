type Unit = 'kg' | 'pieces'
export type Currency = 'PLN' | 'EUR' | 'DOL'

export interface Price {
    value: number
    currency: Currency
}

export interface Item {
    unit: Unit
    name: string
    price: Price
    amount: number
}