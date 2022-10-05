import {OrderType} from "../../orderType";

const componentId = 'total-income'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint && mountPoint.querySelector('[data-content]')


export const totalOrdesValue = (orderData : OrderType[]) => {
    if(!content)    return
    content.innerHTML =  orderData.map(order =>  {
        return Number(order.sale)
    }).reduce((sum, val) => sum + val, 0).toFixed(2).toString()
}

