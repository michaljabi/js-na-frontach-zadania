import { Underground } from './Underground';
import { Person, PersonTitle } from './Person';
import { PersonNotAllowedError } from './Error';

class Dungeon {
  constructor(private readonly underground: Underground) {}

  enter(person: Person): void {
    if (person.title === PersonTitle.queen) {
      throw new PersonNotAllowedError({
        place: this,
        person
      });
    }

    this.underground.enter(person);
  }

  toString(): string {
    return 'dungeon';
  }
}

export { Dungeon };
