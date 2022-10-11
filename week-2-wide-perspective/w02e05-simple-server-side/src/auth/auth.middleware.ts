import { TokenUser } from '../types/user.js'
import { getUserByToken } from './auth.service.js'
import { ForbiddenError } from '../classes/Error.js'
import { Request, Response, NextFunction } from 'express'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization = '' } = req.headers
    const [, token] = authorization.split(' ')
    if (!token) {
        throw new ForbiddenError()
    }
    try {
        const verificationResult = await getUserByToken(token)
        const { login } = verificationResult.payload as TokenUser
        req.user = {login}
        next()
    } catch {
        throw new ForbiddenError()
    }
}
