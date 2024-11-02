const ic = require('node-icecream')()

let n = "7970521.5544"
let [leftPart, rigtPart] = n.split('.')
ic(leftPart, rigtPart)
let ans = []
// for (let i = 0; i < leftPart.length; i++) {
//     ans.push(leftPart[i] + '0'.repeat(leftPart.length - i - 1))
// }
// ic(ans)
for (let i = 0; i < rigtPart.length; i++) {
    ans.push('0'.repeat(rigtPart.length - i - 1) + rigtPart[i])
}
ic(ans)