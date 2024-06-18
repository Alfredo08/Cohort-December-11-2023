const Student = require('./studentNode');

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToEnd(newStudent){
        this.length ++;
        if(this.head === null){
            this.head = newStudent;
            this.tail = this.head;
            return;
        }
        this.tail.next = newStudent;
        this.tail = newStudent;
        return;
    }

    print(){
        let list = "";
        let current = this.head;
        for(let i = 0; i < this.length; i ++){
            list += current.firstName + " " + current.lastName + " -> ";
            current = current.next;
        }
        list += null;
        console.log(list);
    }

    findByEmail(email){
        let current = this.head;

        while(current){
            if(current.email === email){
                const studentInfo = {
                    firstName: current.firstName,
                    lastName: current.lastName,
                    email: current.email,
                    program: current.program
                }
                return studentInfo;
            }
            current = current.next;
        }
        return `The student ${email} was not found in our list`;
    }

    updateStudent(email, newValues){
        let current = this.head;

        for(let i = 0; i < this.length; i ++){
            if(current.email === email){
                current.firstName = (newValues.firstName) ? newValues.firstName : current.firstName;
                current.lastName = (newValues.lastName) ? newValues.lastName : current.lastName;
                current.program = (newValues.program) ? newValues.program : current.program;
                return "The student was updated successfully";
            }
            current = current.next;
        }
        return `The student ${email} was not found in our list`;
    }

    deleteByEmail(email){
        if(this.head === null){
            return "No students in our list yet!";
        }
        this.length --;
        let current = this.head;
        let prevCurrent = current;
        
        while(current.email !== email){
            prevCurrent = current;
            current = current.next;
        }

        // Scenario 1: Remove the head
        if(this.head.email === current.email){
            this.head = this.head.next;
            current.next = null;
            return;
        }

        // Scenario 2: Remove a node
        prevCurrent.next = current.next;
        current.next = null;

        // Scenario 3: Update tail if it was removed
        if(current.email === this.tail.email){
            this.tail = prevCurrent;
        }
    }
}

const listOfStudents = new LinkedList();
const alex = new Student("alex@miller.com", "Alex", "Miller", "MERN");
const martha = new Student("martha@smith.com", "Martha", "Smith", "Ruby on Rails");
const roger = new Student("roger@anderson.com", "Roger", "Anderson", "Web Fundamentals");
const julie = new Student("julie@winston.com", "Julie", "Winston", "Node/Express");
const max = new Student("max@morales.com", "Max", "Morales", "C#/.NET");
const ana = new Student("ana@rauch.com", "Ana", "Rauch", "Ruby on Rails");

listOfStudents.addToEnd(alex);
listOfStudents.addToEnd(martha);
listOfStudents.addToEnd(roger);
listOfStudents.addToEnd(julie);
listOfStudents.addToEnd(max);
listOfStudents.addToEnd(ana);

listOfStudents.print();
listOfStudents.deleteByEmail("ana@rauch.com");
listOfStudents.print();

console.log(listOfStudents);