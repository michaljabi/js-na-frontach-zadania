
// import './orders/tiles/BestSaleTile.ts'
// import './orders/tiles/TotalOrdersTile.ts'
// import './orders/tiles/TotalIncomeTile.ts'
// import './orders/tiles/AnnualOrdersTile.ts'
import {appendDataToView} from "./orders/tiles/AnnualOrdersTile";
import  {OrderType} from "./orderType"
import {highestSoldOrder} from "./orders/tiles/BestSaleTile";
import {totalOrdesValue} from "./orders/tiles/TotalIncomeTile";
const getOrdersData = async () => {
    try {
        const ORDER_URL = `http://127.0.0.1:3000/orders`;
        const ordersData: OrderType[] = await fetch(ORDER_URL).then((res)=> res.json())
        const onlyOrderSale = ordersData.map((order)=> order.sale)
        return {onlyOrderSale,ordersData }
    } catch (error) {
        console.log("Error",error)
    }

}


const showOrdersData = async () => {
    const ordersResponse = await getOrdersData()
    if(!ordersResponse) return
    const {onlyOrderSale, ordersData} = ordersResponse
    appendDataToView(ordersData)
    highestSoldOrder(onlyOrderSale)
    totalOrdesValue(ordersData)
}



showOrdersData()
