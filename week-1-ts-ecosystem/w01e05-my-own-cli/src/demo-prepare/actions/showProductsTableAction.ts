import Table from 'cli-table';
import { Data } from './utils';
import { DataItem } from './types';
import { PRODUCT_TYPE_NAMES } from './consts';
import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';

export const showProductsTableAction = (): void => {
  const products = Data.read();
  const head = ['ID', 'Nazwa', 'Cena', 'Ilość', 'Typ'];
  const rows = Object.entries(products)
    .reduce(
      (
        values: (string | null | number)[][],
        category: [string, DataItem[]]
      ) => {
        const [categoryName, items] = category;
        const itemsValues = items.map((item) => [
          ...Object.values(item).map((value) => value),
          categoryName,
        ]);

        values.push(...itemsValues);

        return values;
      },
      []
    )
    .map(([id, name, price, amount, type]) => [
      `${id}`,
      `${name}`,
      price ? `${price}` : '-',
      `${amount}`,
      PRODUCT_TYPE_NAMES[type as PRODUCT_TYPE],
    ]);
  const table = new Table({ head, rows });

  console.log(table.toString());
};
