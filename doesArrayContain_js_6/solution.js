const ic = require('node-icecream')()

Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(array) {
        return array.every(item => this.includes(item))
    } } );

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const b = [1,2,3,4,5]
const c = [12, 134]

let result = a.containsAll(c)
ic(result)
