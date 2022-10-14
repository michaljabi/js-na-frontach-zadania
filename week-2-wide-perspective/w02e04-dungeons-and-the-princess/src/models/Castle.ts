import { Dungeon } from './Dungeon';
import { Person, PersonTitle } from './Person';
import { PersonNotAllowedError } from './Error';

class Castle {
  constructor(private readonly dungeon: Dungeon) {}

  gotoTheDungeon(person: Person): void {
    if (person.title === PersonTitle.peasant) {
      throw new PersonNotAllowedError({
        place: this,
        person
      });
    }

    this.dungeon.enter(person);
  }

  toString(): string {
    return 'castle';
  }
}

export { Castle };
