type UserAddress = {
    street: string;
    no: number;
}

type User = {
    name: string;
    age: number;
    email: string;
    address: UserAddress;
};

export type {
    User,
};
