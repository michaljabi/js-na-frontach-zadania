type Currency = 'PLN';
type Unit = 'kg';

interface Price {
  value: number;
  currency: Currency;
}

/**
 * Model for shop item.
 */
interface Item {
  name: string;
  amount: number;
  unit: Unit;
  price: Price;
}

export default Item;
