export const TotalOrdersTile = (ordersService) => {
  const componentId = 'total-orders'
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
  const content = mountPoint.querySelector('[data-content]')

  ordersService.getOrders().subscribe((order) => {
    content.innerHTML = order.length
  })
}
