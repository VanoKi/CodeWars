
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
  let n
  let shiftedVowels
  if (num > 0) {
    n = -(num % vowelsInString.length)
    shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  } else {
    n = num % vowelsInString.length
    shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  }
  console.log(shiftedVowels)
  let answer = Array.from(s)
  for (let i = 0; i < vowelsIndex.length; i++) {
    answer.splice(vowelsIndex[i], 1, shiftedVowels[i])
  }
  return answer.join('')
}

console.log("This is a test!")
console.log(nameFunction("This is a test!", 1))

