import { AuctionType } from "./product-types";

export class Product {
  id: string;
  name: string;
  auction: AuctionType;
  quantity: number;
  price?: number;
  constructor(
    id: string,
    name: string,
    auction: AuctionType,
    quantity: number,
    price?: number
  ) {
    this.id = id;
    this.name = name;
    this.auction = auction;
    this.quantity = quantity;
    this.price = price;
  }
}
