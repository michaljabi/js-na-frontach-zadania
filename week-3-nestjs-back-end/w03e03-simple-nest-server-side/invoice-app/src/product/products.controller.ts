import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './createProduct.dto';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private prodService: ProductsService) {}

  @Get('products')
  getProfile() {
    return this.prodService.getAll();
  }

  @Post('products')
  createProduct(@Body() product: CreateProductDto) {
    return this.prodService.create(product);
  }
}
