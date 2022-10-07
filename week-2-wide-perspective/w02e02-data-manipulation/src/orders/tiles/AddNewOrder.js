import { addOrder } from "../../services/http.service.js";
import { generateFakeOrderData } from "../../helpers/orders.helpers.js";
import { Observer} from "../../observers/ordersObserver.js"
const addNewOrderButton = document.querySelector('#add-new-order-button')



addNewOrderButton.addEventListener('click', () => {
    const newOrder = generateFakeOrderData()
    addOrder(newOrder)
})

