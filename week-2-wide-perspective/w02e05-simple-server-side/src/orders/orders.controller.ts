import { Request, Response, Router } from 'express';
import { isAuth } from '../middleware/auth.middleware';
import { validationMiddleware } from '../middleware/validation.middleware';
import { createOrder, getOrderById, getOrders } from './orders.service';
import { CreateOrderScheme } from './orders.validator';

export const ordersController = Router();

ordersController.get("/", [isAuth], async (req: Request, res: Response) => {
    const orders = await getOrders();
    res.json(orders);
});

ordersController.get("/:id", [isAuth], async (req: Request, res: Response) => {
    const { id } = req.params;
    const orders = await getOrderById(Number(id));
    res.json(orders);
});

ordersController.post("/", [isAuth, validationMiddleware({ body: CreateOrderScheme })], async (req: Request, res: Response) => {
    const { orderProduct } = req.body;
    const order = await createOrder(req.user, orderProduct);
    res.json(order);
});