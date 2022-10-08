"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const rxjs_1 = require("rxjs");
class Orders {
    constructor(orders) {
        this._source = new rxjs_1.BehaviorSubject([]);
        this._source.next(orders);
    }
    getAll() {
        return this._source.asObservable();
    }
    update(value) {
        this._source.next(value);
    }
}
exports.Orders = Orders;
