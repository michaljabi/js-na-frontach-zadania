"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTotalOrdersTiles = void 0;
function setTotalOrdersTiles(orders) {
    const componentId = 'total-orders';
    const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
    const content = mountPoint?.querySelector('[data-content]');
    // Ta wartość powinna być wykalkulowana na podstawie kolekcji ordersFakeData    
    if (content) {
        content.innerHTML = String(orders.length);
    }
}
exports.setTotalOrdersTiles = setTotalOrdersTiles;
