
function nameFunction (params) {
  const positive = []
  const negative = []
  for (const param of params.sort((a, b) => a - b)) {
    if (param > 0) positive.push(param)
    else negative.push(param)
  }
  // return [negative, positive]
  // return params.reduce((sum, e) => sum + e)
  for (const param of params) {
    if(params.includes(-(param))) continue
    else return param
  }
}
console.log(nameFunction([1, -1, 2, -2, 3, 3]))
console.log(nameFunction([-3, 1, 2, 3, -1, -4, -2]))

