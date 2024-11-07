const ic = require('node-icecream')()

function avgArray(arr) {
    let ans = arr[0]
    // ic(ans)
    for (let i = 1; i < arr.length; i++) {
        // ic(arr[i])
        ans = ans.map((value, index) => value + arr[i][index]);
        // ic(ans)
    }
    return ans.map(elem => elem / ans.length)
}

ic(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]))