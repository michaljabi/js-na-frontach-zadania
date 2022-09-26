import { v4 } from 'uuid';
import { Product } from './Product';
import { CartItemProductSnapshotType, SalesPolicyType } from './CartItem.types';

class CartItem {
  private _quantity: number;
  private _salesPolicy: SalesPolicyType = {};
  private _productSnapshot: CartItemProductSnapshotType;

  constructor(product: Product) {
    this._quantity = 1;
    this._productSnapshot = {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }

  get productSnapshot(): CartItemProductSnapshotType {
    return this._productSnapshot;
  }

  get id() {
    return this.productSnapshot.id;
  }

  get quantity() {
    return this._quantity;
  }

  get price(): number | null {
    if (this.productSnapshot.price) {
      return this.quantity * this.productSnapshot.price;
    }

    return null;
  }

  incrementQuantity(): void {
    this._quantity++;
  }

  decrementQuantity(): void {
    if (this._quantity >= 1) {
      this._quantity--;
    }
  }

  update(data: SalesPolicyType) {
    this._salesPolicy = {
      ...this._salesPolicy,
      ...data,
    };
  }
}

export { CartItem };
