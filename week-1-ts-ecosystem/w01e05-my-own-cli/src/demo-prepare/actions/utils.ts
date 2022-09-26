import { DataCollection } from './types';
import fs from 'fs';
import path from 'path';

export const Data = {
  read: (): DataCollection => {
    const rawData = fs.readFileSync(
      path.resolve(process.cwd(), 'persistent-data/cart-items.json'),
      'utf-8'
    );

    return JSON.parse(rawData);
  },
  write: (data: DataCollection): void => {
    fs.writeFileSync(
      path.resolve(process.cwd(), 'persistent-data/cart-items.json'),
      JSON.stringify(data)
    );
  },
};
