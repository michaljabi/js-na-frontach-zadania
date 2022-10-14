import { Item } from "../models/Item";

export class Cart<PRODUCT extends Item> {
  private products: Map<string, PRODUCT> = new Map();

  add(product: PRODUCT) {
    this.products.set(product.id, product);
  }

  findById(id: string) {
    return this.products.get(id);
  }

  updateById(id: string, product: PRODUCT) {
    if (!!this.products.get(id)) {
      this.products.set(id, product);
      return;
    }
    console.log("Nie znaleziono produktu o podanym id");
  }

  removeById(id: string) {
    this.products.delete(id);
  }

  get all() {
    return Array.from(this.products.values());
  }

  get count() {
    return this.products.size;
  }

  get amount() {
    return this.all.reduce((acc, product) => acc + product.amount, 0);
  }

  get fullPrice() {
    return this.all.reduce((acc, product) => acc + product.totalValue, 0).toFixed(2);
  }

  printItems() {
    this.products.forEach((product) => product.print());
  }

  print() {
    console.log("Ilość produktów w koszyku:", this.count);
    console.log("Cena produktów w koszyku:", this.fullPrice);
    console.log("\nProdukty w koszyku:");
    this.printItems();
  }
}
