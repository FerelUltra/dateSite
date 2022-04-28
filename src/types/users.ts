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
    "whatsup": string,
    "instagram":  string | null,
    "facebook":  string | null,
    "age": number,
    "date_of_birth": string,
    "last_login": string
}

interface IDocfile {
    docfile: string
}

interface IImages {
    "document_image_1": IDocfile | null,
    "document_image_2": IDocfile | null,
    "document_image_3": IDocfile | null,
}

export interface IUser {
    "want_to_be_friend": string,
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