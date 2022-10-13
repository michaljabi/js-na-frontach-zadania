export type ProductType = 'KUP TERAZ' | 'AUKCJA' | 'ODDAM ZA DARMO';

export interface Price {
  value: number;
  currency: 'PLN' | 'USD' | 'EUR'; // Our shop handle only these currencies
}

