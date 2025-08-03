const ic = require('node-icecream')()
function repeatAdjacent (s) {
    s = s + ' '
    let answe = 0
    let result = []
    let word = ''
    for (const param of s) {
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
                    }else {
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
}
ic(repeatAdjacent("soooooldieeeeeer"))

