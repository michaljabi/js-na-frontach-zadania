interface CommonInterface {
    id?: string;
    name: string;
    amount: number;
}

export interface ProductInterface extends CommonInterface {
    type: 'AUCTION' | 'BUY_NOW';
    price: number;
}

export interface FreeProductInterface extends CommonInterface {
    type: 'FREE';
}
