import { errorHandler } from '../utils/errorHandler';
import { CastleError, MissionFailedError } from '../utils/errors';
import { Dungeon } from './Dungeon';
import { Person } from './Person';

export class Castle {
  constructor(private dungeon: Dungeon) {}

  gotoTheDungeon(daredevil: Person) {
    try {
      // #RQ1: peasant cannot be at the Castle !
      if (daredevil.title === 'peasant') {
        throw new CastleError(daredevil, 'peasant cannot be at the Castle !');
      }
      this.dungeon.enter(daredevil);
    } catch (err) {
      if (err instanceof MissionFailedError) {
        errorHandler(err);
      }
    }
  }
}
