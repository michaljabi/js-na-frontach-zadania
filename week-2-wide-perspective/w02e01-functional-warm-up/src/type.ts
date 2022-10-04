type HumanData = {
    id: string
    name :string
}
type Tracks = {
    id: string,
    title: string,
    duration: string,
    explicit_lyrics:  boolean,
    type:  string,
}
export type AlbumDataType = {
    id:  string,
    title: string,
    genres: HumanData[]
    artist: HumanData,
    tracks: Tracks[],
}

type Nutritions = {
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    sugar: number,
}

export type FruitsData =
    {
        genus:  string,
        name: string,
        id: number,
        family: string,
        order: string,
        nutritions: Nutritions
    }


    export type  UserAddress =  {
    street: string
        suite: string
        city: string,
        zipcode: string,
        geo: {
        lat: string,
            lng: string,
    },
}

export type UserCompany = {
    name: string,
    catchPhrase: string,
    bs: string,
}

export type UserData = {
        id: number,
        name: string,
        username: string,
        email: string,
        address: UserAddress,
        phone:  string,
        website: string,
        company: UserCompany
    }