var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.greeter = function (person) {
        return "Hello, " + person.fullName;
    };
    return Student;
}());
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = user.fullName;
