
export type DreamTeam = [Person, Person, Person];
export type Title = 'princess' | 'king' | 'queen' | 'knight' | 'peasant'

export class Person {
    constructor(private name: string, public readonly title: Title) { }

    shoutTheName(): void {
        console.log(`I'am ${this.name}! The ${this.title}.`)
    }

    sayThanks(): void {
        console.log(`${this.name}: Thank you...`)
    }
}