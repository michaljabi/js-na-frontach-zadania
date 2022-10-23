import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private auth: AuthService) {}
  async use(req: Request, res: any, next: () => void) {
    const token = req.headers.authorization;
    await this.auth.setCurrentUser(token);
    next();
  }
}
