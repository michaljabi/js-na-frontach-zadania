import { dataSource } from '../../data.js'

const componentId = 'generate-order-button'

document.querySelector(`#${componentId}`).addEventListener('click', async e => {
   await dataSource.post(parseFloat((Math.random() * 100000 /100).toFixed(2)))
})
