
function nameFunction (params) {
  const dict = {}
  for (const elem of params) {
    if (dict[elem]) dict[elem] += 1
    else dict[elem] = 1
  }
  return dict
}
console.log(nameFunction([2,3,5,3,7,9,5,3,7]))

