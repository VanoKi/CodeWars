const ic = require('node-icecream')()

function avgArray(arr) {
    let [a, b] = [...arr]
    let ans = []
    // return a.map((item) => (a[item] + b[item]))
    for (let i = 0; i < a.length; i++) {
        ic((a[i] + b[i]) / 2)
    }

}

ic(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]))