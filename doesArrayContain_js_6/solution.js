const ic = require('node-icecream')()

Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
        // return true || false ;
        b.forEach(item => {
            if (!this.includes(item)) return false
        })
        return true
    } } );

const a = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const b = [1,2,3,4,5]

let result = a.containsAll(b)
ic(result)
