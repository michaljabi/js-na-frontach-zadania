import { getOrders } from '../../api/getOrders';

const componentId = 'annual-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const subTitle = mountPoint.querySelector('[data-subtitle]')
const panel = mountPoint.querySelector('[data-panel]')

const orders = await getOrders()

const mappedOrders = orders.map((order) => ({
  orderDate: order.orderDate,
  orderNumber: order.orderNumber
})).filter((order) => new Date(order.orderDate).getFullYear() >=2022)

subTitle.textContent = 'Year 2022'
panel.innerHTML = ''

for (const order of mappedOrders) {
  panel.appendChild(makeLiElement({ orderDate: order.orderDate, orderNumber: order.orderNumber }))
}

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li')
  li.className = 'panel-block'
  li.innerText = `${orderNumber} | ${new Date(orderDate).toLocaleDateString()}`
  return li
}
