const ic = require('node-icecream')()

let string = "3D2a5d2f"
let ans = ''
for (let i = 0; i < string.length - 1; i++) {
    if(!isNaN(string[i])) {
        ans += string[i+1].repeat(+string[i])
    }
}

ic(ans)