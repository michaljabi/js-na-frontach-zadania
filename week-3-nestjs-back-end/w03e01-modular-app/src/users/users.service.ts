import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { users } from './resource';

@Injectable()
export class UsersService {
  private users = users;
  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.id = Math.round(Math.random() * 100);
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  remove(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return;
  }
}
