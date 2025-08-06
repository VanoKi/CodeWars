const log = console.log.bind(console)

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
  // console.log(vowelsInString)
  // console.log(vowelsIndex)
  let n
  let shiftedVowels
  if (num > 0) {
    n = -(num % vowelsInString.length)
    shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  } else {
    n = num % vowelsInString.length
    shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  }
  log(shiftedVowels)
  let answer = Array.from(s)
  for (let i = 0; i < vowelsIndex.length; i++) {
    answer.splice(vowelsIndex[i], 1, shiftedVowels[i])
  }
  return answer.join('')
}

log("This is a test!")
log(nameFunction("This is a test!", 3))
log(nameFunction("This is a test!", 3));  // "This as e tist!"

log(nameFunction("This is a test!", 1));  // "Thes is i tast!"
log(nameFunction("This is a test!", -1)); // "Thas os e tist!"
log(nameFunction("aeiou", 2));            // "ouaei"
log(nameFunction("aeiou", -2));           // "iouae"
