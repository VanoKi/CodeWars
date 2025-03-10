const ic = require('node-icecream')()

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }
    introduce() {
        return `Hello my name is ${this.name} and I am ${this.age} years old`
    }
}

class Shark extends Animal{
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
        this.species = 'shark'
        this.legs = 0
    }
}

class Cat extends Animal{
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }
    introduce() {
        return `Hello my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
}

class Dog extends Animal{
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master
    }
    greetMaster() {
        return `Hello ${this.master}`
    }
}

let dog = new Dog('Dough', 12, "Serving his master", "Eliza")
ic(dog.legs)
ic(dog.name)
ic(dog.age)
ic(dog.species)
ic(dog.status)
ic(dog.master)
ic(dog.introduce())