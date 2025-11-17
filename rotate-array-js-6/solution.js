
function nameFunction (params, n) {
  return params.slice(n).concat(params.slice(0, n))
}
console.log(nameFunction([1, 2, 3, 4, 5,], 1))

