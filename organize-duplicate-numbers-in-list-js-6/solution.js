
function nameFunction (params) {
  const ans = []
  const count = []
  for (const param of params) {
    if (count.includes(param)) ans.push([param])
    else count.push(param)
  }
  // return ans
  return params.map(e => [e])
}
console.log(nameFunction([3, 2, 6, 2, 1, 3]))

