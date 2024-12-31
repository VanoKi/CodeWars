const ic = require('node-icecream')()

// let string = "3D2a5d2f"
// let string = "3abc"

function stringExpansion(s) {
    let ans = ''
    if(s.match(/\d*/g).join('') === '') return s
    let arr = s.match(/\d[A-Za-z]*/ig)
    for (let i = 0; i < arr.length; i++) {
        let chanck = arr[i]
        let symbols = chanck.slice(1)
        let digit = chanck[0]
        for (let j = 0; j < symbols.length; j++) {
            ans += symbols[j].repeat(+digit)
        }
    }
    return ans
}
ic(stringExpansion("a2bcde"))