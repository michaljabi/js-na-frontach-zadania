enum PERSON_TITLE {
  princess = 'princess',
  king = 'king',
  queen = 'queen',
  knight = 'knight',
  peasant = 'peasant'
}

class Person {
  constructor(
    private readonly name: string,
    public readonly title: PERSON_TITLE
  ) {}

  shoutTheName(): void {
    console.log(`I'am ${this.name}! The ${this.title}.`);
  }

  sayThanks(): void {
    console.log(`${this.name}: Thank you...`);
  }
}

export { Person, PERSON_TITLE };
