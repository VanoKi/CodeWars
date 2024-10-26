const ic = require('node-icecream')()

let arr = [
    28.6, 98.2, 66.8,   32, 40.9,
    11.2, 28.9, 16.5,  5.4,  3.9,
    75.1, 37.1,   67, 20.5, 58.6,
    6.4, 72.2, 75.9, 11.2, 30.6,
    60.6, 34.3
]
let odd = arr.filter( i => Math.floor(i) % 2 !== 0)
    .sort( (a, b) => a - b)
let even = arr.filter(i => Math.floor(i) % 2 == 0)
    .sort( (a, b) => b - a)
ic([...odd, ...even])