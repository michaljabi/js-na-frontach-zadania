import { dataSource, registerSubject } from '../../data.js'

const componentId = 'total-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')



registerSubject(
    () => {
        content.innerHTML = '...Loading'
    },
    () => {
        content.innerHTML = `${dataSource.data.length}`
    },
    () => {
        content.innerHTML = '-'
    }
)
