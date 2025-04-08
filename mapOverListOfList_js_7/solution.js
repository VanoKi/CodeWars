const ic = require('node-icecream')()
function nameFunction (fn, xss) {
    const ans = []
    for (let i = 0; i < xss.length; i++) {
        for (let j = 0; j < xss[i].length; j++) {
            ic(fn(xss[i][j]))
        }
    }
}
ic(nameFunction(x => x.toUpperCase(),[['h','E','l','l','O'],['w','O','r','L','d']]))

