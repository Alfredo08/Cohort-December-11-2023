
class Student{
    constructor(email, firstName, lastName, program){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.program = program;
        this.next = null;
    }
}

module.exports = Student;