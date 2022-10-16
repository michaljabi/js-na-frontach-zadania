import { dbClient } from "../../database/client";

export class UserRepository {
  getUserById(id: string) {
    return dbClient.user.findUnique({ where: { id } });
  }

  create(email: string, password: string, name: string) {
    return dbClient.user.create({ data: { email, password, name } });
  }

  remove(id: string) {
    return dbClient.user.delete({ where: { id } })
  }
}
