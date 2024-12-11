const ic = require('node-icecream')()

let arr99 = [9, 9]
let arr07 = [0, 7]

function upArray(arr){
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] += 1
        if (arr[i] < 10) {
            return arr
        } else {
            arr[i] = 0
        }
    }
    arr.unshift(1)
    return arr
}

ic(upArray(arr99))
