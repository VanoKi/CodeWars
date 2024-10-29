const ic = require('node-icecream')()

let a = ['z', 'x', 'y'] // ['z', 'y', 'x']
let b = [0, 2, 1]
let ans = []
for (let i = 0; i < a.length; i++) {
    ans[b[i]] = a[i]
}
ic(ans)