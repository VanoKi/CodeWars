const ic = require('node-icecream')()

let n = "1.00000"
let [leftPart, rightPart] = n.split('.')
// ic(leftPart, rightPart)
let ans = []
for (let i = 0; i < leftPart.length; i++) {
    if(leftPart[i] !== '0'){
        ans.push(leftPart[i] + '0'.repeat(leftPart.length - i - 1))
    }
}
// ic(ans)
if(rightPart){
    for (let i = 0; i < rightPart.length; i++) {
        if(rightPart[i] !== '0'){
            ans.push('.' + '0'.repeat(i) + rightPart[i])
        }
    }
}
ic(ans)
// let numb = +leftPart;
// let len = leftPart.length
// while (len > 0) {
//     ic(Math.floor(numb))
//     numb = numb / 10
//     // ic(numb % 10)
//     len--
// }