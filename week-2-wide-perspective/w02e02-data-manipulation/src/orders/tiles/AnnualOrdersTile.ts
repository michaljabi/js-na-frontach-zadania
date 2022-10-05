import {OrderType} from "../../orderType";

const componentId = 'annual-orders'
const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
const subTitle = mountPoint &&  mountPoint.querySelector('[data-subtitle]')
const panel = mountPoint && mountPoint.querySelector('[data-panel]')


export const writeTitle = () => {
  if(!subTitle || !panel) return
  subTitle.innerHTML = `Latest`
   panel.innerHTML = ''
}

const getNormalDate =(yourDate:Date) =>{
  const offset = yourDate.getTimezoneOffset()
  const  hourTime = `${yourDate.getHours()}:${yourDate.getMinutes()}`
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return `${yourDate.toISOString().split('T')[0]} - ${hourTime}`
}

const  normalizationOrderData = (orderData: OrderType[]) => {
  writeTitle()
  return  orderData.map(({orderNumber,orderDate}) => {
    const orderNumberFormat = orderNumber.split("/")[0]
    const newOrderFormat = orderNumberFormat.startsWith("0") ? orderNumberFormat.replace("0","") : orderNumberFormat
    return {
      orderNumber: newOrderFormat,
      orderDate: getNormalDate(new Date(orderDate))
    }
  }).sort((a,b) => Number(b.orderNumber) - Number(a.orderNumber))

}

export function makeLiElement({ orderDate, orderNumber }: {orderDate: string, orderNumber: string}) {
  const li = document.createElement('li')
  li.className = 'panel-block'
  li.innerText = `${orderNumber} | ${orderDate}`
  return li
}

export const appendDataToView = (orderData : OrderType[]) => {
  const  newFormatDate = normalizationOrderData(orderData)
  for (const {orderDate,orderNumber} of newFormatDate) {
    panel && panel.appendChild(makeLiElement({
      orderNumber,
      orderDate
    }))
  }
}