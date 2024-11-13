class studentsDatabase{
    constructor(){
        this.students = ["Hermione", "Harry", "Ron", "Draco", "Luna", "Neville", "Fred", "George"];
    }

    addStudent(name){
        this.students.push(name);
    }

    removeStudent(name){
        this.students = this.students.filter((student) => student !== name);
    }

}

module.exports = studentsDatabase;