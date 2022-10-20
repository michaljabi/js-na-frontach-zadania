import { CartItem } from './CartItem';

export class AuctionItem extends CartItem {
  auctionEndDate: number;

  constructor(
    name: string,
    amount: number,
    price: number,
    auctionEndDate: number
  ) {
    super(name, amount, price);
    this.auctionEndDate = auctionEndDate;
  }
}
