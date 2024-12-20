const ic = require('node-icecream')()

function matrixAddition(a, b){
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            a[i][j] += b[i][j]
        }
    }
    return a
}

let a = [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ]

let b = [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ]

ic(matrixAddition(a, b))