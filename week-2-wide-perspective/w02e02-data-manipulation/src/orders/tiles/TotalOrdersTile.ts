import { Order } from '../order';

export function setTotalOrdersTiles(orders: Order[]): void {
    const componentId = 'total-orders'
    const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
    const content = mountPoint?.querySelector('[data-content]')

    // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData    
    if(content) {
        content.innerHTML = String(orders.length)
    }
}