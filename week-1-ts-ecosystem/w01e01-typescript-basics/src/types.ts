export type IFunction = (user: IUser) => boolean;

export interface IUser {
  name: string;
  age: number;
  email: string;
  address: { street: string; no: number };
}
