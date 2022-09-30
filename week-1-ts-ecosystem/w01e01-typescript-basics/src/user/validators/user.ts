export function hasAddress(user: any): any {
    return Boolean(user.address)
}

export function hasGivenAge(requiredAge: any): any {
    return (user: any): any => user.age >= requiredAge
}
