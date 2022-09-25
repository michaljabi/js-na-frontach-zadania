import {ProductType, ProductModel} from './product.types';

export class Product<Type extends ProductType> {
  id: string;
  name: string;
  quantity: number;
  type: Type;
  price?: number;

  constructor({id, name, quantity, type, price}: ProductModel<Type>) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.type = type;
    if(price) {
      this.price = price;
    }
  }
}