type Title = 'princess' | 'king' | 'queen' | 'knight' | 'peasant'


export class Person {
    constructor(private name: string, public readonly title: Title) {}

    shoutTheName() {
        console.log(`I'am ${this.name}! The ${this.title}.`)
    }

    sayThanks() {
        console.log(`${this.name}: Thank you...`)
    }
}