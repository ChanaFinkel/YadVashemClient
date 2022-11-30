import { Contact } from "./contact.model";

export interface Registrant {
    country?: string,
    institution?: string,
    eventReservation?: string
    eventType?: string,
    ontact: Contact,
    language?: string,
    comments?: string,
    divisionRouter?: string,
    teachingSubject?: string,
    reservationNum?: string,
    ageGroup?: number,
    groupName?: string,
    schoolName?: string,
    roleInSchool?: string,
    isForGmul: boolean,
    isFromReservations: boolean,
    didGroupArrive: boolean,
    numOfYoungParticipants: number,
    numberOfParticipants: number,
    groupNumber: number,
    firstName?: string,
    lastName?: string,
    eventRegistrationActivityDay?: Date,
    numSeminarsAttendedOther?: number,
    numSeminarsAttendedYv?: number,
    citizenship?: string,
    citySchool?: string,
    nameOfInstitution?: string,
    passportNumber?: string,
    roomAccommodations?: string,
    totalPrice: number,
    totalPriceAfterDiscount: number,
    currency?: string,
    discountType?: string,
    discount: number,
    paymentReference?: string,
    paymentComments?: string,
    paymentAmount?: Number,
    paymentStatus?: boolean,
    dietaryNeeds?: string,
    dietaryNeedsOther?: string,
    professionalCapacity?: string,
    teachingSubjects?: string,
    studentsAges?: string,
    teachingMainSources?: string,
    mainContextWhichYouTeach?: string,
    primaryReasonsForRegistering?: string,
    attachmentList: string[],
    fullEventReservation?: string,
    id?: string,
    isDeleted: boolean,
    isDirty: boolean,
    isCanceled: boolean,
    isActive: boolean,
    createdOn: string

}