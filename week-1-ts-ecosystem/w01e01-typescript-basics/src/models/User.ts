export interface User {
  name: string;
  age: number;
  email: string;
  address: Address;
}

export interface Address {
  street: string;
  no: number;
}
