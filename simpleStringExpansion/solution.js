const ic = require('node-icecream')()

let string = "3D2a5d2f"
// let string = "3abc"
let ans = ''

ic(string.match(/\d[A-Za-z]*/ig))