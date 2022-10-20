import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  create(user: Omit<User, 'id'>) {
    return this.userRepository.create(user);
  }

  getById(id: number) {
    return this.userRepository.getById(id);
  }

  getByEmail(email: string) {
    return this.userRepository.getByEmail(email);
  }
}
