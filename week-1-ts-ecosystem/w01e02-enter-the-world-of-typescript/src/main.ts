import { root } from './shop/root.component';

const $app: HTMLElement | null = document.querySelector('#app');

$app?.append(root());
