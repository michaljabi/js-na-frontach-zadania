import { addOrder, getOrders } from "../services/http.service.js";

export class Observable {
    constructor() {
        this.observers = [];

    }
    addObserver(observer) {
        this.observers.push(observer);
    }


    removeObserver(observer) {
        const removeIndex = this.observers.indexOf(observer);
        if (removeIndex !== -1) {
            this.observers = this.observers.slice(removeIndex, 1);
        }
    }


    notify(data) {
        console.log('notify')
        if (this.observers.length > 0) {
            this.observers.forEach((observer) => observer.update(data))
        }
    }
}

export class Observer {
    // Gets called by the Subject::notify method.
    update() { }
}
export class DataTile extends Observer {
    constructor(componentToUpdate, dataToDisplay) {
        super()
        this.componentToUpdate = componentToUpdate
        this.dataToDisplay = dataToDisplay
    }
    render(state) {
        this.componentToUpdate.innerHTML = state[this.dataToDisplay]
    }
    update(state) {
        this.render(state)
    }

}

export class State extends Observable {
    orders = []
    constructor() {
        super()

        // this.orders = getOrders()
        this.state = {}
    }
    calculateProperties() {
        const allAvailableOrders = this.orders
        this.state.totalOrders = allAvailableOrders.length
        this.state.totalIncome = allAvailableOrders.reduce((total, item) => total + item.sale, 0).toFixed(2)
        this.state.bestSale = allAvailableOrders.sort((a, b) => b.sale - a.sale)[0].sale
    }
    addNewOrder(order) {
        addOrder(order)
        this.updateOrders()

    }
    async updateOrders() {
        this.orders = await getOrders()
        this.calculateProperties()
        this.notify(this.state)
    }

    get() {
        return this.state
    }


}
export default { Observable, Observer, DataTile, State };

