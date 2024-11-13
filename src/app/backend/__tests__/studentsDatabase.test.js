const studentsDatabase = require('../src/students.js');

let studentDB

beforeAll(() => {
    studentDB = new studentsDatabase();
})

describe('What ever Miscellaneous Tests I could Come Up with...', () => {

    test("1+1 should equal 2", () => {
        expect(1 + 1).toBe(2)
    });

});

afterAll(() => {
    studentDB = null;
    console.log('Students Database Cleared');
});