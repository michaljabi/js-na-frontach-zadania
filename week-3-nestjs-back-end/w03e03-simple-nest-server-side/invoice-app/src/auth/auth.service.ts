import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientEntity } from 'src/client/client.entity';
import { ClientsService } from 'src/client/clients.service';
import { JwtUserPayload } from './types/jwtPayload';
import { SignUpDto } from './signUp.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService, private clientService: ClientsService) {}

  async signup(user: SignUpDto): Promise<ClientEntity> {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    return await this.clientService.create(user);
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<ClientEntity, 'password'>> {
    const foundUser = await this.clientService.findByEmail(email);

    if (!foundUser) {
      return null;
    }

    const passMatch = await bcrypt.compare(password, foundUser.password);

    if (!passMatch) {
      return null;
    }

    const { password: currentPass, ...result } = foundUser;
    return result;
  }

  async login(user: Omit<ClientEntity, 'password'>) {
    const payload: JwtUserPayload = { email: user.email, id: user.id };

    return {
      access_token: this.jwt.sign(payload),
    };
  }
}
