import { getOrders } from '../../api/getOrders';

const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

const orders = await getOrders()

// Ta wartość powinna pochodzić z kolekcji ordersFakeData
content.innerHTML = String(Math.max(...orders.map((order) => order.sale)))
