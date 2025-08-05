
function nameFunction (s) {
  const vowels = "aeiouAEIOU"
  let vowelsInString = []
  let vowelsIndex = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsInString.push(s[i])
      vowelsIndex.push(s[i])
    }
  }

  return [vowelsInString, vowelsIndex]
}

console.log(nameFunction("This is a string"))

