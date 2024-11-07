const ic = require('node-icecream')()

const sumAverage = (arr) => {
    return Math.floor(arr
        .map((val, i) => val.reduce((s, c) => s +c) / val.length)
        .reduce((s,c) => s + c))
}

ic(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]))