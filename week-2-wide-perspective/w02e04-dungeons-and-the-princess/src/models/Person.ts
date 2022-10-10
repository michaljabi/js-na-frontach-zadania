import { Title } from "../interfaces/interfaces"

export class Person {
    constructor(private name: string, public readonly title: Title) {}
  
    shoutTheName() {
      console.log(`I'am ${this.name}! The ${this.title}.`)
    }
  
    sayThanks() {
      console.log(`${this.name}: Thank you...`)
    }
  }
  