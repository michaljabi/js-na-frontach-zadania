import { Item } from "../models/Item";
import { ValuedItem } from "../models/ValuedItem";

export class Cart<PRODUCT extends ValuedItem> {
  private producs: Map<string, PRODUCT> = new Map();

  add(product: PRODUCT) {
    this.producs.set(product.id, product);
  }

  findById(id: string) {
    return this.producs.get(id);
  }

  updateById(id: string, product: PRODUCT) {
    if (!!this.producs.get(id)) {
      this.producs.set(id, product);
      return;
    }
    console.log("Nie znaleziono produktu o podanym id");
  }

  removeById(id: string) {
    this.producs.delete(id);
  }

  getAll() {
    return [...this.producs.values()];
  }

  getCount() {
    return this.producs.size;
  }

  getAmount() {
    return [...this.producs].reduce((acc, [, product]) => acc + product.amount, 0);
  }

  getFullPrice() {
    return [...this.producs].reduce((acc, [, product]) => acc + (product?.value || 0) * product.amount, 0).toFixed(2);
  }

  printItems() {
    this.producs.forEach((product) => product.print());
  }

  print() {
    console.log("Ilość produktów w koszyku:", this.getCount());
    console.log("Cena produktów w koszyku:", this.getFullPrice());
    console.log("\nProdukty w koszyku:");
    this.printItems();
  }
}
