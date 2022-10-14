import { Dungeon } from './Dungeon';
import { Person, PERSON_TITLE } from './Person';
import { PersonNotAllowedError } from './Error';

class Castle {
  constructor(private readonly dungeon: Dungeon) {}

  gotoTheDungeon(person: Person): void {
    if (person.title === PERSON_TITLE.peasant) {
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
