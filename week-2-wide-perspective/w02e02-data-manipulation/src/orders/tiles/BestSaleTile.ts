import {OrderType} from "../../orderType";

const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint && mountPoint.querySelector('[data-content]')



export const  mostSaleOrder = (orderType: OrderType ) => {

}
// Ta wartość powinna pochodzić z kolekcji ordersFakeData
content.innerHTML = '5522.0'
