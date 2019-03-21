class Dog {
    name: string;
    tricks: string[];

    constructor(name: string) {
        this.name = name;
        this.tricks = [];
    }

    add_trick(trick: string) {
        this.tricks.push(trick);
    }
}

let dog1 = new Dog("Fido");
let dog2 = new Dog('Buddy');

dog1.add_trick('roll over')
dog2.add_trick('play dead')

console.log(dog1.tricks);
console.log(dog2.tricks);