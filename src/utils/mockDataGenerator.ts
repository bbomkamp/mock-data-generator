import { faker } from '@faker-js/faker';
import { MockUser } from '../types';

export interface UserType {
    Bio?: string;
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
        if (fields.includes('firstName')) user.firstName = faker.person.firstName();
        if (fields.includes('fullName')) user.fullName = faker.person.fullName();
        if (fields.includes('gender')) user.gender = faker.person.gender();
        if (fields.includes('jobArea')) user.jobArea = faker.person.jobArea();
        if (fields.includes('jobDescriptor')) user.jobDescriptor = faker.person.jobDescriptor();
        if (fields.includes('jobTitle')) user.jobTitle = faker.person.jobTitle();
        if (fields.includes('jobType')) user.jobType = faker.person.jobType();
        if (fields.includes('lastName')) user.lastName = faker.person.lastName();
        if (fields.includes('middleName')) user.middleName = faker.person.middleName();
        if (fields.includes('prefix')) user.prefix = faker.person.prefix();
        if (fields.includes('sex')) user.sex = faker.person.sex();
        if (fields.includes('sexType')) user.sexType = faker.person.sexType();
        if (fields.includes('suffix')) user.suffix = faker.person.suffix();
        if (fields.includes('zodiacSign')) user.zodiacSign = faker.person.zodiacSign();
        if (fields.includes('email')) user.email = faker.internet.email();
        if (fields.includes('birthday')) user.birthday = faker.date.birthdate().toISOString().split('T')[0];
        mockData.push(user as MockUser);
    }

    return mockData;
};