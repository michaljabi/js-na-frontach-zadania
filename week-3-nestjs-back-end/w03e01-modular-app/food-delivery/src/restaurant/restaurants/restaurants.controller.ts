import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../products/products.service';

@Controller()
export class RestaurantsController {
  constructor(private productsService: ProductsService) {}

  @Get('restaurants')
  getProfile() {
    return this.productsService.getAll();
  }
}
