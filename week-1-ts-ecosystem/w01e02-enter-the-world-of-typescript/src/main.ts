import { root } from '@/shop/root.component';

const $app = document.querySelector('#app');

if (!$app) throw new Error('No app element found!');

$app.append(root());
