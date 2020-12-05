let studentPrototype = {
    firstName: "John",
    lastName: "Doe",
    id: 0,
    courses: []
}

function newStudent(firstName, lastName, id, courses) {
    var student = Object.create(studentPrototype);

    student.firstName = firstName;
    student.lastName = lastName;
    student.id = id;
    student.courses = courses;

    return student;
}

var student = newStudent("Foo", "Bar", 123, ["TIN", "ZPR", "BYT"]);

console.log(student.lastName + ":" + student.id + ", " + student.courses);