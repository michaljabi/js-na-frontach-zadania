export interface Adress {
  street: string;
  no: number;
};

export interface User {
    name: string;
    age: number;
    email: string;
    address: Adress;
  };