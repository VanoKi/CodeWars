const ic = require('node-icecream')()

let string = "3abc"
let ans = ''
for (let i = 0; i < string.length - 1; i++) {
    if(!isNaN(string[i]) && isNaN(string[i + 1])) {
        ans += string[i+1].repeat(+string[i])
    } else {
        continue
    }
}

ic(ans)