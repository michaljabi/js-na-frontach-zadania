import { CastleError } from '../utils/errors';
import { Dungeon } from './Dungeon';
import { Person } from './Person';

export class Castle {
  constructor(private dungeon: Dungeon) {}

  gotoTheDungeon(daredevil: Person) {
    // #RQ1: peasant cannot be at the Castle !
    if (daredevil.title === 'peasant') {
      throw new CastleError(daredevil, 'peasant cannot be at the Castle !')
    }
    this.dungeon.enter(daredevil);
  }
}
