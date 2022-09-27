// import { v4 as uuidv4 } from 'uuid';
const uuid = require('uuid');
export type ProductType =  "Kup Teraz"| "Aukcja"| "Oddam Za Darmo"
export class Product {
    price: number;
    title: string
    id:number|string;
    type: ProductType
    quantity: number
    constructor(title: string, price: number,quantity:number ,type:ProductType, id?:number){
        this.title = title;
        this.price = price
        this.id = id ?? uuid.v4()
        this.type = type
        this.quantity = quantity

    }
    
    
    
}