const ic = require('node-icecream')()

function makeClass(...properities) {
    return function(...args) {
        properities.forEach((prop, index) => {
            this[prop] = args[index]
        })
    }
}

// ic(makeClass("name","species","age","health","weight","color"))
// ic(new makeClass('Bob','Dog','5','good','50lb','brown'))

function Animal(name,species,age,health,weight,color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
  }
  const Animel = makeClass('name','species','age','health','weight','color')

ic(new Animel('Bob','Dog','5','good','50lb','brown'))