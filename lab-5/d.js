function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printName = function() {
        console.log(firstName + " " + lastName);
    }

    Object.defineProperty(this, "averageGrade", {
        get: function() {
            var sum = 0;
            for (var grade in grades) {
                sum += grade;
            }

            return sum / grades.length;
        }
    });

    Object.defineProperty(this, "name", {
        get: function() {
            return firstName + " " + lastName;
        },

        set: function(name) {
            arr = name.split(' ');
            firstName = arr[0];
            lastName = arr[1];
        }
    });
}

var student = new Student("Gordon", "Ramsay", 1, [5, 3, 4]);
console.log(student.averageGrade);
console.log(student.name);
student.name = "John Doe";
console.log(student.name);
