import { Order, OrderListItem } from '../order'

export function setAnnualOrdersTiles(orders: Order[]): void {
  const componentId = 'annual-orders'
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
  const subTitle = mountPoint?.querySelector('[data-subtitle]')
  const panel = mountPoint?.querySelector('[data-panel]')
  const year = 2022;

  // Uważaj na odfiltrowanie wg. roku (2022)
  if(subTitle && panel) {
    subTitle.textContent = `Year ${year}`
    panel.innerHTML = ''
  }

  // Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
  const currentYearOrders = orders.filter(order => new Date(order.orderDate).getFullYear() === year)

  currentYearOrders.forEach(order => {
    panel?.appendChild(makeLiElement({ orderDate: order.orderDate, orderNumber: order.orderNumber }))
  })

  function makeLiElement({ orderDate, orderNumber }: OrderListItem) {
    const li = document.createElement('li')
    li.className = 'panel-block'
    // Dodaj jakieś ładne formatowanie daty!
    li.innerText = `${orderNumber} | ${new Date(orderDate).toDateString()}`
    return li
  }
}