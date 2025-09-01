
function transform (source, target) {
  const ans = [source]
  const word = [...source]
  for (let i = 0; i < source.length; i++) {
    // console.log(ans.splice(i, 1, target[i]))
    if (source[i] === target[i]) {
      continue
    } else {
      word.splice(i, 1, target[i])
      ans.push(word.join(''))
    }
  }
  return ans
}
console.log(transform('kata','math'))
// let word = [...'see']
// let newWord = word.splice(1, 1, 'a')
// console.log(word, newWord)
