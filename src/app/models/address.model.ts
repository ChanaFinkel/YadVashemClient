import { Country } from "./country.model"

export interface Address {
    city: string,
    address: string,
    zipCode: string,
    mailingAddress:string
    country:Country,
    state:string
}