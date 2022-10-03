import { root } from './shop/root.component'

const $app = document.querySelector('#app')

    if (!$app) {
        throw new ReferenceError("App compomonent not found");
      }

$app.append(root())
