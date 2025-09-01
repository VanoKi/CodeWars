
function nameFunction (source, target) {
  const ans = []
  const word = [...source]
  for (let i = 0; i < source.length; i++) {
    console.log(ans.splice(i, 1, target[i]))
  }
  return ans
}
// console.log(nameFunction('car','see'))
let word = [...'see']
let newWord = word.splice(1, 1, 'a')
console.log(word, newWord)
