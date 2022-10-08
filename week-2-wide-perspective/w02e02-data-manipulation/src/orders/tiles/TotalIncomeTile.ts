import { Order } from '../order';

export function setTotalIncomeTiles(orders: Order[]): void {
    const componentId = 'total-income'
    const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
    const content = mountPoint?.querySelector('[data-content]')
    
    // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData
    if(content) {
        content.innerHTML = String(orders.reduce((a,b) => a + b.sale, 0).toFixed(2))
    }
}