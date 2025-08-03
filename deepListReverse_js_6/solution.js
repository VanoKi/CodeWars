const ic = require('node-icecream')()
function deepReverse (params) {
    const result = []
    for (const item of params) {
        if (item instanceof Array) {
            revItem = deepReverse(item)
            result.push(revItem)
        } else {
            result.push(item)
        }
    }
    return result.reverse()
}
ic(deepReverse([[50,51,[52,53]],[[54,55],56,57]]))

