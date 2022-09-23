import { Cart } from './Cart.js'
import { ProductAuction, ProductFree, ProductBuyNow } from './Products.js'

const auctionData: ProductAuction[] = [
    new ProductAuction({ id: '1234', price: 10, name: 'Ryba', quantity: 10 }),
    new ProductAuction({ id: '1235', price: 2, name: 'Kiełbasa', quantity: 7 })
]
const buyNowData: ProductBuyNow[] = [
    new ProductBuyNow({ id: '1234', price: 10, name: 'Ryba', quantity: 10 }),
    new ProductBuyNow({ id: '1235', price: 2, name: 'Kiełbasa', quantity: 7 })
]
const freeData: ProductFree[] = [
    new ProductFree({ id: '1234', name: 'Ryba', quantity: 10 }),
    new ProductFree({ id: '1235', name: 'Kiełbasa', quantity: 7 })
]

const cartAuction = new Cart<ProductAuction>(auctionData)
const cartBuyNow = new Cart<ProductBuyNow>(buyNowData)
const cartFree = new Cart<ProductFree>(freeData)

// Auction
console.log('Aukcja')
console.log(cartAuction.getProducts())
console.log('------------------------')
console.log('Dodaj produkt')
cartAuction.addProduct(new ProductAuction({ id: '1237', price: 7, name: 'Masło', quantity: 8 }))
console.log(cartAuction.getProducts())
console.log('------------------------')
console.log('Znajdź produkt o id 1234')
console.log(cartAuction.getProduct('1234'))
console.log('------------------------')
console.log('Zaaktualizuj produkt 1234')
cartAuction.updateProduct('1234', new ProductAuction({ id: '1234', price: 10, name: 'Chipsy', quantity: 20 }))
console.log(cartAuction.getProduct('1234'))
console.log('------------------------')
console.log('Usuń produkt o id 1234')
cartAuction.removeProduct('1234')
console.log(cartAuction.getProducts())
console.log('------------------------')
console.log(`Liczba produktów: ${cartAuction.numberOfProducts}`)
console.log(`Całkowita kwota: ${cartAuction.fullPrice}`)

// BuyNow
console.log('Kup teraz')
console.log(cartBuyNow.getProducts())
console.log('------------------------')
console.log('Dodaj produkt')
cartBuyNow.addProduct(new ProductBuyNow({ id: '1237', price: 7, name: 'Masło', quantity: 8 }))
console.log(cartBuyNow.getProducts())
console.log('------------------------')
console.log('Znajdź produkt o id 1234')
console.log(cartBuyNow.getProduct('1234'))
console.log('------------------------')
console.log('Zaaktualizuj produkt 1234')
cartBuyNow.updateProduct('1234', new ProductBuyNow({ id: '1234', price: 10, name: 'Chipsy', quantity: 20 }))
console.log(cartBuyNow.getProduct('1234'))
console.log('------------------------')
console.log('Usuń produkt o id 1234')
cartBuyNow.removeProduct('1234')
console.log(cartBuyNow.getProducts())
console.log('------------------------')
console.log(`Liczba produktów: ${cartBuyNow.numberOfProducts}`)
console.log(`Całkowita kwota: ${cartBuyNow.fullPrice}`)

// CartFree
console.log('Darmowe')
console.log(cartFree.getProducts())
console.log('------------------------')
console.log('Dodaj produkt')
cartFree.addProduct(new ProductFree({ id: '1237', name: 'Masło', quantity: 8 }))
console.log(cartFree.getProducts())
console.log('------------------------')
console.log('Znajdź produkt o id 1234')
console.log(cartFree.getProduct('1234'))
console.log('------------------------')
console.log('Zaaktualizuj produkt 1234')
cartFree.updateProduct('1234', new ProductFree({ id: '1234', name: 'Chipsy', quantity: 20 }))
console.log(cartFree.getProduct('1234'))
console.log('------------------------')
console.log('Usuń produkt o id 1234')
cartFree.removeProduct('1234')
console.log(cartFree.getProducts())
console.log('------------------------')
console.log(`Liczba produktów: ${cartFree.numberOfProducts}`)
console.log(`Całkowita kwota: ${cartFree.fullPrice}`)