import { IsString, IsInt, IsNotEmpty } from 'class-validator';

class ProductItem {
  @IsString()
  productId: string;

  @IsInt()
  quantity: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  products: ProductItem[];
}
