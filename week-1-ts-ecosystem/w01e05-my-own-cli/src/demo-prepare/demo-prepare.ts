import chalk from 'chalk';
import { chooseAction } from './actions/chooseAction';
import { ACTIONS } from './actions/consts';
import { showProductsTableAction } from './actions/showProductsTableAction';
import { autoGenerateProductsAction } from './actions/autoGenerateProductsAction';
import { removeProductAction } from './actions/removeProductAction';

console.log(chalk.black.bgCyan('##### Aplikacja do handlu #####'));
let isEnd = false;

while (!isEnd) {
  const action = await chooseAction(() => {
    isEnd = true;
  });

  switch (action) {
    case ACTIONS.autogenerateProducts: {
      await autoGenerateProductsAction();
      break;
    }
    case ACTIONS.showProducts: {
      await showProductsTableAction();
      break;
    }
    case ACTIONS.removeProduct: {
      await removeProductAction();
      break;
    }
    case ACTIONS.end:
    default: {
      break;
    }
  }
}

// {
//   type: 'toggle',
//   name: 'autogenerateValues',
//   message: 'Czy wygenerować produkty z danymi fikcyjnymi?',
//   active: 'Tak',
//   inactive: 'Nie',
// },
// {
//   type: 'select',
//   name: 'productType',
//   message: 'Jakie produkty chcesz dodać?',
//   choices: [
//     { title: 'Kup teraz', value: PRODUCT_TYPE.buyNow },
//     { title: 'Za darmo', value: PRODUCT_TYPE.free },
//     { title: 'Aukcja', value: PRODUCT_TYPE.auction },
//   ],
// },
