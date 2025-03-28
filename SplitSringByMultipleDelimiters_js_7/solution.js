const ic = require('node-icecream')()

function multipleSplit(string, delimiters=[]){
    let ans = []
    let word = ''
    for (let i = 0; i < string.length; i++) {
        // word += string[i]
        if (delimiters.includes(string[i])) {
            ans.push(word)
            word = ''
            continue
        }
        word += string[i]
    }
    // ic(word)
    return ans.concat(word).filter(item => item)
}
// const string = 'Hi, how are you?'
const string = '1+2-3'
ic(multipleSplit('Hi everybody!', [' ', '!']))