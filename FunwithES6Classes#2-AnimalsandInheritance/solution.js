const ic = require('node-icecream')()

class User {
    constructor(name) {
        this.name = name
    }
    SayHI() {
        ic(this.name)
    }
}

let user = new User('Ivan')
ic(user)
user.SayHI()