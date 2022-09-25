import { Adress } from "./adress.interface";

export interface User {
    name: string;
    age: number;
    email: string;
    address: Adress;
  };