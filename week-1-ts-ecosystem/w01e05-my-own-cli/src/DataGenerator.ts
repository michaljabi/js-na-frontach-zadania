import { createMany } from './utils.js'
import { generatePurchasableData, generateNonPurchasableData } from './random.js'
import { createPurchasablePrompt, createNonPurchasablePrompt } from './prompts.js'
import { PurchasableInit, NonPurchasableInit } from 'w01e03-object-oriented-structure/src/Products.js'

export interface DataGenerator<Type extends NonPurchasableInit> {
  createDataPrompt: () => Promise<Type>
  generateRandomData: (repeat: number) => Type[]
}

export class PurchasableDataGenerator implements DataGenerator<PurchasableInit> {
  createDataPrompt(): Promise<PurchasableInit> {
    return createPurchasablePrompt()
  }

  generateRandomData(repeat: number): PurchasableInit[] {
    return createMany(generatePurchasableData, repeat)
  }
}

export class NonPurchasableDataGenerator implements DataGenerator<NonPurchasableInit> {
  createDataPrompt(): Promise<NonPurchasableInit> {
    return createNonPurchasablePrompt()
  }

  generateRandomData(repeat: number): NonPurchasableInit[] {
    return createMany(generateNonPurchasableData, repeat)
  }
}
