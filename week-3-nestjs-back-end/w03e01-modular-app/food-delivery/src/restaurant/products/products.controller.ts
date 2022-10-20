import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('products/')
  getProfile() {
    return this.productsService.getAll();
  }
}
