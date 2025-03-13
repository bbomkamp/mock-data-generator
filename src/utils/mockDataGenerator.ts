import { faker } from '@faker-js/faker';
import { MockUser } from '../types';

export const generateMockData = (count: number): MockUser[] => {
    const data: MockUser[] = [];
    for (let i = 0; i < count; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@testing.com`;
        const birthday = faker.date.past(30, new Date()).toISOString().split('T')[0];
        data.push({ firstName, lastName, email, birthday });
    }
    return data;
};