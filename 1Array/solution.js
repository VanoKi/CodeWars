const ic = require('node-icecream')()

let arr = [0, 7]

function upArray(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] += 1
        if (arr[i] < 10) break
        arr[i] = 0
    }
    if (arr[0] === 0) arr.unshift(1)
    return arr
}

ic(upArray(arr))
