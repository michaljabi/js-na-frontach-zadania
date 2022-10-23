import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Polskie Jadło',
    address: 'ul. Polaków 1, Kraków',
    type: 'Tradycyjna',
  },
  {
    id: 2,
    name: 'Włoskie kluski',
    address: 'ul. Włochów 2, Kraków',
    type: 'Włoska',
  },
  {
    id: 3,
    name: 'Ruskie kalafiory',
    address: 'ul. Dziura w ziemi 0, Moskwa',
    type: 'Rosyjska',
  },
];
