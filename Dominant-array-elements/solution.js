
function nameFunction (params) {
  const ans = []
  for (let i = 0; i < params.length - 1; i++) {
    if (params[i] > params[i + 1]) ans.push(params[i])
  }
  ans.push(params.at(-1))
  return ans
}
console.log(nameFunction([1,21,4,7,5]))
console.log(nameFunction([5,4,3,2,1]))

