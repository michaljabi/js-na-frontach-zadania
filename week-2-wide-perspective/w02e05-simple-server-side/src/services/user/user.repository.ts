import { Service } from 'typedi';
import { dbClient } from "../../database/client";

@Service()
export class UserRepository {
  getUserById(id: string) {
    return dbClient.user.findUnique({ where: { id } });
  }

  getUserByEmail(email: string) {
    return dbClient.user.findUnique({ where: { email } });
  }

  create(email: string, password: string) {
    return dbClient.user.create({ data: { email, password } });
  }

  remove(id: string) {
    return dbClient.user.delete({ where: { id } })
  }
}
