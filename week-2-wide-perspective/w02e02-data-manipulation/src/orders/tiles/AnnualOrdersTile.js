import { dataSource } from "../../data.js"

const componentId = 'annual-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const subTitle = mountPoint.querySelector('[data-subtitle]')
const panel = mountPoint.querySelector('[data-panel]')

subTitle.textContent = 'Year ____'
panel.innerHTML = '...Loading'

function makeLiElement({ orderDate, orderNumber }) {
  const li = document.createElement('li')
  li.className = 'panel-block'
  li.innerText = `${orderNumber} | ${new Date(orderDate).toLocaleString()}`
  return li
}

dataSource
    .then(data => {
      panel.innerHTML = ''
      const sortedData = data
          .map(order => ({ ...order, orderDate: new Date(order.orderDate) }))
          .sort((prevOrder, nextOrder) => nextOrder.orderDate.getTime() - prevOrder.orderDate.getTime())
      const year = sortedData[0].orderDate.getFullYear()

      subTitle.textContent = `Year ${year}`

      sortedData
          .filter(order => order.orderDate.getFullYear() === year)
          .forEach(({ orderDate, orderNumber }) => {
        panel.appendChild(makeLiElement({ orderDate, orderNumber }))
      })
    })
    .catch(() => {
      panel.innerHTML = '-';
    })

