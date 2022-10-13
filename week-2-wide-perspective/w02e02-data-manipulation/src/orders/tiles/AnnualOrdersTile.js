function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li')
  li.className = 'panel-block'
  li.innerText = `${orderNumber} | ${new Date(orderDate).toLocaleDateString()}`
  return li
}

export const AnnualOrdersTile = (ordersService) => {
  const componentId = 'annual-orders'
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
  const subTitle = mountPoint.querySelector('[data-subtitle]')
  const panel = mountPoint.querySelector('[data-panel]')

  subTitle.textContent = 'Year 2022'
  panel.innerHTML = ''

  ordersService.getOrders().subscribe((order) => {
    const mappedOrders = order.map((order) => ({
      orderDate: order.orderDate,
      orderNumber: order.orderNumber
    })).filter((order) => new Date(order.orderDate).getFullYear() >=2022)

    for (const record of mappedOrders) {
      panel.appendChild(makeLiElement({ orderDate: record.orderDate, orderNumber: record.orderNumber }))
    }
  })
}