interface Address {
  street: string;
  no: number;
}

export interface User {
  name: string;
  email: string;
  age: number;
  address?: Address;
}
