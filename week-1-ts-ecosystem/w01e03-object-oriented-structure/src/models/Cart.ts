import { v4 } from 'uuid';
import { PRODUCT_TYPE, ProductType } from './Product.types';
import { Product } from './Product';
import { CartItem } from './CartItem';

class Cart {
  private readonly _id: string;
  private _items: CartItem[] = [];
  private readonly _name: string;
  private readonly _itemsType: PRODUCT_TYPE;

  constructor(name: string, productsType: PRODUCT_TYPE) {
    this._id = v4();
    this._name = name;
    this._itemsType = productsType;
  }

  get itemsType(): PRODUCT_TYPE {
    return this._itemsType;
  }

  get name(): string {
    return this._name;
  }

  get items(): CartItem[] {
    return this._items;
  }

  getItem(id: string): CartItem | null {
    return this.items.find((item) => item.id === id) || null;
  }

  addItem(item: Product): void {
    if (item.type !== this.itemsType) {
      return console.log(
        `Error: cannot add ${item.name}. Cart accepts only ${this.itemsType} items`
      );
    }

    const previousItem = this.getItem(item.id);

    if (previousItem) {
      return previousItem.incrementQuantity();
    }

    const newItem = new CartItem(item);
    this.items.push(newItem);

    return;
  }

  removeItem(id: string): void {
    const previousItem = this.getItem(id);

    if (!previousItem) {
      return console.log(`Warning: item with given ID not exists in cart`);
    }

    if (previousItem.quantity === 1) {
      this._items = this.items.filter((item) => item.id !== id);

      return;
    }

    return previousItem.decrementQuantity();
  }

  getAmount(): number {
    return this.items.reduce((amount, item) => amount + (item.price || 0), 0);
  }

  getNumberOfItems(): number {
    return this.items.length;
  }

  updateItem(id: string, data: Record<string, string | number>) {
    const item = this.getItem(id);

    if (!item) {
      return console.log(`Warning: item with given ID not exists in cart`);
    }

    return item.update(data);
  }
}

export { Cart };
