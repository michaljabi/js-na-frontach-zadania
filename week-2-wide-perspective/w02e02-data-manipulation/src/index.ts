import { Order, Orders } from './orders/order.js'
import { ordersFakeData } from './orders/orders.fake-data.js';
import { setAnnualOrdersTiles } from './orders/tiles/AnnualOrdersTile.js';
import { setBestSalesTiles } from './orders/tiles/BestSaleTile.js';
import { setTotalIncomeTiles } from './orders/tiles/TotalIncomeTile.js';
import { setTotalOrdersTiles } from './orders/tiles/TotalOrdersTile.js';


function renderOrdersView(orders: Order[]): void {
    setAnnualOrdersTiles(orders);
    setBestSalesTiles(orders);
    setTotalIncomeTiles(orders);
    setTotalOrdersTiles(orders);
}

const orders = new Orders(ordersFakeData);


orders.getAll().subscribe(orders => {
    renderOrdersView(orders);
})


const newOrderButton = document?.querySelector('#new-order');

if(newOrderButton) {
    newOrderButton.addEventListener('click', () => {
        orders.add({
            id: 'bf4446d-c697-4539-bade-1d5098ebb041',
            orderNumber: '09/2022',
            orderDate: '2022-09-22T11:11:55.436Z',
            sale: 6591.67,
        })
    })
}
