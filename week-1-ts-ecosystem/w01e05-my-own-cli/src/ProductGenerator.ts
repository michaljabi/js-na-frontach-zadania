import { PurchasableDataGenerator, NonPurchasableDataGenerator } from './DataGenerator.js'
import { PurchasableInit, NonPurchasableInit } from 'w01e03-object-oriented-structure/src/Products.js'

interface ProductGenerator<Type extends NonPurchasableInit> {
  createProduct(): Promise<Type>
  generateRandomProducts(repeat: number): Type[]
}

export class ProductFreeGenerator implements ProductGenerator<NonPurchasableInit> {
  private dataGenerator: NonPurchasableDataGenerator = new NonPurchasableDataGenerator()

  async createProduct(): Promise<NonPurchasableInit> {
    return this.dataGenerator.createDataPrompt()
  }

  generateRandomProducts(repeat: number): NonPurchasableInit[] {
    return this.dataGenerator.generateRandomData(repeat)
  }
}

export class ProductBuyNowGenerator implements ProductGenerator<PurchasableInit> {
  private dataGenerator: PurchasableDataGenerator = new PurchasableDataGenerator()

  async createProduct(): Promise<PurchasableInit> {
    return this.dataGenerator.createDataPrompt()
  }

  generateRandomProducts(repeat: number): PurchasableInit[] {
    return this.dataGenerator.generateRandomData(repeat)
  }
}

export class ProductAuctionGenerator implements ProductGenerator<PurchasableInit> {
  private dataGenerator: PurchasableDataGenerator = new PurchasableDataGenerator()

  async createProduct(): Promise<PurchasableInit> {
    return this.dataGenerator.createDataPrompt()
  }

  generateRandomProducts(repeat: number): PurchasableInit[] {
    return this.dataGenerator.generateRandomData(repeat)
  }
}
