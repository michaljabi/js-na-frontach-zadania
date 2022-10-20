import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
import { Auth } from './auth.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(email: string, password: string): { email: string; id: number } {
    const user = this.userService.getByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  register(auth: Auth) {
    const existingUser = this.userService.getByEmail(auth.email);
    if (existingUser) {
      throw new HttpException('User Exists', HttpStatus.BAD_REQUEST);
    }
    this.userService.create(auth);
  }

  async login(user: { email: string; id: number }) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
