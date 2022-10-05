import {appendDataToView} from "./orders/tiles/AnnualOrdersTile";
import  {OrderType} from "./orderType"
import {highestSoldOrder} from "./orders/tiles/BestSaleTile";
import {totalOrdesValue} from "./orders/tiles/TotalIncomeTile";
import {totalOrdersLength} from "./orders/tiles/TotalOrdersTile";

const getOrdersData = async () => {
    try {
        const ORDER_URL = `http://127.0.0.1:3000/orders`;
        const ordersData: OrderType[] = await fetch(ORDER_URL).then((res)=> res.json())
        return ordersData
    } catch (error) {
        console.log("Error",error)
    }

}
const showOrdersData = async () => {
    const ordersData = await getOrdersData()
    if(!ordersData) return
    appendDataToView(ordersData)
    highestSoldOrder(ordersData)
    totalOrdesValue(ordersData)
    totalOrdersLength(ordersData.length)
}

showOrdersData().catch((error) =>  {
    throw new Error(error)
})
