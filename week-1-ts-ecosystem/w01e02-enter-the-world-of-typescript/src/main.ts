import { root } from './shop/root.component'

const $app: HTMLElement = document.querySelector('#app') as HTMLElement

$app.append(root())
