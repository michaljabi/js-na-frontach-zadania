"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBestSalesTiles = void 0;
function setBestSalesTiles(orders) {
    const componentId = 'best-sale';
    const mountPoint = document.querySelector(`[data-tile="${componentId}"]`);
    const content = mountPoint?.querySelector('[data-content]');
    // Ta wartość powinna pochodzić z kolekcji ordersFakeData
    if (content) {
        content.innerHTML = String(orders.sort((a, b) => b.sale - a.sale)[0].sale);
    }
}
exports.setBestSalesTiles = setBestSalesTiles;
