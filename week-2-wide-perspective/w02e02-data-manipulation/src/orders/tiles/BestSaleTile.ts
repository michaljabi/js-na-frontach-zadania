import { Order } from '../order';

export function setBestSalesTiles(orders: Order[]): void {
    const componentId = 'best-sale'
    const mountPoint = document.querySelector(`[data-tile="${componentId}"]`)
    const content = mountPoint?.querySelector('[data-content]')

    // Ta wartość powinna pochodzić z kolekcji ordersFakeData
    if(content) {
        content.innerHTML = String(orders.sort((a,b) => b.sale - a.sale)[0].sale)
    }
}