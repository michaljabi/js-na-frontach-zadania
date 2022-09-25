import { v4 } from 'uuid';

type CartType = 'BUY_NOW' | 'AUCTION' | 'FOR_FREE';

type Currency = 'PLN';

export interface ICartItem {
    name: string
    count: number
    price: number
    currency: Currency
    type: CartType
}

export class CartItem implements ICartItem {
    id: string
    constructor(
        public name: string,
        public count: number,
        public price: number,
        public currency: Currency,
        public type: CartType) {
            this.id = v4();
        }
}

export class Cart {
    private items: Map<string, CartItem> = new Map();
    constructor(private type: CartType) {}

    add(item: CartItem): string {
        if(item.type !== this.type) {
            throw new Error(
                `You are trying add wrong product type into the cart.
                 This cart is type ${this.type} but product has type: ${item.type}
                `
            );
        }
        this.items.set(item.id, item);
        return item.id;
    }
    get(cartItemId: string): CartItem | undefined {
        return this.items.get(cartItemId);
    }
    getAll(): CartItem[] {
       return Array.from(this.items.values());
    }
    getCartItemsCount(): number {
        return this.items.size;
    }
    getCartItemsSum(): number {
        if(this.type === 'FOR_FREE') {
            return 0
        }
        return this.getAll().reduce((a, b) => a + (b.price * b.count), 0)
    }
    update(item: CartItem): void {
        this.items.set(item.id, item);
    }
    remove(item: CartItem): void {
        this.items.delete(item.id);
    }
}