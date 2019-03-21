class Person{
    //Encapsulamento
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

//Heranca
class Employee extends Person {

    private staffnumber: number;

    constructor(first: string, last: string, staffnum: number) {
        //metodo super para declarar as propriedades da classe pai
        super(first, last);
        this.staffnumber = staffnum;
    }

    getEmployee(): string {
        return this.getName() + ", " + this.staffnumber;
    }
}

let x = new Person("Marge", "Simpson")
let y = new Employee("Homer", "Simpson", 1007)

console.log(x.getName())
console.log(y.getEmployee())