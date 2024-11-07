const ic = require('node-icecream')()

function avgArray(arr) {
    let ans = arr[0]
    for (let i = 1; i < arr.length; i++) {
        ans = ans.map((value, index) => value + arr[i][index]);
    }
    return ans.map(elem => elem / arr.length)
}

ic(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]))