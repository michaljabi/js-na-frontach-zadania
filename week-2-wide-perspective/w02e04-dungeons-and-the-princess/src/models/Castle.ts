import { Person } from "./Person";
import { Dungeon } from "./Dungeon";

export class Castle {
  constructor(private dungeon: Dungeon) {}

  gotoTheDungeon(daredevil: Person) {
    // #RQ1: peasant cannot be at the Castle !
    try {
      if (daredevil.title === "peasant") {
        throw new Error(" peasant cannot be at the Castle !");
      }

      this.dungeon.enter(daredevil);
    } catch (error) {
      console.log(error);
    }
  }
}
