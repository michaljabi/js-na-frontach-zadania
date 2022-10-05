const componentId = 'total-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint && mountPoint.querySelector('[data-content]')

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData

export  const totalOrdersLength = (ordersLength: number) => {
    if(!content) return
    content.innerHTML = String(ordersLength)
}

