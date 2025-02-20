const ic = require('node-icecream')()

class JavaScriptClass {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    
    toString() {
        return `${this.name} is a ${this.type}`
    }
    }

const obj = new JavaScriptClass('Max', 'dog')
ic(obj.sayHello()) // 'Hello, my name is Alice'