import { Injectable } from '@nestjs/common';
import { Restaurant } from '../restaurant.interface';

@Injectable()
export class RestaurantsRepository {
  private restaurants: Restaurant[] = [
    {
      id: 1,
      address: 'Street 1',
      type: 'Casual',
      name: 'Rest 1',
    },
    {
      id: 2,
      address: 'Street 2',
      type: 'Basic',
      name: 'Rest 2',
    },
  ];
  private id = this.restaurants.length;

  create(user: Omit<Restaurant, 'id'>) {
    this.id++;
    const newUser = { ...user, id: this.id };
    this.restaurants.push(newUser);
    return newUser;
  }

  getById(id: number) {
    return this.restaurants.find((user) => user.id === id);
  }

  getAll() {
    return this.restaurants;
  }
}
