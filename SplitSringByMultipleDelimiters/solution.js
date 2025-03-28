const ic = require('node-icecream')()

function multipleSplit(string, delimiters=[]){
    let ans = []
    let word = ''
    for (let i = 0; i < string.length; i++) {
        if (delimiters.includes(string[i])) ic(i)
    }
}
const string = 'Hi, how are you?'
ic(multipleSplit(string, [' ']))