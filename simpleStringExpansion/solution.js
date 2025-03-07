const ic = require('node-icecream')()

// let string = "3D2a5d2f"
// let string = "3abc"

function stringExpansion(s) {
    // let ans = ''
    if(s.match(/\d*/g).join('') === '') return s
    let arr = s.match(/\d[A-Za-z]*/ig)
    ic(arr)
    let prefix = s.slice(0, s.indexOf(arr[0]))
    ic(prefix)
    for (let i = 0; i < arr.length; i++) {
        let chunk = arr[i]
        let symbols = chunk.slice(1)
        let digit = chunk[0]
        for (let j = 0; j < symbols.length; j++) {
            prefix += symbols[j].repeat(+digit)
        }
    }
    return prefix
}
ic(stringExpansion('3D2a5d2f'))