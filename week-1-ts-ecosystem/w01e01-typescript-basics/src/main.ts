import { User } from "./models/User";
import * as utils from "./utils/utils";
import { displayTextOnPage } from "./utils/dom-utils";

const user: User = {
  name: "Andy",
  age: 30,
  email: "andy@mail-me-tommorow.com",
  address: {
    street: "Strange Alley",
    no: 23,
  },
};

const isAdult = utils.hasGivenAge(18);

displayTextOnPage(utils.prepareText(user, isAdult), ".container");
