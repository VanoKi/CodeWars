const ic = require('node-icecream')()

let arr = [11,22,33,44,55,55,90.4,4,78]
let odd = arr.filter( i => i % 2 !== 0)
    .sort( (a, b) => a - b)
let even = arr.filter(i => i % 2 == 0)
    .sort( (a, b) => b - a)
ic([...odd, ...even])