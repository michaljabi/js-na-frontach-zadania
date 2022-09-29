import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { toArray } from './utils.js'
import { ProductType } from './prompts.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { PurchasableInit, NonPurchasableInit } from 'w01e03-object-oriented-structure/src/Products.js'
import { ProductFreeGenerator, ProductBuyNowGenerator, ProductAuctionGenerator } from './ProductGenerator.js'

export type FileData = {
  productsFree?: PurchasableInit[]
  productsBuyNow?: PurchasableInit[]
  productsAuction?: PurchasableInit[]
}

type Products<Type extends NonPurchasableInit = NonPurchasableInit> = Type | Type[]

export class JSONGenerator {
  private readonly productsFree: NonPurchasableInit[] = []
  private readonly productsBuyNow: PurchasableInit[] = []
  private readonly productsAuction: PurchasableInit[] = []

  private addProductsFree(products: Products): void {
    this.productsFree.push(...toArray(products))
  }

  private addProductsBuyNow(products: Products<PurchasableInit>): void {
    this.productsBuyNow.push(...toArray(products))
  }

  private addProductsAuction(products: Products<PurchasableInit>): void {
    this.productsAuction.push(...toArray(products))
  }

  async addProduct(type: ProductType): Promise<void> {
    if (type === ProductType.Free) {
      this.addProductsFree(await new ProductFreeGenerator().createProduct())
    } else if (type === ProductType.BuyNow) {
      this.addProductsBuyNow(await new ProductBuyNowGenerator().createProduct())
    } else if (type === ProductType.Auction) {
      this.addProductsAuction(await new ProductAuctionGenerator().createProduct())
    }
  }

  async addRandomProducts (type: ProductType, repeat: number): Promise<void> {
    if (type === ProductType.Free) {
      this.addProductsFree(new ProductFreeGenerator().generateRandomProducts(repeat))
    } else if (type === ProductType.BuyNow) {
      this.addProductsBuyNow(new ProductBuyNowGenerator().generateRandomProducts(repeat))
    } else if (type === ProductType.Auction) {
      this.addProductsAuction(new ProductAuctionGenerator().generateRandomProducts(repeat))
    }
  }

  loadFromFile (fileName: string): void {
    try {
      const data = fs.readFileSync(`${path.join(__dirname, 'persistent-data')}/${fileName}`, 'utf-8')
      const products = JSON.parse(data) as FileData
      this.productsFree.push(...products.productsFree ?? [])
      this.productsBuyNow.push(...products.productsBuyNow ?? [])
      this.productsAuction.push(...products.productsAuction ?? [])
    } catch {
      console.error('Error has occurred while loading file!')
    }
  }

  generateJSON(fileName: string): void {
    return fs.writeFile(
      `${path.join(__dirname, 'persistent-data')}/${fileName}`,
      JSON.stringify({
        productsFree: this.productsFree,
        productsBuyNow: this.productsBuyNow,
        productsAuction: this.productsAuction
      }),
      (err) => {
        if (err) throw err
        console.log('The file has been saved!')
      }
    )
  }
}
