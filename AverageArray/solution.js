const ic = require('node-icecream')()

function avgArray(arr) {
    let [a, b] = [...arr]
    let ans = []
    // a.forEach((val, i) => {
    //     ans.push((val + b[i])/2)
    // })
    ans = a.map((val, i) => (a[i] + b[i]) / 2)
    return ans
}

ic(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]))