import { bestSale } from "../../context/fake.context.js"
const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna pochodzić z kolekcji ordersFakeData
content.innerHTML = bestSale
