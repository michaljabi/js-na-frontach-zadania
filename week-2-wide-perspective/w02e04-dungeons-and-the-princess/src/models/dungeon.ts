import { Person } from "./person";
import { Underground } from "./underground";

export class Dungeon {
  constructor(private underground: Underground) {
  }

  enter(p: Person) {
    // #RQ2: queen cannot enter the dungeon!
    if (p.title === "queen") {
      console.error("Queen cannot enter the dungeon!");
      return;
    }

    this.underground.enter(p);
  }
}
