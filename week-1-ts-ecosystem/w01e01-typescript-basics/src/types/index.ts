export interface IAdress {
  street: string;
  no: number;
}

export interface IUser {
  name: string;
  age: number;
  email: string;
  address: IAdress;
}
