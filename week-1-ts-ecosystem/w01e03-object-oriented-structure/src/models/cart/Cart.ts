import {IProduct, IProductWithPrice, Product, ProductWithPrice} from '../product';

class Cart<ItemType extends Product> {
  private _items: ItemType[] = [];

  public get items(): ItemType[] {
    return this._items;
  }

  public getItem(id: string): ItemType | null {
    return this._items.find(item => item.id == id) || null;
  }

  public addItem(item: ItemType): void {
    const previousItem = this.getItem(item.id);

    if (previousItem) {
      previousItem.amount += item.amount;

      return;
    }

    this.items.push(item);
  }

  public removeItem(id: string): void {
    const previousItem = this.getItem(id);

    if (!previousItem) {
      return console.log(`Warning: item with given ID not exists in cart`);
    }

    if (previousItem.amount === 1) {
      this._items = this.items.filter((item) => item.id !== id);

      return;
    }

    previousItem.amount--;

    return;
  }

  public updateItem(id: string, data: Partial<IProductWithPrice>): void {
    const item = this.getItem(id);

    if (!item) {
      return console.log(`Warning: item with given ID not exists in cart`);
    }

    item.update(data);
    return;
  }

  public getTotalPrice(): number {
    return this.items.reduce((amount, item) => (
        item instanceof ProductWithPrice ? amount + (item.price * item.amount) : amount
    ), 0);
  }

  public getNumberOfItems(): number {
    return this.items.length;
  }
}

export {Cart};
