const ic = require('node-icecream')()

let n = "7970521.5544"
let [leftPart, rigtPart] = n.split('.')
ic(leftPart, rigtPart)
