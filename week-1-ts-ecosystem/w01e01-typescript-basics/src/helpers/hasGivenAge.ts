import { User } from "../types";

function hasGivenAge(requiredAge: User["age"]) {
  return (user: User) => user.age >= requiredAge;
}

export default hasGivenAge;
