import {Address} from "./Address";

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

export {User}
