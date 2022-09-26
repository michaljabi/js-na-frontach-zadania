class Product {
    price: number;
    title: string
    id:number;
    
    constructor(title: string, price: number){
        this.title = title;
        this.price = price;

        this.id = parseInt(new Date().getTime().toString().slice(-8,-1))
        
    }
    
    
    
}