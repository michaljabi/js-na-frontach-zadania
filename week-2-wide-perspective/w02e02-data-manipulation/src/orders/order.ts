import { BehaviorSubject, Observable } from "rxjs";

export type Order = {
    id: string,
    orderNumber: string,
    orderDate: string,
    sale: number
}

export type OrderListItem = {
    orderDate: string,
    orderNumber: string
}

export class Orders {
    private _source = new BehaviorSubject<Order[]>([])

    constructor(orders: Order[]){
        this._source.next(orders);
    }

    getAll(): Observable<Order[]> {
        return this._source.asObservable();
    }

    add(value: Order): void {
        this._source.next([...this._source.value, value]);
    }
}
