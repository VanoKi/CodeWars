const ic = require('node-icecream')()

let n = "7970521.5544"
let number = +n
// let len =
// ic(+n)
while (n > 0) {
    ic(n % 10)
    n = Math.floor(n/10)
    ic(n)
}