const ic = require('node-icecream')()

const vowels = "aeiou"
const abc = []
for (let i = 96; i < 123; i++) {
    abc.push(String.fromCharCode(i))
}
// ic(abc)
let ans = []
let seq = ''
let word = 'zodiac'
for (let i = 0; i < word.length; i++) {
    if(!vowels.includes(word[i])){
        seq += word[i]
    }else{
        ans.push(seq)
        seq = ''
    }
}
ans.push(seq)
ic(seq)
ic(ans)