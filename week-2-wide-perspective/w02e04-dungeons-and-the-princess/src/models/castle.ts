import { Dungeon } from "./dungeon";
import { Person } from "./person";

export class Castle {
  constructor(private dungeon: Dungeon) {
  }

  gotoTheDungeon(daredevil: Person) {
    // #RQ1: peasant cannot be at the Castle !
    if (daredevil.title === "peasant") {
      throw new Error("Peasant cannot be at the Castle!");
    }

    this.dungeon.enter(daredevil);
  }
}