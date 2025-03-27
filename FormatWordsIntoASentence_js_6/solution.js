const ic = require('node-icecream')()

function formatWords(words){
    let suff = []
    let ans = []
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            suff.unshift(words[i])

        }
    }
    return suff
}
let string = ['three', 'one', 'two', '']
ic(formatWords(string))