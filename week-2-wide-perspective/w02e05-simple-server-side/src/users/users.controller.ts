import { getUser } from './users.service.js'
import { Router, Request, Response } from 'express'
import { createSignedJWT } from '../auth/auth.service.js'

export const router = Router()

router.post('/login', async (req: Request, res: Response) => {
    const { login, password } = req.body
    const user = await getUser(login, password)
    const token = await createSignedJWT({ login: user.login })
    res.status(200).json({ token })
})
