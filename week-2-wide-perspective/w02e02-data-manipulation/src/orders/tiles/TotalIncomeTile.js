import { dataSource } from '../../data'

const componentId = 'total-income'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

dataSource
    .then(data => {
        content.innerHTML = data.reduce((amount, order) => amount + order.sale, 0).toFixed(2)
    })
    .catch(() => {
        content.innerHTML = '-'
    })

content.innerHTML = '..Loading'
