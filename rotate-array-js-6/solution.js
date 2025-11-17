
function nameFunction (params, number) {
  let n = number % params.length
  // if (n < 0){
  //   return params.slice(-n).concat(params.slice(0, -n))
  // }
  console.log(n)
  return params.slice(n).concat(params.slice(0, n))
}
console.log(nameFunction([1, 2, 3, 4, 5,], 4))

