const ic = require('node-icecream')()
function repeatAdjacent (s) {
    for (let i = 0; i < s.length; i++) {
        ic(s.slice(i, i + 3))
    }
}
ic(repeatAdjacent("wwwwaaaarrioooorrrrr"))

