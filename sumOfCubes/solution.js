const ic = require('node-icecream')()

function sumCubes(n){
    let ans = 0
    for (let i = 1; i < n + 1; ++i) {
        ans += i ** 3
    }
    return ans
}

let n = 2

ic(sumCubes(n))