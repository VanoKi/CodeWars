const ic = require('node-icecream')()

let arr = [5, 3, 2, 8, 1, 4]
let odd = arr.filter((i) => i % 2 !== 0)
    .sort((a, b) => a - b)
ic(odd)
let even = arr.filter(i => i % 2 === 0)
    .sort((a, b) => b - a)
ic(even)
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        arr[i] = odd.shift()
    }else {
        arr[i] = even.shift()
    }
}

ic(arr)