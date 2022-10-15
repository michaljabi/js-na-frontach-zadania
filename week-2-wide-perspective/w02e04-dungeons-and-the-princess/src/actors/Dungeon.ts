import { DungeonError } from '../utils/errors';
import { Person } from './Person';
import { Underground } from './Underground';


export class Dungeon {
  constructor(private underground: Underground) {}

  enter(p: Person) {
    // #RQ2: queen cannot enter the dungeon!
    if (p.title === 'queen') {
      throw new DungeonError(p, 'queen cannot enter the dungeon!')
    }
    this.underground.enter(p);
  }
}
