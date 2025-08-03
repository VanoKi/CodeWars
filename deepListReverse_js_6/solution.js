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
    return result
}
ic(deepReverse([[1,2],[3,4]]))

