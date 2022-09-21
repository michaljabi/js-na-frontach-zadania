import { Person } from './model/Person'
import { hasAddress, hasGivenAge } from './validators'

const user: Person = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
}

const isNotHomeless = hasAddress(user)
const isAdult = hasGivenAge(18)(user)

console.log(`User ${user.name} is ${isAdult ? 'adult' : 'minor'}`)
console.log(`and has${isNotHomeless ? '' : ' no'} address`)
