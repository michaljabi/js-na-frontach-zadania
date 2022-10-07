
import { getOrders } from "../services/http.service.js"
// import { State } from "../observers/ordersObserver.js"

export const allAvailableOrders = await getOrders()
// // export const ordersAmount = allAvailableOrders.length
// // export const totalIncome = allAvailableOrders.reduce((total, item) => total + item.sale, 0).toFixed(2)

// // export const bestSale = allAvailableOrders.sort((a, b) => b.sale - a.sale)[0].sale


