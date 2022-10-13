export const TotalIncomeTile = (ordersService) => {
  const componentId = 'total-income'
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
  const content = mountPoint.querySelector('[data-content]')

  ordersService.getOrders().subscribe((order) => {
    content.innerHTML = String(order.reduce((curr, acc) => curr + acc.sale, 0).toFixed(2))
  })
}