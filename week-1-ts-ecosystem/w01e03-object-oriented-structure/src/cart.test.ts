import { Cart, CartItem } from './cart'

describe("Cart", () => {
  let cart: Cart;
  let product: CartItem;
  let product2: CartItem;

  beforeEach(() => {
     cart = new Cart('BUY_NOW');
     product = new CartItem("Apple", 2, 3, 'PLN', 'BUY_NOW')
     product2 = new CartItem("Phone", 1, 900, 'PLN', 'BUY_NOW')
  })

  test('should create Cart instance with type', () => {
    expect(cart).toBeTruthy();
    expect(cart.type).toBeTruthy();
  })

  test('should throw error when cart type is different than product', () => {
    cart = new Cart('AUCTION');
    expect(() => cart.add(product)).toThrowError();
  })

  test('should throw error when adding product is not CartItem instance', () => {
    const fakeProduct = {
      name: 'Windows',
      count: 1,
      price: 0,
      currency: 'PLN',
      type: 'BUY_NOW'
    }
    expect(() => cart.add(fakeProduct as CartItem)).toThrowError();
  })
  
  test('should add product to cart', () => {
    cart.add(product)
    expect(cart.getCartItemsCount()).toBe(1)
  })

  test('should return product from cart by product id', () => {
    const id = cart.add(product)
    expect(cart.get(id)).toMatchObject(product)
  })

  test('should return all products from the cart', () => {
    cart.add(product)
    cart.add(product2)

    expect(cart.getAll()).toMatchObject([product, product2]);
    expect(cart.getAll().length).toBe(2);
  })

  test('should return total products cost which are in the cart', () => {
    cart.add(product)
    cart.add(product2)

    const total = product.price*product.count + product2.price*product2.count
    expect(cart.getCartItemsSum()).toBe(total);
  })

  test('should return 0 as total cart cost if cart type is FOR_FREE', () => {
    cart = new Cart('FOR_FREE');
    product = new CartItem("Apple", 2, 0, 'PLN', 'FOR_FREE')
    product2 = new CartItem("Phone", 1, 0, 'PLN', 'FOR_FREE')
    cart.add(product)
    cart.add(product2)

    expect(cart.getCartItemsSum()).toBe(0);
  })

  test('should update product in the cart', () => {
    const id = cart.add(product)
    product.update(10);
    cart.update(product)
    expect(cart.get(id)?.count).toBe(10)
  })

  test('should delete product from the cart', () => {
    cart.add(product)
    cart.remove(product)
    expect(cart.getCartItemsCount()).toBe(0)
  })
})

