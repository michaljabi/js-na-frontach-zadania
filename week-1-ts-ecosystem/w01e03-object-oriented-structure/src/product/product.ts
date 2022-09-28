import {ProductId, ProductProperties} from "./models/product-properties.model";
const cuid = require('cuid');

export abstract class Product {
    private readonly _id: ProductId;
    private readonly _name: string;
    protected _price: number;
    private _amount: number;

    protected constructor({name, amount, price}: ProductProperties) {
        this._name = name;
        this._amount = amount;
        this._price = price ?? 0;
        this._id = cuid();
    }

    get id(): ProductId {
        return this._id;
    }

    get amount(): number {
        return this._amount;
    }

    get price(): number {
        return this._price;
    }

    increaseAmount(increment: number) {
        this._amount +=increment;
    }

    decreaseAmount(decrement: number) {
        decrement > this._amount ? this._amount = 0 : this._amount -=decrement;
    }
}