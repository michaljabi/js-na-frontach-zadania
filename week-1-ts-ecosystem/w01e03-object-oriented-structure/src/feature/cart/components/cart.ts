import { Product } from './product';

interface Cart {
  products: Product[];
  cartType: 'Auction' | 'Buy Now' | 'Free';
}

class Cart {
  constructor(cartType: 'Auction' | 'Buy Now' | 'Free') {
    this.products = [];
    this.cartType = cartType;
  }

  private isProductExist(id: number) {
    return this.products.some((product) => product.id === id);
  }

  getAllProducts() {
    return this.products;
  }

  addProduct(id: number, name: string, price: number, amount: number, type: 'Auction' | 'Buy Now' | 'Free') {
    if (this.isProductExist(id)) {
      return console.log(`You can not add products with this same ID`);
    }
    if (this.cartType === type) {
      this.products.push(new Product(id, name, price, amount, type));
    } else {
      return console.log(`You can not add products with type ${type} to cart with type ${this.cartType}`);
    }
  }

  getProductById(id: number) {
    if (this.isProductExist(id)) {
      return this.products.filter((product) => product.id === id);
    } else {
      return console.log(`There is no product with such ID.`);
    }
  }

  updateProductById(id: number, productToUpdate: Product) {
    if (id !== productToUpdate.id) return console.log('UPDATE: ID need to be this same.');
    if (this.cartType === productToUpdate.type) {
      this.products = this.products.map((product) => (product.id === id ? productToUpdate : product));
    } else {
      return console.log(
        `You can not update products with type ${productToUpdate.type} to cart with type ${this.cartType}`
      );
    }
  }

  deleteProductById(id: number) {
    if (this.isProductExist(id)) {
      this.products = this.products.filter((product) => product.id !== id);
    } else {
      console.log(`DELETE: There is no product with this ID.`);
    }
  }

  getAmountOfProducts() {
    return this.products.reduce((accumulator, object) => {
      return accumulator + object.amount;
    }, 0);
  }

  getTotalPrice() {
    if (this.cartType === 'Free') {
      return 'FREE ITEMS';
    }
    return this.products.reduce((accumulator, object) => {
      return accumulator + object.price! * object.amount;
    }, 0);
  }
}

export { Cart };
