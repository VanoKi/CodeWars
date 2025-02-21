const ic = require('node-icecream')()

class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    toString() {
        return `${this.name} is a ${this.type}`
    }
    }

const obj = new Animal('Max', 'dog')
ic(obj.toString())

obj.name = 'Buddy'
ic(obj.toString())
