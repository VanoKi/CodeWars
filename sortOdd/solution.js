const ic = require('node-icecream')()

let arr = [5, 8, 6, 3, 4]
let odd = arr.filter(item => !(item % 2) == 0)
let ans = []
for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] % 2 == 0 ? arr[i] : odd.pop())
}

ic(ans)