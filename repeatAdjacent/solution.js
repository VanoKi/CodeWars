const ic = require('node-icecream')()
function nameFunction (params) {
    let answe = 0
    const result = []
    let word = ''
    for (const param of params) {
        if (word) {
            if (word.at(-1) === param) {
                word += param
            } else {
                if (word.length >= 2) {
                    result.push(word)
                }
                word = param
            }
        }
        else {
            word = param
        }
    }
    if (word) result.push(word)
    return result
    // let answer = []
    // for (const resultElement of result) {
    //
    // }
}
ic(nameFunction("ccccoodeffffiiighhhhhhhhhhttttttts"))

