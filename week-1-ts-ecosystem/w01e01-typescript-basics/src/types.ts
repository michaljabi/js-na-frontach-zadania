type AddressType = {
    street: string;
    no: number;
}

type UserType = {
    name: string;
    age: number;
    email: string;
    address: AddressType;
};

export type {
    AddressType,
    UserType,
};
