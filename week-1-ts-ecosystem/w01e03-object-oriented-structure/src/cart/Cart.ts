import {ProductType, updateProductType} from "../types/product";
import Product from "../product/Product";

export enum TypeCart{
  AUCTION="auction",
  BUY_NOW="buy now",
  FREE="free"
}


export default class Cart<T extends TypeCart>{
  private products: Product<T>[] = []

  get getProducts():ProductType<T>[] {
    return this.products.map(product=> product.getProduct)
  }

  public sumPrice():number {
      return this.products.reduce((partialSum, product) => {
        if (product.getProduct.type !== TypeCart.FREE){
          return partialSum + product.price()
        }
        return 0
      }, 0)
  }


  public findProduct(id:string):Product<T> | undefined{
    return this.products.find(product => product.getProduct.id === id)
  }

  public changeProductInCart(id:string, newProductParam:updateProductType):void{
    this.findProduct(id)?.changeProduct(newProductParam)
  }

  public deleteProduct(id:string):void{
    this.products = this.products.filter(product => product.getProduct.id !== id)
  }

  public countProducts():number {
    return this.products.reduce((partialSum, product) => {
        return partialSum + product.getProduct.quantity
    }, 0)
  }

  public addProduct(product:Product<T>) {
    this.products.push(product)
  }
}
