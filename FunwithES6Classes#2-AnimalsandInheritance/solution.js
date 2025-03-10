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
let animal = new Animal('My Pet')
class Rabbit extends Animal{
    hide() {
        ic(`${this.name} is hiding`)
    }
}
let rabbit = new Rabbit('White rabbit')
rabbit.run(5)
rabbit.hide()