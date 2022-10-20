import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      email: 'test@test.pl',
      password: 'test',
    },
    {
      id: 2,
      email: 'test1@test.pl',
      password: 'test1',
    },
  ];
  private id = this.users.length;

  create(user: Omit<User, 'id'>) {
    if (this.getByEmail(user.email)) {
      return;
    }
    this.id++;
    const newUser = { ...user, id: this.id };
    this.users.push(newUser);
    return newUser;
  }

  getById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  getByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
