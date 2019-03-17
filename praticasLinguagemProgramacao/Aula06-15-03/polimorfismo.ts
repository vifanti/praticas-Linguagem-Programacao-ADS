class Person{

    protected firstname: string;
    protected lastname: string;

    constructor(first: string, last: string) {
        this.firstname = first;
        this.lastname = last;
    }

    getName(): string {
        return this.firstname + " " + this.lastname;
    }
}

class Employee extends Person {

    private staffnumber: number;

    constructor(first: string, last: string, staffnum: number) {
        super(first, last);
        this.staffnumber = staffnum;
    }
    //mesmo nome de metodo mas com comportamento diferente
    getName(): string {
        return super.getName() + ", " + this.staffnumber;
    }
}

let x = new Person("Marge", "Simpson")
let y = new Employee("Homer", "Simpson", 1007)

console.log(x.getName())
console.log(y.getName())