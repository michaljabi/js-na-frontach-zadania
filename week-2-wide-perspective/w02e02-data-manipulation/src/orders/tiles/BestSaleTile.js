export const BestSaleTile = (ordersService) => {
  const componentId = 'best-sale'
  const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
  const content = mountPoint.querySelector('[data-content]')

  ordersService.getOrders().subscribe((order) => {
    content.innerHTML = String(Math.max(...order.map((order) => order.sale)))
  })
}
