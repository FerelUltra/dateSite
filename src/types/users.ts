interface IData {
    "validation": number,
    "city":  string | null,
    "county": null,
    "latitude": number,
    "longitude": number,
    "about": string,
    "sex": string,
    "name": string,
    "telegram": string | null,
    "tictok":  string | null,
    "whatsup": string | null,
    "instagram":  string | null,
    "facebook":  string | null,
    "age": number,
    "date_of_birth": string,
    "last_login": string
}

export interface IDocfile {
    docfile: string
}

const images = [
    "document_image_1",
    "document_image_2",
    "document_image_3",
]
type imageNameType = typeof images[number]
export interface IImages {
    // "document_image_1": IDocfile | null,
    // "document_image_2": IDocfile | null,
    // "document_image_3": IDocfile | null,
    [key: imageNameType]: IDocfile | null
}

export interface IUser {
    "want_to_be_friend": boolean,
    "interests": string[],
    "data": IData,
    "images": IImages
    "user_name": number
}

export interface Users {
    users: IUser[],
    isLoading: boolean,
    error: string
}