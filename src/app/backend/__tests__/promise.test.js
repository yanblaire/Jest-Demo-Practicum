const { fetchStudents } = require("../src/app.js")

describe('Testing Fetch Students', () => {

    it('Fetch a single student by name', async () => {
        return fetchStudents("Hermione").then((student) => {
            expect(student).toBe('Hermione')
        })
    });

    it('Fetches a student by name using async/await', async () => {
        const student = await fetchStudents("Harry");
        expect(student).toBe('Harry');
    });

    it('Returns an error if a student is NOT found', async () => {
        await expect(fetchStudents("Salamander")).rejects.toThrow('Student not found')
    });

});
