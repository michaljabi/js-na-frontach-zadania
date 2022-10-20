import { CartItem } from './CartItem';

export class AuctionItem extends CartItem {
  constructor(name: string, amount: number) {
    super(name, amount, 0);
  }
}
