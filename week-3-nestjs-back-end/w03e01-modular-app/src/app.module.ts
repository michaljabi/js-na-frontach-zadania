import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [UsersModule, RestaurantsModule, ProductsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
