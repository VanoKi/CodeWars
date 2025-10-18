
function capitalize (str, arr) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(i)) {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }
  return result
}
console.log(nameFunction("abcdef", [1,2,5,100] ))

