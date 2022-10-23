import { log } from 'console';
import { Request, Response, Router } from 'express';
import { logger } from '../logger';
import { validationMiddleware } from '../middleware/validation.middleware';
import { getUserToken } from './user.service';
import { UserLoginScheme } from './users.validator';


export const usersController = Router();

usersController.post("/", [validationMiddleware({ body: UserLoginScheme })], async (req: Request, res: Response, next: any) => {
    const { email, password } = req.body

    logger.log("info", `Try to get token for:  login: ${email} password:${password}`)

    try {
      const user = await getUserToken(email, password);
      res.json(user);
    } catch (error) {
        logger.error(error)
    }
  

});