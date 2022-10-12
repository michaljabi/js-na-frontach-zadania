import { v4 } from 'uuid';
import { CartType, Currency } from './cart.model';

export class CartItem {
    id: string
    constructor(
        public name: string,
        public count: number,
        public price: number,
        public currency: Currency,
        public type: CartType) {
            this.id = v4();
            this.checkCount();
            this.checkPrice();
        }

        update(count: number): void {
            if(count > 0) {
                this.count = count;
            }
        }

        private checkCount(): void {
            if(this.count < 1) {
                throw new Error("Product cunt have to be grater than 0"); 
            }
        }
        private checkPrice(): void {
            if(this.price !== 0 && this.type === 'FOR_FREE') {
                throw new Error("Price cannot be different than 0 if cart type is FOR_FREE"); 
            }

            if(this.price <= 0 && this.type !== 'FOR_FREE') {
                throw new Error("Price have to be greater than 0"); 
            }
        }
}