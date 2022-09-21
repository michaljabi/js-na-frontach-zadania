import { Person } from './model/Person'

type GivenAge = (user: Person) => boolean

export function hasAddress (user: Person) {
    return Boolean(user.address)
}

export function hasGivenAge (requiredAge: number): GivenAge {
    return (user: Person) => user.age >= requiredAge
}
