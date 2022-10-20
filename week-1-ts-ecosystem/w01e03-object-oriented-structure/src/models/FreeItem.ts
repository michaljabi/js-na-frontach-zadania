import { CartItem } from './CartItem';

export class FreeItem extends CartItem {
  constructor(name: string, amount: number) {
    super(name, amount, 0);
  }
}
