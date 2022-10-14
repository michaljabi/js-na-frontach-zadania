import { Person, PersonTitle } from './Person';
import { InvalidSaviorError, PersonNotAllowedError } from './Error';

class Underground {
  private static readonly INITIAL_NO_OF_BARRICADES = 3;
  private noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES;

  constructor(private readonly prisoner: Person) {}

  enter(person: Person): void {
    if (person.title === PersonTitle.king) {
      throw new PersonNotAllowedError({
        place: this,
        person
      });
    }

    person.shoutTheName();
    this.saveThePrisoner(person);
  }

  private saveThePrisoner(person: Person): void {
    if (person.title !== PersonTitle.knight) {
      this.addBarricade();
      throw new InvalidSaviorError(person);
    } else {
      this.removeBarricade();
    }

    if (this.hasNoBarricades()) {
      this.prisoner.sayThanks();
    }
  }

  // Clean state:
  initTheBarricades(): void {
    this.noOfBarricades = Underground.INITIAL_NO_OF_BARRICADES;
  }

  private addBarricade(): void {
    this.noOfBarricades += 1;
  }

  private removeBarricade(): void {
    this.noOfBarricades -= 1;
  }

  private hasNoBarricades(): boolean {
    return this.noOfBarricades === 0;
  }

  toString(): string {
    return 'underground';
  }
}

export { Underground };
