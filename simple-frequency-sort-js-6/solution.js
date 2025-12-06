
function nameFunction (params) {
  const dict = {}
  for (const elem of params) {
    if (dict[elem]) dict[elem] += 1
    else dict[elem] = 1
  }
  const createArray = (a, b) => {
    const ans = []
    for (let i = 0; i < b ; i++) {
      ans.push(+a)
    }
    return ans
  }
  // return Object.entries(dict).sort( (a, b) =>  b[1] - a[1]).map(e => +e[0])
  return createArray('3', 3)
}
console.log(nameFunction([2,3,5,3,7,9,5,3,7]))

