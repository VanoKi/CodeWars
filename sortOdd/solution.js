const ic = require('node-icecream')()

let arr = [ 11, 1, 2, 8, 3, 4, 5 ]
let odd = arr.filter(item => !(item % 2) == 0)
    .sort( (a, b) => ( a - b))
ic(odd)
let ans = []
for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] % 2 == 0 ? arr[i] : odd.shift())
}

ic(ans)