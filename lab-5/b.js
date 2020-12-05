function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printName = function() {
        console.log(firstName + " " + lastName);
    }

    this.gradeAverage = function() {
        var sum = 0;
        for (var grade in grades) {
            sum += grade;
        }

        console.log(sum / grades.length);
    }
}

var student = new Student("Gordon", "Ramsay", 1, [5, 3, 4]);
student.printName();
student.gradeAverage();