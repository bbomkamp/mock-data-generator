import { faker } from '@faker-js/faker';
import { MockUser } from '../types';

export interface UserType {
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

export const generateMockData = (count: number, fields: string[]): MockUser[] => {
    const mockData: MockUser[] = [];

    for (let i = 0; i < count; i++) {
        const user: Partial<MockUser> = {};
        if (fields.includes('bio')) user.bio = faker.person.bio();
        if (fields.includes('First Name')) user.firstName = faker.person.firstName();
        if (fields.includes('Full Name')) user.fullName = faker.person.fullName();
        if (fields.includes('Gender')) user.gender = faker.person.gender();
        if (fields.includes('Job Area')) user.jobArea = faker.person.jobArea();
        if (fields.includes('Job Descriptor')) user.jobDescriptor = faker.person.jobDescriptor();
        if (fields.includes('Job Title')) user.jobTitle = faker.person.jobTitle();
        if (fields.includes('Job Type')) user.jobType = faker.person.jobType();
        if (fields.includes('Last Name')) user.lastName = faker.person.lastName();
        if (fields.includes('Middle Name')) user.middleName = faker.person.middleName();
        if (fields.includes('Prefix')) user.prefix = faker.person.prefix();
        if (fields.includes('Sex')) user.sex = faker.person.sex();
        if (fields.includes('Suffix')) user.suffix = faker.person.suffix();
        if (fields.includes('Zodiac Sign')) user.zodiacSign = faker.person.zodiacSign();
        if (fields.includes('Email')) user.email = faker.internet.email();
        if (fields.includes('Birthday')) user.birthday = faker.date.birthdate().toISOString().split('T')[0];
        mockData.push(user as MockUser);
    }

    return mockData;
};