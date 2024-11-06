const ic = require('node-icecream')()

function nthSmallest(...arrays) {
    const n = arrays.pop()
    const resArr = arrays.flat()
        .sort((a, b) => a - b)
    return resArr[n-1]
}

ic(nthSmallest([1,5], [2], [4,8,9], 4))