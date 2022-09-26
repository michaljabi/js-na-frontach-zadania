import { Data } from '../demo-prepare/actions/utils';
import { Cart } from 'w01e03-object-oriented-structure/src/models/cart/Cart';
import { ProductAuction } from 'w01e03-object-oriented-structure/src/models/product/ProductAuction';
import prompts from 'prompts';
import chalk from 'chalk';
import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';
import Table from 'cli-table';
import { ProductBuyNow } from 'w01e03-object-oriented-structure/src/models/product/ProductBuyNow';
import { ProductFree } from 'w01e03-object-oriented-structure/src/models/product/ProductFree';

console.log(chalk.blue('Aplikacja do handlu'));

let isEnd = false;

enum ACTIONS {
  showAuctionCart = 'showAuctionCart',
  showBuyNowCart = 'showBuyNowCart',
  showFreeCart = 'showFreeCart',
  end = 'end',
}

const showCart = (
  cart: Cart<ProductAuction | ProductBuyNow | ProductFree>
): void => {
  const head = ['ID', 'Nazwa', 'Ilość'];
  const items = cart.getItems();

  if (!(items[0] instanceof ProductFree)) {
    head.splice(-1, 0, 'Cena');
  }

  const rows = items.map((item) => {
    const values = [`${item.id}`, `${item.name}`, `${item.getAmount()}`];

    if (item instanceof ProductFree) {
      return values;
    }

    values.splice(-1, 0, `${item.getPrice()}`);
    return values;
  });
  const table = new Table({ head, rows });

  console.log(table.toString());
  console.log(
    chalk.yellow(`Ilosć produktów w koszyku: ${cart.getNumberOfItems()}`)
  );
  console.log(chalk.green(`Suma: ${cart.getTotalPrice()}`));
};

while (!isEnd) {
  const { action } = await prompts({
    type: 'select',
    name: 'action',
    message: 'Wybierz koszyk',
    choices: [
      { title: '1. Pokaż koszyk: aukcja', value: ACTIONS.showAuctionCart },
      { title: '2. Pokaż koszyk: kup teraz', value: ACTIONS.showBuyNowCart },
      { title: '3. Pokaż koszyk: za darmo', value: ACTIONS.showFreeCart },
      { title: '4. Zakoncz', value: ACTIONS.end },
    ],
  });

  switch (action) {
    case ACTIONS.showAuctionCart: {
      const auctionItems = Data.read()[PRODUCT_TYPE.auction];
      const cartAuction = new Cart<ProductAuction>();

      auctionItems.forEach(({ name, amount, price }) => {
        cartAuction.addItem(new ProductAuction(name, price as number, amount));
      });

      showCart(cartAuction);
      break;
    }
    case ACTIONS.showBuyNowCart: {
      const buyNowItems = Data.read()[PRODUCT_TYPE.buyNow];
      const cartBuyNow = new Cart<ProductBuyNow>();

      buyNowItems.forEach(({ name, amount, price }) => {
        cartBuyNow.addItem(new ProductBuyNow(name, price as number, amount));
      });

      showCart(cartBuyNow);
      break;
    }
    case ACTIONS.showFreeCart: {
      const freeItems = Data.read()[PRODUCT_TYPE.free];
      const cartFree = new Cart<ProductFree>();

      freeItems.forEach(({ name, amount }) => {
        cartFree.addItem(new ProductFree(name, amount));
      });

      showCart(cartFree);
      break;
    }
    case ACTIONS.end:
    default: {
      isEnd = true;
      break;
    }
  }
}
