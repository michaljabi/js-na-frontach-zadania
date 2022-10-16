import { describe, it, expect, beforeAll, beforeEach, vi } from "vitest";
import { Castle } from './model/castle'
import { Dungeon } from './model/dungeon'
import { Person } from './model/person'
import { Underground } from './model/underground'
import { createRescueMission } from "./helper/mission";

describe('Recuse mission', () => {
    let princess: Person;
    let hades: Underground;
    let cave: Dungeon;
    let kingdom: Castle;

    let knightJohn: Person
    let knightBrienne: Person
    let kingFrancis: Person
    let peasantMathew: Person
    let queenBianca: Person
    let knightBruce: Person

    beforeEach(() => {
        princess = new Person('Fiona', 'princess')
        hades = new Underground(princess)
        cave = new Dungeon(hades)
        kingdom = new Castle(cave)

        knightJohn = new Person('John', 'knight')
        knightBrienne = new Person('Brienne', 'knight')
        kingFrancis = new Person('Francis', 'king')
        peasantMathew = new Person('Mathew', 'peasant')
        queenBianca = new Person('Bianca', 'queen')
        knightBruce = new Person('Bruce', 'knight')
    })

    it("three knights should rescue the prisoner", () => {
        const spy = vi.spyOn(princess, 'sayThanks')
        createRescueMission([knightBruce, knightBrienne, knightJohn], hades, kingdom)
        expect(spy).toHaveBeenCalledTimes(1);
    })


    it("should throw error if the queen try to enter into the dungeon", () => {
        expect(() => kingdom.gotoTheDungeon(queenBianca)).toThrowError();
    })

    it("should throw error if the princess try to enter into the dungeon", () => {
        expect(() => kingdom.gotoTheDungeon(princess)).toThrowError();
    })


    it("should throw error if the king try to enter into the underground", () => {
        expect(() => hades.enter(kingFrancis)).toThrowError();
    })

    it("should throw error if the peasant try to enter into the castle", () => {
        expect(() => kingdom.gotoTheDungeon(peasantMathew)).toThrowError();
    })
})

