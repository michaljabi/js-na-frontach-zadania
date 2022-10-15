import { Person } from '../actors/Person';

type ErrorType = 'CASTLE' | 'DUNGEON' | 'UNDERGROUND'

export class MissionFailedError extends Error {
    type: ErrorType;
    person: Person;

    constructor(message: string, type: ErrorType, person: Person) {
        super(message);
        this.person = person;
        this.type = type;
    }
}

export class CastleError extends MissionFailedError {
    constructor(person: Person, message = 'Sth went wrong in Castle') {
        super(message, 'CASTLE', person)
    }
}

export class DungeonError extends MissionFailedError {
    constructor(person: Person, message = 'Sth went wrong in Dungeon') {
        super(message, 'DUNGEON', person)
    }
}

export class UndergroundError extends MissionFailedError {
    constructor(person: Person, message = 'Sth went wrong in Undergrond') {
        super(message, 'UNDERGROUND', person)
    }
}