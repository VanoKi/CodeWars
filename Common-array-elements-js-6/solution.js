function common(a, b, c) {
  console.log([a, b, c])
  let ans = []
  for (const argument of arguments) {
    let dict = {}
    for (const argumentElement of argument) {
      if (dict[argumentElement]) dict[argumentElement] += 1
      else {
        dict[argumentElement] = 1
      }
    }
    ans.push(dict)
  }
  let count = {}
  for (const dict of ans) {
    for (const dictKey in dict) {
      if (dictKey in count) count[dictKey] += 1
      else count[dictKey] = 1
    }
  }
  return Object.entries(count).filter(item => item[1] == ans.length).map(item => ans[0][item[0]] * +item[0]).reduce((sum, item) => sum + item)
}

console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]))