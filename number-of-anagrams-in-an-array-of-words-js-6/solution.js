
function nameFunction (params) {
  const key = (param) => param.split('').sort().join('')
  const dict = {}
  for (const param of params) {
    let keyWord = key(param)
    if (dict[keyWord]) dict[keyWord].push(param)
    else dict[keyWord] = [keyWord]
  }
  const countCouples = (arr) => {
    let arrLength = arr.length
    return arrLength * ( arrLength - 1) / 2
  }
  return Object.values(dict).map(countCouples).reduce((sum, arr) => sum + arr)
}
console.log(nameFunction(["dell", "ledl", "abc", "cba", "bca", "bac"]))

