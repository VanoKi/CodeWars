const log = console.log.bind(console)

function vowelShift (s, num) {
  if (!s) return s
  const vowels = "aeiouAEIOU"
  let vowelsInString = []
  let vowelsIndex = []
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsInString.push(s[i])
      vowelsIndex.push(i)
    }
  }
  log(vowelsInString)
  // log(vowelsIndex)
  let n = -(num % vowelsInString.length)
  let shiftedVowels = vowelsInString.slice(n).concat(vowelsInString.slice(0, n))
  log(shiftedVowels)
  let answer = Array.from(s)
  for (let i = 0; i < vowelsIndex.length; i++) {
    answer.splice(vowelsIndex[i], 1, shiftedVowels[i])
  }
  return answer.join('')
}

// log("This as e tist!")
log(vowelShift("This is a test!", 1))
// log(vowelShift("This is a test!", 3));  // "This as e tist!"
// log(vowelShift("This is a test!", 0));  // "This as e tist!"
// log(vowelShift(" ", 0));  // "This as e tist!"

// log(nameFunction("This is a test!", 1));  // "Thes is i tast!"
log(vowelShift("This is a test!", -1)); // "Thas os e tist!"
// log(nameFunction("aeiou", 2));            // "ouaei"
// log(nameFunction("aeiou", -2));           // "iouae"
function shift(num) {
  const arr = [1, 2, 3, 4]
  let n = -(num % arr.length)
  return arr.slice(n).concat(arr.slice(0, n))
  // if (num > 0) {
  //   // n = -(num % arr.length)
  //   console.log(n)
  //   return arr.slice(n).concat(arr.slice(0 ,n))
  // } else {
  //   // n = num % arr.length
  //   console.log(n)
  //   // log(arr.slice(-1))
  //   return arr.slice(n).concat(arr.slice(0, n))
  // }
}
// log(shift(1))
// log(shift(-1))