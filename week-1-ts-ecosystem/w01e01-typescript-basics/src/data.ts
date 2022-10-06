type Address = {
    street: string,
    no: number
}

export type User = {
    name: string,
    age: number,
    email: string,
    address: Address
}

export const ADULT_AGE = 18


export const user: User = {
    name: 'Andy',
    age: 30,
    email: 'andy@mail-me-tommorow.com',
    address: {
        street: 'Strange Alley',
        no: 23,
    },
}
