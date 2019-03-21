class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    
    greeter(person : Student): string {
        return "Hello, " + person.fullName;
    }

}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = user.fullName;