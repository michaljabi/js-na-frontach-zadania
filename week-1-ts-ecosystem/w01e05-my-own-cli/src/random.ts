import { faker } from '@faker-js/faker'
import { PurchasableInit, NonPurchasableInit } from 'w01e03-object-oriented-structure/src/Products.js'

export const generateNonPurchasableData = (): NonPurchasableInit => ({
  name: faker.commerce.product(),
  id: faker.database.mongodbObjectId(),
  quantity: faker.datatype.number({ min: 1, max: 1000 })
})

export const generatePurchasableData = (): PurchasableInit => ({
  ...generateNonPurchasableData(),
  price: Number(faker.commerce.price(0.99, 1000))
})
