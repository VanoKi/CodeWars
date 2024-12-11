const ic = require('node-icecream')()

let arr99 = [9, 9]
let arr07 = [0, 7]
let arr19 = [1, -9]
let arrEmpty = []

function upArray(arr){
    if (arr.length === 0) return null
    if (!arr.every( item => item < 10 && item > -1)){
        return null
    } else{
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
}

ic(upArray([]))
