class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
class Bootcamp {
    constructor(name, level, students =[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {

        if (!studentToRegister.name || !studentToRegister.email) {

            console.log('Invalid name or email');
            return false;

        } else if (this.students.length > 0) {
            for (let const student of this.students) {
                if (student.name === studentToRegister.name
                || student.email === studentToRegister.email) {
                    
                    return false;
                }
            }
        } else {



        }
    }
}
// Task 1
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com' ) {
    console.log('TASK 1: PASS');
}

// Task 2   
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
} 
// Task 3
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student); // initial registration
    const attemptTwo = bootcamp.registerStudent(student); // test if re-registering
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny")); // no email
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
};
runTest(reactBootcamp, testStudent);
   
   
   
   
   
   