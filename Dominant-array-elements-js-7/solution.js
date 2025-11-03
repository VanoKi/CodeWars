
function nameFunction (params) {
  for (const param of params) {
    if(params.includes(-(param))) continue
    else return param
  }
}
console.log(nameFunction([1, -1, 2, -2, 3, 3]))
console.log(nameFunction([-3, 1, 2, 3, -1, -4, -2]))

