import { allAvailableOrders } from "../../context/fake.context.js"
const orders = allAvailableOrders
const componentId = 'annual-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const subTitle = mountPoint.querySelector('[data-subtitle]')
const panel = mountPoint.querySelector('[data-panel]')

// Uważaj na odfiltrowanie wg. roku (2022)
const yearToFilter = 2022
subTitle.textContent = `Year ${yearToFilter}`
panel.innerHTML = ''

const ordersfilteredByYear = (data, year) => {
  const filteredOrders = data.filter(({ orderDate }) => {
    const dateYear = new Date(orderDate).getFullYear()
      return year == dateYear
  })
return filteredOrders
  
}
const filteredOrdersByYear = ordersfilteredByYear(orders,2022)
// Tutaj podobnie, powinniśmy interpretować dane z: ordersFakeData
for (const { orderDate } of filteredOrdersByYear) {
  panel.appendChild(makeLiElement({ orderDate, orderNumber: '02/2022' }))
}

function makeLiElement({ orderDate, orderNumber }) {
  const formattedDate = new Date(orderDate).toLocaleDateString()

  const li = document.createElement('li')
  li.className = 'panel-block'
  // Dodaj jakieś ładne formatowanie daty!
  li.innerText = `${orderNumber} | ${formattedDate}`
  return li
}
