
export type CartType = 'BUY_NOW' | 'AUCTION' | 'FOR_FREE';

export type Currency = 'PLN';

export interface ICartItem {
    name: string
    count: number
    price: number
    currency: Currency
    type: CartType
}