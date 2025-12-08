
function nameFunction (params) {
  const stack = []
  let word = []
  const regex = /(\d)\(([^()]*)\)/g
  let finded = regex.exec(params)
  return  finded[2].repeat(+finded[1])
}
console.log(nameFunction("2(a3(b))"))

