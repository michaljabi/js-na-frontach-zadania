import { CartItem } from './CartItem';

export class AuctionItem extends CartItem {
  auctionEndDate: number;

  constructor(name: string, price: number, auctionEndDate: number) {
    super(name, price);
    this.auctionEndDate = auctionEndDate;
  }
}
