
function nameFunction (params) {
  const dict = {}
  for (const param of params) {
    if (dict[param]) dict[param] += 1
    else dict[param] = 1
  }
  let ans = ''
  for (const param of params) {
    if (dict[param] > 1) ans += param
  }
  return ans
}
console.log(nameFunction( "colloquial"))
