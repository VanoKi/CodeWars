
function nameFunction (params) {
  const stack = []
  let word = []
  return params.match(/\d\(([^()]*)\)/)
}
console.log(nameFunction("2(a3(b))"))

