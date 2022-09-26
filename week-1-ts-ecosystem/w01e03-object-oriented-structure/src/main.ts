import Cart, {TypeCart} from "./cart/Cart";
import {CurrencyType, ProductType} from "./types/product";
import Product from "./product/Product";

const product1:ProductType<TypeCart.AUCTION> = {
  id:"1",
  unitPrice:2,
  currency:CurrencyType.PLN,
  quantity:1,
  name:`name1`,
  type:TypeCart.AUCTION
}

const product2:ProductType<TypeCart.AUCTION> = {
  id:"2",
  unitPrice:1,
  currency:CurrencyType.PLN,
  quantity:2,
  name:`name2`,
  type:TypeCart.AUCTION
}



const product1free:ProductType<TypeCart.FREE> = {
  id:"1",
  unitPrice:0,
  currency:CurrencyType.PLN,
  quantity:1,
  name:`name1`,
  type:TypeCart.FREE
}

const product2free:ProductType<TypeCart.FREE> = {
  id:"2",
  unitPrice:0,
  currency:CurrencyType.PLN,
  quantity:1,
  name:`name1`,
  type:TypeCart.FREE
}



const runAuctionCart = () => {
  console.log(TypeCart.AUCTION)
  const cart  = new Cart<TypeCart.AUCTION>()
  cart.addProduct(new Product(product1))
  cart.addProduct(new Product(product2))
  cart.changeProductInCart("1",{quantity:100,name:"NewName1"})
  console.log(`count:${cart.countProducts()}, sum:${cart.sumPrice()}`)
  cart.deleteProduct("1")
  cart.deleteProduct("2")
  console.log(`count:${cart.countProducts()}, sum:${cart.sumPrice()}`)
}

const runFreeCart = () => {
  console.log(TypeCart.FREE)
  const cart  = new Cart<TypeCart.FREE>()
  cart.addProduct(new Product(product1free))
  cart.addProduct(new Product(product2free))
  cart.changeProductInCart("1",{quantity:100,name:"NewName1"})
  console.log(`count:${cart.countProducts()}, sum:${cart.sumPrice()}`)
  cart.deleteProduct("1")
  cart.deleteProduct("2")
  console.log(`count:${cart.countProducts()}, sum:${cart.sumPrice()}`)
}

runAuctionCart()
runFreeCart()


