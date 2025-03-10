const ic = require('node-icecream')()

// class User {
//     constructor(name) {
//         this.name = name
//     }
//     SayHI() {
//         ic(this.name)
//     }
// }
//
// let user = new User('Ivan')
// ic(user)
// user.SayHI()
// ic(User.prototype.SayHI)
// ic(Object.getOwnPropertyNames(User.prototype))

let User = class {
    sayHi(){
        ic('Hi')
    }
}

let user = new User('John')
user.sayHi()