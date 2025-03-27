const ic = require('node-icecream')()

function formatWords(words){
    return `${words.slice(0, -1).join(', ')} and ${words.at(-1)}`
    // return words.slice(0, -1)
}
let string = ['one', 'two', '']
ic(formatWords(string))