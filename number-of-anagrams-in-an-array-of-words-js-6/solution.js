
function nameFunction (params) {
  const key = (param) => param.split('').sort().join('')
  const dict = {}
  for (const param of params) {
    let keyWord = key(param)
    // console.log(keyWord)
    if (dict[keyWord]) dict[keyWord].push(param)
    else dict[keyWord] = [keyWord]
  }
  return key(params[0])
}
console.log(nameFunction(["dell", "ledl", "abc", "cba", "bca", "bac"]))

