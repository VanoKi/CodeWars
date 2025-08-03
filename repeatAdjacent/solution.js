const ic = require('node-icecream')()
function nameFunction (params) {
    const result = []
    let word = ''
    for (const param of params) {
        if (word) {
            if (word.at(-1) === param) {
                word += param
            } else {
                result.push(word)
                word = ''
            }
        }
        else {
            word += param
        }
    }
    return result
}
ic(nameFunction("ccccoodeffffiiighhhhhhhhhhttttttts"))

