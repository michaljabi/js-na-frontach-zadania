import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { restaurants } from './resource';

@Injectable()
export class RestaurantsService {
  private restaurants = restaurants;
  create(createRestaurantDto: CreateRestaurantDto) {
    const restaurant = new Restaurant();
    restaurant.id = Math.round(Math.random() * 100);
    restaurant.name = createRestaurantDto.name;
    restaurant.address = createRestaurantDto.address;
    restaurant.type = createRestaurantDto.type;

    this.restaurants.push(restaurant);
    return restaurant;
  }

  findAll() {
    return this.restaurants;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = this.restaurants.find((r) => r.id === id);

    for (const key in updateRestaurantDto) {
      const element = updateRestaurantDto[key];
      restaurant[key] = element;
    }
  }

  findOne(id: number) {
    return this.restaurants.find((restaurant) => restaurant.id === id);
  }

  remove(id: number) {
    this.restaurants = this.restaurants.filter(
      (restaurant) => restaurant.id !== id,
    );
  }
}
