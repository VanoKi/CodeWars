const ic = require('node-icecream')()

function oddOne(arr) {
    return arr.filter(item => item % 2 !== 0)
}

ic(oddOne([2,4,6,7,10]))