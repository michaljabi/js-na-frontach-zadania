import { dataSource } from '../../data.js'

const componentId = 'total-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

dataSource
    .then(data => {
        content.innerHTML = data.length
    })
    .catch(() => {
        content.innerHTML = '-'
    })

content.innerHTML = "...Loading"
