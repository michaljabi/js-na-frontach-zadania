import type { TokenUser } from '../../src/types/user.js'

declare module 'express' {
    interface Request {
        user?: TokenUser
    }
}
