
// import './orders/tiles/BestSaleTile.ts'
// import './orders/tiles/TotalOrdersTile.js'
// import './orders/tiles/TotalIncomeTile.js'
// import './orders/tiles/AnnualOrdersTile.ts'
import {appendDataToView} from "./orders/tiles/AnnualOrdersTile";
import  {OrderType} from "./orderType"
const getOrdersData = async () => {
    try {
        const ORDER_URL = `http://127.0.0.1:3000/orders`;
        const response: OrderType[] = await fetch(ORDER_URL).then((res)=> res.json())
        return response
    } catch (error) {
        console.log("Error",error)
    }

}


const lets_play_the_game = async () => {
    const orderData = await getOrdersData()
    if(!orderData) return
    appendDataToView(orderData)
}



lets_play_the_game()
