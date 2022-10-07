import './orders/tiles/AnnualOrdersTile.js'
import { totalIncomeObserver } from './orders/tiles/TotalIncomeTile.js'
import { totalOrdersObserver } from './orders/tiles/TotalOrdersTile.js'
import { bestSaleObserver } from './orders/tiles/BestSaleTile.js'
import { State } from "./observers/ordersObserver.js"
import { generateFakeOrderData } from "./helpers/orders.helpers.js";

const ordersState = new State()


ordersState.addObserver(totalIncomeObserver)
ordersState.addObserver(totalOrdersObserver)
ordersState.addObserver(bestSaleObserver)


ordersState.updateOrders()


const addNewOrderButton = document.querySelector('#add-new-order-button')



addNewOrderButton.addEventListener('click', () => {
    const newOrder = generateFakeOrderData()
    ordersState.addNewOrder(newOrder)
})

