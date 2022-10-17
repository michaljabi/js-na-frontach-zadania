import { Service } from 'typedi';
import { UserService } from '../user/user.service';
import bcrypt from "bcrypt";
import { BaseHttpError } from '../../utils/errors';
import { User } from '@prisma/client';
import jwt from 'jsonwebtoken'

export type TokenUserPayload = {
    email: string,
    id: string,
}

@Service()
export class AuthService {
    private TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET'
    public TOKEN_COOKIE_KEY = 'auth-token'
    constructor(private userService: UserService) {}

    private generateToken(user: User) {
        return jwt.sign({email: user.email, id: user.id}, this.TOKEN_SECRET, { expiresIn: '1800s' })
    }

    public async register(email: string, password: string) {
       const user = await this.userService.create(email, password);
       return this.generateToken(user);
    }

    public async getUserFromToken(token: string): Promise<TokenUserPayload> {
        const userPayload = await jwt.verify(token, this.TOKEN_SECRET);
        return userPayload as TokenUserPayload
    }

    public async login(email: string, password: string) {
        const user = await this.userService.getByEmail(email);

        if (!user) {
            throw new BaseHttpError('User not found', 401, 'USER_NOT_FOUND')
        }

        const isMatch = bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new BaseHttpError('Wrong password', 401, 'WRONG_PASSWORD')
        }

        return this.generateToken(user);
    }
}