import { faker } from '@faker-js/faker';
import { MockUser } from '../types';

export const generateMockData = (count: number): MockUser[] => {
    const mockData: MockUser[] = [];

    for (let i = 0; i < count; i++) {
        mockData.push({
            firstName: faker.person.firstName(), // Updated from faker.name.firstName()
            lastName: faker.person.lastName(), // Updated from faker.name.lastName()
            email: faker.internet.email(),
            birthday: faker.date.birthdate().toISOString().split('T')[0],
        });
    }

    return mockData;
};