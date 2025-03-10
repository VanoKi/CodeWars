const ic = require('node-icecream')()

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run (speed) {
        this.speed = speed;
        ic(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed =0;
        ic(`${this.name} is stopped`)
    }
}
class Rabbit extends Animal{
    constructor(name, earLength) {
        super(name)
        this.earLegth = earLength
    }
}
let rabbit = new Rabbit('White rabbit', 19)
ic(rabbit.name)
ic(rabbit.earLegth)
