const ic = require('node-icecream')()
function nameFunction (params) {
    params = params + ' '
    let answe = 0
    let result = []
    let word = ''
    for (const param of params) {
        if (word) {
            if (word.at(-1) === param) {
                word += param
            } else {
                if (word.length >= 2) {
                    result.push(word)
                } else {
                    if (result.length >= 2) {
                        answe += 1
                        result = []
                    }
                }
                word = param
            }
        }
        else {
            word = param
        }
    }
    if (word) result.push(word)
    return answe
    // let answer = []
    // for (const resultElement of result) {
    //
    // }
}
ic(nameFunction("ccccoodeffffiiighhhhhhhhhhttttttts"))

