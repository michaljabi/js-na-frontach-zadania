import { Dungeon } from './Dungeon';
import { Person } from './Person';

export class Castle {
  constructor(private dungeon: Dungeon) {}

  gotoTheDungeon(daredevil: Person) {
    if (daredevil.title === "peasant") {
      throw new Error("Peasant cannot be at the Castle")
    } else {
      this.dungeon.enter(daredevil)
    }
  }
}