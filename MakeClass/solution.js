const ic = require('node-icecream')()

function makeClass(...properities) {
    return properities
}

const list = ["name","species","age","health","weight","color"]

// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }
//     say() {
//         return `Hi! I'm ${this.name} and I'm a ${this.species}`
//     }
// }

// const dog = new Animal('bat', 'dog')
// ic(dog.say())

ic(makeClass("name","species","age","health","weight","color"))