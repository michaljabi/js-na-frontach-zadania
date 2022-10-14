import { Castle } from './Castle';
import { Dungeon } from './Dungeon';
import { Underground } from './Underground';
import { Person } from './Person';

class PersonNotAllowedError extends Error {
  constructor({
    place,
    person
  }: {
    place: Castle | Dungeon | Underground;
    person: Person;
  }) {
    super();
    this.message = `${
      person.title
    } is not allowed to be in the ${place.toString()}`;
  }
}

class InvalidSaviorError extends Error {
  constructor(person: Person) {
    super();
    this.message = `${person.title} cannot attempt to save princess`;
  }
}

export { PersonNotAllowedError, InvalidSaviorError };
