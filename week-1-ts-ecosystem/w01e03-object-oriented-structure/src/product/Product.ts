import {ProductType, updateProductType} from "../types/product";
import {TypeCart} from "../cart/Cart";


export default class Product<T extends TypeCart> {
  private product:ProductType<T>

  constructor(product:ProductType<T>) {
    this.product = {
      ...product,
      unitPrice: product.type === TypeCart.FREE ? 0 : product.unitPrice,
    }
  }

  get getProduct() {
    return  this.product
  }

  public changeProduct(newProductParam:updateProductType):void{
      this.product = {...this.product,...newProductParam}
  }

  public price():number{
    return this.product.quantity * this.product.unitPrice
  }

}
