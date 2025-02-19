const ic = require('node-icecream')();

class Person {
  constructor(name) {
    this.name = name;
  }

  greet(otherName) {
    return `Hi ${otherName}, my name is ${this.name}`;
  }
}

const joe = new Person('Joe');
ic(joe.greet('Kate'));
ic(joe.name);

