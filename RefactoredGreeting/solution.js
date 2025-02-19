const ic = require('node-icecream')();

class Person {
  constructor(name) {
    this.name = name;
  }

  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}

const joe = new Person('Jack');
ic(new Person('Jack').greet('Jill'));
