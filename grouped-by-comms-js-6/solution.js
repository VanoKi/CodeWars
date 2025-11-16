
function nameFunction (params) {
  // let str =  Array.from(String(params))
  let str =  String(params)
  for (let i = str.length ; i > -1; i -= 3) {
    // console.log(str[i])
    // console.log(i)
    console.log(str.slice(i - 3, i))
  }
  // for (let i = 0; i < str.length; i += 3) {
  //   console.log(str.slice(i, i + 3))
  // }
}
console.log(nameFunction(12345678))

