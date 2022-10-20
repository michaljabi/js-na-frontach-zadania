import { Injectable } from '@nestjs/common';
import { Restaurant } from '../restaurant.interface';
import { RestaurantsRepository } from './restaurants.repository';

@Injectable()
export class RestaurantsService {
  constructor(private restaurantRepo: RestaurantsRepository) {}

  create(user: Omit<Restaurant, 'id'>) {
    return this.restaurantRepo.create(user);
  }

  getById(id: number) {
    return this.restaurantRepo.getById(id);
  }

  getAll() {
    return this.restaurantRepo.getAll();
  }
}
