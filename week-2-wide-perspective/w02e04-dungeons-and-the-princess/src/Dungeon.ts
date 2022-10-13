import { Underground } from './Underground';
import { Person } from './Person';

export class Dungeon {
  constructor(private underground: Underground) {}

  enter(p: Person) {
    if (p.title === "queen") {
      throw new Error("Queen cannot enter the dungeon!")
    } else {
      this.underground.enter(p)
    }
  }
}