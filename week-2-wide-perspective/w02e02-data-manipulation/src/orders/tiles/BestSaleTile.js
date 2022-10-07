// import { bestSale } from "../../context/fake.context.js"
import { DataTile } from "../../observers/ordersObserver.js"
const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna pochodzić z kolekcji ordersFakeData
export const bestSaleObserver = new DataTile(content,'bestSale')
