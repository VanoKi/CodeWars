const ic = require('node-icecream')()

const vowels = "aeiou"
const abc = 0
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
        let sumIndex = sumIndexes(seq)
        if(sumIndex > ans){
            ans = sumIndex
        }
        seq = ''
    }
}
ans.push(seq)
ic(seq)
ic(ans)

const sumIndexes = (seq) => {
  return [...seq].map(item => abc.indexOf(item))
      .reduce((sum, current) => sum + current, 0)
}

// ic(sumIndexes('str'))