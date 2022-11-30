import { Address } from "./address.model"
import { CommunicationInfo } from "./communicationInfo.model"
import { Gender } from "./gender.model"

export interface Contact {

    firstName: string
    lastName: string
    fullName: string
    idNumber: string
    gender: Gender
    communicationInfo: CommunicationInfo
    address: Address,
    id: string,
    isDeleted: boolean,
    isDirty: boolean,
    isCanceled: boolean,
    isActive: boolean
    createdOn? :string
}