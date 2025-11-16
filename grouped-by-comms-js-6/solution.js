
function nameFunction (params) {
  let str =  String(params)
  // for (let i = str.length - 1; i >= 0; i -= 3) {
  //   console.log(str.slice(i, (i - 3)))
  // }
  for (let i = 0; i < str.length; i += 3) {
    console.log(str.slice(i, i + 3))
  }
}
console.log(nameFunction(12345678))

