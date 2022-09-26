import { Product } from '../product/Product';
import { ProductWithPrice } from '../product/ProductWithPrice';

class Cart<PRODUCT extends Product> {
  private items: PRODUCT[] = [];

  public getItems(): PRODUCT[] {
    return this.items;
  }

  public getItem(id: string): PRODUCT | null {
    return this.items.find((item) => item.id == id) || null;
  }

  public addItem(item: PRODUCT): void {
    const previousItem = this.getItem(item.id);

    if (previousItem) {
      previousItem.amount += item.getAmount();

      return;
    }

    this.items.push(item);
  }

  public removeItem(id: string): void {
    const previousItem = this.getItem(id);

    if (!previousItem) {
      throw Error(`Product with id: ${id} not found`);
    }

    if (previousItem.getAmount() === 1) {
      this.items = this.items.filter((item) => item.id !== id);

      return;
    }

    previousItem.amount = previousItem.getAmount() - 1;

    return;
  }

  public updateItem(
    id: string,
    data: Partial<Pick<ProductWithPrice, 'name' | 'amount' | 'price'>>
  ): void {
    const item = this.getItem(id);

    if (!item) {
      throw Error(`Product with id: ${id} not found`);
    }

    item.update(data);
    return;
  }

  public getTotalPrice(): number {
    return this.items.reduce(
      (amount, item) =>
        item instanceof ProductWithPrice
          ? amount + item.getPrice() * item.getAmount()
          : amount,
      0
    );
  }

  public getNumberOfItems(): number {
    return this.items.length;
  }
}

export { Cart };
