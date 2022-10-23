import { prisma } from '../prisma-client';
import bcrypt from "bcrypt"
import { User } from '@prisma/client';

export const getUserToken = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user) {
        return await bcrypt.compare(password, user.password) ? getToken(user.id) : 'nie';
    }
}


async function getToken(id: number) {
    return await prisma.token.findUnique({ where: { userId: id }, select: { value: true } })
}

export async function getUserBaseOnToken(token: string) {
    const result = await prisma.token.findFirst({ where: { value: token }, include: { user: true } })
    return result?.user
}