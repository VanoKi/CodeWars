
function nameFunction (params, number) {
  let n = number % params.length
  return params.slice(-n).concat(params.slice(0, -n))
}
console.log(nameFunction([1, 2, 3, 4, 5,], 12478))

