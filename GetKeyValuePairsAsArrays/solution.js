const ic = require('node-icecream')()

function keysAndValues(dict) {
    const keys = []
    const values = []
    for (const dictKey in dict) {
        keys.push(dictKey)
        values.push(dict[dictKey])
    }
    return [keys, values]
}
ic(keysAndValues({a: 1, b: 2, c: 3}))