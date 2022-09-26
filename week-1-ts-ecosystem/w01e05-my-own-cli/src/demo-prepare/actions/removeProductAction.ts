import prompts from 'prompts';
import { Data } from './utils';
import { DataItem } from './types';
import chalk from 'chalk';
import { PRODUCT_TYPE } from 'w01e03-object-oriented-structure/src/models/product/Product';

export const removeProductAction = async (): Promise<void> => {
  const { productId } = await prompts({
    name: 'productId',
    type: 'text',
    message: 'Podaj ID produktu, który usunąć',
  });
  const data = Data.read();
  const items = Object.entries(data).reduce(
    (allItems, [type, items]) => [
      ...allItems,
      ...items.map((item) => ({ ...item, type: type as PRODUCT_TYPE })),
    ],
    [] as (DataItem & { type: PRODUCT_TYPE })[]
  );

  const productToRemove = items.find((item) => item.id === productId);

  if (!productToRemove) {
    return console.log(chalk.red('Produkt o podanym ID nie istnieje'));
  }

  data[productToRemove.type] = data[productToRemove.type].filter(
    (item: DataItem) => item.id !== productId
  );

  Data.write(data);
  console.log(chalk.green(`Usunięto produkt "${productToRemove.name}"`));
};
