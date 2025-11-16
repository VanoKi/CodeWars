
function nameFunction (params) {
  let ans = {}
  const getKey = (param) => param.split('').sort().join('')
  for (const param of params) {
    let key = getKey(param)
    if (key in ans) ans[key].push(param)
    else ans[key] = [param]
  }
  return Object.values(ans)
}
console.log(nameFunction(["tsar", "rat", "tar", "star", "tars", "cheese"]
))

