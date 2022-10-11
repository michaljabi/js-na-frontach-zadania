import { dataSource } from '../../data.js'

const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

dataSource
    .then(data => {
        const bestSaleOrder = data.sort((prevOrder, nextOrder) => nextOrder.sale - prevOrder.sale)[0]
        content.innerHTML = bestSaleOrder.sale.toFixed(2);
    })
    .catch(() => {
        content.innerHTML = '-';
    })

content.innerHTML = '...Loading';
