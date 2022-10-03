/**
 * Zasady co do pliku:
 *
 * Możesz dowolnie modyfikować zawartość tego pliku,
 * całość programu musi jednak działać tak jak do tej pory !
 *
 * */

interface Address {
  street: string;
  no: number;
}
interface User {
  name: string;
  email: string;
  age: number;
  address?: Address;
}

const user: User = {
  name: 'Andy',
  age: 30,
  email: 'andy@mail-me-tommorow.com',
  address: {
    street: 'Strange Alley',
    no: 23,
  },
};

const hasAddress = (user: User): boolean => {
  return Boolean(user.address);
};

const hasGivenAge = (requiredAge: number): ((user: User) => boolean) => {
  return (user: User): boolean => user.age >= requiredAge;
};

const isAdult = hasGivenAge(18);

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`);
console.log(`and has${hasAddress(user) ? '' : ' no'} address`);
