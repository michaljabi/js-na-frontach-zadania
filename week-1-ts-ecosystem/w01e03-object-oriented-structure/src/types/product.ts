import {TypeCart} from "../cart/Cart";


export interface ProductType<T extends TypeCart> {
  readonly id: string
  readonly type: T
  readonly unitPrice: number
  readonly currency:CurrencyType
  name: string
  quantity:number
}

export enum CurrencyType {
  PLN="PLN"
}

export type updateProductType = Omit<Partial<ProductType<TypeCart>>, 'id'| 'type'| 'unitPrice'| 'currency'>
