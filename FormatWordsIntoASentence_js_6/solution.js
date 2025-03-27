const ic = require('node-icecream')()

function formatWords(words){
    let commas =  words
        .filter(item => item)
        .join(', ')
    let lastComma = commas.lastIndexOf(',')
    return commas.slice(0, lastComma) + ' and' + commas.slice(lastComma + 1)
}
let string = ['']
ic(formatWords(string))