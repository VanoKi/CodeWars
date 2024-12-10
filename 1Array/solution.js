const ic = require('node-icecream')()

let arr = [0,7]

function upArray(arr){
    return (+arr.join('') + 1).toString().split('').map(item => +item)
}

ic(upArray(arr))