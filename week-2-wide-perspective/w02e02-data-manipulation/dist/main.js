"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_js_1 = require("./orders/order.js");
const orders_fake_data_js_1 = require("./orders/orders.fake-data.js");
const AnnualOrdersTile_js_1 = require("./orders/tiles/AnnualOrdersTile.js");
const BestSaleTile_js_1 = require("./orders/tiles/BestSaleTile.js");
const TotalIncomeTile_js_1 = require("./orders/tiles/TotalIncomeTile.js");
const TotalOrdersTile_js_1 = require("./orders/tiles/TotalOrdersTile.js");
function renderOrdersView(orders) {
    (0, AnnualOrdersTile_js_1.setAnnualOrdersTiles)(orders);
    (0, BestSaleTile_js_1.setBestSalesTiles)(orders);
    (0, TotalIncomeTile_js_1.setTotalIncomeTiles)(orders);
    (0, TotalOrdersTile_js_1.setTotalOrdersTiles)(orders);
}
const orders = new order_js_1.Orders(orders_fake_data_js_1.ordersFakeData);
orders.getAll().subscribe(orders => {
    renderOrdersView(orders);
});
