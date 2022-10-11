import { User } from '@prisma/client'

export type TokenUser = Pick<User, 'login'>