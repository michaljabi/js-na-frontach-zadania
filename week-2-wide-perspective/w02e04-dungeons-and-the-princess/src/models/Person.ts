enum PersonTitle {
  princess = 'princess',
  king = 'king',
  queen = 'queen',
  knight = 'knight',
  peasant = 'peasant'
}

class Person {
  constructor(
    private readonly name: string,
    public readonly title: PersonTitle
  ) {}

  shoutTheName(): void {
    console.log(`I'am ${this.name}! The ${this.title}.`);
  }

  sayThanks(): void {
    console.log(`${this.name}: Thank you...`);
  }
}

export { Person, PersonTitle };
