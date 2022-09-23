import { Adress } from "./adress.model";

export interface User {
  name: string;
  age: number;
  email: string;
  address: Adress;
}
