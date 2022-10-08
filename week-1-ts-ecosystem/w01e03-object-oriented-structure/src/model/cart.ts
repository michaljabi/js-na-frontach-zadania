import { v4 } from 'uuid';
import { CartType, Currency, ICartItem } from './cart.model';

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

        update(count: number): void {
            if(count > 0) {
                this.count = count;
            }
        }
}

export class Cart {
    private items: Map<string, CartItem> = new Map();
    constructor(public type: CartType) {}

    add(item: CartItem): string {
        if(!(item instanceof CartItem)) {
            this.throwCartItemTypeError();
        }
        if(item.type !== this.type) {
            this.throwCartTypeError(item);
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

    private throwCartTypeError(item: CartItem): void {
        throw new Error(
            `You are trying to add the wrong product type to the cart.
            This cart is type ${this.type} and product has type: ${item.type}`
        );
    }

    private throwCartItemTypeError(): void {
        throw new Error(
            `You are trying to add into the cart object which one is not CartItem instance.
            Create a product with CartItem class`
        );
    }
}