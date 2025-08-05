
function nameFunction (s, num) {
  const vowels = "aeiouAEIOU"
  // let vowelsInString = []
  // let vowelsIndex = []
  // for (let i = 0; i < s.length; i++) {
  //   if (vowels.includes(s[i])) {
  //     vowelsInString.push(s[i])
  //     vowelsIndex.push(i)
  //   }
  const vowelsInString = [1, 2, 3, 4]
  // }
  const n = num % vowelsInString.length
  for (let i = n; i < vowelsInString.length; i++) {
    console.log(vowelsInString.slice(i), vowelsInString.slice(0, i))
  }
  // return [vowelsInString, vowelsIndex, n, ]
}

console.log(nameFunction("This is a string", 1))

