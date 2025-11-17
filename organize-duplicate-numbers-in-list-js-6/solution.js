
function nameFunction (params) {
  const dict = {}
  for (const param of params) {
    if (dict[param]) dict[param].push(param)
    else dict[param] = [param]
  }
  return Object.values(dict)
}
console.log(nameFunction([3, 2, 6, 2, 1, 3]))

