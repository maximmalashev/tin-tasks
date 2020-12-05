class StudentClass {
    constructor (firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
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

    getName = function() {
        return this.firstName + " " + this.lastName;
    }

    setName = function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var student = new StudentClass("Gordon", "Ramsay", 1, [5, 3, 4]);
console.log(student.getAverageGrade());
console.log(student.getName());
student.setName("John", "Doe");
console.log(student.getName());