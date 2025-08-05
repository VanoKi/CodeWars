
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
  return [vowelsInString, vowelsIndex, n, ]
}

console.log(nameFunction("This is a string", 1))

