import { Service } from "typedi";
import { UserRepository } from "./user.repository";
import bcrypt from "bcrypt";
import { BaseHttpError } from "../../utils/errors";

@Service()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  public async create(email: string, password: string) {
    const userByEmail = await this.getByEmail(email);

    if (userByEmail) {
      throw new BaseHttpError("User exists", 422, "USER_EXISTS");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    return this.userRepo.create(email, hashedPassword);
  }

  public async getByEmail(email: string) {
    const user =  this.userRepo.getUserByEmail(email);
    if (!user) {
      throw new BaseHttpError("User not found", 404, "USER_NOT_FOUND");
    }

    return user
  }

  public async getById(id: string) {
    const user =  this.userRepo.getUserById(id);
    if (!user) {
      throw new BaseHttpError("User not found", 404, "USER_NOT_FOUND");
    }

    return user
  }
}
