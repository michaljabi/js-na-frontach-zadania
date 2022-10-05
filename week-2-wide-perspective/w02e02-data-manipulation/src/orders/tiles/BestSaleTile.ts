import {OrderType} from "../../orderType";

const componentId = 'best-sale'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const content = mountPoint && mountPoint.querySelector('[data-content]')



export const  highestSoldOrder = (orderType: string[] ) => {
    if(!content) return
    content.innerHTML = orderType.sort((a,b) => Number(b)  - Number(a))[0]
}
