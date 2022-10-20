import { Module } from '@nestjs/common';
import { ProductsRepository } from './products/products.repository';
import { ProductsService } from './products/products.service';
import { RestaurantsRepository } from './restaurants/restaurants.repository';
import { RestaurantsService } from './restaurants/restaurants.service';
import { ProductsController } from './products/products.controller';
import { RestaurantsController } from './restaurants/restaurants.controller';

@Module({
  providers: [
    RestaurantsService,
    RestaurantsRepository,
    ProductsRepository,
    ProductsService,
  ],
  controllers: [ProductsController, RestaurantsController],
})
export class RestaurantModule {}
