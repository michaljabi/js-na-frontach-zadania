import { Request, Response, Router } from 'express';
import { validationMiddleware } from '../middleware/validation.middleware';
import { getUserToken } from './user.service';
import { UserLoginScheme } from './users.validator';


export const usersController = Router();

usersController.post("/", [validationMiddleware({ body: UserLoginScheme })], async (req: Request, res: Response, next: any) => {
    const { email, password } = req.body
    const user = await getUserToken(email, password);
    res.json(user);
});