

import {DataTile} from "../../observers/ordersObserver.js"
const componentId = 'total-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
// content.innerHTML = ordersAmount

export const totalOrdersObserver = new DataTile(content,"totalOrders")