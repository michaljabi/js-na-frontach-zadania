type Address = {
    no: number
    street: string
}

export type Person = {
    age: number
    name: string
    email: string
    address?: Address
}