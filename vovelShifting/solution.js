
function nameFunction (s, num) {
  const vowels = "aeiouAEIOU"
  let vowelsInString = []
  let vowelsIndex = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsInString.push(s[i])
      vowelsIndex.push(i)
    }
  }
  console.log(vowelsInString)
  console.log(vowelsIndex)
  const n = num % vowelsInString.length
  const shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  let answer = Array.from(s)
  for (let i = 0; i < vowelsIndex.length; i++) {
    answer.splice(vowelsIndex[i], 1, shiftedVowels[i])
  }
  return answer.join('')
}

console.log(nameFunction("This is a test!", 1))

