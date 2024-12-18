const ic = require('node-icecream')()

function inter(A, B){
    let result = []
    for (const elem of A) {
        if(B.has(elem)) result.push(elem)
    }
    return new Set(result)
}

let A =  new Set([1, 2])
let B = new Set([1,2])

ic(inter(A, B))