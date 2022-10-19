/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

 interface User {
  name: string,
  age: number,
  email: string,
  address: {
    street: string,
    no: number
  },
}

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
}

function hasAddress(user: User): boolean {
  return Boolean(user.address)
}

function hasGivenAge(requiredAge: number): any {
  return (user: User): boolean => user.age >= requiredAge
}

const isAdult = hasGivenAge(18)

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(user) ? '' : ' no'} address`)
