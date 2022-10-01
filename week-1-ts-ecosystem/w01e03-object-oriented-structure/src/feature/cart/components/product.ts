interface Product {
  id: number;
  amount: number;
  name: string;
  price?: number;
  type: 'Auction' | 'Buy Now' | 'Free';
}

class Product {
  constructor(id: number, name: string, price: number, amount: number, type: 'Auction' | 'Buy Now' | 'Free') {
    this.id = id;
    this.amount = amount;
    this.name = name;
    this.type = type;
    if (type !== 'Free') {
      this.price = price;
    }
  }
}

export { Product };
