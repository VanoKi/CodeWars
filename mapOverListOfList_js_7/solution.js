const ic = require('node-icecream')()
function nameFunction (fn, xss) {
    const ans = []
    for (let i = 0; i < xss.length; i++) {
        const subArray = []
        for (let j = 0; j < xss[i].length; j++) {
            subArray.push(fn(xss[i][j]))
        }
        ans.push(subArray)
    }
    return ans
}
ic(nameFunction(x => x.toUpperCase(),[['h','E','l','l','O'],['w','O','r','L','d']]))

