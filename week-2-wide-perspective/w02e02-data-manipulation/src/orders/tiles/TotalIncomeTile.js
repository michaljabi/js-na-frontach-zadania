import { dataSource, registerSubject } from '../../data'

const componentId = 'total-income'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')


registerSubject(
    () => {
        content.innerHTML = '...Loading'
    },
    () => {
        content.innerHTML = dataSource.data.reduce((amount, order) => amount + order.sale, 0).toFixed(2)
    },
    () => {
        content.innerHTML = '-'
    }
)
