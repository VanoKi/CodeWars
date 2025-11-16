
function nameFunction (params) {
  let ans = {}
  for (const param of params) {
    console.log(param, param.split('').sort((a, b) => b < a))
  }
}
console.log(nameFunction(["tsar", "rat", "tar", "star", "tars", "cheese"]
))

