
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
  const n = num % vowelsInString.length
  const shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  return [vowelsInString, vowelsIndex, n, shiftedVowels]
}

console.log(nameFunction("This is a string", 1))

