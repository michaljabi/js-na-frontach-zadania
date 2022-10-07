// import { totalIncome } from "../../context/fake.context.js"

import {DataTile} from "../../observers/ordersObserver.js"

const componentId = 'total-income'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint.querySelector('[data-content]')

// Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData

export const totalIncomeObserver = new DataTile(content,"totalIncome")
