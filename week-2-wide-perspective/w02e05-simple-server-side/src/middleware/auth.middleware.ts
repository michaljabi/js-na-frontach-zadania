import { NextFunction, Request, Response } from 'express';
import { prisma } from '../prisma-client';
import { getUserBaseOnToken } from '../users/user.service';

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization = "" } = req.headers;
    const [, token] = authorization.split(' ');

    try {
        await hasValidToken(token)
        const user = await getUserBaseOnToken(token)
        if (user) {
            req.user = user;
        }

    } catch (error) {
        console.error(error)
    }
    next();
};

export const hasValidToken = async (token: string) => {
    const result = await prisma.token.findFirst({ where: { value: token } });

    if (result === null) {
        throw new Error('Nima nic');
    }
} 