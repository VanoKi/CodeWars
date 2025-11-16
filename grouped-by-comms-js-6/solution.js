
function nameFunction (params) {
  // let str =  Array.from(String(params))
  let str =  String(params)
  let count = 0
  let word = []
  let ans = []
  for (let i = str.length ; i > -1; i -= 1) {
    // console.log(str[i])
    if (count !== 3) {
      word.unshift(str[i])
      count += 1
      console.log(count)
      console.log(word)
    } else {
      count = 0
      ans.unshift(word)
      word = []
    }
    // console.log(i)
    // console.log(str.slice(i - 3, i))
  }
  ans.unshift(word)
  // for (let i = 0; i < str.length; i += 3) {
  //   console.log(str.slice(i, i + 3))
  // }
  return ans
}
console.log(nameFunction(12345678))

