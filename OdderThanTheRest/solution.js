const ic = require('node-icecream')()

function oddOne(arr) {
    let ans
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){
            ans = i
        }
    }
    return ans || -1
}

ic(oddOne([2,4,6,8]))