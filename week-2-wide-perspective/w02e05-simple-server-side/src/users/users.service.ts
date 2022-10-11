import bcrypt from 'bcrypt'
import { PrismaClient, User } from '@prisma/client'
import { UnauthorizedError } from '../classes/Error.js'

const prisma = new PrismaClient()

export const getUser = async (login: string, password: string): Promise<User> => {
    const user = await prisma.user.findUniqueOrThrow({ where: { login } })
    if (!await bcrypt.compare(password, user.password)) {
        throw new UnauthorizedError()
    }
    return user
}
