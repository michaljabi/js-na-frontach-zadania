export type AgeValidator = (user: User) => boolean;

export interface User {
  name: string;
  age: number;
  email: string;
  address: { street: string; no: number };
}
