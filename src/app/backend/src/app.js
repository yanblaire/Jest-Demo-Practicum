const students = ["Hermione", "Harry", "Ron", "Draco", "Luna", "Neville", "Fred", "George"];

function fetchStudents(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = students.find((student) => student === name);
            if (student) {
                resolve(student)
            } else {
                reject(new Error("Student not found"));
            }
        }, 1000);
    });
}

module.exports = {
    fetchStudents
};

