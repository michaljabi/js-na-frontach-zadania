import { Underground } from "./Underground";
import { Person } from "./Person";
export class Dungeon {
  constructor(private underground: Underground) {}

  enter(p: Person) {
    // #RQ2: queen cannot enter the dungeon!

    try {
      if (p.title === "queen") {
        throw new Error(" queen cannot enter the dungeon!");
      }
      this.underground.enter(p);
    } catch (error) {
      console.log(error);
    }
  }
}
