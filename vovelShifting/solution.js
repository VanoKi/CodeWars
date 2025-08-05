
function nameFunction (s, n) {
  const vowels = "aeiouAEIOU"
  let vowelsInString = []
  let vowelsIndex = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsInString.push(s[i])
      vowelsIndex.push(i)
    }
  }
  const num = vowelsInString.length % n
  const shifted = vowelsInString.slice(-num).concat(vowelsInString.slice(0, -num))
  return [vowelsInString, vowelsIndex, n, shifted]
}

console.log(nameFunction("This is a string", 1))

