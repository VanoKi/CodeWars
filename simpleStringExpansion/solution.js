const ic = require('node-icecream')()

let string = ""
// let string = "3abc"
let ans = ''
let arr = string.match(/\d[A-Za-z]*/ig)
for (let i = 0; i < arr.length; i++) {
    let symbols = arr[i].match(/[A-Za-z]*/g)[1]
    let digit = arr[i].match(/\d/g)
    for (let j = 0; j < symbols.length; j++) {
        ans += symbols[j].repeat(+digit)
    }
}
ic(ans)