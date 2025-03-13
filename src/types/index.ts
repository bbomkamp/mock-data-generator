export interface UserType {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
}

export interface FieldSelection {
    bio: boolean;
    firstName: boolean;
    fullName: boolean;
    gender: boolean;
    jobArea: boolean;
    jobDescriptor: boolean;
    jobTitle: boolean;
    jobType: boolean;
    lastName: boolean;
    middleName: boolean;
    prefix: boolean;
    sex: boolean;
    sexType: boolean;
    suffix: boolean;
    zodiacSign: boolean;
    email: boolean;
    birthday: boolean;
}

export interface MockUser {
    bio?: string;
    firstName?: string;
    fullName?: string;
    gender?: string;
    jobArea?: string;
    jobDescriptor?: string;
    jobTitle?: string;
    jobType?: string;
    lastName?: string;
    middleName?: string;
    prefix?: string;
    sex?: string;
    sexType?: string;
    suffix?: string;
    zodiacSign?: string;
    email?: string;
    birthday?: string;
}