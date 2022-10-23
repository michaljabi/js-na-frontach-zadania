import { Request, Response, Router } from 'express';
import { getAllProducts } from './product.service';



export const productController = Router();

productController.get("/", async (req: Request, res: Response, next: any) => {
    const products = await getAllProducts();
    res.json(products);
});