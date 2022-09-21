interface Address {
  street: string;
  no: number;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

export {Address, User}
