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

  export {user, User}