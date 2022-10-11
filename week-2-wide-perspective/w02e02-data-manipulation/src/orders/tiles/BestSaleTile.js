import { dataSource, registerSubject } from '../../data.js'

const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')


registerSubject(
    () => {
        content.innerHTML = '...Loading'
    },
    () => {
        const bestSaleOrder = dataSource.data.sort((prevOrder, nextOrder) => nextOrder.sale - prevOrder.sale)[0]
        content.innerHTML = bestSaleOrder.sale.toFixed(2);
    },
    () => {
        content.innerHTML = '-'
    }
)
