import { divWithId } from "./framework/dom-creators";
import { root } from "./shop/root.component";

const $app = document.querySelector("#app") ?? divWithId("#app");

$app.append(root());
