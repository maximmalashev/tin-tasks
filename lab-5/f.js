class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName = function() {
        return this.firstName + " " + this.lastName;
    }

    setName = function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class StudentClass2 extends Person {
    constructor (firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    printName = function() {
        console.log(firstName + " " + lastName);
    }

    getAverageGrade = function() {
        var sum = 0;
        for (var grade in this.grades) {
            sum += grade;
        }

        return sum / this.grades.length;
    }
}


var student = new StudentClass2("Gordon", "Ramsay", 1, [5, 3, 4]);
console.log(student.getAverageGrade());
console.log(student.getName());
student.setName("John", "Doe");
console.log(student.getName());