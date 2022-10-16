import { Service } from "typedi";
import { UserRepository } from './user.repository';
import bcrypt from 'bcrypt';

@Service()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  public async create(email: string, password: string) {
    const userByEmail = await this.userRepo.getUserByEmail(email)

    if (userByEmail) {
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    this.userRepo.create(email, hashedPassword)
  }
}
